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
const btnShareLink      = document.getElementById('btnShareLink');
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
const btnHelp           = document.getElementById('btnHelp');
const filterBtns        = document.querySelectorAll('.filter-btn');
const includeInstall    = document.getElementById('includeInstall');
const includeCSV        = document.getElementById('includeCSV');
const includePreview    = document.getElementById('includePreview');
const sortSelect        = document.getElementById('sortSelect'); // optional (UI can be removed)
const themeToggle       = document.getElementById('themeToggle');
const themeIcon         = document.getElementById('themeIcon');
const langToggle        = document.getElementById('langToggle');

// Search dropdown
const searchDropdown    = document.getElementById('searchDropdown');
const searchDropdownList= document.getElementById('searchDropdownList');
const searchResultCount = document.getElementById('searchResultCount');

// Search modal (mobile)
const searchModal       = document.getElementById('searchModal');
const searchToggleBtn   = document.getElementById('searchToggleBtn');
const searchModalInput  = document.getElementById('searchModalInput');
const searchModalClose  = document.getElementById('searchModalClose');
const searchModalResults= document.getElementById('searchModalResults');

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

// Mode toggle (flags/platforms)
const btnFlagsMode      = document.getElementById('btnFlagsMode');
const btnPlatformsMode  = document.getElementById('btnPlatformsMode');
const libraryTitle      = document.getElementById('libraryTitle');
const countLabel        = document.getElementById('countLabel');

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
const canvasPlaceholderText = document.getElementById('canvasPlaceholderText');
const previewCountryName= document.getElementById('previewCountryName');
const previewIndex      = document.getElementById('previewIndex');
const btnPrevPreview    = document.getElementById('btnPrevPreview');
const btnNextPreview    = document.getElementById('btnNextPreview');
const btnCopyCanvas     = document.getElementById('btnCopyCanvas');
const btnZoomIn         = document.getElementById('btnZoomIn');
const btnZoomOut        = document.getElementById('btnZoomOut');
const btnResetZoom      = document.getElementById('btnResetZoom');

// Modals
const previewModal      = document.getElementById('previewModal');
const modalBackdrop     = document.getElementById('modalBackdrop');
const modalClose        = document.getElementById('modalClose');
const modalGrid         = document.getElementById('modalGrid');
const shortcutsModal    = document.getElementById('shortcutsModal');
const shortcutsBackdrop = document.getElementById('shortcutsBackdrop');
const shortcutsClose    = document.getElementById('shortcutsClose');
const helpModal         = document.getElementById('helpModal');
const helpBackdrop      = document.getElementById('helpBackdrop');
const helpClose         = document.getElementById('helpClose');
const confirmModal      = document.getElementById('confirmModal');
const confirmBackdrop   = document.getElementById('confirmBackdrop');
const confirmClose      = document.getElementById('confirmClose');
const confirmTitleEl    = document.getElementById('confirmTitle');
const confirmMessageEl  = document.getElementById('confirmMessage');
const confirmAcceptBtn  = document.getElementById('confirmAccept');
const confirmCancelBtn  = document.getElementById('confirmCancel');
const shareModal        = document.getElementById('shareModal');
const shareBackdrop     = document.getElementById('shareBackdrop');
const shareClose        = document.getElementById('shareClose');
const shareDesc         = document.getElementById('shareDesc');
const shareLinkInput    = document.getElementById('shareLinkInput');
const btnCopyShare      = document.getElementById('btnCopyShare');
const btnOpenShare      = document.getElementById('btnOpenShare');
const btnNativeShare    = document.getElementById('btnNativeShare');
const btnShareClose     = document.getElementById('btnShareClose');

// ─── CONFIGURATION ───────────────────────────────────────────
const CONFIG = {
  MAX_UNDO_STACK: 30,
  SEARCH_DEBOUNCE_MS: 300,
  IMAGE_CACHE_SIZE: 100,
  EXPORT_SIZES: [64, 100, 256, 512],
  DEFAULT_EXPORT_SIZE: 100,
  MIN_EXPORT_SIZE: 50,
  MAX_EXPORT_SIZE: 2000
};

