export function setupCitationModal() {
  const citeModal = document.getElementById("citeModal");
  const citeModalBackdrop = document.getElementById("citeModalBackdrop");
  const citeCloseBtn = document.getElementById("citeCloseBtn");
  const citeTextarea = document.getElementById("citeTextarea");
  const citeCopyBtn = document.getElementById("citeCopyBtn");
  const citeSelectBtn = document.getElementById("citeSelectBtn");

  function openCiteModal(text) {
    citeTextarea.value = text || "";
    citeModal.classList.remove("hidden");
    citeModal.setAttribute("aria-hidden", "false");
  }

  function closeCiteModal() {
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
    try {
      await navigator.clipboard.writeText(citeTextarea.value);
      citeCopyBtn.textContent = "Copied";
      setTimeout(() => { citeCopyBtn.textContent = "Copy"; }, 1200);
    } catch {
      citeTextarea.focus();
      citeTextarea.select();
    }
  });

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && !citeModal.classList.contains("hidden")) {
      closeCiteModal();
    }
  });

  return { openCiteModal, closeCiteModal };
}

export function buildCitation(e) {
  if (e.citation) return e.citation;

  const parts = [];
  parts.push(e.meta?.publishers || "Unknown publisher");
  parts.push(`${e.title}${e.state && e.state !== "—" ? ", " + e.state : ""}.`);
  if (e.year) parts.push(String(e.year) + ".");
  if (e.series) parts.push(`${e.series}${e.edition ? ", " + e.edition : ""}.`);
  if (e.scale) parts.push(`Scale 1:${e.scale}.`);
  return parts.join(" ").replace(/\s+/g, " ").trim();
}