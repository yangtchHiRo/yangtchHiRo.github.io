(() => {
  'use strict';
  const C = window.AIM_CONTENT;
  if (!C) return;
  const $ = id => document.getElementById(id);
  const element = (tag, cls, text) => { const el = document.createElement(tag); if (cls) el.className = cls; if (text !== undefined) el.textContent = text; return el; };
  const safeURL = value => {
    if (!value) return '';
    if (/^data:image\/(?:png|jpeg|webp|svg\+xml);base64,/.test(value)) return value;
    try { const u = new URL(value, document.baseURI); return ['http:', 'https:', 'file:'].includes(u.protocol) ? value : ''; } catch { return ''; }
  };
  const videoObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        if (video.dataset.src && !video.getAttribute('src')) { video.src = video.dataset.src; video.load(); }
      } else { video.pause(); }
    });
  }, { rootMargin: '100px' }) : null;

  function cleanMedia(host) {
    host.querySelectorAll('video').forEach(v => { if (videoObserver) videoObserver.unobserve(v); v.pause(); v.removeAttribute('src'); v.load(); });
    host.replaceChildren();
  }
  function media(host, spec, type) {
    cleanMedia(host);
    if (safeURL(spec.src)) {
      if (type === 'image' || spec.type === 'image') {
        const img = element('img', 'media-image'); img.src = spec.src; img.alt = spec.alt || spec.placeholder || ''; img.loading = 'lazy';
        img.addEventListener('error', () => { img.remove(); host.append(element('div', 'media-error', 'The image is unavailable.')); }, { once: true });
        host.append(img); return;
      }
      const video = element('video'); video.controls = true; video.muted = true; video.defaultMuted = true; video.playsInline = true; video.preload = 'metadata';
      video.setAttribute('aria-label', spec.alt || spec.placeholder || 'Research video');
      if (safeURL(spec.poster)) video.poster = spec.poster;
      if (spec.loop) video.loop = true;
      video.dataset.src = spec.src;
      video.addEventListener('error', () => { const msg = element('div', 'media-error', 'This video is unavailable. Please try again later.'); host.append(msg); }, { once: true });
      host.append(video);
      if (videoObserver) videoObserver.observe(video); else video.src = spec.src;
      return;
    }
    const panel = element('div', 'media-placeholder' + (spec.poster ? ' has-poster' : ''));
    panel.setAttribute('role', 'img'); panel.setAttribute('aria-label', spec.placeholder + ' — media not yet added');
    if (safeURL(spec.poster)) {
      const img = element('img', 'poster-image'); img.src = spec.poster; img.alt = ''; panel.append(img);
      const label = element('div', 'poster-label'); label.append(element('span', 'slot-icon', '▷'), element('span', '', spec.note || 'Layout preview · video to be added')); panel.append(label);
    } else {
      panel.append(element('span', 'slot-icon', '▷'), element('strong', '', spec.placeholder || 'Research video'), element('span', 'slot-subtitle', 'Video to be added'));
    }
    host.append(panel);
  }
  function options(host, items, selected, callback, vertical = false) {
    host.replaceChildren();
    items.forEach(item => {
      const btn = element('button', '', item.label); btn.type = 'button'; btn.dataset.id = item.id; if (item.scene) btn.title = item.scene;
      btn.setAttribute('aria-pressed', String(item.id === selected));
      if (vertical && item.detail) btn.append(element('span', '', item.detail));
      btn.addEventListener('click', () => { host.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === btn))); callback(item.id); });
      host.append(btn);
    });
  }
  function resources(host) {
    const glyphs = {paper:'▤', arxiv:'↗', code:'⌘', video:'▷'};
    const labels = {paper:'Paper', arxiv:'arXiv', code:'Code', video:'Video'};
    Object.entries(C.links).forEach(([kind, url]) => {
      const valid = safeURL(url), link = element(valid ? 'a' : 'span', 'resource-link' + (valid ? (kind === 'paper' ? ' primary' : '') : ' unavailable'));
      link.append(element('span', '', glyphs[kind] || '↗'), element('span', '', labels[kind] || kind));
      if (valid) { link.href = valid; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
      else { link.setAttribute('aria-disabled','true'); link.append(element('span','pending-label','forthcoming')); }
      host.append(link);
    });
  }
  if (C.authors.length) {
    C.authors.forEach(author => {
      const item = element(safeURL(author.url) ? 'a' : 'span', '', author.name);
      if (safeURL(author.url)) { item.href = author.url; item.target='_blank'; item.rel='noopener noreferrer'; }
      if (author.affiliation) item.append(element('sup','',author.affiliation)); $('authors').append(item);
    });
  } else if (C.draft) $('authors').append(element('span','pending','Authors and affiliations to be added'));
  $('affiliations').textContent = C.affiliations;
  $('abstract-text').textContent = C.abstract;
  resources($('project-links')); resources($('footer-links'));
  if (Object.values(C.links).some(safeURL)) $('resources-note').textContent = 'Read the paper and explore the implementation.';
  

  let localID = C.local[0].id, localMode = 'rendering';
  function local() {
    const scene = C.local.find(s => s.id === localID);
    media($('local-media'), scene[localMode]);
    $('local-name').textContent = scene.scene;
    $('local-caption').textContent = scene.caption;
    $('local-protocol').textContent = scene.protocol;

  }
  options($('local-scenes'),C.local,localID,id=>{localID=id;local();});
  options($('local-modes'),[{id:'rendering',label:'Rendering'},{id:'tracking',label:'Tracking'}],localMode,id=>{localMode=id;local();});
  local();
  function long(id) {
    const scene=C.long.find(s=>s.id===id); media($('long-media'),scene.media);
    $('long-name').textContent=scene.title; $('long-caption').textContent=scene.caption; $('long-protocol').textContent=scene.protocol;
  }
  options($('long-scenes'),C.long,C.long[0].id,long,true); long(C.long[0].id);
  if (safeURL(C.rolloutChart.src)) { $('rollout-chart').hidden=false;media($('rollout-chart'),C.rolloutChart,'image'); }
  // Generalization gallery initialized by assets/js/generalization.js.
  if (C.objectTransfer.enabled && safeURL(C.objectTransfer.src)) { $('object-transfer').hidden=false;media($('object-transfer'),C.objectTransfer); }
   
  

  if (C.quantitative.enabled && C.quantitative.rows.length) {
    $('quantitative').hidden=false; $('quantitative-caption').textContent=C.quantitative.caption;
    const tr=element('tr');C.quantitative.headers.forEach(h=>tr.append(element('th','',h)));$('results-head').append(tr);
    C.quantitative.rows.forEach(row=>{ const line=element('tr',row[0]==='AIM'?'ours':'');row.forEach(value=>line.append(element('td','',String(value))));$('results-body').append(line); });
  }
  if (C.bibtex.trim()) { $('citation').textContent=C.bibtex; $('copy-citation').disabled=false; }
  $('copy-citation').addEventListener('click',async()=>{
    const text=C.bibtex;
    let ok=false;
    try { if(navigator.clipboard && window.isSecureContext) {await navigator.clipboard.writeText(text);ok=true;} } catch {}
    if(!ok) { const t=element('textarea');t.value=text;t.style.position='fixed';t.style.opacity='0';document.body.append(t);t.select();try {ok=document.execCommand('copy');} catch {}t.remove(); }
    $('copy-citation').textContent=ok?'Copied':'Select text to copy';$('copy-status').textContent=ok?'Citation copied to clipboard.':'Copy unavailable. Select the citation text manually.';
    setTimeout(()=>{$('copy-citation').textContent='Copy citation';},2500);
  });
  const menu=document.querySelector('.menu-toggle'),nav=$('site-nav');
  menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');}});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)document.querySelectorAll('video').forEach(v=>v.pause());});
  
  
})();