// ─── I18N ────────────────────────────────────────────────────
const I18N = {
  es: {
    skip_to_content: 'Saltar al contenido',
    page_title: 'FlagForge Studio | Editor de Banderas y Logos',
    page_description: 'Herramienta profesional para generar packs de banderas y logos de plataformas con números personalizados para PUBG Observer. Exporta en ZIP listo para usar en overlays de stream.',
    noscript_message: 'Esta herramienta necesita JavaScript para funcionar.',
    stat_selected: 'Seleccionados',
    tooltip_undo: 'Deshacer última acción (Ctrl+Z)',
    tooltip_randomize: 'Agregar 5 banderas aleatorias',
    tooltip_select_all: 'Seleccionar todos los visibles',
    tooltip_clear_all: 'Vaciar selección',
    tooltip_shortcuts: 'Atajos de teclado',
    tooltip_help: 'Ayuda e información',
    tooltip_language: 'Cambiar idioma',
    tooltip_theme: 'Cambiar tema',
    aria_open_menu: 'Abrir menú',
    aria_open_search: 'Abrir búsqueda',
    search_clear: 'Limpiar búsqueda',
    mode_flags: 'Banderas',
    mode_platforms: 'Plataformas',
    view_list: 'Vista lista',
    view_grid: 'Vista grilla',
    flag_style_label: 'Estilo de Banderas',
    flag_style_realistic: '🎨 Realistas (Recomendado)',
    flag_style_square: '🔲 Cuadradas Minimalistas',
    btn_add_all: 'Agregar todos visibles',
    workspace_title: 'Vista Previa & Exportación',
    btn_preview_all: 'Vista general',
    btn_export_csv: 'Solo CSV',
    btn_share: 'Compartir',
    btn_save: 'Guardar',
    btn_load: 'Cargar',
    preview_label: 'Vista Previa',
    nav_prev: 'Anterior (←)',
    nav_next: 'Siguiente (→)',
    canvas_copy: 'Copiar imagen al portapapeles (Ctrl+C)',
    canvas_zoom_in: 'Acercar vista previa',
    canvas_zoom_out: 'Alejar vista previa',
    canvas_zoom_reset: 'Restablecer zoom',
    export_settings_title: 'Ajustes de Exportación',
    reset_settings_title: 'Restaurar valores por defecto',
    reset_label: 'Reset',
    accordion_presets: 'Presets',
    presets_fast: 'Presets Rápidos',
    presets_fast_hint: 'Configuraciones predefinidas para diferentes estilos',
    preset_gaming_title: 'Gaming: Colores neón vibrantes, números grandes y llamativos. Perfecto para streams con alta energía.',
    preset_gaming: 'Gaming',
    preset_esports_title: 'Esports Pro: Estilo profesional con máximo contraste. Inspirado en torneos oficiales de PUBG.',
    preset_esports: 'Esports Pro',
    preset_sport_title: 'Sport: Estilo deportivo clásico con números bold. Ideal para competencias tradicionales.',
    preset_sport: 'Sport',
    preset_clean_title: 'Clean: Minimalista y elegante con fondo transparente. Para overlays discretos.',
    preset_clean: 'Clean',
    preset_retro_title: 'Retro: Estilo vintage con colores dorados. Perfecto para eventos temáticos.',
    preset_retro: 'Retro',
    accordion_base: 'Base',
    label_resolution: 'Resolución (px)',
    label_number_start: 'Número inicial',
    hint_number_start: 'PUBG puede asignar hasta #105 en Solos',
    label_canvas_shape: 'Forma del Canvas',
    shape_square: 'Cuadrado',
    shape_rounded: 'Redondeado',
    shape_circle: 'Círculo',
    label_canvas_bg: 'Fondo del canvas',
    label_bg_transparent: 'Fondo transparente',
    label_color_transparent: 'Color · Transparente',
    accordion_number: 'Número',
    label_number_size: 'Tamaño Número',
    label_stroke_size: 'Grosor Contorno',
    label_number_color: 'Color del Número',
    label_text_stroke: 'Texto · Contorno',
    label_number_position: 'Posición del Número',
    label_number_font: 'Fuente del Número',
    font_default: 'Arial Black (por defecto)',
    font_bebas: 'Bebas Neue (Gaming)',
    font_anton: 'Anton (Bold Gaming)',
    font_teko: 'Teko (Esports)',
    font_bungee: 'Bungee (Retro)',
    label_custom_text: 'Texto personalizado',
    hint_custom_text: 'Dejar vacío para usar número',
    placeholder_custom_text: 'Ej: GG, WIN, etc...',
    label_number_opacity: 'Opacidad del Número',
    label_shadow: 'Sombra del número',
    label_shadow_color: 'Color de sombra',
    label_show_number: 'Mostrar número',
    label_square_fit: 'Ajustar al cuadrado',
    roster_title: 'Selección',
    roster_drag_hint: 'arrastrar para reordenar',
    tooltip_shuffle: 'Mezclar orden',
    btn_shuffle: 'Mezclar',
    tooltip_sort: 'Ordenar A–Z',
    btn_sort: 'A–Z',
    tooltip_duplicate: 'Duplicar selección activa',
    btn_duplicate: 'Duplicar',
    btn_clear: 'Vaciar',
    export_include_install: 'Incluir',
    export_include_csv: 'Incluir',
    export_include_preview: 'Incluir preview HTML',
    btn_preview_zip: 'Vista previa ZIP',
    btn_package_zip: 'Empaquetar ZIP',
    progress_generating: 'Generando...',
    progress_generating_item: 'Generando {{current}}/{{total}}: {{name}}',
    progress_packaging: 'Empaquetando ZIP...',
    modal_preview_title: 'Vista General de Selección',
    modal_shortcuts_title: 'Atajos de Teclado',
    shortcut_nav: 'Navegar entre ítems',
    shortcut_delete: 'Eliminar ítem activo',
    shortcut_undo: 'Deshacer última acción',
    shortcut_copy: 'Copiar preview al portapapeles',
    shortcut_save: 'Guardar roster como JSON',
    shortcut_export: 'Empaquetar ZIP',
    shortcut_close: 'Cerrar modal',
    shortcut_search: 'Enfocar búsqueda',
    confirm_title: 'Esta página dice',
    confirm_accept: 'Aceptar',
    confirm_cancel: 'Cancelar',
    confirm_clear_btn: 'Vaciar',
    confirm_change_btn: 'Cambiar',
    confirm_clear_selection: '¿Estás seguro de vaciar la selección? Se eliminarán {{count}} {{items}}.',
    confirm_mode_change: '¿Cambiar a {{mode}}? Se perderá la selección actual.',
    share_title: 'Compartir selección',
    share_desc: 'Generá un link con tu selección actual.',
    share_desc_dynamic: 'Link con {{count}} {{items}} ({{mode}}).',
    share_meta: 'Incluye modo, selección y ajustes.',
    share_copy: 'Copiar',
    share_close: 'Cerrar',
    share_native: 'Compartir',
    share_open: 'Abrir',
    help_title: 'Ayuda e información',
    help_what_title: 'Qué es FlagForge',
    help_what_body: 'FlagForge te permite crear packs de banderas o logos con números personalizados para overlays y observación en PUBG. Podés armar listas, ver vista previa y exportar todo en ZIP.',
    help_how_title: 'Cómo usar',
    help_how_1: 'Elegí Banderas o Plataformas y buscá lo que necesitás.',
    help_how_2: 'Agregá ítems a la selección y reordenalos con drag.',
    help_how_3: 'Ajustá tamaño, colores y estilo en “Ajustes de Exportación”.',
    help_how_4: 'Exportá en ZIP o compartí un link con tu selección.',
    help_export_title: 'Exportación',
    help_export_body: 'El ZIP incluye imágenes numeradas y, si querés, archivos adicionales como TeamInfo.csv y preview HTML.',
    help_share_title: 'Compartir',
    help_share_body: 'El link guarda tu selección y ajustes. Al abrirlo, la web carga exactamente ese estado.',
    help_privacy_title: 'Privacidad',
    help_privacy_body: 'Todo funciona localmente en tu navegador. No se suben archivos ni selecciones a servidores.',
    help_credits_title: 'Créditos',
    help_credits_body: 'Proyecto creado y diseñado por SkuuIll.',
    help_created_by: 'Creado por',
    search_close: 'Cerrar búsqueda',
    search_placeholder: 'Buscar...',
    search_placeholder_flags: 'Buscar país, código ISO o continente...',
    search_placeholder_platforms: 'Buscar plataforma, tag o categoría...',
    search_no_results: 'Sin resultados para «{{query}}»',
    empty_roster_title: 'Sin {{items}} seleccionadas',
    empty_roster_sub: 'Hacé clic en un {{item}} de la librería para agregarlo.',
    aria_item_selected: 'Ya seleccionado',
    aria_item_add: 'Click para agregar',
    library_title_flags: 'Librería',
    library_title_platforms: 'Plataformas',
    count_label_flags: 'países',
    count_label_platforms: 'plataformas',
    placeholder_preview_flags: 'Seleccioná una bandera<br>para ver la vista previa',
    placeholder_preview_platforms: 'Seleccioná una plataforma<br>para ver la vista previa',
    filter_all: 'Todos',
    filter_popular: 'Populares',
    filter_esports: 'PUBG Esports',
    filter_iconic: 'Icónicas',
    filter_hispanic: 'Hispanos',
    filter_america: 'América',
    filter_europe: 'Europa',
    filter_asia: 'Asia',
    filter_africa: 'África',
    filter_oceania: 'Oceanía',
    filter_social: 'Social',
    filter_streaming: 'Streaming',
    filter_gaming: 'Gaming',
    filter_tech: 'Tech',
    filter_dev: 'Dev',
    filter_music: 'Música',
    item_flag: 'bandera',
    item_flags: 'banderas',
    item_platform: 'plataforma',
    item_platforms: 'plataformas',
    mode_flags_label: 'Banderas',
    mode_platforms_label: 'Plataformas',
    toast_no_selection_share: 'No hay selección para compartir',
    toast_link_copied: 'Link copiado ✅',
    toast_link_copy_fail: 'No se pudo copiar el link',
    toast_share_failed: 'No se pudo compartir',
    toast_nothing_to_undo: 'Nada que deshacer',
    toast_action_undone: 'Acción deshecha ↩',
    toast_style_changed: 'Estilo cambiado: {{style}}',
    toast_resolution: 'Resolución: {{size}}px',
    toast_selection_cleared: 'Selección vaciada',
    toast_order_shuffled: '¡Orden mezclado! 🔀',
    toast_sorted_az: 'Ordenado A–Z 🔤',
    toast_select_item_first: 'Seleccioná un {{item}} primero',
    toast_duplicated: '{{name}} duplicado ⎘',
    toast_added_count: '+{{count}} {{items}} agregados ✅',
    toast_all_in_selection: 'Todos ya están en la selección',
    toast_all_selected: 'Todos ya seleccionados',
    toast_all_selected_already: 'Ya están todos seleccionados',
    toast_random_added: '+{{count}} {{items}} aleatorios 🎲',
    toast_theme_light: 'Tema claro activado',
    toast_theme_dark: 'Tema oscuro activado',
    toast_removed: '{{name}} eliminado',
    toast_preview_empty: 'No hay nada en el preview',
    toast_copy_not_supported: 'Copiado no soportado en este navegador',
    toast_copy_unavailable: 'Copiado no disponible (falta soporte de portapapeles)',
    toast_copied_clipboard: '¡Imagen copiada al portapapeles! 📋',
    toast_copy_error: 'Error al copiar (requiere HTTPS o localhost)',
    toast_nothing_to_save: 'No hay nada que guardar',
    toast_roster_saved: 'Roster guardado ({{count}} {{items}}) 💾',
    toast_roster_loaded: 'Roster cargado: {{count}} {{items}} 📂',
    toast_file_load_error: 'Error al cargar el archivo',
    toast_share_loaded: 'Selección compartida cargada ✅',
    toast_share_invalid: 'Link de compartir inválido',
    toast_already_selected: '{{name}} ya está en la selección',
    toast_added_item: '{{name}} agregado ✅',
    toast_csv_downloaded: 'TeamInfo.csv descargado 📄',
    toast_export_done: '¡Descarga lista! {{count}} {{items}} exportados 🎉',
    toast_export_error: 'Error al generar el pack. Intentá de nuevo.',
    toast_preset_applied: 'Preset "{{name}}" aplicado',
    toast_settings_reset: 'Configuración restaurada',
    toast_checking_platforms: 'Verificando logos de plataformas...',
    toast_mode_activated: 'Modo {{mode}} activado'
  },
  en: {
    skip_to_content: 'Skip to content',
    page_title: 'FlagForge Studio | Flag and Logo Editor',
    page_description: 'Professional tool to generate packs of flags and platform logos with custom numbers for PUBG Observer. Export a ZIP ready for stream overlays.',
    noscript_message: 'This tool needs JavaScript to work.',
    stat_selected: 'Selected',
    tooltip_undo: 'Undo last action (Ctrl+Z)',
    tooltip_randomize: 'Add 5 random flags',
    tooltip_select_all: 'Select all visible',
    tooltip_clear_all: 'Clear selection',
    tooltip_shortcuts: 'Keyboard shortcuts',
    tooltip_help: 'Help and info',
    tooltip_language: 'Change language',
    tooltip_theme: 'Change theme',
    aria_open_menu: 'Open menu',
    aria_open_search: 'Open search',
    search_clear: 'Clear search',
    mode_flags: 'Flags',
    mode_platforms: 'Platforms',
    view_list: 'List view',
    view_grid: 'Grid view',
    flag_style_label: 'Flag Style',
    flag_style_realistic: '🎨 Realistic (Recommended)',
    flag_style_square: '🔲 Minimal Squares',
    btn_add_all: 'Add all visible',
    workspace_title: 'Preview & Export',
    btn_preview_all: 'Overview',
    btn_export_csv: 'CSV only',
    btn_share: 'Share',
    btn_save: 'Save',
    btn_load: 'Load',
    preview_label: 'Preview',
    nav_prev: 'Previous (←)',
    nav_next: 'Next (→)',
    canvas_copy: 'Copy image to clipboard (Ctrl+C)',
    canvas_zoom_in: 'Zoom in preview',
    canvas_zoom_out: 'Zoom out preview',
    canvas_zoom_reset: 'Reset zoom',
    export_settings_title: 'Export Settings',
    reset_settings_title: 'Restore default values',
    reset_label: 'Reset',
    accordion_presets: 'Presets',
    presets_fast: 'Quick Presets',
    presets_fast_hint: 'Predefined configurations for different styles',
    preset_gaming_title: 'Gaming: Vibrant neon colors, big bold numbers. Perfect for high-energy streams.',
    preset_gaming: 'Gaming',
    preset_esports_title: 'Esports Pro: Professional style with maximum contrast. Inspired by official PUBG tournaments.',
    preset_esports: 'Esports Pro',
    preset_sport_title: 'Sport: Classic sports style with bold numbers. Ideal for traditional competitions.',
    preset_sport: 'Sport',
    preset_clean_title: 'Clean: Minimal and elegant with transparent background. For subtle overlays.',
    preset_clean: 'Clean',
    preset_retro_title: 'Retro: Vintage style with golden colors. Perfect for themed events.',
    preset_retro: 'Retro',
    accordion_base: 'Base',
    label_resolution: 'Resolution (px)',
    label_number_start: 'Starting number',
    hint_number_start: 'PUBG can assign up to #105 in Solos',
    label_canvas_shape: 'Canvas Shape',
    shape_square: 'Square',
    shape_rounded: 'Rounded',
    shape_circle: 'Circle',
    label_canvas_bg: 'Canvas background',
    label_bg_transparent: 'Transparent background',
    label_color_transparent: 'Color · Transparent',
    accordion_number: 'Number',
    label_number_size: 'Number size',
    label_stroke_size: 'Stroke width',
    label_number_color: 'Number color',
    label_text_stroke: 'Text · Stroke',
    label_number_position: 'Number position',
    label_number_font: 'Number font',
    font_default: 'Arial Black (default)',
    font_bebas: 'Bebas Neue (Gaming)',
    font_anton: 'Anton (Bold Gaming)',
    font_teko: 'Teko (Esports)',
    font_bungee: 'Bungee (Retro)',
    label_custom_text: 'Custom text',
    hint_custom_text: 'Leave empty to use number',
    placeholder_custom_text: 'Ex: GG, WIN, etc...',
    label_number_opacity: 'Number opacity',
    label_shadow: 'Number shadow',
    label_shadow_color: 'Shadow color',
    label_show_number: 'Show number',
    label_square_fit: 'Fit to square',
    roster_title: 'Selection',
    roster_drag_hint: 'drag to reorder',
    tooltip_shuffle: 'Shuffle order',
    btn_shuffle: 'Shuffle',
    tooltip_sort: 'Sort A–Z',
    btn_sort: 'A–Z',
    tooltip_duplicate: 'Duplicate active selection',
    btn_duplicate: 'Duplicate',
    btn_clear: 'Clear',
    export_include_install: 'Include',
    export_include_csv: 'Include',
    export_include_preview: 'Include HTML preview',
    btn_preview_zip: 'ZIP preview',
    btn_package_zip: 'Package ZIP',
    progress_generating: 'Generating...',
    progress_generating_item: 'Generating {{current}}/{{total}}: {{name}}',
    progress_packaging: 'Packaging ZIP...',
    modal_preview_title: 'Selection Overview',
    modal_shortcuts_title: 'Keyboard Shortcuts',
    shortcut_nav: 'Navigate between items',
    shortcut_delete: 'Delete active item',
    shortcut_undo: 'Undo last action',
    shortcut_copy: 'Copy preview to clipboard',
    shortcut_save: 'Save roster as JSON',
    shortcut_export: 'Package ZIP',
    shortcut_close: 'Close modal',
    shortcut_search: 'Focus search',
    confirm_title: 'This page says',
    confirm_accept: 'Accept',
    confirm_cancel: 'Cancel',
    confirm_clear_btn: 'Clear',
    confirm_change_btn: 'Switch',
    confirm_clear_selection: 'Are you sure you want to clear the selection? {{count}} {{items}} will be removed.',
    confirm_mode_change: 'Switch to {{mode}}? The current selection will be lost.',
    share_title: 'Share selection',
    share_desc: 'Generate a link with your current selection.',
    share_desc_dynamic: 'Link with {{count}} {{items}} ({{mode}}).',
    share_meta: 'Includes mode, selection, and settings.',
    share_copy: 'Copy',
    share_close: 'Close',
    share_native: 'Share',
    share_open: 'Open',
    help_title: 'Help and info',
    help_what_title: 'What is FlagForge',
    help_what_body: 'FlagForge lets you create packs of flags or platform logos with custom numbers for PUBG overlays and observer use. Build lists, preview, and export everything as a ZIP.',
    help_how_title: 'How to use',
    help_how_1: 'Choose Flags or Platforms and search what you need.',
    help_how_2: 'Add items to the selection and reorder by dragging.',
    help_how_3: 'Adjust size, colors, and style in “Export Settings”.',
    help_how_4: 'Export as ZIP or share a link with your selection.',
    help_export_title: 'Export',
    help_export_body: 'The ZIP includes numbered images and, if you want, extra files like TeamInfo.csv and an HTML preview.',
    help_share_title: 'Share',
    help_share_body: 'The link stores your selection and settings. When opened, the site loads that exact state.',
    help_privacy_title: 'Privacy',
    help_privacy_body: 'Everything runs locally in your browser. No files or selections are uploaded to servers.',
    help_credits_title: 'Credits',
    help_credits_body: 'Project created and designed by SkuuIll.',
    help_created_by: 'Created by',
    search_close: 'Close search',
    search_placeholder: 'Search...',
    search_placeholder_flags: 'Search country, ISO code, or continent...',
    search_placeholder_platforms: 'Search platform, tag, or category...',
    search_no_results: 'No results for “{{query}}”',
    empty_roster_title: 'No {{items}} selected',
    empty_roster_sub: 'Click a {{item}} in the library to add it.',
    aria_item_selected: 'Already selected',
    aria_item_add: 'Click to add',
    library_title_flags: 'Library',
    library_title_platforms: 'Platforms',
    count_label_flags: 'countries',
    count_label_platforms: 'platforms',
    placeholder_preview_flags: 'Select a flag<br>to see the preview',
    placeholder_preview_platforms: 'Select a platform<br>to see the preview',
    filter_all: 'All',
    filter_popular: 'Popular',
    filter_esports: 'PUBG Esports',
    filter_iconic: 'Iconic',
    filter_hispanic: 'Hispanic',
    filter_america: 'America',
    filter_europe: 'Europe',
    filter_asia: 'Asia',
    filter_africa: 'Africa',
    filter_oceania: 'Oceania',
    filter_social: 'Social',
    filter_streaming: 'Streaming',
    filter_gaming: 'Gaming',
    filter_tech: 'Tech',
    filter_dev: 'Dev',
    filter_music: 'Music',
    item_flag: 'flag',
    item_flags: 'flags',
    item_platform: 'platform',
    item_platforms: 'platforms',
    mode_flags_label: 'Flags',
    mode_platforms_label: 'Platforms',
    toast_no_selection_share: 'No selection to share',
    toast_link_copied: 'Link copied ✅',
    toast_link_copy_fail: 'Could not copy the link',
    toast_share_failed: 'Could not share',
    toast_nothing_to_undo: 'Nothing to undo',
    toast_action_undone: 'Action undone ↩',
    toast_style_changed: 'Style changed: {{style}}',
    toast_resolution: 'Resolution: {{size}}px',
    toast_selection_cleared: 'Selection cleared',
    toast_order_shuffled: 'Order shuffled 🔀',
    toast_sorted_az: 'Sorted A–Z 🔤',
    toast_select_item_first: 'Select a {{item}} first',
    toast_duplicated: '{{name}} duplicated ⎘',
    toast_added_count: '+{{count}} {{items}} added ✅',
    toast_all_in_selection: 'Everything is already in the selection',
    toast_all_selected: 'Everything already selected',
    toast_all_selected_already: 'Everything is already selected',
    toast_random_added: '+{{count}} random {{items}} 🎲',
    toast_theme_light: 'Light theme enabled',
    toast_theme_dark: 'Dark theme enabled',
    toast_removed: '{{name}} removed',
    toast_preview_empty: 'Nothing to preview',
    toast_copy_not_supported: 'Copy not supported in this browser',
    toast_copy_unavailable: 'Copy unavailable (clipboard not supported)',
    toast_copied_clipboard: 'Image copied to clipboard 📋',
    toast_copy_error: 'Copy error (requires HTTPS or localhost)',
    toast_nothing_to_save: 'Nothing to save',
    toast_roster_saved: 'Roster saved ({{count}} {{items}}) 💾',
    toast_roster_loaded: 'Roster loaded: {{count}} {{items}} 📂',
    toast_file_load_error: 'Error loading file',
    toast_share_loaded: 'Shared selection loaded ✅',
    toast_share_invalid: 'Invalid share link',
    toast_already_selected: '{{name}} is already selected',
    toast_added_item: '{{name}} added ✅',
    toast_csv_downloaded: 'TeamInfo.csv downloaded 📄',
    toast_export_done: 'Download ready. {{count}} {{items}} exported 🎉',
    toast_export_error: 'Error generating the pack. Please try again.',
    toast_preset_applied: 'Preset "{{name}}" applied',
    toast_settings_reset: 'Settings restored',
    toast_checking_platforms: 'Checking platform logos...',
    toast_mode_activated: '{{mode}} mode activated'
  }
};

