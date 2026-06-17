import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd());

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), 'utf8').replace(/\r\n/g, '\n');
}

function extractSection(src, startMarker, endMarker) {
  const start = src.indexOf(startMarker);
  if (start === -1) return '';
  const startIdx = start + startMarker.length;
  const end = src.indexOf(endMarker, startIdx);
  if (end === -1) return src.slice(startIdx);
  return src.slice(startIdx, end);
}

function extractKeysFromObject(body) {
  const keys = new Set();
  const re = /^\s*([a-zA-Z0-9_]+)\s*:/gm;
  let match;
  while ((match = re.exec(body)) !== null) {
    keys.add(match[1]);
  }
  return keys;
}

function extractHtmlI18nKeys(html) {
  const keys = new Set();
  for (const m of html.matchAll(/data-i18n="([^"]+)"/g)) {
    keys.add(m[1]);
  }
  for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
    const parts = m[1].split('|');
    parts.forEach(part => {
      const [, key] = part.split(':');
      if (key) keys.add(key);
    });
  }
  return keys;
}

function extractHtmlIds(html) {
  const ids = [];
  for (const m of html.matchAll(/id="([^"]+)"/g)) {
    ids.push(m[1]);
  }
  return ids;
}

function extractJsGetElementIds(js) {
  const ids = new Set();
  for (const m of js.matchAll(/getElementById\(\s*['"]([^'"]+)['"]\s*\)/g)) {
    ids.add(m[1]);
  }
  return ids;
}

function extractTKeys(js) {
  const keys = new Set();
  for (const m of js.matchAll(/\bt\(\s*['"]([^'"]+)['"]/g)) {
    keys.add(m[1]);
  }
  return keys;
}

function extractLocalAssetPaths(html) {
  const paths = new Set();
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = m[1];
    if (!value || value.startsWith('http') || value.startsWith('data:')) continue;
    paths.add(value.split('?')[0].split('#')[0]);
  }
  return paths;
}

function extractExternalHostsFromHtml(html) {
  const hosts = new Set();
  for (const m of html.matchAll(/<script[^>]+src="https?:\/\/([^\/"]+)"/gi)) {
    hosts.add(m[1]);
  }
  for (const m of html.matchAll(/<img[^>]+src="https?:\/\/([^\/"]+)"/gi)) {
    hosts.add(m[1]);
  }
  for (const m of html.matchAll(/<link[^>]+href="https?:\/\/([^\/"]+)"/gi)) {
    hosts.add(m[1]);
  }
  return hosts;
}

function extractCspHosts(html) {
  const match = html.match(/http-equiv="Content-Security-Policy" content="([^"]+)"/i);
  if (!match) return new Set();
  const csp = match[1];
  const hosts = new Set();
  for (const m of csp.matchAll(/https?:\/\/([^\/\s;]+)/g)) {
    hosts.add(m[1]);
  }
  return hosts;
}

function extractTokens(str) {
  const tokens = new Set();
  if (!str) return tokens;
  for (const m of String(str).matchAll(/\{\{([^}]+)\}\}/g)) {
    tokens.add(m[1]);
  }
  return tokens;
}

const failures = [];
function check(condition, message) {
  if (!condition) failures.push(message);
}

