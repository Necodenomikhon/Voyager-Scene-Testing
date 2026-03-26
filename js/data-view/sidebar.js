export function setupSidebar() {
  const appRoot = document.getElementById('appRoot');
  const sideToggle = document.getElementById('sideToggle');

  function setCollapsed(collapsed) {
    appRoot.classList.toggle('collapsed', collapsed);
    sideToggle.dataset.title = collapsed ? 'Expand' : 'Collapse';
    sideToggle.title = collapsed ? 'Expand panel' : 'Collapse panel';
  }

  setCollapsed(false);
  sideToggle.addEventListener('click', () => {
    setCollapsed(!appRoot.classList.contains('collapsed'));
  });
}