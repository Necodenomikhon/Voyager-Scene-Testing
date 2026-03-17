/* ---------------------------
   Map
---------------------------- */
const map = L.map('map', { zoomControl:true, maxZoom:22 }).setView([41.615, -71.251], 11);

// Basemaps
const basemaps = [
  {
    name: "USGS Topo",
    layer: L.tileLayer(
      "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '&copy; <a href="https://www.usgs.gov/" target="_blank" rel="noopener noreferrer">USGS</a> ' +
          '| <a href="https://www.usgs.gov/faqs/what-are-base-map-services-or-urls-used-national-map" target="_blank" rel="noopener noreferrer">The National Map</a>',
        maxNativeZoom: 16,
        maxZoom: 22,
        crossOrigin: true
      }
    )
  },
  {
    name: "USGS Relief",
    layer: L.tileLayer(
      "https://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: '&copy; <a href="https://www.usgs.gov/" target="_blank" rel="noopener noreferrer">USGS</a> ' +
          '| <a href="https://www.usgs.gov/faqs/what-are-base-map-services-or-urls-used-national-map" target="_blank" rel="noopener noreferrer">The National Map</a>',
        maxNativeZoom: 16,
        maxZoom: 22,
        crossOrigin: true
      }
    )
  },
  {
    name: "OpenStreetMap",
    layer: L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
        maxNativeZoom: 19,
        maxZoom: 22
      }
    )
  }
];

let currentBasemap = 0;
let activeBase = basemaps[currentBasemap].layer;
activeBase.addTo(map);

function cycleBasemap() {
  map.removeLayer(activeBase);

  currentBasemap = (currentBasemap + 1) % basemaps.length;
  activeBase = basemaps[currentBasemap].layer;

  activeBase.addTo(map);

  basemapButton.innerText = basemaps[currentBasemap].name;
}

const BasemapOpacityControl = L.Control.extend({
  options: { position: "bottomleft" },

  onAdd: function () {
    const container = L.DomUtil.create("div", "basemap-opacity-control");

    const controls = L.DomUtil.create("div", "basemap-controls", container);

    const button = L.DomUtil.create("a", "basemap-cycle", controls);
    button.href = "#";
    button.title = "Cycle basemap";
    button.textContent = basemaps[currentBasemap].name;

    const sliderWrap = L.DomUtil.create("div", "entry-opacity-wrap", controls);

    const slider = L.DomUtil.create("input", "entry-opacity", sliderWrap);
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.step = "1";
    slider.value = "100";
    slider.disabled = true;

    const value = L.DomUtil.create("span", "entry-opacity-value", sliderWrap);
    value.textContent = "100%";

    // store refs
    window.basemapButton = button;
    opacitySliderEl = slider;
    opacityValueEl = value;

    L.DomEvent.disableClickPropagation(container);
    L.DomEvent.disableScrollPropagation(container);

    L.DomEvent.on(button, "click", function (e) {
      L.DomEvent.stop(e);
      cycleBasemap();
    });

    L.DomEvent.on(slider, "input", function (e) {
      const pct = Number(e.target.value);
      const opacity = pct / 100;
      value.textContent = `${pct}%`;

      if (activeEntryId == null) return;

      const st = stateById.get(activeEntryId);
      if (!st) return;

      st.opacity = opacity;

      const layer = overlayById.get(activeEntryId) || layersById.get(activeEntryId);
      applyOverlayOpacity(layer, opacity);
    });

    return container;
  }
});

map.addControl(new BasemapOpacityControl());

/* ---------------------------
   Sidebar collapse
---------------------------- */
const appRoot = document.getElementById('appRoot');
const sideToggle = document.getElementById('sideToggle');

function setCollapsed(collapsed){
  appRoot.classList.toggle('collapsed', collapsed);
  sideToggle.dataset.title = collapsed ? 'Expand' : 'Collapse';
  sideToggle.title = collapsed ? 'Expand panel' : 'Collapse panel';
}
setCollapsed(false);
sideToggle.addEventListener('click', () => setCollapsed(!appRoot.classList.contains('collapsed')));

const PINS_KEY = 'custom_maps_pins_v2';

