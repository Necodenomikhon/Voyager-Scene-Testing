import { getEntries } from "./entries.js";
import { createStore, savePins } from "./store.js";
import { createMap, setupBasemapSystem } from "./basemaps.js";
import { createTileLayers, applyOverlayOpacity, addGeoTiffOverlay } from "./overlayUtils.js";
import { setupSidebar } from "./sidebar.js";
import { createRenderer } from "./renderRecords.js";
import { setupCitationModal, buildCitation } from "./citationModal.js";

const map = createMap();
const overlayEntries = getEntries();
const store = createStore(overlayEntries);

createTileLayers(overlayEntries, store.layersById);
setupSidebar();

const basemapSystem = setupBasemapSystem(map);
const { openCiteModal } = setupCitationModal();

// Example: after const map = L.map('map', ...)

const LogoControl = L.Control.extend({
  options: {
    position: 'bottomleft'
  },

  onAdd: function () {
    const div = L.DomUtil.create('div', 'leaflet-educelab-logo');

    div.innerHTML = `
      <img src="EduceLab.png" alt="EduceLab logo" />
    `;

    // Prevent map drag/zoom when interacting with logo
    L.DomEvent.disableClickPropagation(div);
    L.DomEvent.disableScrollPropagation(div);

    return div;
  }
});

map.addControl(new LogoControl());

const table = document.getElementById('recordsTable');

const renderer = createRenderer({
  map,
  table,
  overlayEntries,
  store,
  basemapSystem,
  openCiteModal,
  savePins
});

document.getElementById('btnResetAll').addEventListener('click', () => {
  overlayEntries.forEach(e => {
    const st = store.stateById.get(e.id);
    st.on = false;
    st.infoOpen = false;
    st.opacity = 1;
  });

  const slider = basemapSystem.getOpacitySliderEl();
  const value = basemapSystem.getOpacityValueEl();

  if (slider && value) {
    slider.value = "100";
    slider.disabled = true;
    value.textContent = "100%";
  }

  renderer.applyLayers();
  renderer.render();
});

document.getElementById('btnHelp').addEventListener('click', () => {
  alert('Edit overlayEntries[] to add your GeoTIFF URLs (absolute URLs work best on GitHub Pages).');
});

renderer.render();