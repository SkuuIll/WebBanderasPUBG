// ─── DOM REFS ────────────────────────────────────────────────
const searchInput       = document.getElementById('searchInput');
const btnClearSearch    = document.getElementById('btnClearSearch');
const availableList     = document.getElementById('availableList');
const selectedList      = document.getElementById('selectedList');
const totalCount        = document.getElementById('totalCount');
const statTotal         = document.getElementById('statNum');
const visibleCount      = document.getElementById('visibleCount');
const btnClear          = document.getElementById('btnClear');
const btnClearAll       = document.getElementById('btnClearAll');
const btnGenerate       = document.getElementById('btnGenerate');
const btnPreviewExport  = document.getElementById('btnPreviewExport');
const btnExportCSV      = document.getElementById('btnExportCSV');
const btnPreviewAll     = document.getElementById('btnPreviewAll');
const btnRandomize      = document.getElementById('btnRandomize');
const btnSelectAll      = document.getElementById('btnSelectAll');
const btnAddAll         = document.getElementById('btnAddAll');
const btnShuffleRoster  = document.getElementById('btnShuffleRoster');
const btnSortRoster     = document.getElementById('btnSortRoster');
const btnDuplicateSel   = document.getElementById('btnDuplicateSel');
const btnUndo           = document.getElementById('btnUndo');
const btnSaveRoster     = document.getElementById('btnSaveRoster');
const btnLoadRoster     = document.getElementById('btnLoadRoster');
const btnShortcuts      = document.getElementById('btnShortcuts');
const filterBtns        = document.querySelectorAll('.filter-btn');
const includeInstall    = document.getElementById('includeInstall');
const includeCSV        = document.getElementById('includeCSV');
const includePreview    = document.getElementById('includePreview');
const sortSelect        = document.getElementById('sortSelect');
const themeToggle       = document.getElementById('themeToggle');
const themeIcon         = document.getElementById('themeIcon');

// Search dropdown
const searchDropdown    = document.getElementById('searchDropdown');
const searchDropdownList= document.getElementById('searchDropdownList');
const searchResultCount = document.getElementById('searchResultCount');

// New editor controls
const btnResetSettings  = document.getElementById('btnResetSettings');
const customText        = document.getElementById('customText');
const opacityInput      = document.getElementById('opacityInput');
const opacityValue      = document.getElementById('opacityValue');
const shadowToggle      = document.getElementById('shadowToggle');
const shadowColor       = document.getElementById('shadowColor');
const shadowOptionsRow  = document.getElementById('shadowOptionsRow');
const presetChips       = document.querySelectorAll('.preset-chip');

// Grid/List view
const btnListView       = document.getElementById('btnListView');
const btnGridView       = document.getElementById('btnGridView');

// Preview DOM
const canvas            = document.getElementById('previewCanvas');
const ctx               = canvas.getContext('2d');
const exportSizeInput   = document.getElementById('exportSizeInput');
const numberStart       = document.getElementById('numberStart');
const sizeInput         = document.getElementById('sizeInput');
const sizeValue         = document.getElementById('sizeValue');
const strokeInput       = document.getElementById('strokeInput');
const strokeValue       = document.getElementById('strokeValue');
const numberColor       = document.getElementById('numberColor');
const strokeColor       = document.getElementById('strokeColor');
const bgColorInput      = document.getElementById('bgColorInput');
const bgTransparent     = document.getElementById('bgTransparent');
const fontSelect        = document.getElementById('fontSelect');
const showNumber        = document.getElementById('showNumber');
const squareFlag        = document.getElementById('squareFlag');
const posBtns           = document.querySelectorAll('.pos-btn');
const shapeBtns         = document.querySelectorAll('.shape-btn');
const presetBtns        = document.querySelectorAll('.preset-btn');
const progressContainer = document.getElementById('progressContainer');
const progressFill      = document.getElementById('progressFill');
const progressText      = document.getElementById('progressText');
const progressPercent   = document.getElementById('progressPercent');
const canvasPlaceholder = document.getElementById('canvasPlaceholder');
const previewCountryName= document.getElementById('previewCountryName');
const previewIndex      = document.getElementById('previewIndex');
const btnPrevPreview    = document.getElementById('btnPrevPreview');
const btnNextPreview    = document.getElementById('btnNextPreview');
const btnCopyCanvas     = document.getElementById('btnCopyCanvas');

// Modals
const previewModal      = document.getElementById('previewModal');
const modalBackdrop     = document.getElementById('modalBackdrop');
const modalClose        = document.getElementById('modalClose');
const modalGrid         = document.getElementById('modalGrid');
const shortcutsModal    = document.getElementById('shortcutsModal');
const shortcutsBackdrop = document.getElementById('shortcutsBackdrop');
const shortcutsClose    = document.getElementById('shortcutsClose');

// ─── STATE ───────────────────────────────────────────────────
let selectedSlots     = [];
let undoStack         = [];       // stack of previous slot arrays
let currentFilter     = 'all';
let currentPreviewIdx = -1;
let isLightTheme      = false;
let currentPosition   = 'bottom-right';
let currentShape      = 'square';
let dragSrcIdx        = null;
let currentView       = 'list'; // 'list' or 'grid'
let searchDropdownIdx = -1;     // keyboard nav index in dropdown

function getPreviewSize() {
  const mount = canvas.parentElement;
  return mount ? mount.clientWidth || 280 : 280;
}

function resizeCanvas() {
  const S = getPreviewSize();
  if (canvas.width !== S || canvas.height !== S) {
    canvas.width  = S;
    canvas.height = S;
    refreshPreview();
  }
}

function getStartNum() {
  return Math.max(1, parseInt(numberStart.value, 10) || 1);
}

// ─── TOAST ───────────────────────────────────────────────────
const toastEl = document.getElementById('toast');
let toastTimer;
function showToast(msg, type = '') {
  clearTimeout(toastTimer);
  toastEl.textContent = msg;
  toastEl.className   = `toast ${type} show`;
  toastTimer = setTimeout(() => { toastEl.className = 'toast'; }, 2800);
}