function loadPins(){
  try{
    const raw = localStorage.getItem(PINS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  }catch{ return []; }
}
function savePins(pins){
  localStorage.setItem(PINS_KEY, JSON.stringify(pins));
}

const customEntries = [
  {
    id: 1,
    title: "USGS Lidar Point Cloud for BHF",
    state: "RI",
    year: 2024,
    series: "BHF",
    edition: "",
    scale: 0,
    thumb: "maps/lidar.jpg",
    citation: "“USGS Lidar Point Cloud RI_Statewide_D22 395000_192500” U.S. Geological Survey, Jan. 2024. Accessed: 04/17/2025. [Online]. Available: https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/RI_Statewide_D22/RI_Statewide_1_D22/0_file_download_links.txt",

    geotiffUrl: "maps/lidar_geo.tif",
    
    // Optional: for Pan/Zoom before load; if unknown, omit and we use overlay bounds after load.
    // bounds: [[34.0, -86.0], [36.0, -84.0]],

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'EduceLab', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {
    id: 2,
    title: "Battle of Rhode Island Historic District boundaries",
    state: "RI",
    year: 1969,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Marcia M. Greenlee, Battle of Rhode Island Historic District (Battle of Rhode Island Site), National Register of Historic Places Inventory–Nomination Form, prepared for the Rhode Island Historical Preservation Commission under contract to the Afro-American Bicentennial Corporation, 1973, p. 14; National Park Service, National Register of Historic Places records; National Archives Identifier 41374753; National Archives and Records Administration, National Archives Catalog, https://catalog.archives.gov/id/41374753 (accessed March 6, 2026).",

    geotiffUrl: "https://educelab.github.io/BHF/maps/DOI_NPS_1969_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'US National Archives', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {
    id: 3,
    title: "A Topographical Chart of the Bay of Narraganset in the Province of New England",
    state: "RI",
    year: 1777,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Charles Blaskowitz and William Faden, A Topographical Chart of the Bay of Narraganset in the Province of New England: With All the Isles Contained Therein, Among Which Rhode Island and Connonicut Have Been Particularly Surveyed; Shewing the True Position & Bearings of the Banks, Shoals, Rocks &c., as Likewise the Soundings; to Which Have Been Added the Several Works & Batteries Raised by the Americans; Taken by Order of the Principal Farmers on Rhode Island, map, London: William Faden, 1777; Norman B. Leventhal Map & Education Center, Boston Public Library; digital image, Leventhal Map & Education Center Digital Collections, https://collections.leventhalmap.org/search/commonwealth:3f462w67b (accessed March 2, 2026).",
    
    geotiffUrl: "maps/Blaskowitz_1777_jpg95_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'Norman B. Leventhal Map & Education Center', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {
    id: 4,
    title: "Plan von Rhode Island",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Johann Christian Schiffer, Plan von Rhode Island, und deren dem comando des Herrn General Majors Presgott inf dies-malig befundlichen campements, map, [1777]; Geography and Map Division; Library of Congress, Washington, D.C.; digital image, Library of Congress Digital Collections, https://www.loc.gov/item/75690704/ (accessed March 12, 2026).",
    
    geotiffUrl: "maps/Schiffer_1777_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'US Library of Congress', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {
    id: 5,
    title: "Plan of the works at Windmill Hill",
    state: "RI",
    year: 1777,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Plan of the Works at Windmill Hill, December 31st 1777: Plan nr 19, map, December 31, 1777; William L. Clements Library, University of Michigan, Ann Arbor, Michigan; digital image, William L. Clements Library Image Bank, University of Michigan Library Digital Collections, https://quod.lib.umich.edu/w/wcl1ic/x-659/wcl000771 (accessed March 13, 2026).",
    
    geotiffUrl: "maps/Clinton_1777_jpg60_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'University of Michigan Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {
    id: 5,
    title: "Plan of the northern part of Rhode Island in the township of Portsmouth",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Edward Fage (attributed), Plan of the Northern Part of Rhode Island in the Township of Portsmouth, Shewing the British Posts of Defence as Compleated During the Possession of Rhode Island from the 8th of Dec. 1776 to the 25th of Oct. 1778, manuscript map, ca. 1778; call no. mssHM 15473; The Huntington Library, San Marino, California; digital image, Huntington Digital Library, https://hdl.huntington.org/digital/collection/p15150coll4/id/16295 (accessed March 16, 2026).",    
    
    geotiffUrl: "maps/Fage_1778_defl_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'The Huntington Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {
    id: 6,
    title: "Plan of the adjacent coast to the northern part of Rhode Island",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Edward Fage, Plan of the Adjacent Coast to the Northern Part of Rhode Island, to Express the Route of a Body of Troops under the Command of Lieut. Colonel Campbell of the 22d Regiment to Destroy the Enemies Batteaux, Vessels, Galley &c. Which Was Accomplished May 25th 1778, manuscript map, 1778; William L. Clements Library, University of Michigan, Ann Arbor, Michigan; digital image, William L. Clements Library Image Bank, University of Michigan Library Digital Collections, https://quod.lib.umich.edu/w/wcl1ic/x-628/wcl000739 (accessed March 17, 2026).",

    geotiffUrl: "maps/Fage_2_1778_defl_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'University of Michigan Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },
  {
    id: 7,
    title: "Plan of a barrack for 300 men",
    state: "RI",
    year: 1778,
    series: "",
    edition: "",
    scale: 0,
    thumb: "",
    citation: "Plan of a Barrack for 300 Men, and Officers, Erected at Windmill Hill with an Abbatis, December 1777: Plan nr 18, manuscript map, December 1777; William L. Clements Library, University of Michigan, Ann Arbor, Michigan; digital image, William L. Clements Library Image Bank, University of Michigan Library Digital Collections, https://quod.lib.umich.edu/w/wcl1ic/x-6053/wcl006127 (accessed March 17, 2026).",

    geotiffUrl: "maps/Clinton_2_1777_defl_geo.tif",

    downloads: { },
    fixUrl: "",
    meta: { publishers: 'University of Michigan Library', datum: 'WGS 84', projection: 'Unstated', gnisCellId:'', gnisCell:'', woodlandTint:'Y' }
  },

];

// State + pins
const stateById = new Map(); // id -> {on, opacity, infoOpen, pinned}
const pins = new Set(loadPins());
const overlayById = new Map(); // id -> GeoRasterLayer

customEntries.forEach((e) => {
  stateById.set(e.id, {
    on: !!e.on,
    opacity: 1,
    infoOpen: false,
    pinned: pins.has(e.id)
  });
});

function setCounts(){
  const active = customEntries.filter(e => stateById.get(e.id).on).length;
  document.getElementById('activeCountLabel').textContent = `${active} active`;
}

function openDownload(url){
  window.open(url, '_blank', 'noopener,noreferrer');
}

function zoomToEntry(e){
  if (Array.isArray(e.bounds) && e.bounds.length === 2){
    map.fitBounds(e.bounds, { padding:[40,40], maxZoom: activeBase.options.maxNativeZoom ?? 16 });
    return;
  }
  const layer = overlayById.get(e.id);
  if (layer && layer.getBounds){
    map.fitBounds(layer.getBounds(), { padding:[40,40], maxZoom: activeBase.options.maxNativeZoom ?? 16 });
    return;
  }
  if (Array.isArray(e.center) && Number.isFinite(e.zoom)){
    map.setView(e.center, e.zoom, { animate:true });
  }
}

function panToEntry(e){
  if (Array.isArray(e.center)){
    map.panTo(e.center, { animate:true });
    return;
  }
  if (Array.isArray(e.bounds) && e.bounds.length === 2){
    const sw = e.bounds[0], ne = e.bounds[1];
    map.panTo([(sw[0]+ne[0])/2, (sw[1]+ne[1])/2], { animate:true });
    return;
  }
  const layer = overlayById.get(e.id);
  if (layer && layer.getBounds){
    const b = layer.getBounds();
    map.panTo(b.getCenter(), { animate:true });
  }
}

function reportFix(e){
  if (e.fixUrl){
    window.open(e.fixUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  const subj = encodeURIComponent('Map issue report: ' + e.title);
  const body = encodeURIComponent(
    `Map: ${e.title} (${e.year})\n\nDescribe the issue:\n\nLocation (lat,lng): ${map.getCenter().lat.toFixed(5)}, ${map.getCenter().lng.toFixed(5)}\nZoom: ${map.getZoom()}\n`
  );
  window.location.href = `mailto:?subject=${subj}&body=${body}`;
}

function togglePin(id){
  const st = stateById.get(id);
  st.pinned = !st.pinned;
  if (st.pinned) pins.add(id); else pins.delete(id);
  savePins(Array.from(pins));
  render();
}

function escapeHtml(s){
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'","&#039;");
}

function metaItem(label, value, overflow=false){
  const ok = !(value == null || value === '');
  const textCls = ok ? '' : 'noData';
  const overflowCls = overflow ? 'overflow' : '';
  const val = ok ? escapeHtml(String(value)) : 'N/A';
  return `
    <span class="col12 metaItem">
      <span class="col1 metaIcon ${ok ? 'ok' : 'no'}" aria-hidden="true">
        <svg class="ico"><use href="${ok ? '#i-check' : '#i-x'}"></use></svg>
      </span>
      <span class="col11 metaField ${overflowCls} ${textCls}">${label}: ${val}</span>
    </span>
  `;
}

const citeModal = document.getElementById("citeModal");
const citeModalBackdrop = document.getElementById("citeModalBackdrop");
const citeCloseBtn = document.getElementById("citeCloseBtn");
const citeTextarea = document.getElementById("citeTextarea");
const citeCopyBtn = document.getElementById("citeCopyBtn");
const citeSelectBtn = document.getElementById("citeSelectBtn");

function openCiteModal(text){
  citeTextarea.value = text || "";
  citeModal.classList.remove("hidden");
  citeModal.setAttribute("aria-hidden", "false");
}

function closeCiteModal(){
  citeModal.classList.add("hidden");
  citeModal.setAttribute("aria-hidden", "true");
}

citeModalBackdrop.addEventListener("click", closeCiteModal);
citeCloseBtn.addEventListener("click", closeCiteModal);

citeSelectBtn.addEventListener("click", () => {
  citeTextarea.focus();
  citeTextarea.select();
});

citeCopyBtn.addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(citeTextarea.value);
    citeCopyBtn.textContent = "Copied";
    setTimeout(() => { citeCopyBtn.textContent = "Copy"; }, 1200);
  }catch{
    citeTextarea.focus();
    citeTextarea.select();
  }
});

document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape" && !citeModal.classList.contains("hidden")) {
    closeCiteModal();
  }
});