function testI18nKeys() {
  const html = read('index.html');
  const js = read(path.join('js', 'app.js'));
  const esBody = extractSection(js, 'es: {', '\n  },\n  en: {');
  const enBody = extractSection(js, 'en: {', '\n  }\n};');
  const esKeys = extractKeysFromObject(esBody);
  const enKeys = extractKeysFromObject(enBody);
  const htmlKeys = extractHtmlI18nKeys(html);
  const tKeys = extractTKeys(js);
  const missingEs = [...htmlKeys].filter(k => !esKeys.has(k));
  const missingEn = [...htmlKeys].filter(k => !enKeys.has(k));
  check(missingEs.length === 0, `Missing ES keys: ${missingEs.join(', ')}`);
  check(missingEn.length === 0, `Missing EN keys: ${missingEn.join(', ')}`);

  const diffEs = [...esKeys].filter(k => !enKeys.has(k));
  const diffEn = [...enKeys].filter(k => !esKeys.has(k));
  check(diffEs.length === 0 && diffEn.length === 0, `ES/EN key mismatch. Only ES: ${diffEs.join(', ')} | Only EN: ${diffEn.join(', ')}`);

  const missingInEs = [...tKeys].filter(k => !esKeys.has(k));
  const missingInEn = [...tKeys].filter(k => !enKeys.has(k));
  check(missingInEs.length === 0, `Missing ES keys for t(): ${missingInEs.join(', ')}`);
  check(missingInEn.length === 0, `Missing EN keys for t(): ${missingInEn.join(', ')}`);

  const esMap = Object.fromEntries([...esKeys].map(k => [k, true]));
  const enMap = Object.fromEntries([...enKeys].map(k => [k, true]));
  const tokensMismatch = [];
  for (const key of esKeys) {
    if (!enMap[key]) continue;
    const esValue = esBody.match(new RegExp(`\\b${key}\\s*:\\s*([^,\\n]+)`, 'm'));
    const enValue = enBody.match(new RegExp(`\\b${key}\\s*:\\s*([^,\\n]+)`, 'm'));
    const esTokens = extractTokens(esValue ? esValue[1] : '');
    const enTokens = extractTokens(enValue ? enValue[1] : '');
    const esList = [...esTokens].sort().join(',');
    const enList = [...enTokens].sort().join(',');
    if (esList !== enList) tokensMismatch.push(key);
  }
  check(tokensMismatch.length === 0, `Token mismatch between ES/EN for keys: ${tokensMismatch.join(', ')}`);
}

function testRequiredIds() {
  const html = read('index.html');
  const js = read(path.join('js', 'app.js'));
  const requiredIds = [
    'helpModal',
    'helpClose',
    'helpBackdrop',
    'btnHelp',
    'langToggle',
    'confirmModal',
    'confirmAccept',
    'confirmCancel',
    'shareModal',
    'shareLinkInput',
    'btnShareLink'
  ];
  const missing = requiredIds.filter(id => !html.includes(`id=\"${id}\"`));
  check(missing.length === 0, `Missing ids: ${missing.join(', ')}`);

  const htmlIds = extractHtmlIds(html);
  const idSet = new Set(htmlIds);
  const duplicateIds = htmlIds.filter((id, idx) => htmlIds.indexOf(id) !== idx);
  check(duplicateIds.length === 0, `Duplicate ids in HTML: ${[...new Set(duplicateIds)].join(', ')}`);

  const jsIds = extractJsGetElementIds(js);
  const optionalIds = new Set([
    'statTotalDb',
    'statAmerica',
    'statEuropa',
    'statAsia',
    'statAfrica',
    'statOceania',
    'sortSelect'
  ]);
  const missingDomIds = [...jsIds].filter(id => !idSet.has(id) && !optionalIds.has(id));
  check(missingDomIds.length === 0, `IDs referenced in JS but missing in HTML: ${missingDomIds.join(', ')}`);
}

function testIconFiles() {
  const iconFiles = [
    path.join(ROOT, 'icons', 'favicon.svg'),
    path.join(ROOT, 'icons', 'icon-180.png'),
    path.join(ROOT, 'icons', 'icon-192.png'),
    path.join(ROOT, 'icons', 'icon-512.png')
  ];
  const missing = iconFiles.filter(file => !fs.existsSync(file));
  check(missing.length === 0, `Missing icon files: ${missing.join(', ')}`);
}

function testManifestIcons() {
  const manifestPath = path.join(ROOT, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    check(false, 'Missing manifest.json');
    return;
  }
  const manifest = JSON.parse(read('manifest.json'));
  const icons = Array.isArray(manifest.icons) ? manifest.icons : [];
  const missing = icons
    .map(icon => icon && icon.src)
    .filter(Boolean)
    .filter(src => !src.startsWith('http') && !fs.existsSync(path.join(ROOT, src)));
  check(missing.length === 0, `Missing manifest icon files: ${missing.join(', ')}`);
}

