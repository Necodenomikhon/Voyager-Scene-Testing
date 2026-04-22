export function applyOverlayOpacity(layer, opacity) {
  if (!layer) return;

  if (typeof layer.setOpacity === "function") {
    layer.setOpacity(opacity);
    return;
  }

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

  if (typeof layer.setStyle === "function") {
    layer.setStyle({
      opacity,
      fillOpacity: Math.min(opacity, 0.5)
    });
  }
}

export async function addGeoTiffOverlay(map, url, activeBase, { opacity = 0.7 } = {}) {
  const absUrl = new URL(url, window.location.href).href;

  let res;
  try {
    res = await fetch(absUrl, { mode: "cors" });
  } catch (err) {
    throw new Error(`Failed to fetch raster: ${absUrl}\n${err.message}`);
  }

  if (!res.ok) {
    throw new Error(`GeoTIFF fetch failed: ${res.status} (${absUrl})`);
  }

  const buf = await res.arrayBuffer();

  let georaster;
  try {
    georaster = await parseGeoraster(buf);
  } catch {
    throw new Error(`Could not parse GeoTIFF: ${absUrl}`);
  }

  if (!georaster || !georaster.values) {
    throw new Error(`Parsed raster is invalid or missing values: ${absUrl}`);
  }

  const layer = new GeoRasterLayer({
    georaster,
    opacity,
    resolution: 256,
    pixelValuesToColorFn: (pixelValues) => {
      if (!pixelValues || !pixelValues.length) return null;

      const r = pixelValues[0] ?? 0;
      const g = pixelValues[1] ?? 0;
      const b = pixelValues[2] ?? 0;
      const a = pixelValues[3];

      if (a !== undefined && a === 0) return null;

      if (r === 0 && g === 0 && b === 0 && (a === undefined || a === 0)) {
        return null;
      }

      if (a !== undefined) {
        return `rgba(${r}, ${g}, ${b}, ${a / 255})`;
      }

      return `rgb(${r}, ${g}, ${b})`;
    }
  });

  layer.addTo(map);

  if (layer.getBounds) {
    map.fitBounds(layer.getBounds(), {
      padding: [40, 40],
      maxZoom: activeBase.options.maxNativeZoom ?? 16
    });
  }

  return layer;
}

export function createTileLayers(overlayEntries, layersById) {
  overlayEntries.forEach((e) => {
    if (e.tileUrl) {
      const layer = L.tileLayer(e.tileUrl, {
        attribution: e.attribution,
        minNativeZoom: e.minNativeZoom ?? 8,
        maxNativeZoom: e.maxNativeZoom ?? 19,
        maxZoom: e.maxZoom ?? 22,
        opacity: 1,
        crossOrigin: true
      });
      layersById.set(e.id, layer);
    } else if (e.wmsUrl) {
      const layer = L.tileLayer.wms(e.wmsUrl, {
        layers: e.wmsLayers || "0",
        format: e.wmsFormat || "image/png",
        transparent: e.wmsTransparent ?? true,
        attribution: e.attribution,
        opacity: 1
      });
      layersById.set(e.id, layer);
    }
  });
}