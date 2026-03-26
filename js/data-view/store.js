export const PINS_KEY = 'custom_maps_pins_v2';

export function loadPins() {
  try {
    const raw = localStorage.getItem(PINS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function savePins(pins) {
  localStorage.setItem(PINS_KEY, JSON.stringify(pins));
}

export function createStore(overlayEntries) {
  const stateById = new Map();
  const pins = new Set(loadPins());
  const overlayById = new Map();
  const layersById = new Map();

  overlayEntries.forEach((e) => {
    stateById.set(e.id, {
      on: !!e.on,
      opacity: 1,
      infoOpen: false,
      pinned: pins.has(e.id)
    });
  });

  return {
    stateById,
    pins,
    overlayById,
    layersById
  };
}