function t(key, vars = {}) {
  const table = I18N[currentLang] || I18N.es;
  let str = table[key] || I18N.es[key] || key;
  Object.keys(vars).forEach(k => {
    str = str.replace(new RegExp(`{{${k}}}`, 'g'), vars[k]);
  });
  return str;
}

function getItemLabels() {
  return currentMode === 'flags'
    ? { singular: t('item_flag'), plural: t('item_flags') }
    : { singular: t('item_platform'), plural: t('item_platforms') };
}

function getItemLabelForCount(count) {
  const labels = getItemLabels();
  return count === 1 ? labels.singular : labels.plural;
}

function getModeLabel(mode) {
  return mode === 'platforms' ? t('mode_platforms_label') : t('mode_flags_label');
}

function updateModeLabels() {
  if (libraryTitle) libraryTitle.textContent = currentMode === 'flags' ? t('library_title_flags') : t('library_title_platforms');
  if (countLabel) countLabel.textContent = currentMode === 'flags' ? t('count_label_flags') : t('count_label_platforms');
}

function applyLanguage(lang) {
  currentLang = (lang === 'en' || lang === 'es') ? lang : 'es';
  document.documentElement.lang = currentLang;
  document.documentElement.dataset.lang = currentLang;
  try { localStorage.setItem('flagforge_lang', currentLang); } catch (e) {}

  if (langToggle) {
    langToggle.textContent = currentLang.toUpperCase();
    langToggle.setAttribute('aria-label', t('tooltip_language'));
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = t(key);
    el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const raw = el.dataset.i18nAttr || '';
    raw.split('|').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (!attr || !key) return;
      const value = t(key);
      if (value) el.setAttribute(attr, value);
    });
  });

  document.title = t('page_title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('page_description'));

  if (searchInput) {
    searchInput.dataset.placeholderFlags = t('search_placeholder_flags');
    searchInput.dataset.placeholderPlatforms = t('search_placeholder_platforms');
    searchInput.placeholder = t('search_placeholder');
  }
  if (searchModalInput) {
    searchModalInput.dataset.placeholderFlags = t('search_placeholder_flags');
    searchModalInput.dataset.placeholderPlatforms = t('search_placeholder_platforms');
    searchModalInput.placeholder = t('search_placeholder');
  }

  updateModeLabels();
  updateFiltersForMode();
  syncModeUIStrings();

  if (shareModal && !shareModal.classList.contains('hidden')) {
    openShareModal();
  }
  setupAccessibility();
}

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
let searchDebounceTimer = null;  // debounce timer for search
let imageCache        = new Map(); // cache for loaded images
let canvasZoom        = 1;         // canvas zoom level
let currentMode       = 'flags';   // 'flags' or 'platforms'
let currentDB         = db;        // current database (db or platformsDB)
let currentFlagStyle  = 'realistic'; // 'realistic' | 'square'
let platformsDBFiltered = null;
let platformSupportPromise = null;
let pendingConfirm = null;
let currentLang = 'es';

// ─── FLAG STYLE HELPER ──────────────────────────────────────────
function getFlagUrl(country, size = 320) {
  const iso = country.iso;
  
  // Square style uses kapowaz.github.io square-flags CDN (SVG)
  if (currentFlagStyle === 'square') {
    return `https://kapowaz.github.io/square-flags/flags/${iso}.svg`;
  }
  
  // Todos los demás estilos usan la misma URL de FlagCDN
  // La diferencia visual se aplica con CSS
  return `https://flagcdn.com/w${size}/${iso}.png`;
}

function normalizeFlagStyle(style) {
  return style === 'square' ? 'square' : 'realistic';
}

// Platform logo helper (primary)
const PLATFORM_LOGO_MAP = {
  x: 'twitter',
  booking: 'bookingdotcom',
  appletv: 'appletv',
  googlemeet: 'googlemeet',
  youtube: 'youtube',
  youtubemusic: 'youtubemusic',
  googlepay: 'googlepay',
  applepay: 'applepay',
  primevideo: 'primevideo',
  disneyplus: 'disneyplus',
  hbomax: 'hbomax',
  nintendoswitch: 'nintendoswitch',
  googledrive: 'googledrive',
  microsoftteams: 'microsoftteams',
  adobephotoshop: 'adobephotoshop',
  adobeillustrator: 'adobeillustrator',
  adobexd: 'adobexd'
};

function getPlatformLogoUrl(platform) {
  const slug = PLATFORM_LOGO_MAP[platform.tag] || platform.tag;
  const base = platform.logoUrl || `https://cdn.simpleicons.org/${slug}/FFFFFF`;
  const primary = base.replace(/\/[0-9a-fA-F]{3,6}$/, '/FFFFFF');
  const fallback = `https://www.vectorlogo.zone/logos/${slug}/${slug}-icon.svg`;
  return { primary, fallback };
}

function checkImageLoad(url, timeoutMs = 5000) {
  return new Promise(resolve => {
    const img = new Image();
    let done = false;
    const finish = (ok) => {
      if (done) return;
      done = true;
      resolve(ok);
    };
    img.onload = () => finish(true);
    img.onerror = () => finish(false);
    img.src = url;
    setTimeout(() => finish(false), timeoutMs);
  });
}

async function ensurePlatformSupport() {
  if (platformSupportPromise) return platformSupportPromise;
  platformSupportPromise = (async () => {
    const results = [];
    const concurrency = 6;
    let idx = 0;
    const workers = Array.from({ length: concurrency }, async () => {
      while (idx < platformsDB.length) {
        const current = platformsDB[idx++];
        const logo = getPlatformLogoUrl(current);
        const ok = await checkImageLoad(logo.primary);
        if (ok) results.push(current);
      }
    });
    await Promise.all(workers);
    platformsDBFiltered = results;
    return results;
  })();
  return platformSupportPromise;
}

// Apply flag style effects to canvas
function applyFlagStyleToCanvas(context, img, S, item) {
  // The only supported styles are 'realistic' and 'square'.
  // The visual difference comes from the image source (see getFlagUrl).
  context.clearRect(0, 0, S, S);
  drawFlagContain(context, img, S, item);
}

// ─── DEVICE DETECTION ────────────────────────────────────────
function detectDevice() {
  const width = window.innerWidth;
  if (width <= 768) return 'mobile';
  if (width <= 1024) return 'tablet';
  return 'desktop';
}

function isTouchDevice() {
  return ('ontouchstart' in window) || 
         (navigator.maxTouchPoints > 0);
}

function applyResponsiveLayout(device) {
  document.body.dataset.device = device;
  
  if (device === 'mobile') {
    enableMobileLayout();
    if (isTouchDevice()) {
      enableTouchGestures();
    }
  } else if (device === 'tablet') {
    enableTabletLayout();
    if (isTouchDevice()) {
      enableTouchGestures();
    }
  } else {
    enableDesktopLayout();
  }
}

function enableMobileLayout() {
  // Mobile layout configuration will be implemented in future tasks
  console.log('Mobile layout enabled');
}

function enableTabletLayout() {
  // Tablet layout configuration will be implemented in future tasks
  console.log('Tablet layout enabled');
}

function enableDesktopLayout() {
  // Desktop layout configuration (current default)
  console.log('Desktop layout enabled');
}

function enableTouchGestures() {
  // Touch gesture handlers for swipe navigation on canvas
  console.log('Touch gestures enabled');
  
  // Add touch event listeners to canvas for swipe detection
  if (canvas) {
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: true });
  }
}

// ─── TOUCH GESTURE HANDLERS ──────────────────────────────────
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next preview
      navNext();
    } else {
      // Swipe right - previous preview
      navPrev();
    }
  }
}

function getPreviewSize() {
  const mount = canvas.parentElement;
  const baseSize = mount ? mount.clientWidth || 280 : 280;
  
  // Reducir en mobile para mejor rendimiento
  if (detectDevice() === 'mobile') {
    return Math.min(baseSize, 320);
  }
  
  return baseSize;
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

// ─── CONFIRM MODAL ───────────────────────────────────────────
function openConfirmModal({ title, message, confirmText = t('confirm_accept'), cancelText = t('confirm_cancel'), onConfirm } = {}) {
  if (!confirmModal || !confirmAcceptBtn || !confirmCancelBtn || !confirmTitleEl || !confirmMessageEl) {
    if (window.confirm(message || t('confirm_title'))) {
      if (typeof onConfirm === 'function') onConfirm();
    }
    return;
  }

  confirmTitleEl.textContent = title || t('confirm_title');
  confirmMessageEl.textContent = message || '';
  confirmAcceptBtn.textContent = confirmText;
  confirmCancelBtn.textContent = cancelText;
  pendingConfirm = typeof onConfirm === 'function' ? onConfirm : null;

  confirmModal.classList.remove('hidden');
  confirmModal.setAttribute('aria-modal', 'true');
  confirmModal.setAttribute('role', 'dialog');
  document.body.style.overflow = 'hidden';
  confirmAcceptBtn.focus();
}

function closeConfirmModal() {
  if (!confirmModal) return;
  confirmModal.classList.add('hidden');
  confirmModal.removeAttribute('aria-modal');
  confirmModal.removeAttribute('role');
  document.body.style.overflow = '';
  pendingConfirm = null;
}

// ─── SHARE LINK ───────────────────────────────────────────────
function encodeShareData(obj) {
  const json = JSON.stringify(obj);
  const utf8 = encodeURIComponent(json).replace(/%([0-9A-F]{2})/g, (_, p1) =>
    String.fromCharCode(parseInt(p1, 16))
  );
  return btoa(utf8).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/,'');
}

