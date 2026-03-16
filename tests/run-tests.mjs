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
    paths.add(value);
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

  if (failures.length) {
    console.error('Tests failed:');
    failures.forEach((msg) => console.error(`- ${msg}`));
    process.exit(1);
  }
  console.log('All tests passed.');
}

run();