function buildCitation(e){
  if (e.citation) return e.citation;

  const parts = [];
  parts.push(e.meta?.publishers || "Unknown publisher");
  parts.push(`${e.title}${e.state && e.state !== "—" ? ", " + e.state : ""}.`);
  if (e.year) parts.push(String(e.year) + ".");
  if (e.series) parts.push(`${e.series}${e.edition ? ", " + e.edition : ""}.`);
  if (e.scale) parts.push(`Scale 1:${e.scale}.`);
  return parts.join(" ").replace(/\s+/g, " ").trim();
}

async function addGeoTiffOverlay(url, { opacity = 0.7 } = {}) {
  // IMPORTANT: Workers inside GeoTIFF libs sometimes need an absolute URL. Always resolve relative to page.
  const absUrl = new URL(url, window.location.href).href;

  const res = await fetch(absUrl, { mode: 'cors' });
  if (!res.ok) throw new Error(`GeoTIFF fetch failed: ${res.status} (${absUrl})`);
  const buf = await res.arrayBuffer();

  const georaster = await parseGeoraster(buf);

  const layer = new GeoRasterLayer({
    georaster,
    opacity,
    resolution: 256
  });

  layer.addTo(map);

  // Fit to raster bounds but DO NOT exceed basemap native zoom (prevents black/404 tiles)
  if (layer.getBounds){
    map.fitBounds(layer.getBounds(), {
      padding: [40, 40],
      maxZoom: activeBase.options.maxNativeZoom ?? 16
    });
  }

  return layer;
}