function decodeShareData(str) {
  const base = str.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base + '='.repeat((4 - base.length % 4) % 4);
  const bin = atob(padded);
  const utf8 = bin.split('')
    .map(c => '%' + c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');
  return JSON.parse(decodeURIComponent(utf8));
}

function buildSharePayload() {
  return {
    v: 1,
    mode: currentMode,
    slots: selectedSlots.map(c => c.iso || c.tag),
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
}

function buildShareLink() {
  const base = window.location.href.split('?')[0].split('#')[0];
  const payload = buildSharePayload();
  return `${base}?share=${encodeShareData(payload)}`;
}

function openShareModal() {
  if (!selectedSlots.length) {
    showToast(t('toast_no_selection_share'), 'error');
    return;
  }
  const link = buildShareLink();
  if (shareLinkInput) shareLinkInput.value = link;
  if (shareDesc) {
    shareDesc.textContent = t('share_desc_dynamic', {
      count: selectedSlots.length,
      items: getItemLabelForCount(selectedSlots.length),
      mode: getModeLabel(currentMode)
    });
  }
  if (btnNativeShare) {
    btnNativeShare.style.display = navigator.share ? '' : 'none';
  }

  if (!shareModal) return;
  shareModal.classList.remove('hidden');
  shareModal.setAttribute('aria-modal', 'true');
  shareModal.setAttribute('role', 'dialog');
  document.body.style.overflow = 'hidden';
  if (shareLinkInput) {
    shareLinkInput.focus();
    shareLinkInput.select();
  }
}

function closeShareModal() {
  if (!shareModal) return;
  shareModal.classList.add('hidden');
  shareModal.removeAttribute('aria-modal');
  shareModal.removeAttribute('role');
  document.body.style.overflow = '';
}

async function copyShareLink() {
  if (!shareLinkInput) return;
  const link = shareLinkInput.value;
  try {
    await navigator.clipboard.writeText(link);
    showToast(t('toast_link_copied'), 'success');
  } catch (err) {
    shareLinkInput.select();
    try {
      document.execCommand('copy');
      showToast(t('toast_link_copied'), 'success');
    } catch (err2) {
      showToast(t('toast_link_copy_fail'), 'error');
    }
  }
}

function openShareLinkInNewTab() {
  if (!shareLinkInput) return;
  const link = shareLinkInput.value;
  if (!link) return;
  window.open(link, '_blank');
}

async function nativeShareLink() {
  if (!navigator.share || !shareLinkInput) return;
  const link = shareLinkInput.value;
  if (!link) return;
  try {
    await navigator.share({
      title: 'FlagForge',
      text: shareDesc ? shareDesc.textContent : t('share_title'),
      url: link
    });
  } catch (err) {
    if (err && err.name === 'AbortError') return;
    showToast(t('toast_share_failed'), 'error');
  }
}

function openHelpModal() {
  if (!helpModal) return;
  helpModal.classList.remove('hidden');
  helpModal.setAttribute('aria-modal', 'true');
  helpModal.setAttribute('role', 'dialog');
  document.body.style.overflow = 'hidden';
  const focusable = helpModal.querySelector('button');
  if (focusable) focusable.focus();
}

function closeHelpModal() {
  if (!helpModal) return;
  helpModal.classList.add('hidden');
  helpModal.removeAttribute('aria-modal');
  helpModal.removeAttribute('role');
  document.body.style.overflow = '';
}

// ─── UNDO ────────────────────────────────────────────────────
function pushUndo() {
  undoStack.push(selectedSlots.map(c => c));
  if (undoStack.length > CONFIG.MAX_UNDO_STACK) undoStack.shift();
  updateUndoButton();
}

function undo() {
  if (!undoStack.length) { showToast(t('toast_nothing_to_undo')); return; }
  selectedSlots = undoStack.pop();
  currentPreviewIdx = Math.min(currentPreviewIdx, selectedSlots.length - 1);
  updateUI();
  updateUndoButton();
  showToast(t('toast_action_undone'));
}

function updateUndoButton() {
  if (btnUndo) {
    btnUndo.disabled = undoStack.length === 0;
    btnUndo.setAttribute('aria-label', `Deshacer (${undoStack.length} acciones disponibles)`);
  }
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

// ─── SIDEBAR TOGGLE ──────────────────────────────────────────
let sidebarFocusTrap = null;
let sidebarLastFocusedElement = null;

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const backdrop = document.querySelector('.sidebar-backdrop');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  
  if (sidebar) {
    const isOpening = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open');
    
    // Update aria-expanded on hamburger button
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');
    }
    
    if (isOpening) {
      // Store the element that had focus before opening
      sidebarLastFocusedElement = document.activeElement;
      
      // Setup focus trap
      setupSidebarFocusTrap();
      
      // Focus management: focus first interactive element when opening
      setTimeout(() => {
        const firstInteractive = sidebar.querySelector('button, a, input, [tabindex="0"]');
        if (firstInteractive) {
          firstInteractive.focus();
        }
      }, 50);
    } else {
      // Remove focus trap when closing
      removeSidebarFocusTrap();
      
      // Return focus to the element that opened the sidebar
      if (sidebarLastFocusedElement) {
        sidebarLastFocusedElement.focus();
        sidebarLastFocusedElement = null;
      }
    }
  }
  
  if (backdrop) {
    backdrop.classList.toggle('visible');
  }
}

function setupSidebarFocusTrap() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  
  // Get all focusable elements in the sidebar
  const focusableElements = sidebar.querySelectorAll(
    'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
  );
  
  if (focusableElements.length === 0) return;
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];
  
  // Store the trap handler
  sidebarFocusTrap = (e) => {
    // Handle Escape key to close sidebar
    if (e.key === 'Escape') {
      toggleSidebar();
      return;
    }
    
    if (e.key !== 'Tab') return;
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  sidebar.addEventListener('keydown', sidebarFocusTrap);
}

function removeSidebarFocusTrap() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && sidebarFocusTrap) {
    sidebar.removeEventListener('keydown', sidebarFocusTrap);
    sidebarFocusTrap = null;
  }
}

// ─── INIT ────────────────────────────────────────────────────
function init() {
  // Apply theme before first paint para evitar parpadeos
  const storedTheme = localStorage.getItem('flagforge_theme');
  if (storedTheme === 'light') {
    document.documentElement.classList.add('light');
  } else if (!storedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.documentElement.classList.add('light');
  }

  // Leer tema desde la clase en <html> y aplicarlo
  isLightTheme = document.documentElement.classList.contains('light');
  applyTheme();
  // Enable transitions only after initial theme/layout are applied
  requestAnimationFrame(() => document.documentElement.classList.add('theme-ready'));

  // Language
  try {
    const storedLang = localStorage.getItem('flagforge_lang');
    applyLanguage(storedLang || 'es');
  } catch (e) {
    applyLanguage('es');
  }

  // Layout inicial según tamaño de pantalla
  applyResponsiveLayout(detectDevice());

  // Restore session
  try {
    const raw = sessionStorage.getItem('flagforge_slots');
    if (raw) {
      const parsed = JSON.parse(raw);
      const saved = Array.isArray(parsed) ? parsed : (parsed.slots || []);
      const savedMode = (!Array.isArray(parsed) && parsed.mode) ? parsed.mode : null;
      if (savedMode && savedMode !== currentMode) {
        setMode(savedMode, { skipConfirm: true, skipUndo: true, silent: true });
      }
      const sources = savedMode === 'platforms'
        ? [platformsDB]
        : savedMode === 'flags'
          ? [db]
          : [db, platformsDB];
      saved.forEach(identifier => {
        const c = sources.map(source => source.find(x => x.iso === identifier || x.tag === identifier)).find(Boolean);
        if (c) selectedSlots.push(c);
      });
    }
  } catch(e) {}

  // Load shared selection from URL (overrides session if present)
  loadShareFromUrl();

  resizeCanvas();
  renderLibrary();
  renderRoster();
  syncModeUIStrings();
  updateUI();
  initPositionGrid();
  initShapeBtns();
  if (window.lucide) lucide.createIcons();

  // Resize with debounce
  let resizeDebounceTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeDebounceTimer);
    resizeDebounceTimer = setTimeout(() => {
      applyResponsiveLayout(detectDevice());
      resizeCanvas();
    }, 250);
  });

  // ── Search with dropdown (debounced) ──
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        renderLibrary();
        updateSearchDropdown();
      }, CONFIG.SEARCH_DEBOUNCE_MS);
    });
    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim()) updateSearchDropdown();
    });
    searchInput.addEventListener('keydown', handleSearchKeydown);
  }
  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', () => {
      if (!searchInput) return;
      searchInput.value = '';
      renderLibrary();
      closeSearchDropdown();
      searchInput.focus();
    });
  }
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

  // ── Sort (optional UI) ──
  if (sortSelect) sortSelect.addEventListener('change', renderLibrary);

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
    shadowOptionsRow.hidden = !shadowToggle.checked;
    refreshPreview();
  });
  shadowColor.addEventListener('input', refreshPreview);
  btnResetSettings.addEventListener('click', resetSettings);

  // ── Presets ──
  presetChips.forEach(chip => chip.addEventListener('click', () => applyPreset(chip.dataset.preset)));

  // ── Grid/List view ──
  btnListView.addEventListener('click', () => setView('list'));
  btnGridView.addEventListener('click', () => setView('grid'));

  // ── Mode toggle (flags/platforms) ──
  btnFlagsMode.addEventListener('click', () => requestModeChange('flags'));
  btnPlatformsMode.addEventListener('click', () => requestModeChange('platforms'));
  
  // ── Flag style selector ──
  const flagStyleSelect = document.getElementById('flagStyleSelect');
  const canvasMountEl = document.getElementById('canvasMountEl');
  if (flagStyleSelect) {
    flagStyleSelect.addEventListener('change', (e) => {
      currentFlagStyle = normalizeFlagStyle(e.target.value);
      if (flagStyleSelect.value !== currentFlagStyle) flagStyleSelect.value = currentFlagStyle;
      
      // Apply visual effects to canvas mount for rounded style
      if (canvasMountEl) {
        canvasMountEl.classList.remove('rounded-preview');
      }
      
      // Force redraw of current preview with new style
      if (currentPreviewIdx >= 0 && currentPreviewIdx < selectedSlots.length) {
        // Limpiar la caché para esta bandera con el estilo anterior
        const country = selectedSlots[currentPreviewIdx];
        const S = getPreviewSize();
        
        // Eliminar todas las entradas de caché para esta bandera (todos los estilos)
        const keysToDelete = [];
        for (const key of imageCache.keys()) {
          if (key.startsWith(`${country.iso}_${S}_${currentMode}_`)) {
            keysToDelete.push(key);
          }
        }
        keysToDelete.forEach(key => imageCache.delete(key));
        
        // Forzar redibujado completo
        refreshPreview();
      }
      
      // Re-render library with new style classes
      renderLibrary();
      showToast(t('toast_style_changed', { style: e.target.options[e.target.selectedIndex].text }), 'success');
    });
  }

  // ── Preset size buttons ──
  presetBtns.forEach(btn => btn.addEventListener('click', () => {
    exportSizeInput.value = btn.dataset.val;
    presetBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    refreshPreview();
    showToast(t('toast_resolution', { size: btn.dataset.val }));
  }));

  // ── Roster actions ──
  btnClear.addEventListener('click', () => {
    if (!selectedSlots.length) return;
    openConfirmModal({
      message: t('confirm_clear_selection', { count: selectedSlots.length, items: getItemLabelForCount(selectedSlots.length) }),
      confirmText: t('confirm_clear_btn'),
      cancelText: t('confirm_cancel'),
      onConfirm: () => {
        pushUndo();
        selectedSlots = [];
        currentPreviewIdx = -1;
        updateUI();
        showToast(t('toast_selection_cleared'), 'error');
      }
    });
  });
  btnClearAll.addEventListener('click', () => {
    if (!selectedSlots.length) return;
    openConfirmModal({
      message: t('confirm_clear_selection', { count: selectedSlots.length, items: getItemLabelForCount(selectedSlots.length) }),
      confirmText: t('confirm_clear_btn'),
      cancelText: t('confirm_cancel'),
      onConfirm: () => {
        pushUndo();
        selectedSlots = [];
        currentPreviewIdx = -1;
        updateUI();
        showToast(t('toast_selection_cleared'), 'error');
      }
    });
  });
  btnShuffleRoster.addEventListener('click', () => {
    if (selectedSlots.length < 2) return;
    pushUndo(); shuffle(selectedSlots); updateUI(); showToast(t('toast_order_shuffled'));
  });
  btnSortRoster.addEventListener('click', () => {
    pushUndo();
    selectedSlots.sort((a,b) => a.name.localeCompare(b.name));
    updateUI(); showToast(t('toast_sorted_az'));
  });
  btnDuplicateSel.addEventListener('click', () => {
    if (currentPreviewIdx < 0 || currentPreviewIdx >= selectedSlots.length) {
      showToast(t('toast_select_item_first', { item: getItemLabels().singular }));
      return;
    }
    pushUndo();
    const dup = selectedSlots[currentPreviewIdx];
    selectedSlots.splice(currentPreviewIdx + 1, 0, dup);
    currentPreviewIdx++;
    updateUI();
    showToast(t('toast_duplicated', { name: dup.name }), 'success');
  });
  btnUndo.addEventListener('click', undo);

  // ── Add all visible ──
  btnAddAll.addEventListener('click', () => {
    const visible = getFiltered();
    let added = 0;
    pushUndo();
    visible.forEach(c => { if (!selectedSlots.includes(c)) { selectedSlots.push(c); added++; }});
    updateUI();
    const items = getItemLabelForCount(added);
    showToast(added ? t('toast_added_count', { count: added, items }) : t('toast_all_in_selection'), added ? 'success' : '');
  });
  btnSelectAll.addEventListener('click', () => {
    const visible = getFiltered();
    let added = 0;
    pushUndo();
    visible.forEach(c => { if (!selectedSlots.includes(c)) { selectedSlots.push(c); added++; }});
    updateUI();
    const items = getItemLabelForCount(added);
    showToast(added ? t('toast_added_count', { count: added, items }) : t('toast_all_selected'), added ? 'success' : '');
  });
  btnRandomize.addEventListener('click', () => {
    const pool = db.filter(c => !selectedSlots.includes(c));
    if (!pool.length) { showToast(t('toast_all_selected_already')); return; }
    const count = Math.min(5, pool.length);
    shuffle(pool);
    pushUndo();
    pool.slice(0, count).forEach(c => selectedSlots.push(c));
    updateUI();
    const items = getItemLabelForCount(count);
    showToast(t('toast_random_added', { count, items }), 'success');
  });

  // ── Preview navigation ──
  btnPrevPreview.addEventListener('click', navPrev);
  btnNextPreview.addEventListener('click', navNext);

  // ── Copy canvas to clipboard ──
  btnCopyCanvas.addEventListener('click', copyCanvasToClipboard);
  
  // ── Canvas zoom controls ──
  btnZoomIn.addEventListener('click', () => {
    canvasZoom = Math.min(canvasZoom + 0.25, 3);
    applyCanvasZoom();
  });
  btnZoomOut.addEventListener('click', () => {
    canvasZoom = Math.max(canvasZoom - 0.25, 0.5);
    applyCanvasZoom();
  });
  btnResetZoom.addEventListener('click', () => {
    canvasZoom = 1;
    applyCanvasZoom();
  });
  
  // ── Theme ──
  themeToggle.addEventListener('click', () => {
    isLightTheme = !isLightTheme; applyTheme();
    showToast(isLightTheme ? t('toast_theme_light') : t('toast_theme_dark'));
  });
  themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      themeToggle.click();
    }
  });

  // ── Sidebar toggle (hamburger menu) ──
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleSidebar);
  }

  // ── Sidebar backdrop click to close ──
  const sidebarBackdrop = document.querySelector('.sidebar-backdrop');
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', toggleSidebar);
  }

  // ── Export ──
  btnGenerate.addEventListener('click', generatePack);
  btnPreviewExport.addEventListener('click', showPreviewModal);
  btnPreviewAll.addEventListener('click', showPreviewModal);
  btnExportCSV.addEventListener('click', exportCSVOnly);
  if (btnShareLink) {
    btnShareLink.addEventListener('click', openShareModal);
  }

  // ── Save / Load roster ──
  btnSaveRoster.addEventListener('click', saveRoster);
  btnLoadRoster.addEventListener('change', loadRoster);

  // ── Modals ──
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  shortcutsClose.addEventListener('click', closeShortcuts);
  shortcutsBackdrop.addEventListener('click', closeShortcuts);
  if (helpClose) helpClose.addEventListener('click', closeHelpModal);
  if (helpBackdrop) helpBackdrop.addEventListener('click', closeHelpModal);
  if (confirmClose) confirmClose.addEventListener('click', closeConfirmModal);
  if (confirmBackdrop) confirmBackdrop.addEventListener('click', closeConfirmModal);
  if (confirmCancelBtn) confirmCancelBtn.addEventListener('click', closeConfirmModal);
  if (confirmAcceptBtn) {
    confirmAcceptBtn.addEventListener('click', () => {
      const action = pendingConfirm;
      closeConfirmModal();
      if (typeof action === 'function') action();
    });
  }
  if (shareClose) shareClose.addEventListener('click', closeShareModal);
  if (shareBackdrop) shareBackdrop.addEventListener('click', closeShareModal);
  if (btnShareClose) btnShareClose.addEventListener('click', closeShareModal);
  if (btnCopyShare) btnCopyShare.addEventListener('click', copyShareLink);
  if (btnOpenShare) btnOpenShare.addEventListener('click', openShareLinkInNewTab);
  if (btnNativeShare) btnNativeShare.addEventListener('click', nativeShareLink);
  if (shareLinkInput) shareLinkInput.addEventListener('click', () => shareLinkInput.select());
  btnShortcuts.addEventListener('click', () => {
    shortcutsModal.classList.remove('hidden');
    shortcutsModal.setAttribute('aria-modal', 'true');
    shortcutsModal.setAttribute('role', 'dialog');
    const focusable = shortcutsModal.querySelector('button');
    if (focusable) focusable.focus();
  });
  if (btnHelp) {
    btnHelp.addEventListener('click', openHelpModal);
  }
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      applyLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }

  // ── Search modal (mobile) ──
  if (searchToggleBtn) {
    searchToggleBtn.addEventListener('click', openSearchModal);
  }
  if (searchModalClose) {
    searchModalClose.addEventListener('click', closeSearchModal);
  }
  if (searchModalInput) {
    searchModalInput.addEventListener('input', updateSearchModalResults);
  }
  // ── Keyboard shortcuts ──
  document.addEventListener('keydown', handleKeyboard);

  // ── Stats ──
  updateStats();
  
  // ── Initial accessibility setup ──
  updateUndoButton();
  setupAccessibility();
  applyCanvasZoom();
}