function testManifestFields() {
  const manifestPath = path.join(ROOT, 'manifest.json');
  if (!fs.existsSync(manifestPath)) {
    check(false, 'Missing manifest.json');
    return;
  }
  const manifest = JSON.parse(read('manifest.json'));
  const required = ['name', 'short_name', 'start_url', 'display', 'background_color', 'theme_color'];
  const missing = required.filter(k => !manifest[k]);
  check(missing.length === 0, `Missing manifest fields: ${missing.join(', ')}`);
  const icons = Array.isArray(manifest.icons) ? manifest.icons : [];
  check(icons.length >= 2, 'Manifest should include at least 2 icons');
  const invalidSizes = icons
    .map(icon => icon && icon.sizes)
    .filter(Boolean)
    .filter(sizes => !/^(any|\d+x\d+(\s+\d+x\d+)*)$/.test(sizes));
  check(invalidSizes.length === 0, 'Manifest icon sizes must be like "192x192"');
}

function testLocalAssetsExist() {
  const html = read('index.html');
  const paths = extractLocalAssetPaths(html);
  const missing = [...paths]
    .filter(p => !p.startsWith('#'))
    .filter(p => !fs.existsSync(path.join(ROOT, p)));
  check(missing.length === 0, `Missing local assets referenced in HTML: ${missing.join(', ')}`);
}

function testCspCoversExternalHosts() {
  const html = read('index.html');
  const hosts = extractExternalHostsFromHtml(html);
  const cspHosts = extractCspHosts(html);
  const missing = [...hosts].filter(h => !cspHosts.has(h));
  check(missing.length === 0, `External hosts not listed in CSP: ${missing.join(', ')}`);
}

function testHtmlMeta() {
  const html = read('index.html');
  check(/<meta name="viewport"/i.test(html), 'Missing viewport meta');
  check(/Content-Security-Policy/i.test(html), 'Missing CSP meta');
  check(/<link rel="manifest" href="manifest\.json"/i.test(html), 'Missing manifest link');
  check(/<link rel="canonical" href="https:\/\/skuuill\.github\.io\/WebBanderasPUBG\/"/i.test(html), 'Missing GitHub Pages canonical URL');
  check(/property="og:title"/i.test(html), 'Missing Open Graph title');
  check(/property="og:description"/i.test(html), 'Missing Open Graph description');
  check(/property="og:image"/i.test(html), 'Missing Open Graph image');
  check(/name="twitter:card"/i.test(html), 'Missing Twitter card meta');
}

function testDataI18nAttrFormat() {
  const html = read('index.html');
  const bad = [];
  for (const m of html.matchAll(/data-i18n-attr="([^"]+)"/g)) {
    const parts = m[1].split('|');
    parts.forEach(part => {
      if (!part.includes(':')) bad.push(part);
    });
  }
  check(bad.length === 0, `Invalid data-i18n-attr format (missing ":"): ${bad.join(', ')}`);
}

function testHelpCreditsLink() {
  const html = read('index.html');
  check(html.includes('github.com/SkuuIll'), 'Help credits missing GitHub link');
}