// ─── UNDO ────────────────────────────────────────────────────
function pushUndo() {
  undoStack.push(selectedSlots.map(c => c));
  if (undoStack.length > 30) undoStack.shift();
}

function undo() {
  if (!undoStack.length) { showToast('Nada que deshacer'); return; }
  selectedSlots = undoStack.pop();
  currentPreviewIdx = Math.min(currentPreviewIdx, selectedSlots.length - 1);
  updateUI();
  showToast('Acción deshecha ↩');
}

// ─── THEME ───────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.classList.toggle('light', isLightTheme);
  document.body.classList.toggle('light', isLightTheme);
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.setAttribute('data-lucide', isLightTheme ? 'moon' : 'sun');
    if (window.lucide) lucide.createIcons({ nodes: [icon] });
  }
  localStorage.setItem('flagforge_theme', isLightTheme ? 'light' : 'dark');
}

// ─── INIT ────────────────────────────────────────────────────
function init() {
  // Read theme from <html> class set by inline script (avoids flicker)
  isLightTheme = document.documentElement.classList.contains('light');
  applyTheme();

  // Restore session
  try {
    const saved = JSON.parse(sessionStorage.getItem('flagforge_slots') || '[]');
    saved.forEach(tag => {
      const c = db.find(x => x.tag === tag);
      if (c) selectedSlots.push(c);
    });
  } catch(e) {}

  resizeCanvas();
  renderLibrary();
  renderRoster();
  updateUI();
  initPositionGrid();
  initShapeBtns();
  if (window.lucide) lucide.createIcons();

  window.addEventListener('resize', resizeCanvas);

  // ── Search with dropdown ──
  searchInput.addEventListener('input', () => {
    renderLibrary();
    updateSearchDropdown();
  });
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) updateSearchDropdown();
  });
  searchInput.addEventListener('keydown', handleSearchKeydown);
  btnClearSearch.addEventListener('click', () => { searchInput.value = ''; renderLibrary(); closeSearchDropdown(); searchInput.focus(); });
  document.addEventListener('click', e => {
    if (!e.target.closest('.topbar-center')) closeSearchDropdown();
  });

  // ── Filters ──
  filterBtns.forEach(btn => btn.addEventListener('click', e => {
    filterBtns.forEach(b => b.classList.remove('active'));
    e.currentTarget.classList.add('active');
    currentFilter = e.currentTarget.dataset.filter;
    renderLibrary();
  }));

  // ── Sort ──
  sortSelect.addEventListener('change', renderLibrary);

  // ── Preview controls ──
  sizeInput.addEventListener('input',   e => { sizeValue.textContent   = e.target.value + '%'; refreshPreview(); });
  strokeInput.addEventListener('input', e => { strokeValue.textContent = e.target.value + '%'; refreshPreview(); });
  numberColor.addEventListener('input',  refreshPreview);
  strokeColor.addEventListener('input',  refreshPreview);
  bgColorInput.addEventListener('input', refreshPreview);
  bgTransparent.addEventListener('change', refreshPreview);
  fontSelect.addEventListener('change',  refreshPreview);
  showNumber.addEventListener('change',  refreshPreview);
  squareFlag.addEventListener('change',  refreshPreview);
  numberStart.addEventListener('change', refreshPreview);
  exportSizeInput.addEventListener('change', refreshPreview);

  // ── New controls ──
  customText.addEventListener('input', refreshPreview);
  opacityInput.addEventListener('input', e => { opacityValue.textContent = e.target.value + '%'; refreshPreview(); });
  shadowToggle.addEventListener('change', () => {
    shadowOptionsRow.style.display = shadowToggle.checked ? '' : 'none';
    refreshPreview();
  });
  shadowColor.addEventListener('input', refreshPreview);
  btnResetSettings.addEventListener('click', resetSettings);

  // ── Presets ──
  presetChips.forEach(chip => chip.addEventListener('click', () => applyPreset(chip.dataset.preset)));

  // ── Grid/List view ──
  btnListView.addEventListener('click', () => setView('list'));
  btnGridView.addEventListener('click', () => setView('grid'));

  // ── Preset size buttons ──
  presetBtns.forEach(btn => btn.addEventListener('click', () => {
    exportSizeInput.value = btn.dataset.val;
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    refreshPreview();
    showToast(`Resolución: ${btn.dataset.val}px`);
  }));

  // ── Roster actions ──
  btnClear.addEventListener('click', () => {
    if (!selectedSlots.length) return;
    pushUndo();
    selectedSlots = []; currentPreviewIdx = -1; updateUI();
    showToast('Selección vaciada', 'error');
  });
  btnClearAll.addEventListener('click', () => {
    if (!selectedSlots.length) return;
    pushUndo();
    selectedSlots = []; currentPreviewIdx = -1; updateUI();
    showToast('Selección vaciada', 'error');
  });
  btnShuffleRoster.addEventListener('click', () => {
    if (selectedSlots.length < 2) return;
    pushUndo(); shuffle(selectedSlots); updateUI(); showToast('¡Orden mezclado! 🔀');
  });
  btnSortRoster.addEventListener('click', () => {
    pushUndo();
    selectedSlots.sort((a,b) => a.name.localeCompare(b.name));
    updateUI(); showToast('Ordenado A–Z 🔤');
  });
  btnDuplicateSel.addEventListener('click', () => {
    if (currentPreviewIdx < 0 || currentPreviewIdx >= selectedSlots.length) { showToast('Seleccioná una bandera primero'); return; }
    pushUndo();
    const dup = selectedSlots[currentPreviewIdx];
    selectedSlots.splice(currentPreviewIdx + 1, 0, dup);
    currentPreviewIdx++;
    updateUI();
    showToast(`${dup.name} duplicado ⎘`, 'success');
  });
  btnUndo.addEventListener('click', undo);

  // ── Add all visible ──
  btnAddAll.addEventListener('click', () => {
    const visible = getFiltered();
    let added = 0;
    pushUndo();
    visible.forEach(c => { if (!selectedSlots.includes(c)) { selectedSlots.push(c); added++; }});
    updateUI();
    showToast(added ? `+${added} países agregados ✅` : 'Todos ya están en la selección', added ? 'success' : '');
  });
  btnSelectAll.addEventListener('click', () => {
    const visible = getFiltered();
    let added = 0;
    pushUndo();
    visible.forEach(c => { if (!selectedSlots.includes(c)) { selectedSlots.push(c); added++; }});
    updateUI();
    showToast(added ? `+${added} países agregados ✅` : 'Todos ya seleccionados', added ? 'success' : '');
  });
  btnRandomize.addEventListener('click', () => {
    const pool = db.filter(c => !selectedSlots.includes(c));
    if (!pool.length) { showToast('Ya están todos seleccionados'); return; }
    const count = Math.min(5, pool.length);
    shuffle(pool);
    pushUndo();
    pool.slice(0, count).forEach(c => selectedSlots.push(c));
    updateUI();
    showToast(`+${count} banderas aleatorias 🎲`, 'success');
  });

  // ── Preview navigation ──
  btnPrevPreview.addEventListener('click', navPrev);
  btnNextPreview.addEventListener('click', navNext);

  // ── Copy canvas to clipboard ──
  btnCopyCanvas.addEventListener('click', copyCanvasToClipboard);

  // ── Theme ──
  themeToggle.addEventListener('click', () => {
    isLightTheme = !isLightTheme; applyTheme();
    showToast(isLightTheme ? 'Tema claro activado' : 'Tema oscuro activado');
  });

  // ── Export ──
  btnGenerate.addEventListener('click', generatePack);
  btnPreviewExport.addEventListener('click', showPreviewModal);
  btnPreviewAll.addEventListener('click', showPreviewModal);
  btnExportCSV.addEventListener('click', exportCSVOnly);

  // ── Save / Load roster ──
  btnSaveRoster.addEventListener('click', saveRoster);
  btnLoadRoster.addEventListener('change', loadRoster);

  // ── Modals ──
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  shortcutsClose.addEventListener('click', closeShortcuts);
  shortcutsBackdrop.addEventListener('click', closeShortcuts);
  btnShortcuts.addEventListener('click', () => shortcutsModal.classList.remove('hidden'));

  // ── Keyboard shortcuts ──
  document.addEventListener('keydown', handleKeyboard);

  // ── Stats ──
  updateStats();
}

