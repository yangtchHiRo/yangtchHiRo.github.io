/* Load after curated-media.js and before site.js. */
(() => {
  'use strict';
  const C = window.AIM_CONTENT;
  if (!C || !Array.isArray(C.local)) {
    throw new Error('Load content.js and curated-media.js before phystwin-scenes.js');
  }
  const replacements = [
    ['double_lift_cloth_1', 'double_lift_cloth_3', 'Cloth 3 · two-hand lift', '3.93s'],
    ['double_stretch_sloth', 'double_stretch_zebra', 'Zebra · stretch', '2.5s'],
    ['double_lift_sloth', 'single_push_sloth', 'Sloth · push', '2.27s']
  ];
  const next = C.local.slice();
  for (const [oldID, id, label, duration] of replacements) {
    const matches = next.map((scene, i) => scene.id === oldID || scene.id === id ? i : -1)
      .filter(i => i >= 0);
    if (matches.length !== 1) throw new Error('Cannot uniquely locate PhysTwin scene: ' + oldID);
    const base = 'assets/videos/phystwin/' + id + '/';
    next[matches[0]] = {
      id, scene: id, label, title: label,
      rendering: {
        src: base + 'rendering.mp4', poster: base + 'rendering-poster.jpg',
        loop: true, alt: label + ' · rendering'
      },
      tracking: {
        src: base + 'tracking.mp4', poster: base + 'tracking-poster.jpg',
        loop: true, alt: label + ' · tracking'
      },
      protocol: duration,
      caption: 'Observation / PGND / PhysTwin / AIM'
    };
  }
  C.local = next;
})();
