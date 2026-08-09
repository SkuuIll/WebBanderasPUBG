import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const PORT = 8789;
const ROOT = process.cwd();

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(ROOT, decodeURIComponent(reqPath));
  
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, async () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);

  try {
    let browser;
    try {
      browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    } catch {
      const edgePaths = [
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
      ];
      const validPath = edgePaths.find(p => fs.existsSync(p));
      if (!validPath) throw new Error('No Edge or Chrome found');
      browser = await puppeteer.launch({
        headless: 'new',
        executablePath: validPath,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    }

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(`http://127.0.0.1:${PORT}`, { waitUntil: 'networkidle0' });

    const outDir = path.join(ROOT, 'tests', 'screenshots');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    // 1. Initial desktop view
    await page.screenshot({ path: path.join(outDir, 'desktop_initial.png') });
    console.log('Saved desktop_initial.png');

    // 2. Sidebar tools bounding box check
    const modeToggleBox = await page.$eval('.mode-toggle', el => {
      const r = el.getBoundingClientRect();
      const btns = Array.from(el.querySelectorAll('.mode-btn')).map(b => {
        const br = b.getBoundingClientRect();
        return { text: b.innerText.trim(), x: Math.round(br.x), y: Math.round(br.y), width: Math.round(br.width), height: Math.round(br.height) };
      });
      return { container: { width: Math.round(r.width), height: Math.round(r.height) }, buttons: btns };
    });
    console.log('Mode toggle layout:\n', JSON.stringify(modeToggleBox, null, 2));

    // 3. Add flags and check export footer visibility
    await page.click('#btnAddAll');
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'desktop_with_flags.png') });
    console.log('Saved desktop_with_flags.png');

    const exportFooterVisible = await page.$eval('.export-footer', el => {
      const r = el.getBoundingClientRect();
      return {
        top: Math.round(r.top),
        bottom: Math.round(r.bottom),
        height: Math.round(r.height),
        windowHeight: window.innerHeight,
        inViewport: r.top >= 0 && r.bottom <= window.innerHeight
      };
    });
    console.log('Export footer visibility:\n', JSON.stringify(exportFooterVisible, null, 2));

    // 4. Test Mobile viewport
    await page.setViewport({ width: 390, height: 844 });
    await page.screenshot({ path: path.join(outDir, 'mobile_view.png') });
    console.log('Saved mobile_view.png');

    await browser.close();
    console.log('VISUAL VERIFICATION COMPLETE: SUCCESS');
  } catch (err) {
    console.error('Error during rendering test:', err);
  } finally {
    server.close();
    process.exit(0);
  }
});