// ─── KEYBOARD SHORTCUTS ──────────────────────────────────────
function handleKeyboard(e) {
  const tag = e.target.tagName;
  const inInput = tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA';

  // Global shortcuts (work even in inputs)
  if (e.key === 'Escape') { closeModal(); closeShortcuts(); return; }

  // Shortcuts that DON'T fire in inputs
  if (!inInput) {
    if (e.key === 'ArrowLeft')  { navPrev(); return; }
    if (e.key === 'ArrowRight') { navNext(); return; }
    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (currentPreviewIdx >= 0 && selectedSlots.length) {
        pushUndo();
        const removed = selectedSlots.splice(currentPreviewIdx, 1)[0];
        if (currentPreviewIdx >= selectedSlots.length) currentPreviewIdx = selectedSlots.length - 1;
        updateUI();
        showToast(`${removed.name} eliminado`, 'error');
      }
      return;
    }
    if (e.key === 'f' || e.key === 'F') { searchInput.focus(); e.preventDefault(); return; }
  }

  if (e.ctrlKey || e.metaKey) {
    if (e.key === 'z') { e.preventDefault(); undo(); return; }
    if (e.key === 'c' && !inInput) { e.preventDefault(); copyCanvasToClipboard(); return; }
    if (e.key === 's') { e.preventDefault(); saveRoster(); return; }
    if (e.key === 'e') { e.preventDefault(); if (!btnGenerate.disabled) generatePack(); return; }
  }
}

function navPrev() {
  if (!selectedSlots.length) return;
  currentPreviewIdx = (currentPreviewIdx - 1 + selectedSlots.length) % selectedSlots.length;
  updatePreview(selectedSlots[currentPreviewIdx], currentPreviewIdx + getStartNum());
  renderRoster();
}
function navNext() {
  if (!selectedSlots.length) return;
  currentPreviewIdx = (currentPreviewIdx + 1) % selectedSlots.length;
  updatePreview(selectedSlots[currentPreviewIdx], currentPreviewIdx + getStartNum());
  renderRoster();
}

// ─── COPY TO CLIPBOARD ───────────────────────────────────────
async function copyCanvasToClipboard() {
  if (!selectedSlots.length) { showToast('No hay nada en el preview'); return; }
  try {
    canvas.toBlob(async blob => {
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);
      showToast('¡Imagen copiada al portapapeles! 📋', 'success');
    }, 'image/png');
  } catch(err) {
    showToast('Error al copiar (requiere HTTPS o localhost)', 'error');
  }
}

