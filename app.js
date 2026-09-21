import { db, firebaseReady } from "./firebase-config.js";
import { collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

async function getWorks() {
  if (firebaseReady) {
    try {
      const q = query(collection(db, "works"), orderBy("created_at", "desc"));
      const snap = await getDocs(q);
      return snap.docs.map(d => ({id:d.id, ...d.data()}));
    } catch (e) {
      console.warn("Firebase read failed; using works.json fallback.", e);
    }
  }
  try {
    const r = await fetch("works.json?v=" + Date.now());
    return await r.json();
  } catch (_) {
    return [];
  }
}

const works = await getWorks();
window.WORKS_DATA = works;

// Keep the original site's rendering code if it exposes a render function.
// Otherwise provide a simple compatible renderer.
const app = document.querySelector("#app, #works, main");
if (app && !app.children.length) {
  app.innerHTML = works.map(w => `
    <article class="work-card">
      <img src="${w.image_url || "images/placeholder.svg"}" alt="${escapeHtml(w.title || "")}">
      <div class="work-card-content">
        <small>${escapeHtml(w.category || "Work")}</small>
        <h3>${escapeHtml(w.title || "")}</h3>
        <p>${escapeHtml(w.description || "")}</p>
        ${w.link ? `<a href="${escapeAttr(w.link)}" target="_blank" rel="noopener">View Project ↗</a>` : ""}
      </div>
    </article>`).join("");
}

function escapeHtml(v) {
  return String(v ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function escapeAttr(v) {
  return String(v ?? "").replace(/"/g, "&quot;");
}
