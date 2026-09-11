# WonderMath 🧮
### Interactive Mathematical Conjectures & AI Exploration Platform for K-12 Students

**WonderMath** is a modern, interactive web application dedicated to popularizing famous unsolved mathematical riddles, theorems, and modern AI breakthroughs for K-12 students (elementary, middle, and high school).

Through step-by-step intuitive storytelling, gamified analogies, real-time Canvas/SVG simulations, and an **AI Co-Mathematician Lab**, students can not only explore centuries of mathematical history, but also formulate derivative conjectures, search for counterexamples, and inspect computer-verified proofs in **Lean 4**.

---

## 🌟 Key Features

### 1. Curated K-12 Multi-Tier Curriculum
The platform adapts dynamically across three distinct learning bands:
* **🎒 Explorers (Grades 3–5)**: Visual metaphors, physical analogies (bouncing hailstones, crayon colorings, prime balance scales), and friendly gamified challenges.
* **🔬 Investigators (Grades 6–8)**: Algebraic patterns, number theory intuitions, historical timeline drama, and interactive parameter testing.
* **🚀 Pioneers (Grades 9–12)**: Rigorous mathematical formulation, formal logic, theoretical barriers (e.g., parity problem, undecidability), and cutting-edge 2026 AI breakthroughs.

### 2. 🌐 Full Multilingual Support (8 Languages)
Every lesson, analogy, historical milestone, simulation label, and glossary is natively localized:
* 🇺🇸 **English** (`en`)
* 🇩🇪 **Deutsch** (`de`)
* 🇫🇷 **Français** (`fr`)
* 🇮🇹 **Italiano** (`it`)
* 🇯🇵 **日本語** (`ja`)
* 🇰🇷 **한국어** (`ko`)
* 🇨🇳 **简体中文** (`zh-Hans`)
* 🇭🇰 **繁體中文** (`zh-Hant`)
Instant language switching with automatic browser locale detection and `localStorage` persistence.

### 3. 🏛️ Standardized 4-Zone Pedagogical Architecture
Inspired by open-source educational benchmarks (`CrazyRock114/mathexperiment` and `wy51ai/edulab`), every conjecture's detail page is structured into 4 cohesive pedagogical zones with quick-jump navigation:
* **Zone ① Principles & Mathematical Formulations (原理讲解)**: Intuitive grade-differentiated metaphors, formal definitions, and rules.
* **Zone ② Historical Chronicles & Breakthroughs (历史背景与重大突破)**: Centuries of attempts, Clay Millennium and Erdős bounties, and modern breakthroughs.
* **Zone ③ Hands-On Interactive Laboratory (互动实验台)**: Real-time Canvas labs with granular controls:
  * **⏭️ Single-Step (单步)**: Advance calculations step-by-step with real-time formula telemetry.
  * **▶️ Auto-Scan (扫描运行)**: Smooth automatic simulation with adjustable speed multiplier (0.5x, 1x, 2x, 5x).
  * **🎯 Classic Presets (经典范例)**: Instant one-click loading of famous historical seeds and configurations.
* **Zone ④ Extensions, AI Exploration & Formal Verification (拓展思考、AI与形式化)**:
  * **"What If?" Hypotheses**: Test mathematical rule modifications.
  * **Automated Counterexample Hunter**: Heuristic search testing boundary cases.
  * **Lean 4 Proof Inspector**: Interactive theorem code with hover glossary.
  * **📄 One-Click Offline Lesson Export**: Download a zero-dependency, self-contained HTML worksheet with embedded interactive simulations for offline classroom use.

