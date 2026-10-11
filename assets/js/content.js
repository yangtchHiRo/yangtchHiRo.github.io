/* AIM 内容配置：先改本文件，再替换 assets/videos 和 assets/images 中的素材。
 * src 为空时显示占位，不请求不存在的视频。只放文件还不够，需要填写对应 src。
 * expected 给出推荐文件名，页面不把它当成已存在的结果。
 * 所有路径使用相对路径；适配 username.github.io/aim/。
 */
window.AIM_CONTENT = {
  draft: true, // 替换素材并核对文案后设为 false；不是去掉占位提示的开关。
  authors: [
    { name: "Tiancheng Yang", affiliation: "1,2,*", url: "" },
    { name: "Dingshuo Chen",  affiliation: "1,3,*", url: "" },
    { name: "Tianle Chen",    affiliation: "1,3",   url: "" },
    { name: "Zhaocheng Liu",  affiliation: "4",     url: "" },
    { name: "Qiang Liu",      affiliation: "1,3,†", url: "" }
  ],

  affiliations: `¹ NLPR, MAIS, Institute of Automation, Chinese Academy of Sciences
  ² School of Advanced Interdisciplinary Sciences, University of Chinese Academy of Sciences
  ³ School of Artificial Intelligence, University of Chinese Academy of Sciences
  ⁴ Independent Researcher

  * Equal contribution.  † Corresponding author.`,
  links: {
    arxiv: "https://arxiv.org/abs/2610.07116",
    code: "https://anonymous.4open.science/r/AIM-F887/"
  },
  abstract: "Predicting deformable motion requires more than matching nearby particles. Manipulation creates local responses that propagate through the object, while changing geometry alters which regions interact. Adaptive Interaction Modeling (AIM) studies this interaction-dependent propagation in particle-based real-to-sim dynamics. We organize the evaluation around three questions: local deformation under observed interactions, error accumulation over longer rollouts, and transfer to actions beyond the training sequence.",
  overview: {
    src: "", expected: "assets/videos/overview.mp4",
    poster: "assets/images/layout-preview.png",
    placeholder: "Project overview video",
    note: "Prior project visualization still · layout preview, not an AIM result"
  },
  local: [
  {
    "id": "rope_double_hand",
    "label": "Two-hand rope",
    "title": "Two-hand rope",
    "scene": "rope_double_hand",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/rope_double_hand/rendering.mp4",
      "placeholder": "Two-hand rope · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/rope_double_hand/tracking.mp4",
      "placeholder": "Two-hand rope · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "single_push_rope",
    "label": "Rope push",
    "title": "Rope push",
    "scene": "single_push_rope",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/single_push_rope/rendering.mp4",
      "placeholder": "Rope push · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/single_push_rope/tracking.mp4",
      "placeholder": "Rope push · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "double_lift_cloth_1",
    "label": "Cloth 1 · two-hand lift",
    "title": "Cloth 1 · two-hand lift",
    "scene": "double_lift_cloth_1",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/double_lift_cloth_1/rendering.mp4",
      "placeholder": "Cloth 1 · two-hand lift · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/double_lift_cloth_1/tracking.mp4",
      "placeholder": "Cloth 1 · two-hand lift · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "double_lift_cloth_3",
    "label": "Cloth 3 · two-hand lift",
    "title": "Cloth 3 · two-hand lift",
    "scene": "double_lift_cloth_3",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/double_lift_cloth_3/rendering.mp4",
      "placeholder": "Cloth 3 · two-hand lift · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/double_lift_cloth_3/tracking.mp4",
      "placeholder": "Cloth 3 · two-hand lift · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "single_lift_cloth_3",
    "label": "Cloth 3 · one-hand lift",
    "title": "Cloth 3 · one-hand lift",
    "scene": "single_lift_cloth_3",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/single_lift_cloth_3/rendering.mp4",
      "placeholder": "Cloth 3 · one-hand lift · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/single_lift_cloth_3/tracking.mp4",
      "placeholder": "Cloth 3 · one-hand lift · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "double_lift_sloth",
    "label": "Sloth · lift",
    "title": "Sloth · lift",
    "scene": "double_lift_sloth",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/double_lift_sloth/rendering.mp4",
      "placeholder": "Sloth · lift · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/double_lift_sloth/tracking.mp4",
      "placeholder": "Sloth · lift · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "double_stretch_sloth",
    "label": "Sloth · stretch",
    "title": "Sloth · stretch",
    "scene": "double_stretch_sloth",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/double_stretch_sloth/rendering.mp4",
      "placeholder": "Sloth · stretch · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/double_stretch_sloth/tracking.mp4",
      "placeholder": "Sloth · stretch · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "single_push_sloth",
    "label": "Sloth · push",
    "title": "Sloth · push",
    "scene": "single_push_sloth",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/single_push_sloth/rendering.mp4",
      "placeholder": "Sloth · push · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/single_push_sloth/tracking.mp4",
      "placeholder": "Sloth · push · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "double_stretch_zebra",
    "label": "Zebra · stretch",
    "title": "Zebra · stretch",
    "scene": "double_stretch_zebra",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/double_stretch_zebra/rendering.mp4",
      "placeholder": "Zebra · stretch · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/double_stretch_zebra/tracking.mp4",
      "placeholder": "Zebra · stretch · Tracking · four-column comparison",
      "loop": true
    }
  },
  {
    "id": "weird_package",
    "label": "Package",
    "title": "Package",
    "scene": "weird_package",
    "protocol": "Continuous E1 → E2",
    "caption": "Full sequence from one initialization. Observation / PGND / PhysTwin / AIM share the same camera and timeline.",
    "rendering": {
      "src": "",
      "expected": "assets/videos/phystwin/weird_package/rendering.mp4",
      "placeholder": "Package · Rendering · four-column comparison",
      "loop": true
    },
    "tracking": {
      "src": "",
      "expected": "assets/videos/phystwin/weird_package/tracking.mp4",
      "placeholder": "Package · Tracking · four-column comparison",
      "loop": true
    }
  }
],
  long: [
    ["rope", "Rope"],
    ["cloth", "Cloth"],
    ["bread", "Bread"],
    ["sloth", "Sloth"],
    ["box", "Box"],
    ["paperbag", "Paper bag"]
  ].map(([id, label]) => ({
    id,
    label,
    detail: "",
    title: `${label} · long-horizon prediction`,
    protocol:
      "One initialization; no ground-truth state resets within the rollout.",
    caption: "Observation → PGND → AIM",
    media: {
      src: `assets/videos/pgnd-long/${id}/comparison.mp4`,
      poster: `assets/videos/pgnd-long/${id}/poster.png`,
      placeholder: `${label} · long-horizon comparison`,
      loop: true
    }
  })),
  rolloutChart: {src: "", expected: "assets/images/rollout-error.png", alt: "Tracking error over rollout time"},
  transfer: [
    { id: "sloth", label: "Lift → stretch", sourceTitle: "Two-hand lift", targetTitle: "Two-hand stretch",
      sourceScene: "double_lift_sloth", targetScene: "double_stretch_sloth",
      source: {src: "", expected: "assets/videos/transfer-sloth-train.mp4", placeholder: "Sloth · training action"},
      target: {src: "", expected: "assets/videos/transfer-sloth-test.mp4", placeholder: "Sloth · held-out stretch"},
      caption: "Source-trained checkpoint · target-action rollout without fine-tuning" },
    { id: "cloth", label: "Two hands → one hand", sourceTitle: "Two-hand cloth lift", targetTitle: "One-hand cloth lift",
      sourceScene: "double_lift_cloth_3", targetScene: "single_lift_cloth_3",
      source: {src: "", expected: "assets/videos/transfer-cloth-train.mp4", placeholder: "Cloth · training action"},
      target: {src: "", expected: "assets/videos/transfer-cloth-test.mp4", placeholder: "Cloth · held-out one-hand lift"},
      caption: "Changed manipulation pattern · no target-action fine-tuning" }
  ],
  // 跨物体泛化与跨动作不同；有独立、完整的结果后再启用，不用 Deform360 当前排障视频填这里。
  objectTransfer: {enabled: false, title: "Across object instances", src: "", expected: "assets/videos/cross-object.mp4"},
  method: {src: "assets/images/method-concept.svg", expected: "assets/images/method-final.svg", type: "image",
    alt: "Conceptual view of observed states, interaction modeling, and predicted deformation",
    caption: "Conceptual illustration of the research idea. Replace with the final, verified AIM architecture figure."},
  ablation: {src: "", expected: "assets/videos/ablation-relations.mp4", placeholder: "Matched ablation · interaction modeling"},
  // 不填虚构指标；默认不显示。填写与论文一致的全集/选模协议后启用。
  quantitative: {enabled: false, caption: "", headers: ["Method", "Track ↓", "CD ↓", "PSNR ↑", "SSIM ↑"], rows: []},
  bibtex: `@article{yang2026aim,
    title={AIM: Adaptive Interaction Modeling Networks for Real-to-Sim Soft-Body Simulation},
    author={Yang, Tiancheng and Chen, Dingshuo and Chen, Tianle and Liu, Zhaocheng and Liu, Qiang},
    journal={arXiv preprint arXiv:2610.07116},
    year={2026}
  }`
};
