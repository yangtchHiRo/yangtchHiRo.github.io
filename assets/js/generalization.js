(() => {
  'use strict';
  const items = window.AIM_GENERALIZATION;
  const host = document.getElementById('generalization-media');
  if (!host || !Array.isArray(items) || !items.length) return;
  const $ = id => document.getElementById(id);
  const buttons = $('generalization-scenes');
  let currentVideo = null;
  function select(item) {
    if (currentVideo) {
      currentVideo.pause();
      currentVideo.removeAttribute('src');
      currentVideo.load();
    }
    host.replaceChildren();
    for (const b of buttons.children) b.setAttribute('aria-pressed', String(b.dataset.id === item.id));
    $('generalization-category').textContent = item.category;
    $('generalization-title').textContent = item.title;
    $('generalization-segment').textContent = item.segment + ' · ' + item.duration.toFixed(2) + ' s';
    $('generalization-pair').textContent = item.source + ' → ' + item.target;
    $('generalization-caption').textContent = item.caption;
    const methods = $('generalization-methods');
    methods.replaceChildren();
    methods.style.setProperty('--method-count', String(item.methods.length));
    for (const label of item.methods) {
      const cell = document.createElement('span');
      cell.textContent = label;
      if (label.startsWith('AIM')) cell.className = 'is-aim';
      methods.append(cell);
    }
    const video = document.createElement('video');
    video.controls = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    video.preload = 'metadata';
    video.poster = item.poster;
    video.src = item.src;
    video.setAttribute('aria-label', item.title + ' — ' + item.methods.join(', '));
    video.addEventListener('error', () => {
      const message = document.createElement('p');
      message.className = 'generalization-error';
      message.textContent = 'Video unavailable. Please check the uploaded media path.';
      host.append(message);
    }, { once: true });
    host.append(video);
    currentVideo = video;
    const link = $('generalization-download');
    link.href = item.src;
    link.download = item.id + '.mp4';
  }
  buttons.replaceChildren();
  for (const item of items) {
    const b = document.createElement('button');
    b.type = 'button';
    b.dataset.id = item.id;
    b.textContent = item.label;
    const kind = document.createElement('small');
    kind.textContent = item.category;
    b.append(kind);
    b.addEventListener('click', () => select(item));
    buttons.append(b);
  }
  select(items[0]);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && currentVideo) currentVideo.pause();
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting && currentVideo) currentVideo.pause();
    });
    observer.observe(host);
  }
})();
