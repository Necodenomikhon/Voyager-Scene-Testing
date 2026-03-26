export function createMap() {
  return L.map('map', { zoomControl: true, maxZoom: 22 })
    .setView([41.615, -71.251], 11);
}

export function createBasemaps() {
  return [
    {
      name: "USGS Topo",
      layer: L.tileLayer(
        "https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",
        {
          attribution:
            '&copy; <a href="https://www.usgs.gov/" target="_blank" rel="noopener noreferrer">USGS</a> | ' +
            '<a href="https://www.usgs.gov/faqs/what-are-base-map-services-or-urls-used-national-map" target="_blank" rel="noopener noreferrer">The National Map</a>',
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
          attribution:
            '&copy; <a href="https://www.usgs.gov/" target="_blank" rel="noopener noreferrer">USGS</a> | ' +
            '<a href="https://www.usgs.gov/faqs/what-are-base-map-services-or-urls-used-national-map" target="_blank" rel="noopener noreferrer">The National Map</a>',
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
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>',
          maxNativeZoom: 19,
          maxZoom: 22
        }
      )
    }
  ];
}

export function setupBasemapSystem(map) {
  const basemaps = createBasemaps();

  let currentBasemap = 0;
  let activeBase = basemaps[currentBasemap].layer;
  activeBase.addTo(map);

  let opacitySliderEl = null;
  let opacityValueEl = null;
  let basemapButton = null;
  let activeEntryId = null;

  function cycleBasemap() {
    map.removeLayer(activeBase);
    currentBasemap = (currentBasemap + 1) % basemaps.length;
    activeBase = basemaps[currentBasemap].layer;
    activeBase.addTo(map);
    basemapButton.innerText = basemaps[currentBasemap].name;
  }

  function syncOpacityControlToEntry(id, stateById) {
    activeEntryId = id;
    const st = stateById.get(id);
    if (!st || !opacitySliderEl || !opacityValueEl) return;

    const pct = Math.round((st.opacity ?? 1) * 100);
    opacitySliderEl.disabled = false;
    opacitySliderEl.value = String(pct);
    opacityValueEl.textContent = `${pct}%`;
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

      basemapButton = button;
      opacitySliderEl = slider;
      opacityValueEl = value;

      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.disableScrollPropagation(container);

      L.DomEvent.on(button, "click", function (e) {
        L.DomEvent.stop(e);
        cycleBasemap();
      });

      return container;
    }
  });

  map.addControl(new BasemapOpacityControl());

  return {
    basemaps,
    getActiveBase: () => activeBase,
    getActiveEntryId: () => activeEntryId,
    getOpacitySliderEl: () => opacitySliderEl,
    getOpacityValueEl: () => opacityValueEl,
    syncOpacityControlToEntry
  };
}