async function toggleEntryOverlay(entry) {
  const st = stateById.get(entry.id);

  if (!st.on) {
    if (!overlayById.has(entry.id)) {
      let layer;

      if (entry.type === "kmz") {
        layer = await addKmzOverlay(entry.kmzUrl, { opacity: st.opacity });
      } else {
        layer = await addGeoTiffOverlay(entry.geotiffUrl, { opacity: st.opacity });
      }

      overlayById.set(entry.id, layer);
    } else {
      overlayById.get(entry.id).addTo(map);
      applyOverlayOpacity(overlayById.get(entry.id), st.opacity);
    }

    st.on = true;
  } else {
    const layer = overlayById.get(entry.id);
    if (layer) map.removeLayer(layer);
    st.on = false;
  }

  syncOpacityControlToEntry(entry.id);
  render();
}

function applyLayers(){
  customEntries.forEach(e => {
    if (!e.tileUrl) return;

    const st = stateById.get(e.id);
    const layer = layersById.get(e.id);
    if (!layer) return;

    applyOverlayOpacity(layer, st.opacity);

    if (st.on && !map.hasLayer(layer)) layer.addTo(map);
    if (!st.on && map.hasLayer(layer)) map.removeLayer(layer);
  });
}

function applyOverlayOpacity(layer, opacity){
  if (!layer) return;

  // GeoTIFF layer / tile layer / image overlay
  if (typeof layer.setOpacity === "function") {
    layer.setOpacity(opacity);
    return;
  }

  // LayerGroup / KMZ / grouped overlays
  if (typeof layer.eachLayer === "function") {
    layer.eachLayer((child) => {
      if (typeof child.setOpacity === "function") {
        child.setOpacity(opacity);
      } else if (typeof child.setStyle === "function") {
        child.setStyle({
          opacity,
          fillOpacity: Math.min(opacity, 0.5)
        });
      }
    });
    return;
  }

  // Vector fallback
  if (typeof layer.setStyle === "function") {
    layer.setStyle({
      opacity,
      fillOpacity: Math.min(opacity, 0.5)
    });
  }
}

