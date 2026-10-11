/* Curated website examples. Load after local-media.js / long-media.js and before site.js. */
(() => {
  'use strict';
  const C = window.AIM_CONTENT;
  if (!C) throw new Error('Load content.js before curated-media.js');
  C.local = [
  {
    "id": "rope_double_hand",
    "scene": "rope_double_hand",
    "label": "Two-hand rope",
    "title": "Two-hand rope",
    "rendering": {
      "src": "assets/videos/phystwin/rope_double_hand/rendering.mp4",
      "poster": "assets/videos/phystwin/rope_double_hand/rendering-poster.jpg",
      "loop": true,
      "alt": "Two-hand rope · rendering"
    },
    "tracking": {
      "src": "assets/videos/phystwin/rope_double_hand/tracking.mp4",
      "poster": "assets/videos/phystwin/rope_double_hand/tracking-poster.jpg",
      "loop": true,
      "alt": "Two-hand rope · tracking"
    },
    "protocol": "Full supplied clip · 8.80 s",
    "caption": "Observation / PGND / PhysTwin / AIM",
  },
  {
    "id": "single_push_rope",
    "scene": "single_push_rope",
    "label": "Rope push",
    "title": "Rope push",
    "rendering": {
      "src": "assets/videos/phystwin/single_push_rope/rendering.mp4",
      "poster": "assets/videos/phystwin/single_push_rope/rendering-poster.jpg",
      "loop": true,
      "alt": "Rope push · rendering"
    },
    "tracking": {
      "src": "assets/videos/phystwin/single_push_rope/tracking.mp4",
      "poster": "assets/videos/phystwin/single_push_rope/tracking-poster.jpg",
      "loop": true,
      "alt": "Rope push · tracking"
    },
    "protocol": "Full supplied clip · 1.93 s",
    "caption": "Observation / PGND / PhysTwin / AIM",
  },
  {
    "id": "double_lift_cloth_1",
    "scene": "double_lift_cloth_1",
    "label": "Cloth 1 · two-hand lift",
    "title": "Cloth 1 · two-hand lift",
    "rendering": {
      "src": "assets/videos/phystwin/double_lift_cloth_1/rendering.mp4",
      "poster": "assets/videos/phystwin/double_lift_cloth_1/rendering-poster.jpg",
      "loop": true,
      "alt": "Cloth 1 · two-hand lift · rendering"
    },
    "tracking": {
      "src": "assets/videos/phystwin/double_lift_cloth_1/tracking.mp4",
      "poster": "assets/videos/phystwin/double_lift_cloth_1/tracking-poster.jpg",
      "loop": true,
      "alt": "Cloth 1 · two-hand lift · tracking"
    },
    "protocol": "Full supplied clip · 3.87 s",
    "caption": "Observation / PGND / PhysTwin / AIM",
  },
  {
    "id": "double_lift_sloth",
    "scene": "double_lift_sloth",
    "label": "Sloth · lift",
    "title": "Sloth · lift",
    "rendering": {
      "src": "assets/videos/phystwin/double_lift_sloth/rendering.mp4",
      "poster": "assets/videos/phystwin/double_lift_sloth/rendering-poster.jpg",
      "loop": true,
      "alt": "Sloth · lift · rendering"
    },
    "tracking": {
      "src": "assets/videos/phystwin/double_lift_sloth/tracking.mp4",
      "poster": "assets/videos/phystwin/double_lift_sloth/tracking-poster.jpg",
      "loop": true,
      "alt": "Sloth · lift · tracking"
    },
    "protocol": "Full supplied clip · 2.07 s",
    "caption": "Observation / PGND / PhysTwin / AIM",
  },
  {
    "id": "double_stretch_sloth",
    "scene": "double_stretch_sloth",
    "label": "Sloth · stretch",
    "title": "Sloth · stretch",
    "rendering": {
      "src": "assets/videos/phystwin/double_stretch_sloth/rendering.mp4",
      "poster": "assets/videos/phystwin/double_stretch_sloth/rendering-poster.jpg",
      "loop": true,
      "alt": "Sloth · stretch · rendering"
    },
    "tracking": {
      "src": "assets/videos/phystwin/double_stretch_sloth/tracking.mp4",
      "poster": "assets/videos/phystwin/double_stretch_sloth/tracking-poster.jpg",
      "loop": true,
      "alt": "Sloth · stretch · tracking"
    },
    "protocol": "Full supplied clip · 6.40 s",
    "caption": "Observation / PGND / PhysTwin / AIM",
  },
  {
    "id": "weird_package",
    "scene": "weird_package",
    "label": "Package",
    "title": "Package",
    "rendering": {
      "src": "assets/videos/phystwin/weird_package/rendering.mp4",
      "poster": "assets/videos/phystwin/weird_package/rendering-poster.jpg",
      "loop": true,
      "alt": "Package · rendering"
    },
    "tracking": {
      "src": "assets/videos/phystwin/weird_package/tracking.mp4",
      "poster": "assets/videos/phystwin/weird_package/tracking-poster.jpg",
      "loop": true,
      "alt": "Package · tracking"
    },
    "protocol": "Full supplied clip · 1.30 s",
    "caption": "Observation / PGND / PhysTwin / AIM",
  }
];
  C.long = [
  {
    "id": "rope",
    "label": "Rope",
    "detail": "3.7s",
    "title": "Rope · episode 0653",
    "protocol": "",
    "caption": "Ground Truth / AIM / PGND",
    "media": {
      "src": "assets/videos/pgnd-long/rope/comparison.mp4",
      "poster": "assets/videos/pgnd-long/rope/poster.png",
      "loop": true,
      "alt": "Rope · Ground Truth / AIM / PGND"
    }
  },
  {
    "id": "bread",
    "label": "Bread",
    "detail": "3.8s",
    "title": "Bread · episode 0157",
    "protocol": "",
    "caption": "Ground Truth / AIM / PGND",
    "media": {
      "src": "assets/videos/pgnd-long/bread/comparison.mp4",
      "poster": "assets/videos/pgnd-long/bread/poster.png",
      "loop": true,
      "alt": "Bread · Ground Truth / AIM / PGND"
    }
  },
  {
    "id": "sloth",
    "label": "Sloth",
    "detail": "3s",
    "title": "Sloth · selected rollout excerpt",
    "protocol": "",
    "caption": "Observation / PGND / AIM",
    "media": {
      "src": "assets/videos/pgnd-long/sloth/comparison.mp4",
      "poster": "assets/videos/pgnd-long/sloth/poster.png",
      "loop": true,
      "alt": "Sloth · Observation / PGND / AIM"
    }
  },
  {
    "id": "paperbag",
    "label": "Paperbag",
    "detail": "3s",
    "title": "Paperbag · selected rollout excerpt",
    "protocol": "",
    "caption": "Observation / PGND / AIM",
    "media": {
      "src": "assets/videos/pgnd-long/paperbag/comparison.mp4",
      "poster": "assets/videos/pgnd-long/paperbag/poster.png",
      "loop": true,
      "alt": "Paperbag · Observation / PGND / AIM"
    }
  }
];
})();