// ─── ACCESSIBILITY SETUP ─────────────────────────────────────
function setupAccessibility() {
  // Add ARIA labels to position buttons
  const posLabels = currentLang === 'en'
    ? {
        'top-left': 'Top left',
        'top-center': 'Top center',
        'top-right': 'Top right',
        'center-left': 'Center left',
        'center': 'Center',
        'center-right': 'Center right',
        'bottom-left': 'Bottom left',
        'bottom-center': 'Bottom center',
        'bottom-right': 'Bottom right'
      }
    : {
        'top-left': 'Arriba izquierda',
        'top-center': 'Arriba centro',
        'top-right': 'Arriba derecha',
        'center-left': 'Centro izquierda',
        'center': 'Centro',
        'center-right': 'Centro derecha',
        'bottom-left': 'Abajo izquierda',
        'bottom-center': 'Abajo centro',
        'bottom-right': 'Abajo derecha'
      };
  
  posBtns.forEach(btn => {
    const pos = btn.dataset.pos;
    btn.setAttribute('aria-label', `Posición: ${posLabels[pos] || pos}`);
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', btn.classList.contains('selected') ? 'true' : 'false');
  });
  
  // Add ARIA labels to shape buttons
  const shapeLabels = currentLang === 'en'
    ? {
        'square': 'Square',
        'rounded': 'Rounded',
        'circle': 'Circle'
      }
    : {
        'square': 'Cuadrado',
        'rounded': 'Redondeado',
        'circle': 'Círculo'
      };
  
  shapeBtns.forEach(btn => {
    const shape = btn.dataset.shape;
    btn.setAttribute('aria-label', `Forma: ${shapeLabels[shape] || shape}`);
    btn.setAttribute('role', 'radio');
    btn.setAttribute('aria-checked', btn.classList.contains('selected') ? 'true' : 'false');
  });
  
  // Add ARIA labels to mobile navigation buttons
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  if (hamburgerBtn) {
    hamburgerBtn.setAttribute('aria-label', t('aria_open_menu'));
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }
  
  if (searchToggleBtn) {
    searchToggleBtn.setAttribute('aria-label', t('aria_open_search'));
  }
  
  // Add live region for toast
  toastEl.setAttribute('role', 'status');
  toastEl.setAttribute('aria-live', 'polite');
  toastEl.setAttribute('aria-atomic', 'true');
  
  // Add progress bar attributes
  progressContainer.setAttribute('role', 'progressbar');
  progressContainer.setAttribute('aria-valuemin', '0');
  progressContainer.setAttribute('aria-valuemax', '100');
}

// ─── KEYBOARD SHORTCUTS ──────────────────────────────────────
function handleKeyboard(e) {
  const tag = e.target.tagName;
  const inInput = tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA';

  // Global shortcuts (work even in inputs)
  if (e.key === 'Escape') {
    if (confirmModal && !confirmModal.classList.contains('hidden')) { closeConfirmModal(); return; }
    if (shareModal && !shareModal.classList.contains('hidden')) { closeShareModal(); return; }
    if (helpModal && !helpModal.classList.contains('hidden')) { closeHelpModal(); return; }
    closeModal();
    closeShortcuts();
    closeSearchModal();
    return;
  }

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
        showToast(t('toast_removed', { name: removed.name }), 'error');
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
  if (!selectedSlots.length) { showToast(t('toast_preview_empty')); return; }
  if (!canvas || typeof canvas.toBlob !== 'function') {
    showToast(t('toast_copy_not_supported'), 'error');
    return;
  }
  if (typeof ClipboardItem === 'undefined' || !navigator.clipboard || typeof navigator.clipboard.write !== 'function') {
    showToast(t('toast_copy_unavailable'), 'error');
    return;
  }
  try {
    canvas.toBlob(async blob => {
      const item = new ClipboardItem({ 'image/png': blob });
      await navigator.clipboard.write([item]);
      showToast(t('toast_copied_clipboard'), 'success');
    }, 'image/png');
  } catch(err) {
    showToast(t('toast_copy_error'), 'error');
  }
}

// ─── SAVE / LOAD ROSTER ──────────────────────────────────────
function applySettings(s) {
  if (!s) return;
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

function saveRoster() {
  if (!selectedSlots.length) { showToast(t('toast_nothing_to_save')); return; }
  const slotsToSave = [...selectedSlots];
  const data = {
    version: 1,
    mode: currentMode,
    slots: slotsToSave.map(c => c.iso || c.tag),
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
  showToast(t('toast_roster_saved', { count: slotsToSave.length, items: getItemLabelForCount(slotsToSave.length) }), 'success');
}

function loadRoster(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.slots || !Array.isArray(data.slots)) throw new Error('Formato inválido');
      const modeFromFile = data.mode === 'platforms' || data.mode === 'flags' ? data.mode : null;
      if (modeFromFile && modeFromFile !== currentMode) {
        setMode(modeFromFile, { skipConfirm: true, skipUndo: true, silent: true });
      }
      pushUndo();
      selectedSlots = [];
      const sources = modeFromFile === 'platforms'
        ? [platformsDB]
        : modeFromFile === 'flags'
          ? [db]
          : [db, platformsDB];
      data.slots.forEach(identifier => {
        const c = sources.map(source => source.find(x => x.iso === identifier || x.tag === identifier)).find(Boolean);
        if (c) selectedSlots.push(c);
      });
      // Restore settings
      applySettings(data.settings);
      currentPreviewIdx = selectedSlots.length > 0 ? 0 : -1;
      updateUI();
      showToast(t('toast_roster_loaded', { count: selectedSlots.length, items: getItemLabelForCount(selectedSlots.length) }), 'success');
    } catch(err) {
      showToast(t('toast_file_load_error'), 'error');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

function applySharedData(data) {
  if (!data || !Array.isArray(data.slots)) return false;
  const modeFromData = data.mode === 'platforms' || data.mode === 'flags' ? data.mode : currentMode;
  if (modeFromData !== currentMode) {
    setMode(modeFromData, { skipConfirm: true, skipUndo: true, silent: true });
  }
  selectedSlots = [];
  const sources = modeFromData === 'platforms' ? [platformsDB] : [db];
  data.slots.forEach(identifier => {
    const c = sources.map(source => source.find(x => x.iso === identifier || x.tag === identifier)).find(Boolean);
    if (c) selectedSlots.push(c);
  });
  applySettings(data.settings);
  currentPreviewIdx = selectedSlots.length > 0 ? 0 : -1;
  updateUI();
  return true;
}

function loadShareFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const shareParam = params.get('share');
    if (!shareParam) return;
    const data = decodeShareData(shareParam);
    const ok = applySharedData(data);
    if (ok) showToast(t('toast_share_loaded'), 'success');
  } catch (err) {
    console.error('Share link error', err);
    showToast(t('toast_share_invalid'), 'error');
  }
}

// ─── FILTER / SORT ───────────────────────────────────────────
function processFilter(countries) {
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  return countries.filter(c => {
    // Different search fields for flags vs platforms
    const searchFields = currentMode === 'flags'
      ? [c.name, c.iso, c.tag]
      : [c.name, c.tag, c.category];
    
    const matchSearch = !q || searchFields.some(field => 
      field && field.toLowerCase().includes(q)
    );
    let matchTag = true;
    
    if (currentMode === 'flags') {
      switch (currentFilter) {
        case 'top':      matchTag = c.filters.includes('top'); break;
        case 'esports':  matchTag = c.filters.includes('esports'); break;
        case 'iconic':   matchTag = c.filters.includes('iconic'); break;
        case 'hispanos': matchTag = c.filters.includes('Habla Hispana'); break;
        case 'america':  matchTag = c.filters.includes('América'); break;
        case 'europa':   matchTag = c.filters.includes('Europa'); break;
        case 'asia':     matchTag = c.filters.includes('Asia'); break;
        case 'africa':
          matchTag = c.filters.some(f => {
            const lf = f.toLowerCase();
            return lf.includes('afric') || f === 'África';
          });
          break;
        case 'oceania':  matchTag = c.filters.some(f => f.toLowerCase().startsWith('ocean')); break;
      }
    } else {
      // Platforms mode
      switch (currentFilter) {
        case 'top':      matchTag = c.filters.includes('top'); break;
        case 'social':   matchTag = c.category === 'Social'; break;
        case 'streaming': matchTag = c.category === 'Streaming'; break;
        case 'gaming':   matchTag = c.category === 'Gaming'; break;
        case 'tech':     matchTag = c.category === 'Tech'; break;
        case 'dev':      matchTag = c.category === 'Dev'; break;
        case 'music':    matchTag = c.category === 'Música'; break;
        case 'ecommerce': matchTag = c.category === 'E-commerce'; break;
        case 'payments': matchTag = c.category === 'Pagos'; break;
        case 'productivity': matchTag = c.category === 'Productividad'; break;
        case 'design':   matchTag = c.category === 'Diseño'; break;
        case 'education': matchTag = c.category === 'Educación'; break;
        case 'communication': matchTag = c.category === 'Comunicación'; break;
      }
    }
    return matchSearch && matchTag;
  });
}

function getSorted(arr) {
  const sortMode = sortSelect ? sortSelect.value : 'alpha';
  return [...arr].sort((a, b) => {
    if (sortMode === 'alpha')      return a.name.localeCompare(b.name);
    if (sortMode === 'alpha-desc') return b.name.localeCompare(a.name);
    if (sortMode === 'iso')        return a.tag.localeCompare(b.tag);
    return 0;
  });
}

function getFiltered() { return processFilter(getSorted(currentDB)); }

