const $ = (s, root=document) => root.querySelector(s);
const safe = (v="") => String(v).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let activeFilter = "All";

function renderJobs() {
  const jobs = (SITE_DATA.jobs || []).slice(0, 10);
  const visible = jobs.filter(j => activeFilter === "All" || j.type === activeFilter);
  $("#jobGrid").innerHTML = visible.map((j, i) => `
    <article class="job-card ${j.featured ? "featured" : ""}">
      <div class="job-card-top"><div class="company-logo">${j.logo ? `<img src="${safe(j.logo)}" alt="">` : safe((j.company||"Z").slice(0,1).toUpperCase())}</div><span class="job-type ${j.type==="Internship"?"internship":""}">${safe(j.type)}</span></div>
      <div class="company-name">${safe(j.company)}</div><h3>${safe(j.role)}</h3>
      <div class="job-meta"><span>⌑ ${safe(j.location)}</span><span>◷ ${safe(j.experience)}</span></div>
      <div class="job-details"><div><small>Qualification</small><b>${safe(j.qualification)}</b></div><div><small>Eligible batches</small><b>${safe(j.batches)}</b></div><div><small>Salary / Stipend</small><b>${safe(j.salary)}</b></div><div><small>Last date</small><b>${safe(j.deadline)}</b></div></div>
      <div class="job-card-bottom"><span>↗ ${safe(j.posted)}</span><a class="apply-button" href="${safe(j.applyUrl||"#")}" target="_blank" rel="noopener noreferrer">Apply now ↗</a></div>
    </article>`).join("");
  $("#jobCount").textContent = `${visible.length} ${visible.length===1?"opportunity":"opportunities"}`;
  $("#jobEmpty").hidden = visible.length !== 0;
}
function renderNews() {
  $("#newsGrid").innerHTML = (SITE_DATA.news||[]).map(n => `
    <article class="news-card"><a class="news-image ${n.image?"has-image":""}" ${n.image?`style="background-image:url('${safe(n.image)}')"`:""} href="${safe(n.articleUrl||"#")}" target="_blank" rel="noopener noreferrer"><span>${safe(n.category)}</span><b>↗</b></a>
    <div class="news-content"><div class="news-meta">${safe(n.date)} <span>•</span> ${safe(n.readTime)}</div><h3>${safe(n.title)}</h3><p>${safe(n.excerpt)}</p><a href="${safe(n.articleUrl||"#")}" target="_blank" rel="noopener noreferrer" class="read-link">Read story ↗</a></div></article>`).join("");
}
$("#jobFilters").addEventListener("click", e => {
  const btn = e.target.closest("[data-filter]"); if (!btn) return;
  activeFilter = btn.dataset.filter;
  document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b===btn));
  renderJobs();
});
const profile = SITE_DATA.profileImage;
if (profile) $("#profilePhoto").innerHTML = `<img src="${profile}" alt="Vaibhav Mishra">`;
$("#youtubeLink").href = SITE_DATA.youtubeUrl || "https://youtube.com/";
$(".menu-toggle").addEventListener("click", () => $("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => $("nav").classList.remove("open")));
$("#year").textContent = new Date().getFullYear();
renderJobs(); renderNews();