window.AIM_GENERALIZATION = [
  {
    "id": "sloth_stretch_to_lift",
    "label": "Sloth · stretch → lift",
    "category": "Cross-action",
    "title": "Sloth: stretching to lifting",
    "source": "double_stretch_sloth",
    "target": "double_lift_sloth",
    "segment": "E1",
    "methods": [
      "Ground Truth",
      "AIM",
      "PGND",
      "PhysTwin"
    ],
    "caption": "Cross-action generalization.",
    "duration": 1.433333,
    "frames": 43,
    "fps": 30.0,
    "src": "assets/videos/generalization/sloth_stretch_to_lift/comparison.mp4",
    "poster": "assets/videos/generalization/sloth_stretch_to_lift/poster.jpg"
  },
  {
    "id": "cloth1_to_cloth3",
    "label": "Cloth 1 → Cloth 3",
    "category": "Cross-object",
    "title": "One-hand lifting across cloth instances",
    "source": "single_lift_cloth_1",
    "target": "single_lift_cloth_3",
    "segment": "E1 + E2",
    "methods": [
      "Ground Truth",
      "AIM",
      "PGND",
      "PhysTwin"
    ],
    "caption": "Cross-object generalization.",
    "duration": 5.2,
    "frames": 156,
    "fps": 30.0,
    "src": "assets/videos/generalization/cloth1_to_cloth3/comparison.mp4",
    "poster": "assets/videos/generalization/cloth1_to_cloth3/poster.jpg"
  },
  {
    "id": "cloth1_to_cloth4",
    "label": "Cloth 1 → Cloth 4",
    "category": "Cross-object",
    "title": "One-hand lifting to another cloth instance",
    "source": "single_lift_cloth_1",
    "target": "single_lift_cloth_4",
    "segment": "E1 + E2",
    "methods": [
      "Ground Truth",
      "AIM",
      "PGND",
      "PhysTwin"
    ],
    "caption": "Cross-object generalization.",
    "duration": 5.733333,
    "frames": 172,
    "fps": 30.0,
    "src": "assets/videos/generalization/cloth1_to_cloth4/comparison.mp4",
    "poster": "assets/videos/generalization/cloth1_to_cloth4/poster.jpg"
  },
  {
    "id": "shared_cloth_to_shirt",
    "label": "Shared model · shirt",
    "category": "Shared-model transfer",
    "title": "Shared-model example: shirt folding",
    "source": "additional_cloth_scene",
    "target": "cloth_shirt_fold",
    "segment": "E1 excerpt",
    "methods": [
      "Ground Truth",
      "AIM (shared)",
      "PGND (shared)"
    ],
    "caption": "Shared-model comparison.",
    "duration": 3.2,
    "frames": 96,
    "fps": 30.0,
    "src": "assets/videos/generalization/shared_cloth_to_shirt/comparison.mp4",
    "poster": "assets/videos/generalization/shared_cloth_to_shirt/poster.jpg"
  }
];
