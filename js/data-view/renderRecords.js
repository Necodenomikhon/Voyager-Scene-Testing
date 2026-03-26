import { applyOverlayOpacity, addGeoTiffOverlay } from "./overlayUtils.js";
import { buildCitation } from "./citationModal.js";

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function metaItem(label, value, overflow = false) {
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

export function createRenderer({
  map,
  table,
  overlayEntries,
  store,
  basemapSystem,
  openCiteModal,
  savePins
}) {
  const { stateById, pins, overlayById, layersById } = store;

  function setCounts() {
    const active = overlayEntries.filter(e => stateById.get(e.id).on).length;
    document.getElementById('activeCountLabel').textContent = `${active} active`;
  }

  function zoomToEntry(e) {
    const activeBase = basemapSystem.getActiveBase();

    if (Array.isArray(e.bounds) && e.bounds.length === 2) {
      map.fitBounds(e.bounds, { padding: [40, 40], maxZoom: activeBase.options.maxNativeZoom ?? 16 });
      return;
    }

    const layer = overlayById.get(e.id);
    if (layer && layer.getBounds) {
      map.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: activeBase.options.maxNativeZoom ?? 16 });
      return;
    }

    if (Array.isArray(e.center) && Number.isFinite(e.zoom)) {
      map.setView(e.center, e.zoom, { animate: true });
    }
  }

  function panToEntry(e) {
    if (Array.isArray(e.center)) {
      map.panTo(e.center, { animate: true });
      return;
    }

    if (Array.isArray(e.bounds) && e.bounds.length === 2) {
      const sw = e.bounds[0], ne = e.bounds[1];
      map.panTo([(sw[0] + ne[0]) / 2, (sw[1] + ne[1]) / 2], { animate: true });
      return;
    }

    const layer = overlayById.get(e.id);
    if (layer && layer.getBounds) {
      map.panTo(layer.getBounds().getCenter(), { animate: true });
    }
  }

  function reportFix(e) {
    if (e.fixUrl) {
      window.open(e.fixUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    const subj = encodeURIComponent('Map issue report: ' + e.title);
    const body = encodeURIComponent(
      `Map: ${e.title} (${e.year})\n\nDescribe the issue:\n\nLocation (lat,lng): ${map.getCenter().lat.toFixed(5)}, ${map.getCenter().lng.toFixed(5)}\nZoom: ${map.getZoom()}\n`
    );
    window.location.href = `mailto:?subject=${subj}&body=${body}`;
  }

  function togglePin(id) {
    const st = stateById.get(id);
    st.pinned = !st.pinned;
    if (st.pinned) pins.add(id);
    else pins.delete(id);
    savePins(Array.from(pins));
    render();
  }

  function applyLayers() {
    overlayEntries.forEach(e => {
      if (!e.tileUrl) return;

      const st = stateById.get(e.id);
      const layer = layersById.get(e.id);
      if (!layer) return;

      applyOverlayOpacity(layer, st.opacity);

      if (st.on && !map.hasLayer(layer)) layer.addTo(map);
      if (!st.on && map.hasLayer(layer)) map.removeLayer(layer);
    });
  }

  async function toggleEntryOverlay(entry) {
    const st = stateById.get(entry.id);

    if (layersById.has(entry.id)) {
      st.on = !st.on;
      applyLayers();
      basemapSystem.syncOpacityControlToEntry(entry.id, stateById);
      render();
      return;
    }

    if (!st.on) {
      if (!overlayById.has(entry.id)) {
        const layer = await addGeoTiffOverlay(
          map,
          entry.geotiffUrl,
          basemapSystem.getActiveBase(),
          { opacity: st.opacity }
        );
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

    basemapSystem.syncOpacityControlToEntry(entry.id, stateById);
    render();
  }

  function render() {
    table.innerHTML = '';

    overlayEntries.forEach(e => {
      const st = stateById.get(e.id);
      const m = e.meta || {};

      const metaHtml = `
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

      const li = document.createElement('li');
      li.className = st.infoOpen ? 'expanded' : '';

      li.innerHTML = `
        <a data-id="${e.id}">
          <span class="col12 pad1l inline">
            <span class="recTitle recKeyline searchItem col8">${escapeHtml(e.title)}, <span class="recState">${escapeHtml(e.state)}</span></span>

            <span class="col9">
              <span class="recYear searchItem pad05">${escapeHtml(e.year)}</span>
              <span class="searchItem">(${escapeHtml(e.series)}${e.edition ? ', ' + escapeHtml(e.edition) : ''}) </span>
              <span class="searchItem" style="padding-left:5px">Scale 1:</span><span class="recScale searchItem">${escapeHtml(e.scale)}</span><br>
            </span>

            <span class="col3 recImageMini lazy" style="background-image:url('${escapeHtml(e.thumb || '')}');"></span>

            <span class="col12 inline recordlinkGroup">
              <span class="col8 center">
                <span title="Show map" class="recordLinks dot showOverlay"><svg class="ico"><use href="#i-map"></use></svg><span class="linkText overState">${st.on ? 'Hide' : 'Show'}</span></span>
                <span title="Map metadata" class="recordLinks dot moreInfo ${st.infoOpen ? 'infoShown' : ''}"><svg class="ico"><use href="#i-info"></use></svg><span class="linkText">Info</span></span>
                <span title="Zoom to map" class="recordLinks dot zoomTo"><svg class="ico"><use href="#i-zoom"></use></svg><span class="linkText">Zoom</span></span>
                <span title="Pan to map" class="recordLinks dot panTo"><svg class="ico"><use href="#i-hand"></use></svg><span class="linkText">Pan</span></span>
                <span title="Copy citation" class="recordLinks dot citeLink"><span class="linkText">Citation</span></span>
              </span>
              <span class="center col4" style="text-indent: 4px;">
                <span title="Pin this map" class="recordLinks dot pinIt"><svg class="ico"><use href="#i-pin"></use></svg><span class="linkText">${st.pinned ? 'Pinned' : 'Pin'}</span></span>
                <span title="Report errors" class="recordLinks dot mapComment"><svg class="ico"><use href="#i-comment"></use></svg><span class="linkText" style="letter-spacing:0px;">Fix</span></span>
              </span>
            </span>

            ${metaHtml}
          </span>
        </a>
      `;

      li.querySelector('.showOverlay').addEventListener('click', async (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        basemapSystem.syncOpacityControlToEntry(e.id, stateById);
        await toggleEntryOverlay(e);
      });

      li.querySelector('.moreInfo').addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        basemapSystem.syncOpacityControlToEntry(e.id, stateById);
        st.infoOpen = !st.infoOpen;
        render();
      });

      li.querySelector('.zoomTo').addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        basemapSystem.syncOpacityControlToEntry(e.id, stateById);
        zoomToEntry(e);
      });

      li.querySelector('.panTo').addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        basemapSystem.syncOpacityControlToEntry(e.id, stateById);
        panToEntry(e);
      });

      li.querySelector('.citeLink').addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        basemapSystem.syncOpacityControlToEntry(e.id, stateById);
        openCiteModal(buildCitation(e));
      });

      li.querySelector('.pinIt').addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        togglePin(e.id);
      });

      li.querySelector('.mapComment').addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        reportFix(e);
      });

      table.appendChild(li);
    });

    setCounts();
  }

  return { render, applyLayers };
}