// ─── SAVE / LOAD ROSTER ──────────────────────────────────────
function saveRoster() {
  if (!selectedSlots.length) { showToast('No hay nada que guardar'); return; }
  const data = {
    version: 1,
    slots: selectedSlots.map(c => c.tag),
    settings: {
      exportSize: exportSizeInput.value,
      numberStart: numberStart.value,
      size: sizeInput.value,
      stroke: strokeInput.value,
      position: currentPosition,
      shape: currentShape,
      font: fontSelect.value,
      numberColor: numberColor.value,
      strokeColor: strokeColor.value,
      bgColor: bgColorInput.value,
      bgTransparent: bgTransparent.checked,
      showNumber: showNumber.checked,
      squareFlag: squareFlag.checked
    }
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `FlagForge_Roster_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  showToast(`Roster guardado (${selectedSlots.length} países) 💾`, 'success');
}

function loadRoster(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.slots || !Array.isArray(data.slots)) throw new Error('Formato inválido');
      pushUndo();
      selectedSlots = [];
      data.slots.forEach(tag => {
        const c = db.find(x => x.tag === tag);
        if (c) selectedSlots.push(c);
      });
      // Restore settings
      if (data.settings) {
        const s = data.settings;
        if (s.exportSize)    exportSizeInput.value   = s.exportSize;
        if (s.numberStart)   numberStart.value        = s.numberStart;
        if (s.size)          { sizeInput.value = s.size; sizeValue.textContent = s.size + '%'; }
        if (s.stroke)        { strokeInput.value = s.stroke; strokeValue.textContent = s.stroke + '%'; }
        if (s.font)          fontSelect.value     = s.font;
        if (s.numberColor)   numberColor.value    = s.numberColor;
        if (s.strokeColor)   strokeColor.value    = s.strokeColor;
        if (s.bgColor)       bgColorInput.value   = s.bgColor;
        if (s.bgTransparent !== undefined) bgTransparent.checked = s.bgTransparent;
        if (s.showNumber !== undefined)   showNumber.checked    = s.showNumber;
        if (s.squareFlag !== undefined)   squareFlag.checked    = s.squareFlag;
        if (s.shape)         setShape(s.shape);
        if (s.position)      setPosition(s.position);
      }
      currentPreviewIdx = selectedSlots.length > 0 ? 0 : -1;
      updateUI();
      showToast(`Roster cargado: ${selectedSlots.length} países 📂`, 'success');
    } catch(err) {
      showToast('Error al cargar el archivo', 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

// ─── FILTER / SORT ───────────────────────────────────────────
function processFilter(countries) {
  const q = searchInput.value.toLowerCase().trim();
  return countries.filter(c => {
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.tag.toLowerCase().includes(q);
    let matchTag = true;
    switch (currentFilter) {
      case 'top':      matchTag = c.filters.includes('top'); break;
      case 'hispanos': matchTag = c.filters.includes('Habla Hispana'); break;
      case 'america':  matchTag = c.filters.includes('América'); break;
      case 'europa':   matchTag = c.filters.includes('Europa'); break;
      case 'asia':     matchTag = c.filters.includes('Asia'); break;
      case 'africa':   matchTag = c.filters.some(f => f.toLowerCase().startsWith('fric')); break;
      case 'oceania':  matchTag = c.filters.some(f => f.toLowerCase().startsWith('ocean')); break;
    }
    return matchSearch && matchTag;
  });
}

function getSorted(arr) {
  return [...arr].sort((a, b) => {
    if (sortSelect.value === 'alpha')      return a.name.localeCompare(b.name);
    if (sortSelect.value === 'alpha-desc') return b.name.localeCompare(a.name);
    if (sortSelect.value === 'iso')        return a.iso.localeCompare(b.iso);
    return 0;
  });
}

function getFiltered() { return processFilter(getSorted(db)); }

// ─── RENDER LIBRARY ──────────────────────────────────────────
function renderLibrary() {
  availableList.innerHTML = '';
  const filtered = getFiltered();
  visibleCount.textContent = filtered.length;
  const q = searchInput.value.toLowerCase().trim();

  if (!filtered.length) {
    availableList.innerHTML = `<div style="color:var(--text-muted);font-size:.82rem;padding:20px;text-align:center;">Sin resultados para &laquo;${searchInput.value || currentFilter}&raquo;</div>`;
    return;
  }

  const frag = document.createDocumentFragment();
  filtered.forEach(c => {
    const isSelected = selectedSlots.includes(c);
    const div = document.createElement('div');
    div.className = `item-card ${isSelected ? 'selected' : ''}`;

    // Highlight search term in name
    let displayName = c.name;
    if (q) {
      const idx = c.name.toLowerCase().indexOf(q);
      if (idx >= 0) {
        displayName = c.name.slice(0, idx)
          + `<mark style="background:var(--primary-dim);color:var(--primary);border-radius:2px;">${c.name.slice(idx, idx + q.length)}</mark>`
          + c.name.slice(idx + q.length);
      }
    }

    div.innerHTML = `
      <img class="flag-img" src="https://flagcdn.com/w80/${c.iso}.png" loading="lazy" alt="${c.name}"
           onerror="this.src='https://flagcdn.com/w40/${c.iso}.png'">
      <div class="item-name" title="${c.name}">${displayName}</div>
      <div class="item-tag">${c.iso.toUpperCase()}</div>
    `;
    div.setAttribute('data-tooltip', `${c.tag} • ${c.filters.filter(f => f !== 'top').join(', ')}`);
    if (!isSelected) {
      div.addEventListener('click', () => {
        pushUndo();
        selectedSlots.push(c);
        currentPreviewIdx = selectedSlots.length - 1;
        updateUI();
        updatePreview(c, currentPreviewIdx + getStartNum());
        showToast(`${c.name} agregado ✅`, 'success');
      });
    }
    frag.appendChild(div);
  });
  availableList.appendChild(frag);
  if (window.lucide) lucide.createIcons({ nodes: [...availableList.querySelectorAll('[data-lucide]')] });
}

// ─── RENDER ROSTER ───────────────────────────────────────────
function renderRoster() {
  selectedList.innerHTML = '';
  if (!selectedSlots.length) {
    selectedList.innerHTML = `
      <div class="empty-roster">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:.2;color:var(--text-muted)"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
        <div class="empty-title">Sin banderas seleccionadas</div>
        <div class="empty-sub">Hacé clic en un país de la librería para agregarlo.</div>
      </div>`;
    return;
  }

  const frag = document.createDocumentFragment();
  selectedSlots.forEach((c, i) => {
    const num    = i + getStartNum();
    const isActive = i === currentPreviewIdx;
    const div = document.createElement('div');
    div.className = `item-card roster-item ${isActive ? 'active-preview' : ''}`;
    div.draggable = true;
    div.dataset.idx = i;
    div.innerHTML = `
      <span class="drag-handle" title="Arrastrar para reordenar">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>
      </span>
      <div class="slot-num">${num}</div>
      <img class="flag-img" src="https://flagcdn.com/w80/${c.iso}.png" alt="${c.name}"
           onerror="this.src='https://flagcdn.com/w40/${c.iso}.png'">
      <div class="item-name">${c.name}</div>
      <div class="item-tag">${c.iso.toUpperCase()}</div>
      <button class="slot-del" title="Eliminar (Del)" data-idx="${i}">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    `;
    div.querySelector('.slot-del').addEventListener('click', e => {
      e.stopPropagation();
      pushUndo();
      const removed = selectedSlots.splice(parseInt(e.currentTarget.dataset.idx), 1)[0];
      if (currentPreviewIdx >= selectedSlots.length) currentPreviewIdx = selectedSlots.length - 1;
      updateUI();
      showToast(`${removed.name} eliminado`, 'error');
    });
    div.addEventListener('click', e => {
      if (e.target.classList.contains('slot-del') || e.target.classList.contains('drag-handle')) return;
      currentPreviewIdx = i;
      updatePreview(c, i + getStartNum());
      renderRoster();
    });

    // Drag & Drop
    div.addEventListener('dragstart', e => {
      dragSrcIdx = i;
      e.dataTransfer.effectAllowed = 'move';
      setTimeout(() => div.classList.add('dragging'), 0);
    });
    div.addEventListener('dragend', () => {
      div.classList.remove('dragging');
      document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    });
    div.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
      div.classList.add('drag-over');
    });
    div.addEventListener('drop', e => {
      e.preventDefault();
      div.classList.remove('drag-over');
      const targetIdx = parseInt(div.dataset.idx);
      if (dragSrcIdx === null || dragSrcIdx === targetIdx) return;
      pushUndo();
      const moved = selectedSlots.splice(dragSrcIdx, 1)[0];
      selectedSlots.splice(targetIdx, 0, moved);
      currentPreviewIdx = targetIdx;
      updateUI();
      dragSrcIdx = null;
    });

    frag.appendChild(div);
  });
  selectedList.appendChild(frag);
}

// ─── UPDATE UI ───────────────────────────────────────────────
function updateUI() {
  renderLibrary();
  renderRoster();
  const n = selectedSlots.length;
  if (totalCount) totalCount.textContent = n;
  if (statTotal)  statTotal.textContent  = n;
  const dis = n === 0;
  if (btnGenerate)      btnGenerate.disabled      = dis;
  if (btnPreviewExport) btnPreviewExport.disabled = dis;
  if (btnExportCSV)     btnExportCSV.disabled     = dis;
  if (btnPreviewAll)    btnPreviewAll.disabled    = dis;
  saveSession();
  refreshPreview();
}

function saveSession() {
  try { sessionStorage.setItem('flagforge_slots', JSON.stringify(selectedSlots.map(c => c.tag))); } catch(e) {}
}

// ─── POSITION & SHAPE INIT ───────────────────────────────────
function initPositionGrid() {
  posBtns.forEach(btn => {
    btn.addEventListener('click', () => setPosition(btn.dataset.pos));
  });
  setPosition('bottom-right');
}

function setPosition(pos) {
  currentPosition = pos;
  posBtns.forEach(b => b.classList.remove('selected'));
  const active = document.querySelector(`.pos-btn[data-pos="${pos}"]`);
  if (active) active.classList.add('selected');
  refreshPreview();
}

function initShapeBtns() {
  shapeBtns.forEach(btn => {
    btn.addEventListener('click', () => setShape(btn.dataset.shape));
  });
}

function setShape(shape) {
  currentShape = shape;
  shapeBtns.forEach(b => b.classList.remove('selected'));
  const active = document.querySelector(`.shape-btn[data-shape="${shape}"]`);
  if (active) active.classList.add('selected');
  refreshPreview();
}

// ─── PREVIEW ─────────────────────────────────────────────────
function refreshPreview() {
  if (currentPreviewIdx >= 0 && currentPreviewIdx < selectedSlots.length) {
    updatePreview(selectedSlots[currentPreviewIdx], currentPreviewIdx + getStartNum());
  } else if (selectedSlots.length > 0) {
    currentPreviewIdx = selectedSlots.length - 1;
    updatePreview(selectedSlots[currentPreviewIdx], currentPreviewIdx + getStartNum());
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasPlaceholder.classList.remove('hidden');
    previewCountryName.textContent = '—';
    previewIndex.textContent = '–';
  }
}

// ── Draw flag using CONTAIN (letterbox) – no cropping ────────
function drawFlagContain(context, img, S) {
  // Fill background first
  if (!bgTransparent.checked) {
    context.fillStyle = bgColorInput.value || '#000000';
    context.fillRect(0, 0, S, S);
  } else {
    context.clearRect(0, 0, S, S);
  }

  const iw = img.naturalWidth  || img.width;
  const ih = img.naturalHeight || img.height;

  let dw, dh, dx, dy;
  if (squareFlag.checked) {
    // Contain: scale to fit inside square, center, letterbox with bg
    const scale = Math.min(S / iw, S / ih);
    dw = iw * scale;
    dh = ih * scale;
    dx = (S - dw) / 2;
    dy = (S - dh) / 2;
  } else {
    // Stretch to fill (ignore aspect ratio)
    dw = S; dh = S; dx = 0; dy = 0;
  }

  // Apply shape clip
  context.save();
  applyShapeClip(context, S);
  context.drawImage(img, dx, dy, dw, dh);
  context.restore();
}

function applyShapeClip(context, S) {
  context.beginPath();
  if (currentShape === 'circle') {
    context.arc(S / 2, S / 2, S / 2, 0, Math.PI * 2);
  } else if (currentShape === 'rounded') {
    const r = S * 0.12;
    context.moveTo(r, 0);
    context.lineTo(S - r, 0);
    context.quadraticCurveTo(S, 0, S, r);
    context.lineTo(S, S - r);
    context.quadraticCurveTo(S, S, S - r, S);
    context.lineTo(r, S);
    context.quadraticCurveTo(0, S, 0, S - r);
    context.lineTo(0, r);
    context.quadraticCurveTo(0, 0, r, 0);
  } else {
    context.rect(0, 0, S, S);
  }
  context.clip();
}

function drawBadgeOnCanvas(context, text, S) {
  if (!showNumber.checked) return;
  const sizePct   = parseInt(sizeInput.value, 10) / 100;
  const strokePct = parseInt(strokeInput.value, 10) / 100;
  const font      = fontSelect.value || 'Arial Black';
  const opacityPct = parseInt(opacityInput.value, 10) / 100;

  // Use custom text if provided
  const customTxt = customText.value.trim();
  if (customTxt) text = customTxt;

  const fontHeight  = Math.floor(S * sizePct);
  const strokeWidth = Math.max(1, Math.floor(fontHeight * strokePct));

  context.save();
  context.globalAlpha = opacityPct;

  // Shadow
  if (shadowToggle.checked) {
    context.shadowColor   = shadowColor.value || '#000000';
    context.shadowBlur    = Math.max(4, fontHeight * 0.12);
    context.shadowOffsetX = Math.max(2, fontHeight * 0.04);
    context.shadowOffsetY = Math.max(2, fontHeight * 0.04);
  }

  context.font      = `900 ${fontHeight}px "${font}", sans-serif`;
  context.lineJoin  = 'round';
  context.miterLimit = 2;

  const metrics = context.measureText(text);
  const tw = (metrics.actualBoundingBoxRight + metrics.actualBoundingBoxLeft) || metrics.width;
  const th = (metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) || fontHeight;
  const asc = metrics.actualBoundingBoxAscent || fontHeight;
  const l   = metrics.actualBoundingBoxLeft   || 0;

  const margin = strokeWidth + 4;
  const pos    = currentPosition;

  const cx = pos.includes('right')  ? S - tw - margin + l
           : pos.includes('left')   ? margin + l
           : (S - tw) / 2 + l;

  const cy = pos.includes('bottom') ? S - th - margin + asc
           : pos.includes('top')    ? margin + asc
           : (S - th) / 2 + asc;

  context.lineWidth   = strokeWidth * 2;
  context.strokeStyle = strokeColor.value || '#000000';
  context.strokeText(text, cx, cy);

  // Reset shadow before fill so text fill isn't doubled
  context.shadowColor = 'transparent';
  context.fillStyle   = numberColor.value || '#FFFFFF';
  context.fillText(text, cx, cy);

  context.restore();
}

function updatePreview(country, number) {
  canvasPlaceholder.classList.add('hidden');
  previewCountryName.textContent = country.name;
  previewIndex.textContent       = `${currentPreviewIdx + 1} / ${selectedSlots.length}`;

  const S = getPreviewSize();
  if (canvas.width !== S) { canvas.width = S; canvas.height = S; }

  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = `https://flagcdn.com/w320/${country.iso}.png`;
  img.onload = () => {
    ctx.clearRect(0, 0, S, S);
    drawFlagContain(ctx, img, S);
    drawBadgeOnCanvas(ctx, String(number), S);
  };
  img.onerror = () => {
    ctx.clearRect(0, 0, S, S);
    ctx.fillStyle = '#1c2128'; ctx.fillRect(0, 0, S, S);
    ctx.fillStyle = '#8b949e'; ctx.font = '14px Inter, sans-serif';
    ctx.textAlign = 'center'; ctx.fillText('No disponible', S/2, S/2); ctx.textAlign = 'left';
  };
}

// ─── MODAL – PREVIEW ALL ─────────────────────────────────────
function showPreviewModal() {
  if (!selectedSlots.length) return;
  const frag = document.createDocumentFragment();
  selectedSlots.forEach((c, i) => {
    const num = i + getStartNum();
    const div = document.createElement('div');
    div.className = 'modal-item';
    div.innerHTML = `
      <img src="https://flagcdn.com/w80/${c.iso}.png" alt="${c.name}"
           onerror="this.src='https://flagcdn.com/w40/${c.iso}.png'">
      <div class="modal-num">${num}</div>
      <div class="modal-name">${c.name}</div>
    `;
    div.addEventListener('click', () => {
      currentPreviewIdx = i;
      refreshPreview(); renderRoster(); closeModal();
    });
    frag.appendChild(div);
  });
  modalGrid.innerHTML = '';
  modalGrid.appendChild(frag);
  previewModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  previewModal.classList.add('hidden');
  document.body.style.overflow = '';
}
function closeShortcuts() {
  shortcutsModal.classList.add('hidden');
}

// ─── EXPORT CSV ONLY ─────────────────────────────────────────
function exportCSVOnly() {
  if (!selectedSlots.length) return;
  const rows = ['TeamNumber,TeamName,TeamTags,ImageFileName,TeamColor'];
  selectedSlots.forEach((c, i) => {
    const num  = i + getStartNum();
    const cleanName = sanitizeFilename(c.name);
    const file = `${num}-${cleanName}.png`;
    rows.push(`${num},${c.name},${c.tag},${file},${c.color}`);
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'TeamInfo.csv';
  a.click();
  showToast('TeamInfo.csv descargado 📄', 'success');
}

// ─── GENERATE PACK ───────────────────────────────────────────
async function generatePack() {
  btnGenerate.disabled = true;
  progressContainer.classList.remove('hidden');

  const zip          = new JSZip();
  const observerFolder = zip.folder('Observer');
  const iconFolder   = observerFolder.folder('TeamIcon');
  const EXPORT_SIZE  = parseInt(exportSizeInput.value, 10) || 100;
  const startNum     = getStartNum();
  const csvRows      = ['TeamNumber,TeamName,TeamTags,ImageFileName,TeamColor'];

  const gCanvas = document.createElement('canvas');
  gCanvas.width = gCanvas.height = EXPORT_SIZE;
  const gCtx = gCanvas.getContext('2d');

  for (let i = 0; i < selectedSlots.length; i++) {
    const c   = selectedSlots[i];
    const num = i + startNum;
    const pct = Math.round((i / selectedSlots.length) * 100);

    progressText.textContent    = `Generando ${i+1}/${selectedSlots.length}: ${c.name}`;
    progressPercent.textContent = `${pct}%`;
    progressFill.style.width    = pct + '%';

    const cleanName = sanitizeFilename(c.name);
    const fileName  = `${num}-${cleanName}.png`;
    csvRows.push(`${num},${c.name},${c.tag},${fileName},${c.color}`);

    const blob = await fetchImageAndDraw(c.iso, num, gCanvas, gCtx, EXPORT_SIZE);
    if (blob) iconFolder.file(fileName, blob, { binary: true });
  }

  if (includeCSV.checked)     observerFolder.file('TeamInfo.csv', csvRows.join('\n'));
  if (includeInstall.checked) zip.file('instalar.bat', generateBat());
  if (includePreview.checked) zip.file('preview.html', generatePreviewHtml());

  progressText.textContent    = 'Empaquetando ZIP...';
  progressPercent.textContent = '100%';
  progressFill.style.width    = '100%';

  zip.generateAsync({ type: 'blob' }).then(content => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(content);
    a.download = 'RosterBanderas_FlagForge.zip';
    a.click();
    showToast(`¡Descarga lista! ${selectedSlots.length} banderas exportadas 🎉`, 'success');
    setTimeout(() => {
      progressContainer.classList.add('hidden');
      progressFill.style.width = '0%';
      progressPercent.textContent = '0%';
      btnGenerate.disabled = false;
    }, 3000);
  });
}

function generateBat() {
  return `@echo off\n` +
         `chcp 65001 > nul\n` +
         `echo =======================================\n` +
         `echo  FlagForge Studio - Instalando Banderas\n` +
         `echo =======================================\n\n` +
         `echo  [1/3] Limpiando instalacion previa...\n` +
         `if exist "..\\Observer" rd /s /q "..\\Observer"\n\n` +
         `echo  [2/3] Copiando nuevas banderas...\n` +
         `xcopy /s /e /y "Observer" "..\\Observer\\"\n\n` +
         `echo  [3/3] Limpiando archivos temporales...\n` +
         `rd /s /q "Observer"\n\n` +
         `echo.\n` +
         `echo  Instalacion completada con exito!\n` +
         `pause\n`;
}

function generatePreviewHtml() {
  const startNum = getStartNum();
  const items = selectedSlots.map((c,i) =>
    `<div class="item"><img src="https://flagcdn.com/w80/${c.iso}.png"><span class="n">${i+startNum}</span><span class="nm">${c.name}</span></div>`
  ).join('');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Preview FlagForge</title><style>body{background:#0d1117;color:#e6edf3;font-family:system-ui;display:flex;flex-wrap:wrap;gap:10px;padding:20px;}.item{display:flex;flex-direction:column;align-items:center;gap:4px;background:#1c2128;border:1px solid #30363d;border-radius:8px;padding:10px;width:120px;}img{width:80px;height:54px;object-fit:contain;border-radius:4px;background:#000;}.n{font-weight:800;color:#2f81f7;font-size:1.1rem;}.nm{font-size:.7rem;color:#8b949e;text-align:center;}</style></head><body>${items}</body></html>`;
}

// ─── FETCH + DRAW (for export) ───────────────────────────────
function fetchImageAndDraw(iso, number, can, ctx2d, S) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = `https://flagcdn.com/w320/${iso}.png`;
    img.onload = () => {
      ctx2d.clearRect(0, 0, S, S);
      drawFlagContain(ctx2d, img, S);
      if (showNumber.checked) drawBadgeOnCanvas(ctx2d, String(number), S);
      can.toBlob(blob => resolve(blob), 'image/png');
    };
    img.onerror = () => {
      ctx2d.fillStyle = '#555'; ctx2d.fillRect(0, 0, S, S);
      if (showNumber.checked) drawBadgeOnCanvas(ctx2d, String(number), S);
      can.toBlob(blob => resolve(blob), 'image/png');
    };
  });
}