function testExportHelpersPresent() {
  const js = read(path.join('js', 'app.js'));
  check(/function\s+getCurrentSettings\s*\(/.test(js), 'Missing getCurrentSettings helper');
  check(/function\s+downloadBlob\s*\(/.test(js), 'Missing downloadBlob helper');
  check(/function\s+escapeCsvCell\s*\(/.test(js), 'Missing escapeCsvCell helper');
  check(/function\s+formatCsvRow\s*\(/.test(js), 'Missing formatCsvRow helper');
  check(/function\s+escapeHtml\s*\(/.test(js), 'Missing escapeHtml helper');
}

function testFullSettingsPersistence() {
  const js = read(path.join('js', 'app.js'));
  const settingsBody = extractSection(js, 'function getCurrentSettings() {', '\n}\n\nfunction applyFlagStyleSetting');
  const requiredSettings = [
    'customText',
    'opacity',
    'shadow',
    'shadowColor',
    'flagStyle',
    'shape',
    'position',
    'bgTransparent',
    'squareFlag'
  ];
  const missing = requiredSettings.filter(key => !settingsBody.includes(`${key}:`));
  check(missing.length === 0, `getCurrentSettings missing fields: ${missing.join(', ')}`);
  check(/settings:\s+getCurrentSettings\(\)/.test(js), 'Share/save payloads should use getCurrentSettings()');
  check(js.includes('applyFlagStyleSetting(s.flagStyle)'), 'applySettings should restore flagStyle');
  check(js.includes('customText.value       = s.customText'), 'applySettings should restore customText');
  check(js.includes('shadowOptionsRow.hidden = !shadowToggle.checked'), 'applySettings should restore shadow options visibility');
}

function testCsvAndPreviewEscaping() {
  const js = read(path.join('js', 'app.js'));
  check(js.includes('rows.push(formatCsvRow([num, c.name, tag, file, color]))'), 'CSV-only export should format CSV rows safely');
  check(js.includes('csvRows.push(formatCsvRow([num, c.name, tag, fileName, color]))'), 'ZIP CSV export should format CSV rows safely');
  check(js.includes('escapeHtml(c.name)'), 'Preview HTML should escape item names');
  check(js.includes('escapeHtml(imgSrc)'), 'Preview HTML should escape image URLs');
}

function testDownloadUrlsRevoked() {
  const js = read(path.join('js', 'app.js'));
  const helperBody = extractSection(js, 'function downloadBlob(blob, filename) {', '\n}\n\nfunction escapeCsvCell');
  check(helperBody.includes('URL.createObjectURL(blob)'), 'downloadBlob should create object URLs');
  check(helperBody.includes('URL.revokeObjectURL(url)'), 'downloadBlob should revoke object URLs');
  check(!/href\s*=\s*URL\.createObjectURL/.test(js.replace(helperBody, '')), 'Downloads should go through downloadBlob()');
}

function testNoLayoutConsoleLogs() {
  const js = read(path.join('js', 'app.js'));
  const bad = [
    'Mobile layout enabled',
    'Tablet layout enabled',
    'Desktop layout enabled',
    'Touch gestures enabled'
  ].filter(msg => js.includes(msg));
  check(bad.length === 0, `Remove layout console logs: ${bad.join(', ')}`);
}

function extractArrayLiteralItems(src, constName) {
  const re = new RegExp(`const\\s+${constName}\\s*=\\s*\\[([\\s\\S]*?)\\];`);
  const match = src.match(re);
  if (!match) return null;
  return [...match[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
}

function testFlagStyles() {
  const html = read('index.html');
  const js = read(path.join('js', 'app.js'));
  const css = read(path.join('css', 'style.css'));
  const styles = ['realistic', 'rectangle', 'rounded', 'circle', 'icon', 'compact', 'square'];
  const missingHtml = styles.filter(style => !html.includes(`value="${style}"`));
  check(missingHtml.length === 0, `Missing flag style options in HTML: ${missingHtml.join(', ')}`);
  const missingConfig = styles.filter(style => !js.includes(`${style}: {`));
  check(missingConfig.length === 0, `Missing flag style config in JS: ${missingConfig.join(', ')}`);
  check(js.includes('getFlagSources'), 'Missing getFlagSources fallback helper');
  check(js.includes('renderFlagImage'), 'Missing renderFlagImage helper');
  check(js.includes('data-fallbacks'), 'Flag images should carry ordered fallbacks');
  const missingCss = ['flag-style-rectangle', 'flag-style-rounded', 'flag-style-circle', 'flag-style-icon', 'flag-style-compact']
    .filter(cls => !css.includes(`.${cls}`));
  check(missingCss.length === 0, `Missing CSS classes for flag styles: ${missingCss.join(', ')}`);
}

function testCompetitiveMode() {
  const html = read('index.html');
  const js = read(path.join('js', 'app.js'));
  const dbSrc = read(path.join('js', 'db.js'));
  const order = extractArrayLiteralItems(js, 'COMPETITIVE_FLAG_ORDER');
  check(Array.isArray(order), 'Missing COMPETITIVE_FLAG_ORDER');
  if (!order) return;
  check(order.length === 100, `Competitive mode should include exactly 100 flags, found ${order.length}`);
  check(new Set(order).size === order.length, 'Competitive flag order contains duplicates');
  const dbIsos = new Set([...dbSrc.matchAll(/iso:\s*'([^']+)'/g)].map(m => m[1]));
  const missing = order.filter(iso => !dbIsos.has(iso));
  check(missing.length === 0, `Competitive flags missing from db.js: ${missing.join(', ')}`);
  const prioritySlots = order.slice(1, 18);
  const expectedPriority = ['ar', 'br', 'cl', 'mx', 'uy', 'py', 'us', 'pe', 'es', 'co', 'pt', 'bo', 'fr', 've', 'de', 'th', 'ec'];
  check(expectedPriority.every((iso, idx) => prioritySlots[idx] === iso), 'Slots 2-18 should keep the competitive priority order');
  const similarGroups = {
    yellowBlueRed: ['co', 've', 'ec'],
    blueWhiteLatin: ['ar', 'uy', 'gt', 'hn', 'ni', 'sv'],
    caribbeanStars: ['cl', 'cu', 'pa', 'pr'],
    nordicCrosses: ['se', 'no', 'dk', 'fi', 'is'],
    panArab: ['ae', 'eg', 'iq', 'jo', 'lb'],
    slavicTricolors: ['ru', 'hr', 'rs', 'sk', 'si'],
    africaGreenYellowRed: ['gh', 'cm', 'sn']
  };
  const closePairs = [];
  for (const [groupName, group] of Object.entries(similarGroups)) {
    const positions = order
      .map((iso, idx) => ({ iso, slot: idx + 1 }))
      .filter(item => group.includes(item.iso));
    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i - 1];
      const current = positions[i];
      if (current.slot - prev.slot <= 2) {
        closePairs.push(`${groupName}:${prev.iso}${prev.slot}-${current.iso}${current.slot}`);
      }
    }
  }
  check(closePairs.length === 0, `Competitive order has visually similar flags too close: ${closePairs.join(', ')}`);
  check(html.includes('id="btnCompetitiveMode"'), 'Missing competitive mode button');
  check(js.includes('applyCompetitiveMode'), 'Missing applyCompetitiveMode function');
  check(js.includes("applyFlagStyleSetting('compact')"), 'Competitive mode should use compact flag style');
}

function testInstallerBat() {
  const js = read(path.join('js', 'app.js'));
  const batPath = path.join(ROOT, 'instalar.bat');
  check(fs.existsSync(batPath), 'Missing root instalar.bat template');
  const bat = fs.existsSync(batPath) ? fs.readFileSync(batPath, 'utf8').replace(/\r\n/g, '\n') : '';
  const required = [
    'set "SCRIPT_DIR=%~dp0"',
    'mkdir "%SAVED%"',
    'mkdir "%DST_ICON%"',
    'where robocopy',
    'if errorlevel 8',
    'xcopy /E /I /Y',
    'TeamInfo.csv',
    'dir /b "%DST_ICON%\\*.png"',
    'pause'
  ];
  const missing = required.filter(snippet => !bat.includes(snippet));
  check(missing.length === 0, `instalar.bat missing snippets: ${missing.join(' | ')}`);
  check(js.includes('function generateBat()'), 'Missing generateBat()');
  check(js.includes('No se requieren librerias ni paquetes adicionales'), 'Generated bat should explain dependencies');
}

function testGitHubPagesFiles() {
  const requiredFiles = ['.nojekyll', 'robots.txt', 'sitemap.xml', '404.html', path.join('.github', 'workflows', 'pages.yml')];
  const missing = requiredFiles.filter(file => !fs.existsSync(path.join(ROOT, file)));
  check(missing.length === 0, `Missing GitHub Pages files: ${missing.join(', ')}`);

  const robots = read('robots.txt');
  check(robots.includes('Sitemap: https://skuuill.github.io/WebBanderasPUBG/sitemap.xml'), 'robots.txt should point to sitemap');

  const sitemap = read('sitemap.xml');
  check(sitemap.includes('<loc>https://skuuill.github.io/WebBanderasPUBG/</loc>'), 'sitemap should include canonical site URL');

  const notFound = read('404.html');
  check(notFound.includes('/WebBanderasPUBG/'), '404.html should link back to GitHub Pages app root');

  const workflow = read(path.join('.github', 'workflows', 'pages.yml'));
  check(workflow.includes('npm test'), 'GitHub Pages workflow should run tests');
  check(workflow.includes('actions/deploy-pages'), 'GitHub Pages workflow should deploy Pages');
  check(workflow.includes('mkdir -p _site'), 'GitHub Pages workflow should prepare a clean _site artifact');
  check(workflow.includes('path: _site'), 'GitHub Pages workflow should upload _site instead of the repo root');
  check(!workflow.includes('path: .\n'), 'GitHub Pages workflow should not publish the full repository root');
}

function testSymbolsMode() {
  const html = read('index.html');
  const js = read(path.join('js', 'app.js'));
  const css = read(path.join('css', 'style.css'));
  const symbolsSrc = read(path.join('js', 'symbols_db.js'));

  check(html.includes('id="btnSymbolsMode"'), 'Missing symbols mode button');
  check(html.includes('js/symbols_db.js'), 'Missing symbols database script');
  check(js.includes('function drawSymbolToCanvas'), 'Missing symbol canvas renderer');
  check(js.includes("requestModeChange('symbols')"), 'Missing symbols mode listener');
  check(css.includes('.symbol-icon'), 'Missing symbol icon styles');

  let symbols = [];
  try {
    symbols = Function(`${symbolsSrc}\nreturn symbolsDB;`)();
  } catch (error) {
    check(false, `symbolsDB should be parseable: ${error.message}`);
    return;
  }

  check(Array.isArray(symbols), 'symbolsDB should be an array');
  check(symbols.length >= 10, `symbolsDB should include at least 10 symbols, found ${symbols.length}`);

  const tags = symbols.map(symbol => symbol.tag).filter(Boolean);
  const duplicates = tags.filter((tag, idx) => tags.indexOf(tag) !== idx);
  check(duplicates.length === 0, `symbolsDB has duplicate tags: ${[...new Set(duplicates)].join(', ')}`);

  const missingFields = symbols
    .map((symbol, idx) => ({ symbol, idx }))
    .filter(({ symbol }) => !symbol.tag || !symbol.name || !symbol.category || !symbol.color || !symbol.icon)
    .map(({ symbol, idx }) => symbol.tag || symbol.name || `index ${idx}`);
  check(missingFields.length === 0, `symbolsDB entries missing required fields: ${missingFields.join(', ')}`);

  const invalidColors = symbols
    .filter(symbol => !/^#[0-9A-Fa-f]{6}$/.test(symbol.color))
    .map(symbol => symbol.tag);
  check(invalidColors.length === 0, `symbolsDB colors must be hex colors: ${invalidColors.join(', ')}`);
}

function run() {
  testI18nKeys();
  testRequiredIds();
  testIconFiles();
  testManifestIcons();
  testManifestFields();
  testLocalAssetsExist();
  testCspCoversExternalHosts();
  testHtmlMeta();
  testDataI18nAttrFormat();
  testHelpCreditsLink();
  testExportHelpersPresent();
  testFullSettingsPersistence();
  testCsvAndPreviewEscaping();
  testDownloadUrlsRevoked();
  testNoLayoutConsoleLogs();
  testFlagStyles();
  testCompetitiveMode();
  testInstallerBat();
  testGitHubPagesFiles();
  testSymbolsMode();

  if (failures.length) {
    console.error('Tests failed:');
    failures.forEach((msg) => console.error(`- ${msg}`));
    process.exit(1);
  }
  console.log('All tests passed.');
}

run();