// ─── RENDER LIBRARY ──────────────────────────────────────────
function renderLibrary() {
  availableList.innerHTML = '';
  const filtered = getFiltered();
  visibleCount.textContent = filtered.length;
  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';

  if (!filtered.length) {
    const searchLabel = searchInput && searchInput.value ? searchInput.value : currentFilter;
    const empty = document.createElement('div');
    empty.style.cssText = 'color:var(--text-muted);font-size:.82rem;padding:20px;text-align:center;';
    empty.textContent = t('search_no_results', { query: searchLabel });
    availableList.appendChild(empty);
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

    // Different rendering for flags vs platforms
    if (currentMode === 'flags') {
      const isSquare = currentFlagStyle === 'square';
      const flagUrl = getFlagUrl(c, 80);
      const fallbackUrl = `https://flagcdn.com/w80/${c.iso}.png`;
      const onError = isSquare
        ? `this.onerror=null; this.src='${fallbackUrl}'`
        : `this.src='${getFlagUrl(c, 40)}'`;

      div.innerHTML = `
        <img class="flag-img${isSquare ? ' square-style' : ''}" src="${flagUrl}" loading="lazy" alt="${c.name}"
             onerror="${onError}">
        <div class="item-name" title="${c.name}">${displayName}</div>
        <div class="item-tag">${c.iso.toUpperCase()}</div>
      `;
      div.setAttribute('data-tooltip', `${c.tag} • ${c.filters.filter(f => f !== 'top').join(', ')}`);
    } else {
      // Platforms mode - use logo with fallback to colored square with initial
      const initial = c.name.charAt(0).toUpperCase();
      const logo = getPlatformLogoUrl(c);
      div.innerHTML = `
        <img class="flag-img platform-logo" src="${logo.primary}" data-fallback="${logo.fallback}" loading="lazy" alt="${c.name}"
             style="background: ${c.color}; padding: 4px;"
             onerror="this.onerror=null; if (this.dataset.fallback) { this.src=this.dataset.fallback; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }">
        <div class="platform-fallback" style="display:none; width:26px; height:18px; background:${c.color}; border-radius:3px; flex-shrink:0; align-items:center; justify-content:center; font-size:0.7rem; font-weight:700; color:white;">${initial}</div>
        <div class="item-name" title="${c.name}">${displayName}</div>
        <div class="item-tag">${c.category}</div>
      `;
      div.setAttribute('data-tooltip', `${c.tag} • ${c.category}`);
    }
    
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', isSelected ? '-1' : '0');
    div.setAttribute('aria-label', `${c.name} - ${isSelected ? t('aria_item_selected') : t('aria_item_add')}`);
    
    if (!isSelected) {
      div.addEventListener('click', () => {
        // Check for duplicates
        if (selectedSlots.includes(c)) {
          showToast(t('toast_already_selected', { name: c.name }), 'error');
          return;
        }
        pushUndo();
        selectedSlots.push(c);
        currentPreviewIdx = selectedSlots.length - 1;
        updateUI();
        updatePreview(c, currentPreviewIdx + getStartNum());
        showToast(t('toast_added_item', { name: c.name }), 'success');
        
        // Auto-close drawer on mobile when country is selected
        const device = detectDevice();
        if (device === 'mobile') {
          const sidebar = document.querySelector('.sidebar');
          const backdrop = document.querySelector('.sidebar-backdrop');
          if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            if (backdrop) {
              backdrop.classList.remove('visible');
            }
          }
        }
      });
      div.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          div.click();
        }
      });
    }
    frag.appendChild(div);
  });
  availableList.appendChild(frag);
  
  // Lazy load images in viewport
  if ('IntersectionObserver' in window) {
    const images = availableList.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.src; // Trigger load
          imageObserver.unobserve(img);
        }
      });
    }, { rootMargin: '50px' });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  if (window.lucide) lucide.createIcons({ nodes: [...availableList.querySelectorAll('[data-lucide]')] });
}

// ─── RENDER ROSTER ───────────────────────────────────────────
function renderRoster() {
  selectedList.innerHTML = '';
  if (!selectedSlots.length) {
    const itemsLabel = getItemLabels().plural;
    const itemLabel = getItemLabels().singular;
    selectedList.innerHTML = `
      <div class="empty-roster">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="opacity:.2;color:var(--text-muted)"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
        <div class="empty-title">${t('empty_roster_title', { items: itemsLabel })}</div>
        <div class="empty-sub">${t('empty_roster_sub', { item: itemLabel })}</div>
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
    
    // Different rendering for flags vs platforms
    let imgHtml = '';
    if (currentMode === 'flags') {
      const isSquare = currentFlagStyle === 'square';
      const flagUrl = getFlagUrl(c, 80);
      const fallbackUrl = `https://flagcdn.com/w80/${c.iso}.png`;
      const onError = isSquare
        ? `this.onerror=null; this.src='${fallbackUrl}'`
        : `this.src='${getFlagUrl(c, 40)}'`;
      imgHtml = `<img class="flag-img${isSquare ? ' square-style' : ''}" src="${flagUrl}" alt="${c.name}" onerror="${onError}">`;
    } else {
      const initial = c.name.charAt(0).toUpperCase();
      const logo = getPlatformLogoUrl(c);
      imgHtml = `<img class="flag-img platform-logo" 
           src="${logo.primary}" data-fallback="${logo.fallback}"
           alt="${c.name}"
           onerror="this.onerror=null; if (this.dataset.fallback) { this.src=this.dataset.fallback; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }">
      <div class="platform-fallback" style="display:none; width:26px; height:18px; background:${c.color}; border-radius:3px; flex-shrink:0; align-items:center; justify-content:center; font-size:0.7rem; font-weight:700; color:white;">${initial}</div>`;
    }
    
    div.innerHTML = `
      <span class="drag-handle" title="Arrastrar para reordenar">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>
      </span>
      <div class="slot-num">${num}</div>
      ${imgHtml}
      <div class="item-name">${c.name}</div>
      <div class="item-tag">${currentMode === 'flags' ? c.iso.toUpperCase() : c.category}</div>
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
      showToast(t('toast_removed', { name: removed.name }), 'error');
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
  if (btnShareLink)     btnShareLink.disabled     = dis;
  saveSession();
  refreshPreview();
}

function saveSession() {
  try {
    const payload = {
      mode: currentMode,
      slots: selectedSlots.map(c => c.iso || c.tag)
    };
    sessionStorage.setItem('flagforge_slots', JSON.stringify(payload));
  } catch(e) {}
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
  posBtns.forEach(b => {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });
  const active = document.querySelector(`.pos-btn[data-pos="${pos}"]`);
  if (active) {
    active.classList.add('selected');
    active.setAttribute('aria-checked', 'true');
  }
  refreshPreview();
}

function initShapeBtns() {
  shapeBtns.forEach(btn => {
    btn.addEventListener('click', () => setShape(btn.dataset.shape));
  });
}

function setShape(shape) {
  currentShape = shape;
  shapeBtns.forEach(b => {
    b.classList.remove('selected');
    b.setAttribute('aria-checked', 'false');
  });
  const active = document.querySelector(`.shape-btn[data-shape="${shape}"]`);
  if (active) {
    active.classList.add('selected');
    active.setAttribute('aria-checked', 'true');
  }
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
function drawFlagContain(context, img, S, item) {
  // Fill background first
  if (!bgTransparent.checked) {
    const usePlatformColor = currentMode === 'platforms' && item && item.color;
    context.fillStyle = usePlatformColor ? item.color : (bgColorInput.value || '#000000');
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

  const cacheKey = `${country.iso || country.tag || country.id}_${S}_${currentMode}_${currentFlagStyle}`;
  
  // Check cache first (without style in key since URL is the same)
  if (imageCache.has(cacheKey)) {
    const img = imageCache.get(cacheKey);
    ctx.clearRect(0, 0, S, S);
    
    // Apply flag style effects
    applyFlagStyleToCanvas(ctx, img, S, country);
    
    drawBadgeOnCanvas(ctx, String(number), S);
    return;
  }

  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  let fallbackSrc = null;
  if (currentMode === 'platforms') {
    const logo = getPlatformLogoUrl(country);
    img.src = logo.primary;
    fallbackSrc = logo.fallback || null;
  } else {
    // Get flag URL based on current style
    img.src = getFlagUrl(country, 320);
  }
  
  img.onload = () => {
    // Add to cache
    if (imageCache.size >= CONFIG.IMAGE_CACHE_SIZE) {
      const firstKey = imageCache.keys().next().value;
      imageCache.delete(firstKey);
    }
    imageCache.set(cacheKey, img);
    
    ctx.clearRect(0, 0, S, S);
    
    // Apply flag style effects
    applyFlagStyleToCanvas(ctx, img, S, country);
    
    drawBadgeOnCanvas(ctx, String(number), S);
  };
  img.onerror = () => {
    if (fallbackSrc && img.src !== fallbackSrc) {
      img.src = fallbackSrc;
      return;
    }
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
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', `${c.name}, número ${num}`);
    
    // Different image source for flags vs platforms with fallback
    let imgHtml = '';
    if (currentMode === 'flags') {
      const isSquare = currentFlagStyle === 'square';
      const flagUrl = getFlagUrl(c, 80);
      const fallbackUrl = `https://flagcdn.com/w80/${c.iso}.png`;
      const onError = isSquare
        ? `this.onerror=null; this.src='${fallbackUrl}'`
        : `this.src='https://flagcdn.com/w40/${c.iso}.png'`;
      imgHtml = `<img class="${isSquare ? 'square-style' : ''}" src="${flagUrl}" alt="${c.name}" loading="lazy" onerror="${onError}">`;
    } else {
      const initial = c.name.charAt(0).toUpperCase();
      const logo = getPlatformLogoUrl(c);
      imgHtml = `<img class="platform-logo" 
           style="background: ${c.color}; padding: 4px;"
           src="${logo.primary}" data-fallback="${logo.fallback}" alt="${c.name}" loading="lazy"
           onerror="this.onerror=null; if (this.dataset.fallback) { this.src=this.dataset.fallback; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }">
      <div class="platform-fallback" style="display:none; width:56px; height:38px; background:${c.color}; border-radius:4px; flex-shrink:0; align-items:center; justify-content:center; font-size:1.2rem; font-weight:700; color:white;">${initial}</div>`;
    }
    
    div.innerHTML = `
      ${imgHtml}
      <div class="modal-num">${num}</div>
      <div class="modal-name">${c.name}</div>
    `;
    div.addEventListener('click', () => {
      currentPreviewIdx = i;
      refreshPreview(); renderRoster(); closeModal();
    });
    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        div.click();
      }
    });
    frag.appendChild(div);
  });
  modalGrid.innerHTML = '';
  modalGrid.appendChild(frag);
  previewModal.classList.remove('hidden');
  previewModal.setAttribute('aria-modal', 'true');
  previewModal.setAttribute('role', 'dialog');
  document.body.style.overflow = 'hidden';
  
  // Focus trap
  const focusableElements = previewModal.querySelectorAll('button, [tabindex="0"]');
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

function closeModal() {
  previewModal.classList.add('hidden');
  previewModal.removeAttribute('aria-modal');
  previewModal.removeAttribute('role');
  document.body.style.overflow = '';
}
function closeShortcuts() {
  shortcutsModal.classList.add('hidden');
  shortcutsModal.removeAttribute('aria-modal');
  shortcutsModal.removeAttribute('role');
}