// ─── UTILS ───────────────────────────────────────────────────
function sanitizeFilename(name) {
  return name
    .normalize('NFD')                     // Separa caracteres de sus acentos (ej: 'ñ' -> 'n' + '~')
    .replace(/[\u0300-\u036f]/g, '')      // Elimina los acentos/diacríticos
    .replace(/ñ/g, 'n').replace(/Ñ/g, 'N') // Doble seguridad para la Ñ
    .replace(/[/\\?%*:|"<>]/g, '')        // Elimina caracteres ilegales de archivo
    .replace(/\s+/g, '_');                // Espacios a guiones bajos
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ─── SEARCH DROPDOWN ─────────────────────────────────────────────────
function updateSearchDropdown() {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { closeSearchDropdown(); searchResultCount.textContent = ''; return; }

  // Search across name, tag, iso, and filters (continents)
  const results = db.filter(c => {
    return c.name.toLowerCase().includes(q)
        || c.tag.toLowerCase().includes(q)
        || c.iso.toLowerCase().includes(q)
        || c.filters.some(f => f.toLowerCase().includes(q));
  }).slice(0, 8);

  searchResultCount.textContent = results.length > 0 ? results.length : '';
  searchDropdownIdx = -1;

  if (!results.length) {
    searchDropdownList.innerHTML = `<div class="search-dropdown-empty">Sin resultados para «${searchInput.value}»</div>`;
    searchDropdown.classList.remove('hidden');
    return;
  }

  const frag = document.createDocumentFragment();
  results.forEach((c, i) => {
    const isSelected = selectedSlots.includes(c);
    const div = document.createElement('div');
    div.className = 'search-dropdown-item';
    div.dataset.idx = i;

    // Highlight match in name
    let dn = c.name;
    const nameIdx = c.name.toLowerCase().indexOf(q);
    if (nameIdx >= 0) {
      dn = c.name.slice(0, nameIdx)
        + `<mark style="background:var(--primary-dim);color:var(--primary);border-radius:2px;">${c.name.slice(nameIdx, nameIdx + q.length)}</mark>`
        + c.name.slice(nameIdx + q.length);
    }

    const continent = c.filters.filter(f => f !== 'top').join(', ');
    div.innerHTML = `
      <img class="dd-flag" src="https://flagcdn.com/w80/${c.iso}.png" alt="${c.name}"
           onerror="this.src='https://flagcdn.com/w40/${c.iso}.png'">
      <div class="dd-info">
        <div class="dd-name">${dn}</div>
        <div class="dd-meta">
          <span class="dd-iso">${c.iso.toUpperCase()}</span>
          <span class="dd-continent">${continent}</span>
        </div>
      </div>
      ${isSelected ? '<span class="dd-added">Agregado</span>' : ''}
    `;
    if (!isSelected) {
      div.addEventListener('click', () => {
        pushUndo();
        selectedSlots.push(c);
        currentPreviewIdx = selectedSlots.length - 1;
        updateUI();
        updatePreview(c, currentPreviewIdx + getStartNum());
        showToast(`${c.name} agregado ✅`, 'success');
        updateSearchDropdown();
      });
    }
    frag.appendChild(div);
  });
  searchDropdownList.innerHTML = '';
  searchDropdownList.appendChild(frag);
  searchDropdown.classList.remove('hidden');
}

function closeSearchDropdown() {
  searchDropdown.classList.add('hidden');
  searchDropdownIdx = -1;
}

function handleSearchKeydown(e) {
  if (searchDropdown.classList.contains('hidden')) return;
  const items = searchDropdownList.querySelectorAll('.search-dropdown-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    searchDropdownIdx = Math.min(searchDropdownIdx + 1, items.length - 1);
    items.forEach((it, i) => it.classList.toggle('active', i === searchDropdownIdx));
    items[searchDropdownIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    searchDropdownIdx = Math.max(searchDropdownIdx - 1, 0);
    items.forEach((it, i) => it.classList.toggle('active', i === searchDropdownIdx));
    items[searchDropdownIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && searchDropdownIdx >= 0) {
    e.preventDefault();
    items[searchDropdownIdx]?.click();
  } else if (e.key === 'Escape') {
    closeSearchDropdown();
    searchInput.blur();
  }
}

// ─── PRESETS ────────────────────────────────────────────────────────
const PRESETS = {
  gaming: {
    size: 70, stroke: 14, numberColor: '#00FF88', strokeColor: '#1a1a2e',
    bgColor: '#0d0d1a', bgTransparent: false, shape: 'rounded', position: 'bottom-right',
    font: 'Impact', showNumber: true, squareFlag: true
  },
  sport: {
    size: 55, stroke: 12, numberColor: '#FFFFFF', strokeColor: '#222222',
    bgColor: '#000000', bgTransparent: false, shape: 'square', position: 'bottom-right',
    font: 'Arial Black', showNumber: true, squareFlag: true
  },
  clean: {
    size: 40, stroke: 6, numberColor: '#FFFFFF', strokeColor: '#333333',
    bgColor: '#000000', bgTransparent: true, shape: 'circle', position: 'bottom-right',
    font: 'Inter', showNumber: true, squareFlag: true
  },
  retro: {
    size: 60, stroke: 16, numberColor: '#FFD700', strokeColor: '#B22222',
    bgColor: '#1a0a2e', bgTransparent: false, shape: 'square', position: 'center',
    font: 'Courier New', showNumber: true, squareFlag: false
  }
};

function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;

  sizeInput.value = p.size; sizeValue.textContent = p.size + '%';
  strokeInput.value = p.stroke; strokeValue.textContent = p.stroke + '%';
  numberColor.value = p.numberColor;
  strokeColor.value = p.strokeColor;
  bgColorInput.value = p.bgColor;
  bgTransparent.checked = p.bgTransparent;
  fontSelect.value = p.font;
  showNumber.checked = p.showNumber;
  squareFlag.checked = p.squareFlag;
  setShape(p.shape);
  setPosition(p.position);
  opacityInput.value = 100; opacityValue.textContent = '100%';
  shadowToggle.checked = false;
  shadowOptionsRow.style.display = 'none';
  customText.value = '';

  presetChips.forEach(c => c.classList.remove('active'));
  const active = document.querySelector(`.preset-chip[data-preset="${name}"]`);
  if (active) active.classList.add('active');

  refreshPreview();
  showToast(`Preset "${name.charAt(0).toUpperCase() + name.slice(1)}" aplicado`, 'success');
}

// ─── RESET SETTINGS ────────────────────────────────────────────────
function resetSettings() {
  exportSizeInput.value = 100;
  numberStart.value = 1;
  sizeInput.value = 55; sizeValue.textContent = '55%';
  strokeInput.value = 10; strokeValue.textContent = '10%';
  numberColor.value = '#FFFFFF';
  strokeColor.value = '#000000';
  bgColorInput.value = '#000000';
  bgTransparent.checked = false;
  fontSelect.value = 'Arial Black';
  showNumber.checked = true;
  squareFlag.checked = true;
  customText.value = '';
  opacityInput.value = 100; opacityValue.textContent = '100%';
  shadowToggle.checked = false;
  shadowOptionsRow.style.display = 'none';
  shadowColor.value = '#000000';
  setShape('square');
  setPosition('bottom-right');
  presetChips.forEach(c => c.classList.remove('active'));
  presetBtns.forEach(b => b.classList.remove('active'));

  refreshPreview();
  showToast('Configuración restaurada', 'success');
}

// ─── GRID/LIST VIEW ───────────────────────────────────────────────
function setView(mode) {
  currentView = mode;
  availableList.classList.toggle('grid-view', mode === 'grid');
  btnListView.classList.toggle('active', mode === 'list');
  btnGridView.classList.toggle('active', mode === 'grid');
}

// ─── STATS ─────────────────────────────────────────────────────────
function updateStats() {
  const el = (id) => document.getElementById(id);
  el('statTotalDb').textContent = db.length;
  el('statAmerica').textContent = db.filter(c => c.filters.includes('América')).length;
  el('statEuropa').textContent  = db.filter(c => c.filters.includes('Europa')).length;
  el('statAsia').textContent    = db.filter(c => c.filters.includes('Asia')).length;
  el('statAfrica').textContent  = db.filter(c => c.filters.some(f => f.toLowerCase().startsWith('fric') || f === 'África')).length;
  el('statOceania').textContent = db.filter(c => c.filters.some(f => f.toLowerCase().startsWith('ocean') || f === 'Oceanía')).length;
}

// ─── BOOT ────────────────────────────────────────────────────
window.addEventListener('load', init);