function syncOpacityControlToEntry(id){
  activeEntryId = id;

  const st = stateById.get(id);
  if (!st || !opacitySliderEl || !opacityValueEl) return;

  const pct = Math.round((st.opacity ?? 1) * 100);
  opacitySliderEl.disabled = false;
  opacitySliderEl.value = String(pct);
  opacityValueEl.textContent = `${pct}%`;
}

const table = document.getElementById('recordsTable');

function render(){
  table.innerHTML = '';

  customEntries.forEach(e => {
    const st = stateById.get(e.id);
    const dls = e.downloads || {};

    const metaHtml = (() => {
      const m = e.meta || {};
      return `
        <span class="col12 metaFields noselect ${st.infoOpen ? 'open' : ''}">
          <span class="col11 metaInfo">
            <span class="col12 inline">
              <span class="metaPub col10">Publishers: ${escapeHtml(m.publishers ?? 'N/A')}</span>
              <span class="metaPubLink col1"></span>
              <span class="sbLink col1"></span>
            </span>

            <span class="col12 inline">
              <span class="col6 metaColumn">
                ${metaItem('Datum', m.datum)}
                ${metaItem('Projection', m.projection)}
                ${metaItem('GNIS Cell Id', m.gnisCellId)}
                ${metaItem('GNIS Cell', m.gnisCell, true)}
              </span>

              <span class="col6 metaColumn">
                ${metaItem('Woodland Tint', m.woodlandTint)}
              </span>
            </span>
          </span>
        </span>
      `;
    })();

    const li = document.createElement('li');
    li.className = st.infoOpen ? 'expanded' : '';

    li.innerHTML = `
      <a data-id="${e.id}">
        <span class="col12 pad1l inline">
          <span class="recTitle recKeyline searchItem col8">${escapeHtml(e.title)}, <span class="recState">${escapeHtml(e.state)}</span></span>

          <span class="col9">
            <span class="recYear searchItem pad05">${escapeHtml(e.year)}</span>
            <span class="searchItem">(${escapeHtml(e.series)}${e.edition ? ', ' + escapeHtml(e.edition) : ''}) </span>

            <span class="searchItem" style="padding-left:5px">Scale 1:</span><span class="recScale searchItem">${escapeHtml(e.scale)}</span>
            <br>

            <span class="col5 sideFile">
              <span class="downloadItem jpgDown col12 pad05" title="Download JPEG" aria-disabled="true">JPEG<span class="jpgByte">(N/A)</span></span>
              <span class="downloadItem kmzDown col12" title="Download KMZ" aria-disabled="true">KMZ<span class="kmzByte">(N/A)</span></span>
            </span>

            <span class="col5 sideFile">
              <span class="downloadItem gTifDown col12 pad05" title="Download GeoTiff" aria-disabled="true">GeoTiff<span class="tifByte">(N/A)</span></span>
              <span class="downloadItem pdfDown col12" title="Download GeoPDF" aria-disabled="true">GeoPDF<span class="pdfByte">(N/A)</span></span>
            </span>
          </span>

          <span class="col3 recImageMini lazy" style="background-image:url('${escapeHtml(e.thumb || '')}');"></span>

          <span class="col12 inline recordlinkGroup">
            <span class="col8 center">
              <span title="Show map" class="recordLinks dot showOverlay"><svg class="ico" aria-hidden="true"><use href="#i-map"></use></svg><span class="linkText overState">${st.on ? 'Hide' : 'Show'}</span></span>
              <span title="Map metadata" class="recordLinks dot moreInfo ${st.infoOpen ? 'infoShown' : ''}"><svg class="ico" aria-hidden="true"><use href="#i-info"></use></svg><span class="linkText">Info</span></span>
              <span title="Zoom to map" class="recordLinks dot zoomTo"><svg class="ico" aria-hidden="true"><use href="#i-zoom"></use></svg><span class="linkText">Zoom</span></span>
              <span title="Pan to map" class="recordLinks dot panTo"><svg class="ico" aria-hidden="true"><use href="#i-hand"></use></svg><span class="linkText">Pan</span></span>
              <span title="Copy citation" class="recordLinks dot citeLink"><span class="linkText">Citation</span></span>
            </span>

            <span class="center col4" style="text-indent: 4px;">
              <span title="Pin this map" class="recordLinks dot pinIt"><svg class="ico" aria-hidden="true"><use href="#i-pin"></use></svg><span class="linkText">${st.pinned ? 'Pinned' : 'Pin'}</span></span>
              <span title="Report errors" class="recordLinks dot mapComment"><svg class="ico" aria-hidden="true"><use href="#i-comment"></use></svg><span class="linkText" style="letter-spacing:0px;">Fix</span></span>
            </span>
          </span>

          ${metaHtml}
        </span>
      </a>
    `;

    // Wire events
    li.querySelector('.showOverlay').addEventListener('click', async (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      syncOpacityControlToEntry(e.id);

      if (e.geotiffUrl || e.kmzUrl || e.type === "kmz") {
        await toggleEntryOverlay(e);
      } else {
        const st2 = stateById.get(e.id);
        st2.on = !st2.on;
        applyLayers();
        render();
      }
    });

    li.querySelector('.moreInfo').addEventListener('click', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      syncOpacityControlToEntry(e.id);
      st.infoOpen = !st.infoOpen;
      render();
    });

    li.querySelector('.zoomTo').addEventListener('click', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      syncOpacityControlToEntry(e.id);
      zoomToEntry(e);
    });

    li.querySelector('.panTo').addEventListener('click', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      syncOpacityControlToEntry(e.id);
      panToEntry(e);
    });

    li.querySelector('.citeLink')?.addEventListener('click', (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      syncOpacityControlToEntry(e.id);
      openCiteModal(buildCitation(e));
    });

    li.querySelector('.pinIt').addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      togglePin(e.id);
    });

    li.querySelector('.mapComment').addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      reportFix(e);
    });

    table.appendChild(li);
  });

  setCounts();
}

/* Reset all overlays */
document.getElementById('btnResetAll').addEventListener('click', () => {
  customEntries.forEach(e => {
    const st = stateById.get(e.id);
    st.on = false;
    st.infoOpen = false;
    st.opacity = 1;
  });

  activeEntryId = null;
  if (opacitySliderEl && opacityValueEl) {
    opacitySliderEl.value = "100";
    opacitySliderEl.disabled = true;
    opacityValueEl.textContent = "100%";
  }

  applyLayers();
  render();
});

/* Help */
document.getElementById('btnHelp').addEventListener('click', () => {
  alert('Edit customEntries[] to add your GeoTIFF URLs (absolute URLs work best on GitHub Pages).');
});

/* Init */
render();