// ─── EXPORT CSV ONLY ─────────────────────────────────────────
function exportCSVOnly() {
  if (!selectedSlots.length) return;
  const rows = ['TeamNumber,TeamName,TeamShortName,ImageFileName,TeamColor'];
  selectedSlots.forEach((c, i) => {
    const num  = i + getStartNum();
    const cleanName = sanitizeFilename(c.name);
    const file = `${num}-${cleanName}.png`;
    const color = c.color.replace('#', '') + 'FF';
    const tag = c.tag || c.iso.toUpperCase();
    rows.push(`${num},${c.name},${tag},${file},${color}`);
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'TeamInfo.csv';
  a.click();
  showToast(t('toast_csv_downloaded'), 'success');
}

// ─── GENERATE PACK ───────────────────────────────────────────
async function generatePack() {
  btnGenerate.disabled = true;
  progressContainer.classList.remove('hidden');
  progressContainer.setAttribute('role', 'status');
  progressContainer.setAttribute('aria-live', 'polite');

  try {
    const zip          = new JSZip();
    const observerFolder = zip.folder('Observer');
    const iconFolder   = observerFolder.folder('TeamIcon');
    const EXPORT_SIZE  = parseInt(exportSizeInput.value, 10) || CONFIG.DEFAULT_EXPORT_SIZE;
    const startNum     = getStartNum();
    const csvRows      = ['TeamNumber,TeamName,TeamShortName,ImageFileName,TeamColor'];

    const gCanvas = document.createElement('canvas');
    gCanvas.width = gCanvas.height = EXPORT_SIZE;
    const gCtx = gCanvas.getContext('2d');

    for (let i = 0; i < selectedSlots.length; i++) {
      const c   = selectedSlots[i];
      const num = i + startNum;
      const pct = Math.round((i / selectedSlots.length) * 100);

      progressText.textContent    = t('progress_generating_item', { current: i + 1, total: selectedSlots.length, name: c.name });
      progressPercent.textContent = `${pct}%`;
      progressFill.style.width    = pct + '%';
      progressContainer.setAttribute('aria-valuenow', pct);

      const cleanName = sanitizeFilename(c.name);
      const fileName  = `${num}-${cleanName}.png`;
      const color = c.color.replace('#', '') + 'FF';
      const tag = c.tag || c.iso.toUpperCase();
      csvRows.push(`${num},${c.name},${tag},${fileName},${color}`);

      const blob = await fetchImageAndDraw(c, num, gCanvas, gCtx, EXPORT_SIZE);
      if (blob) iconFolder.file(fileName, blob, { binary: true });
    }

    if (includeCSV.checked)     observerFolder.file('TeamInfo.csv', csvRows.join('\n'));
    if (includeInstall.checked) zip.file('instalar.bat', generateBat());
    if (includePreview.checked) zip.file('preview.html', generatePreviewHtml());

    progressText.textContent    = t('progress_packaging');
    progressPercent.textContent = '100%';
    progressFill.style.width    = '100%';
    progressContainer.setAttribute('aria-valuenow', '100');

    const content = await zip.generateAsync({ type: 'blob' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(content);
    a.download = 'RosterBanderas_FlagForge.zip';
    a.click();
    showToast(t('toast_export_done', { count: selectedSlots.length, items: getItemLabelForCount(selectedSlots.length) }), 'success');
    
    setTimeout(() => {
      progressContainer.classList.add('hidden');
      progressFill.style.width = '0%';
      progressPercent.textContent = '0%';
      progressContainer.removeAttribute('aria-valuenow');
      btnGenerate.disabled = false;
    }, 3000);
  } catch (error) {
    console.error('Error generando pack:', error);
    showToast(t('toast_export_error'), 'error');
    progressContainer.classList.add('hidden');
    btnGenerate.disabled = false;
  }
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
  const items = selectedSlots.map((c,i) => {
    const imgSrc = currentMode === 'flags'
      ? `https://flagcdn.com/w80/${c.iso}.png`
      : getPlatformLogoUrl(c).primary;
    const imgStyle = currentMode === 'platforms'
      ? ` style="background:${c.color};padding:6px;border-radius:6px;"`
      : '';
    return `<div class="item"><img src="${imgSrc}"${imgStyle}><span class="n">${i+startNum}</span><span class="nm">${c.name}</span></div>`;
  }).join('');
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Preview FlagForge</title><style>body{background:#0d1117;color:#e6edf3;font-family:system-ui;display:flex;flex-wrap:wrap;gap:10px;padding:20px;}.item{display:flex;flex-direction:column;align-items:center;gap:4px;background:#1c2128;border:1px solid #30363d;border-radius:8px;padding:10px;width:120px;}img{width:80px;height:54px;object-fit:contain;border-radius:4px;background:#000;}.n{font-weight:800;color:#2f81f7;font-size:1.1rem;}.nm{font-size:.7rem;color:#8b949e;text-align:center;}</style></head><body>${items}</body></html>`;
}

// ─── FETCH + DRAW (for export) ───────────────────────────────
function fetchImageAndDraw(item, number, can, ctx2d, S) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    let fallbackSrc = null;
    if (currentMode === 'platforms') {
      const logo = getPlatformLogoUrl(item);
      img.src = logo.primary;
      fallbackSrc = logo.fallback || null;
    } else {
      // Get flag URL based on current style
      img.src = getFlagUrl(item, 320);
    }
    
    img.onload = () => {
      ctx2d.clearRect(0, 0, S, S);
      
      // Apply flag style effects using the same function as preview
      applyFlagStyleToCanvas(ctx2d, img, S, item);
      
      if (showNumber.checked) drawBadgeOnCanvas(ctx2d, String(number), S);
      can.toBlob(blob => resolve(blob), 'image/png');
    };
    img.onerror = () => {
      if (fallbackSrc && img.src !== fallbackSrc) {
        img.src = fallbackSrc;
        return;
      }
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
let searchDebounceTimer2 = null;

function updateSearchDropdown() {
  if (!searchInput || !searchDropdown || !searchDropdownList || !searchResultCount) return;

  clearTimeout(searchDebounceTimer2);
  searchDebounceTimer2 = setTimeout(() => {
    const q = searchInput.value.toLowerCase().trim();
    if (!q) { closeSearchDropdown(); searchResultCount.textContent = ''; return; }

    // Search across name, tag, and filters/category
    const results = currentDB.filter(c => {
      return c.name.toLowerCase().includes(q)
          || c.tag.toLowerCase().includes(q)
          || (currentMode === 'flags' && c.filters.some(f => f.toLowerCase().includes(q)))
          || (currentMode === 'platforms' && c.category.toLowerCase().includes(q));
    }).slice(0, 8);

    searchResultCount.textContent = results.length > 0 ? results.length : '';
    searchDropdownIdx = -1;

    if (!results.length) {
      searchDropdownList.innerHTML = '';
      const empty = document.createElement('div');
      empty.className = 'search-dropdown-empty';
      empty.textContent = t('search_no_results', { query: searchInput.value });
      searchDropdownList.appendChild(empty);
      searchDropdown.classList.remove('hidden');
      return;
    }

    const frag = document.createDocumentFragment();
    results.forEach((c, i) => {
      const isSelected = selectedSlots.includes(c);
      const div = document.createElement('div');
      div.className = 'search-dropdown-item';
      div.dataset.idx = i;
      div.setAttribute('role', 'option');
      div.setAttribute('aria-selected', 'false');

      // Highlight match in name
      let dn = c.name;
      const nameIdx = c.name.toLowerCase().indexOf(q);
      if (nameIdx >= 0) {
        dn = c.name.slice(0, nameIdx)
          + `<mark style="background:var(--primary-dim);color:var(--primary);border-radius:2px;">${c.name.slice(nameIdx, nameIdx + q.length)}</mark>`
          + c.name.slice(nameIdx + q.length);
      }

      const continent = currentMode === 'flags' 
        ? c.filters.filter(f => f !== 'top').join(', ')
        : c.category;
      
      const tagDisplay = currentMode === 'flags' ? c.iso.toUpperCase() : c.category;
      
      let imgHtml = '';
      if (currentMode === 'flags') {
        const isSquare = currentFlagStyle === 'square';
        const flagUrl = getFlagUrl(c, 80);
        const fallbackUrl = `https://flagcdn.com/w80/${c.iso}.png`;
        const onError = isSquare
          ? `this.onerror=null; this.src='${fallbackUrl}'`
          : `this.src='https://flagcdn.com/w40/${c.iso}.png'`;
        imgHtml = `<img class="dd-flag${isSquare ? ' square-style' : ''}" src="${flagUrl}" alt="${c.name}" onerror="${onError}">`;
      } else {
        const initial = c.name.charAt(0).toUpperCase();
        const logo = getPlatformLogoUrl(c);
        imgHtml = `<img class="dd-flag platform-logo" 
             style="background: ${c.color}; padding: 4px;"
             src="${logo.primary}" data-fallback="${logo.fallback}" alt="${c.name}"
             onerror="this.onerror=null; if (this.dataset.fallback) { this.src=this.dataset.fallback; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }">
        <div class="platform-fallback" style="display:none; width:32px; height:22px; background:${c.color}; border-radius:3px; flex-shrink:0; align-items:center; justify-content:center; font-size:0.75rem; font-weight:700; color:white;">${initial}</div>`;
      }
      
      div.innerHTML = `
        ${imgHtml}
        <div class="dd-info">
          <div class="dd-name">${dn}</div>
          <div class="dd-meta">
            <span class="dd-iso">${tagDisplay}</span>
            <span class="dd-continent">${continent}</span>
          </div>
        </div>
        ${isSelected ? '<span class="dd-added">Agregado</span>' : ''}
      `;
      if (!isSelected) {
        div.addEventListener('click', () => {
          // Check for duplicates
          if (selectedSlots.includes(c)) {
            showToast(t('toast_already_selected', { name: c.name }), 'error');
            return;
          }
          pushUndo();
          selectedSlots.push(c);
          currentPreviewIdx = selectedSlots.length - 1;
          updateUI();
          updatePreview(c, currentPreviewIdx + getStartNum());
          showToast(t('toast_added_item', { name: c.name }), 'success');
          updateSearchDropdown();
          
          // Auto-close drawer on mobile when country is selected
          const device = detectDevice();
          if (device === 'mobile') {
            const sidebar = document.querySelector('.sidebar');
            const backdrop = document.querySelector('.sidebar-backdrop');
            if (sidebar && sidebar.classList.contains('open')) {
              sidebar.classList.remove('open');
              if (backdrop) {
                backdrop.classList.remove('visible');
              }
            }
          }
        });
      }
      frag.appendChild(div);
    });
    searchDropdownList.innerHTML = '';
    searchDropdownList.appendChild(frag);
    searchDropdown.classList.remove('hidden');
    searchDropdown.setAttribute('role', 'listbox');
  }, 150); // Debounce dropdown updates
}

function closeSearchDropdown() {
  searchDropdown.classList.add('hidden');
  searchDropdown.removeAttribute('role');
  searchDropdownIdx = -1;
}

function handleSearchKeydown(e) {
  if (searchDropdown.classList.contains('hidden')) return;
  const items = searchDropdownList.querySelectorAll('.search-dropdown-item');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    searchDropdownIdx = Math.min(searchDropdownIdx + 1, items.length - 1);
    items.forEach((it, i) => {
      const isActive = i === searchDropdownIdx;
      it.classList.toggle('active', isActive);
      it.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    items[searchDropdownIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    searchDropdownIdx = Math.max(searchDropdownIdx - 1, 0);
    items.forEach((it, i) => {
      const isActive = i === searchDropdownIdx;
      it.classList.toggle('active', isActive);
      it.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    items[searchDropdownIdx]?.scrollIntoView({ block: 'nearest' });
  } else if (e.key === 'Enter' && searchDropdownIdx >= 0) {
    e.preventDefault();
    items[searchDropdownIdx]?.click();
  } else if (e.key === 'Escape') {
    closeSearchDropdown();
    searchInput.blur();
  }
}

// ─── SEARCH MODAL (MOBILE) ───────────────────────────────────────
let searchModalDebounceTimer = null;
let searchModalFocusTrap = null;
let searchModalLastFocusedElement = null;

function openSearchModal() {
  if (!searchModal) return;
  
  // Store the element that had focus before opening
  searchModalLastFocusedElement = document.activeElement;
  
  searchModal.classList.remove('hidden');
  searchModal.setAttribute('aria-modal', 'true');
  searchModal.setAttribute('role', 'dialog');
  document.body.style.overflow = 'hidden';
  
  // Focus input after a short delay to ensure modal is visible
  setTimeout(() => {
    if (searchModalInput) {
      searchModalInput.focus();
    }
  }, 100);
  
  // Setup focus trap
  setupSearchModalFocusTrap();
}

function closeSearchModal() {
  if (!searchModal) return;
  
  searchModal.classList.add('hidden');
  searchModal.removeAttribute('aria-modal');
  searchModal.removeAttribute('role');
  document.body.style.overflow = '';
  
  // Clear search input and results
  if (searchModalInput) {
    searchModalInput.value = '';
  }
  if (searchModalResults) {
    searchModalResults.innerHTML = '';
  }
  
  // Remove focus trap
  removeSearchModalFocusTrap();
  
  // Return focus to the element that opened the modal
  if (searchModalLastFocusedElement) {
    searchModalLastFocusedElement.focus();
    searchModalLastFocusedElement = null;
  }
}

function setupSearchModalFocusTrap() {
  if (!searchModal) return;
  
  // Store the trap handler
  searchModalFocusTrap = (e) => {
    // Handle Escape key to close modal
    if (e.key === 'Escape') {
      closeSearchModal();
      return;
    }
    
    if (e.key !== 'Tab') return;
    
    // Get all focusable elements in the modal (recalculate each time for dynamic content)
    const focusableElements = searchModal.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };
  
  searchModal.addEventListener('keydown', searchModalFocusTrap);
}

function removeSearchModalFocusTrap() {
  if (searchModal && searchModalFocusTrap) {
    searchModal.removeEventListener('keydown', searchModalFocusTrap);
    searchModalFocusTrap = null;
  }
}

function updateSearchModalResults() {
  if (!searchModalInput || !searchModalResults) return;
  
  clearTimeout(searchModalDebounceTimer);
  searchModalDebounceTimer = setTimeout(() => {
    const q = searchModalInput.value.toLowerCase().trim();
    
    if (!q) {
      searchModalResults.innerHTML = '';
      return;
    }
    
    // Search across name, tag, and filters/category
    const results = currentDB.filter(c => {
      return c.name.toLowerCase().includes(q)
          || c.tag.toLowerCase().includes(q)
          || (currentMode === 'flags' && c.filters.some(f => f.toLowerCase().includes(q)))
          || (currentMode === 'platforms' && c.category.toLowerCase().includes(q));
    }).slice(0, 20); // Show more results in modal
    
    if (!results.length) {
      searchModalResults.innerHTML = '';
      const empty = document.createElement('div');
      empty.style.cssText = 'color:var(--text-muted);font-size:.9rem;padding:40px 20px;text-align:center;';
      empty.textContent = t('search_no_results', { query: searchModalInput.value });
      searchModalResults.appendChild(empty);
      return;
    }
    
    const frag = document.createDocumentFragment();
    results.forEach((c) => {
      const isSelected = selectedSlots.includes(c);
      const div = document.createElement('div');
      div.className = `item-card ${isSelected ? 'selected' : ''}`;
      
      // Highlight match in name
      let displayName = c.name;
      const nameIdx = c.name.toLowerCase().indexOf(q);
      if (nameIdx >= 0) {
        displayName = c.name.slice(0, nameIdx)
          + `<mark style="background:var(--primary-dim);color:var(--primary);border-radius:2px;">${c.name.slice(nameIdx, nameIdx + q.length)}</mark>`
          + c.name.slice(nameIdx + q.length);
      }
      
      // Different rendering for flags vs platforms
      if (currentMode === 'flags') {
        const isSquare = currentFlagStyle === 'square';
        const flagUrl = getFlagUrl(c, 80);
        const fallbackUrl = `https://flagcdn.com/w80/${c.iso}.png`;
        const onError = isSquare
          ? `this.onerror=null; this.src='${fallbackUrl}'`
          : `this.src='https://flagcdn.com/w40/${c.iso}.png'`;
        const imgHtml = `<img class="flag-img${isSquare ? ' square-style' : ''}" src="${flagUrl}" loading="lazy" alt="${c.name}" onerror="${onError}">`;

        div.innerHTML = `
          ${imgHtml}
          <div class="item-name" title="${c.name}">${displayName}</div>
          <div class="item-tag">${c.iso.toUpperCase()}</div>
        `;
      } else {
        const initial = c.name.charAt(0).toUpperCase();
        const logo = getPlatformLogoUrl(c);
        div.innerHTML = `
          <img class="flag-img platform-logo" src="${logo.primary}" data-fallback="${logo.fallback}" loading="lazy" alt="${c.name}"
               style="background: ${c.color}; padding: 4px;"
               onerror="this.onerror=null; if (this.dataset.fallback) { this.src=this.dataset.fallback; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }">
          <div class="platform-fallback" style="display:none; width:26px; height:18px; background:${c.color}; border-radius:3px; flex-shrink:0; align-items:center; justify-content:center; font-size:0.7rem; font-weight:700; color:white;">${initial}</div>
          <div class="item-name" title="${c.name}">${displayName}</div>
          <div class="item-tag">${c.category}</div>
        `;
      }
      
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', isSelected ? '-1' : '0');
      div.setAttribute('aria-label', `${c.name} - ${isSelected ? t('aria_item_selected') : t('aria_item_add')}`);
      
      if (!isSelected) {
        div.addEventListener('click', () => {
          // Check for duplicates
          if (selectedSlots.includes(c)) {
            showToast(t('toast_already_selected', { name: c.name }), 'error');
            return;
          }
          pushUndo();
          selectedSlots.push(c);
          currentPreviewIdx = selectedSlots.length - 1;
          updateUI();
          updatePreview(c, currentPreviewIdx + getStartNum());
          showToast(t('toast_added_item', { name: c.name }), 'success');
          
          // Close modal automatically after selection
          closeSearchModal();
        });
        
        div.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            div.click();
          }
        });
      }
      
      frag.appendChild(div);
    });
    
    searchModalResults.innerHTML = '';
    searchModalResults.appendChild(frag);
    
    // Re-create icons
    if (window.lucide) {
      lucide.createIcons({ nodes: [...searchModalResults.querySelectorAll('[data-lucide]')] });
    }
  }, 300); // Debounce search
}

// ─── PRESETS ────────────────────────────────────────────────────────
const PRESETS = {
  gaming: {
    size: 70, stroke: 14, numberColor: '#00FF88', strokeColor: '#1a1a2e',
    bgColor: '#0d0d1a', bgTransparent: false, shape: 'rounded', position: 'bottom-right',
    font: 'Impact', showNumber: true, squareFlag: true
  },
  esports: {
    size: 65, stroke: 12, numberColor: '#FFFFFF', strokeColor: '#000000',
    bgColor: '#000000', bgTransparent: false, shape: 'square', position: 'bottom-right',
    font: 'Bebas Neue', showNumber: true, squareFlag: true
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
    font: 'Bungee', showNumber: true, squareFlag: false
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
  shadowOptionsRow.hidden = true;
  customText.value = '';

  presetChips.forEach(c => c.classList.remove('active'));
  const active = document.querySelector(`.preset-chip[data-preset="${name}"]`);
  if (active) active.classList.add('active');

  refreshPreview();
  showToast(t('toast_preset_applied', { name: name.charAt(0).toUpperCase() + name.slice(1) }), 'success');
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
  shadowOptionsRow.hidden = true;
  shadowColor.value = '#000000';
  setShape('square');
  setPosition('bottom-right');
  presetChips.forEach(c => c.classList.remove('active'));
  presetBtns.forEach(b => b.classList.remove('active'));

  refreshPreview();
  showToast(t('toast_settings_reset'), 'success');
}

// ─── GRID/LIST VIEW ───────────────────────────────────────────────
function setView(mode) {
  currentView = mode;
  availableList.classList.toggle('grid-view', mode === 'grid');
  btnListView.classList.toggle('active', mode === 'list');
  btnGridView.classList.toggle('active', mode === 'grid');
}

function requestModeChange(mode) {
  if (currentMode === mode) return;
  if (!selectedSlots.length) {
    setMode(mode, { skipConfirm: true });
    return;
  }
  openConfirmModal({
    message: t('confirm_mode_change', { mode: getModeLabel(mode) }),
    confirmText: t('confirm_change_btn'),
    cancelText: t('confirm_cancel'),
    onConfirm: () => setMode(mode, { skipConfirm: true })
  });
}

// ─── MODE TOGGLE (FLAGS/PLATFORMS) ────────────────────────────────
function setMode(mode, options = {}) {
  const { skipConfirm = false, skipUndo = false, silent = false } = options;
  if (currentMode === mode) return;
  
  currentMode = mode;
  currentDB = mode === 'flags' ? db : (platformsDBFiltered || platformsDB);
  
  // Update UI
  btnFlagsMode.classList.toggle('active', mode === 'flags');
  btnPlatformsMode.classList.toggle('active', mode === 'platforms');
  
  // Update labels
  updateModeLabels();
  const flagStyleSection = document.querySelector('.flag-style-selector');
  if (flagStyleSection) {
    flagStyleSection.style.display = mode === 'flags' ? '' : 'none';
  }
  syncModeUIStrings();
  document.documentElement.classList.toggle('platforms-mode', mode === 'platforms');
  document.body.classList.toggle('platforms-mode', mode === 'platforms');
  if (mode === 'platforms') {
    bgColorInput.value = '#000000';
    bgTransparent.checked = false;
  }
  
  if (!skipUndo) pushUndo();
  selectedSlots = [];
  currentPreviewIdx = -1;
  currentFilter = 'all';
  imageCache.clear();
  
  // Update filters
  updateFiltersForMode();
  
  if (mode === 'platforms' && !platformsDBFiltered) {
    currentDB = [];
  }

  // Refresh
  updateUI();
  updateStats();
  if (mode === 'platforms') {
    if (!platformsDBFiltered) {
      showToast(t('toast_checking_platforms'), 'success');
    }
    ensurePlatformSupport().then(list => {
      if (currentMode !== 'platforms') return;
      currentDB = list.length ? list : platformsDB;
      selectedSlots = selectedSlots.filter(c => currentDB.includes(c));
      if (currentPreviewIdx >= selectedSlots.length) currentPreviewIdx = selectedSlots.length - 1;
      updateUI();
      updateStats();
    });
  }
  if (!silent) {
    showToast(t('toast_mode_activated', { mode: getModeLabel(mode) }), 'success');
  }
}

function updateFiltersForMode() {
  const filtersContainer = document.querySelector('.filters');
  if (!filtersContainer) return;
  
  if (currentMode === 'flags') {
    filtersContainer.innerHTML = `
      <button class="filter-btn active" data-filter="all">${t('filter_all')}</button>
      <button class="filter-btn" data-filter="top">
        <i data-lucide="star"></i>${t('filter_popular')}
      </button>
      <button class="filter-btn" data-filter="esports">
        <i data-lucide="trophy"></i>${t('filter_esports')}
      </button>
      <button class="filter-btn" data-filter="iconic">
        <i data-lucide="flag"></i>${t('filter_iconic')}
      </button>
      <button class="filter-btn" data-filter="hispanos">${t('filter_hispanic')}</button>
      <button class="filter-btn" data-filter="america">${t('filter_america')}</button>
      <button class="filter-btn" data-filter="europa">${t('filter_europe')}</button>
      <button class="filter-btn" data-filter="asia">${t('filter_asia')}</button>
      <button class="filter-btn" data-filter="africa">${t('filter_africa')}</button>
      <button class="filter-btn" data-filter="oceania">${t('filter_oceania')}</button>
    `;
  } else {
    filtersContainer.innerHTML = `
      <button class="filter-btn active" data-filter="all">${t('filter_all')}</button>
      <button class="filter-btn" data-filter="top">
        <i data-lucide="star"></i>${t('filter_popular')}
      </button>
      <button class="filter-btn" data-filter="social">${t('filter_social')}</button>
      <button class="filter-btn" data-filter="streaming">${t('filter_streaming')}</button>
      <button class="filter-btn" data-filter="gaming">${t('filter_gaming')}</button>
      <button class="filter-btn" data-filter="tech">${t('filter_tech')}</button>
      <button class="filter-btn" data-filter="dev">${t('filter_dev')}</button>
      <button class="filter-btn" data-filter="music">${t('filter_music')}</button>
    `;
  }
  
  // Re-attach event listeners
  const newFilterBtns = filtersContainer.querySelectorAll('.filter-btn');
  newFilterBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === currentFilter);
    btn.addEventListener('click', e => {
      newFilterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentFilter = e.currentTarget.dataset.filter;
      renderLibrary();
    });
  });
  
  // Re-create icons
  if (window.lucide) lucide.createIcons({ nodes: [...filtersContainer.querySelectorAll('[data-lucide]')] });
}

function syncModeUIStrings() {
  const isPlatforms = currentMode === 'platforms';

  const applyPlaceholder = (el) => {
    if (!el) return;
    const phFlags = el.dataset.placeholderFlags;
    const phPlatforms = el.dataset.placeholderPlatforms;
    if (!phFlags && !phPlatforms) return;
    el.placeholder = isPlatforms ? (phPlatforms || el.placeholder) : (phFlags || el.placeholder);
  };

  applyPlaceholder(searchInput);
  applyPlaceholder(searchModalInput);

  if (canvasPlaceholderText) {
    canvasPlaceholderText.innerHTML = isPlatforms
      ? t('placeholder_preview_platforms')
      : t('placeholder_preview_flags');
  }
}

// ─── STATS ─────────────────────────────────────────────────────────
function updateStats() {
  const ids = ['statTotalDb', 'statAmerica', 'statEuropa', 'statAsia', 'statAfrica', 'statOceania'];
  const els = ids.map(id => document.getElementById(id));
  if (els.some(el => !el)) return;
  
  if (currentMode === 'flags') {
    els[0].textContent = db.length;
    els[1].textContent = db.filter(c => c.filters.includes('América')).length;
    els[2].textContent = db.filter(c => c.filters.includes('Europa')).length;
    els[3].textContent = db.filter(c => c.filters.includes('Asia')).length;
    els[4].textContent = db.filter(c => c.filters.some(f => f.toLowerCase().startsWith('fric') || f === 'África')).length;
    els[5].textContent = db.filter(c => c.filters.some(f => f.toLowerCase().startsWith('ocean') || f === 'Oceanía')).length;
  } else {
    const src = currentDB || platformsDB;
    els[0].textContent = src.length;
    els[1].textContent = src.filter(c => c.category === 'Social').length;
    els[2].textContent = src.filter(c => c.category === 'Streaming').length;
    els[3].textContent = src.filter(c => c.category === 'Gaming').length;
    els[4].textContent = src.filter(c => c.category === 'Tech').length;
    els[5].textContent = src.filter(c => c.category === 'Dev').length;
  }
}

// ─── CANVAS ZOOM ─────────────────────────────────────────────
function applyCanvasZoom() {
  const mount = canvas.parentElement;
  if (!mount) return;
  
  canvas.style.transform = `scale(${canvasZoom})`;
  canvas.style.transformOrigin = 'center center';
  // Actualizar indicador visual de zoom
  mount.dataset.zoom = `${Math.round(canvasZoom * 100)}%`;
  
  // Update button states
  if (btnZoomIn) btnZoomIn.disabled = canvasZoom >= 3;
  if (btnZoomOut) btnZoomOut.disabled = canvasZoom <= 0.5;
  if (btnResetZoom) btnResetZoom.disabled = canvasZoom === 1;
}

// ─── BOOT ────────────────────────────────────────────────────
window.addEventListener('load', init);