### 4. Interactive Hands-On Simulation Labs (Full 8 Labs)
* **🌨️ Collatz Hailstone Orbit Simulator**: Dynamic canvas trajectory rendering with single-step tracking, auto-scan, speed controls, classic presets ($N=27$ Everest, $N=97$, $N=871$), and real-time step equations.
* **📜 Weierstrass Elliptic Curve & Fermat Frey Curve Lab**: Interactive cubic curves $y^2 = x^3 + ax + b$, draggable points $P$ and $Q$, chord-and-tangent group law $P \oplus Q = -R$, point doubling $2P$, and the direct geometric bridge to Fermat's Last Theorem via Frey curves!
* **👯 Twin Prime Sieve & Gap Histogram**: Interactive Sieve of Eratosthenes, twin pair detector ($p, p+2$), gap frequency distribution, and prime gap compression progress tracker ($70\text{M} \to 246 \to 6 \to 2$).
* **⚖️ Goldbach Prime Balance Scale & Comet**: Interactive mechanical balance scale where students drag/choose prime weights to balance even numbers, plus real-time scatter plot of the Goldbach Comet ($N \le 1,000$).
* **🗺️ Four Color Map Coloring Game**: Interactive planar country map with live border conflict detection, crayon palette, and 4-coloring backtracking solver.
* **📍 Erdős Unit Distance Pinboard**: Place and drag points in 2D Euclidean space; edges automatically glow green when distance $\approx 1.0$ unit. Test the Moser spindle, triangle, and the **historic May 2026 AI counterexample** structure!
* **🌊 Riemann Hypothesis Critical Strip**: Complex plane visualization of the critical strip ($0 < \text{Re}(s) < 1$), non-trivial zero pulses on the critical line ($\text{Re}(s) = 1/2$), Hardy zeta wave oscillations, and the **August 2026 AI leap to 67.2%**.
* **🌀 Jacobian Coordinate Grid Warper**: Continuous deformation of coordinate grids under polynomial maps, local Jacobian determinant calculation ($\det J = 1$ vs $-2$), and geometric demonstration of why 3D folding occurs (Claude's 2026 counterexample).

### 5. 🤖 AI Co-Mathematician Exploration Lab
* **"What If?" Derivative Conjecture Formulator**: Test mathematical variants (e.g. $5n+1$, $3n-1$, Prime Triplets $(p, p+2, p+4)$, Polignac's gaps, 3D Unit Distances) with automated Socratic analysis.
* **Automated Counterexample Hunter**: Client-side heuristic search engine that scans hundreds of candidate numbers in real time, logging anomalies, loops, or divergences.
* **Lean 4 Interactive Inspector**: Side-by-side view of plain English statements vs. machine-checked Lean 4 theorem code, featuring interactive hover tooltips explaining formal tactics (`theorem`, `∀`, `∃`, `by`, `dsimp`, `rfl`, `omega`).

### 6. ⚡ 2021–2026 AI Mathematics Milestones
A chronological tracker chronicling the transformation of AI in mathematics:
* **2021**: DeepMind Knot Theory & Wagner Graph Counterexamples.
* **2022**: AlphaTensor matrix multiplication speedups.
* **2023**: FunSearch solves the Cap Set problem in dimension 8.
* **2024**: AlphaProof & AlphaGeometry 2 IMO silver medal.
* **May 2026**: OpenAI AI model disproves the 80-year-old **Erdős Unit Distance Conjecture**.
* **July 2026**: Anthropic Claude Fable 5 disproves the **Jacobian Conjecture for $n \ge 3$**.
* **August 2026**: OpenAI Astra resolves **10 open conjectures** with Lean 4 certificates.
* **August 2026**: Anthropic Claude pushes **Riemann Hypothesis critical line bound from 41.6% to 67.2%**.
* **September 2026**: Anthropic Claude achieves the first **complete machine formalization of Fermat's Last Theorem in Lean 4** (13M+ lines, ~29,500 lemmas).

---

## 🚀 Quickstart Guide

### Prerequisites
* Python 3.10+ (Python 3.12 recommended)
* Any modern web browser (Chrome, Safari, Firefox, Edge)

### Launching the Application
Run the included lightweight server:
```bash
python3 server.py
```
Then open your browser to:
```
http://localhost:8000
```
*(You can also specify a custom port: `python3 server.py 8080`)*

---

## 📂 Project Architecture

```
math/
├── index.html                   # Single-page application shell
├── server.py                    # High-speed numeric API & static server
├── README.md                    # Documentation & classroom guide
├── styles/
│   ├── main.css                 # Core dark theme, typography, CSS variables
│   ├── components.css           # Cards, badges, buttons, tabs, timeline
│   └── simulations.css          # 4-zone layout, controls, Canvas styles
└── js/
    ├── app.js                   # Application bootstrap, routing & view manager
    ├── data/
    │   ├── conjectures.js       # Curriculum database (multi-tier K-12 content)
    │   └── ai_breakthroughs.js  # 2021-2026 AI mathematics timeline
    ├── i18n/
    │   ├── i18n.js              # Localization engine (8 languages)
    │   └── locales.js           # Multilingual dictionary
    ├── export/
    │   └── lesson_exporter.js   # Standalone offline HTML lesson worksheet generator
    ├── simulations/
    │   ├── collatz.js           # 3n+1 trajectory canvas with step/scan controls
    │   ├── elliptic_curve.js    # Weierstrass curve & Fermat Frey group law lab
    │   ├── prime_gaps.js        # Twin prime sieve & gap histogram
    │   ├── goldbach.js          # Prime balance scale & comet scatter plot
    │   ├── four_color.js        # SVG planar map coloring & conflict checker
    │   ├── unit_distance.js     # Point placement & unit distance network
    │   ├── riemann_zeros.js     # Critical strip & zeta wave animator
    │   └── jacobian_grid.js     # Coordinate grid transformation & folding
    └── ai_lab/
        ├── explorer.js          # Derivative conjecture & "What-If" workbench
        ├── lean_viewer.js       # Interactive Lean 4 code inspector & glossary
        └── counterexample_sim.js# Heuristic search worker for candidate testing
```

---

## 🎓 Classroom Pedagogical Tips

1. **Start with the Mystery (Explorers)**: Let students play with the Collatz simulator using their birthday or lucky number. Ask: *"Can anyone find a number that shoots up forever?"*
2. **Explore the Fragility of Math (Investigators)**: Compare Collatz $3n+1$ with $5n+1$ in the AI Lab. Show how a tiny tweak transforms a stable attractor into infinite chaos.
3. **From Margin Notes to Machine Certificates (Pioneers)**: Walk students from Fermat's 1637 handwritten note to Andrew Wiles's 1995 breakthrough via Elliptic Curves, and finally to the September 2026 milestone where AI proved every deduction inside Lean 4.
4. **Offline Handouts & Assignments**: Click **"Export Standalone Interactive Lesson"** on any conjecture to generate a self-contained `.html` file students can take home and explore without needing an internet connection.

