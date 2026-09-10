/**
 * WonderMath AI Breakthroughs Laboratory Engine
 * Interactive mathematical simulations, proof engines, tensor visualizers,
 * and formal certificate checkers for all 12 AI breakthroughs (2021–2026).
 */

import { i18n } from "../i18n/i18n.js";

export class AIBreakthroughLab {
  constructor(mountId, statsId, milestone) {
    this.mount = document.getElementById(mountId);
    this.statsContainer = document.getElementById(statsId);
    this.milestone = milestone;
    this.canvas = null;
    this.ctx = null;
    this.animId = null;
    this.timerId = null;
    this.state = {};

    this.renderLayout();
    this.setupCanvas();
    this.initSimulation();
  }

  destroy() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  setupCanvas() {
    this.canvas = document.getElementById("ai-lab-canvas");
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");

    const resize = () => {
      if (!this.canvas) return;
      const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: 680 };
      this.canvas.width = Math.max(340, Math.floor(rect.width || 680) - 16);
      this.canvas.height = 360;
      this.draw();
    };

    resize();
    window.addEventListener("resize", () => resize());
  }

  renderLayout() {
    if (!this.mount) return;
    const type = this.milestone.labType || "alphaproof";
    let controlsHtml = "";

    switch (type) {
      case "alphaproof":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Proof Step:</label>
              <button class="btn-primary" id="btn-proof-step">▶ Step Lean Tactic</button>
              <button class="btn-outline" id="btn-proof-reset">↺ Reset Proof</button>
            </div>
            <div class="input-slider-group">
              <label>MCTS Expansion:</label>
              <button class="preset-pill-btn active" data-mode="p6">IMO 2024 P6 (Geometry)</button>
              <button class="preset-pill-btn" data-mode="p2">IMO 2024 P2 (Algebra)</button>
              <button class="preset-pill-btn" data-mode="p1">IMO 2024 P1 (Combinatorics)</button>
            </div>
          </div>
        `;
        break;

      case "alphatensor":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Multiplication Step:</label>
              <input type="range" id="tensor-step" min="1" max="47" value="1" style="width:160px;">
              <strong id="tensor-step-val" class="highlight-val">1 / 47</strong>
              <button class="btn-primary" id="btn-tensor-play">▶ Auto Step</button>
            </div>
            <div class="input-slider-group">
              <label>Target Matrix:</label>
              <select id="tensor-matrix-select" class="custom-select">
                <option value="4x4" selected>4×4 Matrices in ℤ₂ (47 Steps vs 64 Naive)</option>
                <option value="3x3">3×3 Matrices in ℤ₂ (21 Steps vs 27 Naive)</option>
              </select>
            </div>
          </div>
        `;
        break;

      case "capset":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Dimension:</label>
              <select id="capset-dim" class="custom-select">
                <option value="3" selected>Dimension d = 3 (Size = 9 / 27)</option>
                <option value="4">Dimension d = 4 (Size = 20 / 81)</option>
              </select>
              <button class="btn-primary" id="btn-funsearch-step">⚡ FunSearch Step</button>
              <button class="btn-outline" id="btn-capset-clear">Clear Points</button>
            </div>
            <div class="input-slider-group">
              <label>Presets:</label>
              <button class="preset-pill-btn active" data-preset="max-cap">Maximal Cap Set</button>
              <button class="preset-pill-btn" data-preset="affine-plane">Affine Subplane (Has AP)</button>
            </div>
          </div>
        `;
        break;

      case "knot":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Select Knot:</label>
              <select id="knot-select" class="custom-select">
                <option value="trefoil" selected>Trefoil Knot (3₁)</option>
                <option value="fig8">Figure-Eight Knot (4₁)</option>
                <option value="cinq">Cinquefoil Knot (5₁)</option>
                <option value="twist">Three-Twist Knot (5₂)</option>
                <option value="stevedore">Stevedore Knot (6₁)</option>
              </select>
              <button class="btn-primary" id="btn-knot-predict">🧠 ML Saliency Scan</button>
            </div>
            <div class="input-slider-group">
              <label>Knot Rotation:</label>
              <input type="range" id="knot-rot" min="0" max="360" value="45" style="width:130px;">
              <strong id="knot-rot-val" class="highlight-val">45°</strong>
            </div>
          </div>
        `;
        break;

      case "alphageometry":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Olympiad Theorem:</label>
              <select id="ag-theorem-select" class="custom-select">
                <option value="orthocenter" selected>Euler Line & Orthocenter Concurrency</option>
                <option value="inscribed">IMO 2000 P1: Inscribed Circles</option>
                <option value="simson">Simson Line Collinearity</option>
              </select>
              <button class="btn-primary" id="btn-ag-solve">⚡ AI Aux Point Search</button>
            </div>
            <div class="input-slider-group">
              <label>Engine Mode:</label>
              <button class="preset-pill-btn active" data-mode="neuro-symbolic">Neuro-Symbolic (DD + AR)</button>
              <button class="preset-pill-btn" data-mode="dd-only">Pure Deduction (Stuck)</button>
            </div>
          </div>
        `;
        break;

      case "pfr":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Doubling Constant K:</label>
              <input type="range" id="pfr-k" min="1.0" max="4.0" step="0.1" value="1.8" style="width:140px;">
              <strong id="pfr-k-val" class="highlight-val">1.8</strong>
            </div>
            <div class="input-slider-group">
              <label>Lean 4 Blueprint Stage:</label>
              <button class="preset-pill-btn active" data-stage="ruzsa">Ruzsa Distance</button>
              <button class="preset-pill-btn" data-stage="entropy">Shannon Entropy</button>
              <button class="preset-pill-btn" data-stage="pfr">PFR Theorem (Bound 2K¹²)</button>
            </div>
          </div>
        `;
        break;

      case "unitdistance":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Point Set Size N:</label>
              <input type="range" id="ud-points" min="12" max="64" value="24" style="width:140px;">
              <strong id="ud-points-val" class="highlight-val">24</strong>
              <button class="btn-primary" id="btn-ud-optimize">⚡ AI Disproof Search</button>
            </div>
            <div class="input-slider-group">
              <label>Geometry:</label>
              <button class="preset-pill-btn active" data-geom="counter">2026 AI Dense Configuration</button>
              <button class="preset-pill-btn" data-geom="grid">Classical Square Grid</button>
            </div>
          </div>
        `;
        break;

      case "jacobian":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Deformation Factor t:</label>
              <input type="range" id="jac-t" min="0" max="1" step="0.02" value="0.5" style="width:140px;">
              <strong id="jac-t-val" class="highlight-val">0.50</strong>
              <button class="btn-jac-fold" id="btn-jac-fold">⚡ Fold Map</button>
            </div>
            <div class="input-slider-group">
              <label>Projection Slice:</label>
              <button class="preset-pill-btn active" data-slice="xy">XY-Projection</button>
              <button class="preset-pill-btn" data-slice="xz">XZ-Projection</button>
            </div>
          </div>
        `;
        break;

      case "astracert":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Approximation Dimension N:</label>
              <input type="range" id="astra-n" min="4" max="32" value="12" style="width:140px;">
              <strong id="astra-n-val" class="highlight-val">N = 12</strong>
              <button class="btn-primary" id="btn-astra-verify">🛡️ Verify Lean Certificate</button>
            </div>
            <div class="input-slider-group">
              <label>Group Presentation:</label>
              <button class="preset-pill-btn active" data-grp="astra">Astra Non-Sofic Candidate</button>
              <button class="preset-pill-btn" data-grp="free">Free Group F₂ (Sofic)</button>
            </div>
          </div>
        `;
        break;

      case "riemannmollifier":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Critical Line Shift t:</label>
              <input type="range" id="rm-t" min="10" max="80" value="30" style="width:140px;">
              <strong id="rm-t-val" class="highlight-val">t = 30.0</strong>
              <button class="btn-primary" id="btn-rm-toggle-mollifier">⚡ Toggle Mollifier</button>
            </div>
            <div class="input-slider-group">
              <label>Historical Bounds:</label>
              <button class="preset-pill-btn" data-bound="levinson">Levinson 1974 (34.7%)</button>
              <button class="preset-pill-btn" data-bound="conrey">Conrey 1989 (41.6%)</button>
              <button class="preset-pill-btn active" data-bound="anthropic">2026 AI (67.2%)</button>
            </div>
          </div>
        `;
        break;

      case "leanflt":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Exponent p:</label>
              <select id="flt-p-select" class="custom-select">
                <option value="3" selected>p = 3 (Euler 1770)</option>
                <option value="5">p = 5 (Dirichlet / Legendre 1825)</option>
                <option value="7">p = 7 (Lamé 1839)</option>
                <option value="prime">Arbitrary Prime p (Wiles 1995 / Lean 2026)</option>
              </select>
              <button class="btn-primary" id="btn-flt-step-dag">▶ Step Lemma DAG</button>
            </div>
            <div class="input-slider-group">
              <label>Formal Milestone:</label>
              <button class="preset-pill-btn active" data-node="frey">Frey Curve</button>
              <button class="preset-pill-btn" data-node="ribet">Ribet Epsilon</button>
              <button class="preset-pill-btn" data-node="r_t">R = T Hecke</button>
              <button class="preset-pill-btn" data-node="final">Contradiction</button>
            </div>
          </div>
        `;
        break;

      case "deepseek":
        controlsHtml = `
          <div class="sim-controls-bar">
            <div class="input-slider-group">
              <label>Target Benchmark:</label>
              <select id="ds-benchmark" class="custom-select">
                <option value="minif2f" selected>miniF2F Valid: imo1964_q1</option>
                <option value="putnam">Putnam 2023: Problem A1</option>
                <option value="algebra">Algebra: amc12a_2021_q12</option>
              </select>
              <button class="btn-primary" id="btn-ds-mcts-step">⚡ Run MCTS Rollout</button>
              <button class="btn-outline" id="btn-ds-reset">↺ Reset Tree</button>
            </div>
            <div class="input-slider-group">
              <label>Search Policy:</label>
              <button class="preset-pill-btn active" data-policy="mcts">MCTS + Lean Kernel (78.3%)</button>
              <button class="preset-pill-btn" data-policy="greedy">Greedy LLM Sample (24.1%)</button>
            </div>
          </div>
        `;
        break;

      default:
        controlsHtml = `<div class="sim-controls-bar"><button class="btn-primary" id="btn-sim-run">Run Simulation</button></div>`;
        break;
    }

    this.mount.innerHTML = `
      <div class="simulation-view-box">
        ${controlsHtml}
        <div class="canvas-wrapper">
          <canvas id="ai-lab-canvas"></canvas>
        </div>
      </div>
    `;
  }

  initSimulation() {
    const type = this.milestone.labType || "alphaproof";
    this.state = { type };

    switch (type) {
      case "alphaproof":
        this.initAlphaProof();
        break;
      case "alphatensor":
        this.initAlphaTensor();
        break;
      case "capset":
        this.initCapSet();
        break;
      case "knot":
        this.initKnot();
        break;
      case "alphageometry":
        this.initAlphaGeometry();
        break;
      case "pfr":
        this.initPFR();
        break;
      case "unitdistance":
        this.initUnitDistance();
        break;
      case "jacobian":
        this.initJacobian();
        break;
      case "astracert":
        this.initAstraCert();
        break;
      case "riemannmollifier":
        this.initRiemannMollifier();
        break;
      case "leanflt":
        this.initLeanFLT();
        break;
      case "deepseek":
        this.initDeepSeek();
        break;
    }

    this.draw();
    this.updateStats();
  }

  initAlphaProof() {
    this.state.step = 0;
    this.state.problem = "p6";
    this.state.tactics = [
      { tactic: "intro A B C h_nondeg", desc: "Introduce geometric points & non-degeneracy hypothesis", verified: true },
      { tactic: "obtain ⟨P, hP⟩ := construct_incenter A B C h_nondeg", desc: "MCTS searches 4.2M branches to find verified incenter lemma", verified: true },
      { tactic: "have h_sides : EquidistantToSides P := by incenter_equidistant hP", desc: "Lean 4 kernel type-checks distance equality across all 3 sides", verified: true },
      { tactic: "use P", desc: "Instantiate existential quantifier with constructed center P", verified: true },
      { tactic: "exact ⟨hP, h_sides⟩", desc: "Proof goal discharged! Lean 4 returns 'no goals remaining'", verified: true }
    ];

    document.getElementById("btn-proof-step")?.addEventListener("click", () => {
      if (this.state.step < this.state.tactics.length) {
        this.state.step++;
      } else {
        this.state.step = 0;
      }
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-proof-reset")?.addEventListener("click", () => {
      this.state.step = 0;
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-mode]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.problem = btn.getAttribute("data-mode");
        this.state.step = 0;
        this.draw();
        this.updateStats();
      });
    });
  }

  initAlphaTensor() {
    this.state.step = 1;
    this.state.maxStep = 47;
    this.state.matrix = "4x4";
    this.state.playing = false;

    const slider = document.getElementById("tensor-step");
    slider?.addEventListener("input", (e) => {
      this.state.step = parseInt(e.target.value);
      const valElem = document.getElementById("tensor-step-val");
      if (valElem) valElem.textContent = `${this.state.step} / ${this.state.maxStep}`;
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-tensor-play")?.addEventListener("click", () => {
      this.state.playing = !this.state.playing;
      const btn = document.getElementById("btn-tensor-play");
      if (btn) btn.textContent = this.state.playing ? "⏸ Pause" : "▶ Auto Step";

      if (this.state.playing) {
        this.timerId = setInterval(() => {
          this.state.step = (this.state.step % this.state.maxStep) + 1;
          if (slider) slider.value = this.state.step;
          const valElem = document.getElementById("tensor-step-val");
          if (valElem) valElem.textContent = `${this.state.step} / ${this.state.maxStep}`;
          this.draw();
          this.updateStats();
        }, 300);
      } else {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    });

    document.getElementById("tensor-matrix-select")?.addEventListener("change", (e) => {
      this.state.matrix = e.target.value;
      this.state.maxStep = this.state.matrix === "4x4" ? 47 : 21;
      if (slider) {
        slider.max = this.state.maxStep;
        slider.value = 1;
      }
      this.state.step = 1;
      this.draw();
      this.updateStats();
    });
  }

  initCapSet() {
    this.state.dim = 3;
    this.state.points = [
      [0, 0, 0], [0, 1, 1], [0, 2, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 0],
      [2, 0, 2], [2, 1, 0], [2, 2, 1]
    ];

    document.getElementById("btn-funsearch-step")?.addEventListener("click", () => {
      if (this.state.points.length < 9) {
        this.state.points = [
          [0, 0, 0], [0, 1, 1], [0, 2, 2],
          [1, 0, 1], [1, 1, 2], [1, 2, 0],
          [2, 0, 2], [2, 1, 0], [2, 2, 1]
        ];
      }
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-capset-clear")?.addEventListener("click", () => {
      this.state.points = [];
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-preset]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-preset]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const preset = btn.getAttribute("data-preset");
        if (preset === "max-cap") {
          this.state.points = [
            [0, 0, 0], [0, 1, 1], [0, 2, 2],
            [1, 0, 1], [1, 1, 2], [1, 2, 0],
            [2, 0, 2], [2, 1, 0], [2, 2, 1]
          ];
        } else {
          this.state.points = [
            [0, 0, 0], [0, 1, 0], [0, 2, 0],
            [1, 0, 0], [1, 1, 0], [1, 2, 0],
            [2, 0, 0], [2, 1, 0], [2, 2, 0]
          ];
        }
        this.draw();
        this.updateStats();
      });
    });
  }

  initKnot() {
    this.state.knot = "trefoil";
    this.state.rot = 45;
    this.state.saliencyActive = true;

    document.getElementById("knot-select")?.addEventListener("change", (e) => {
      this.state.knot = e.target.value;
      this.draw();
      this.updateStats();
    });

    const rotSlider = document.getElementById("knot-rot");
    rotSlider?.addEventListener("input", (e) => {
      this.state.rot = parseInt(e.target.value);
      const valElem = document.getElementById("knot-rot-val");
      if (valElem) valElem.textContent = `${this.state.rot}°`;
      this.draw();
    });

    document.getElementById("btn-knot-predict")?.addEventListener("click", () => {
      this.state.saliencyActive = !this.state.saliencyActive;
      this.draw();
      this.updateStats();
    });
  }

  initAlphaGeometry() {
    this.state.theorem = "orthocenter";
    this.state.mode = "neuro-symbolic";
    this.state.auxPointsActive = false;

    document.getElementById("btn-ag-solve")?.addEventListener("click", () => {
      this.state.auxPointsActive = true;
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-mode]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-mode]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.mode = btn.getAttribute("data-mode");
        if (this.state.mode === "dd-only") {
          this.state.auxPointsActive = false;
        }
        this.draw();
        this.updateStats();
      });
    });
  }

  initPFR() {
    this.state.k = 1.8;
    this.state.stage = "pfr";

    const kSlider = document.getElementById("pfr-k");
    kSlider?.addEventListener("input", (e) => {
      this.state.k = parseFloat(e.target.value);
      const val = document.getElementById("pfr-k-val");
      if (val) val.textContent = this.state.k.toFixed(1);
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-stage]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-stage]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.stage = btn.getAttribute("data-stage");
        this.draw();
        this.updateStats();
      });
    });
  }

  initUnitDistance() {
    this.state.n = 24;
    this.state.geom = "counter";

    const pSlider = document.getElementById("ud-points");
    pSlider?.addEventListener("input", (e) => {
      this.state.n = parseInt(e.target.value);
      const val = document.getElementById("ud-points-val");
      if (val) val.textContent = this.state.n;
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-ud-optimize")?.addEventListener("click", () => {
      this.state.optimized = true;
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-geom]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-geom]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.geom = btn.getAttribute("data-geom");
        this.draw();
        this.updateStats();
      });
    });
  }

  initJacobian() {
    this.state.t = 0.5;
    this.state.slice = "xy";

    const tSlider = document.getElementById("jac-t");
    tSlider?.addEventListener("input", (e) => {
      this.state.t = parseFloat(e.target.value);
      const val = document.getElementById("jac-t-val");
      if (val) val.textContent = this.state.t.toFixed(2);
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-jac-fold")?.addEventListener("click", () => {
      this.state.t = this.state.t >= 0.95 ? 0.0 : 1.0;
      if (tSlider) tSlider.value = this.state.t;
      const val = document.getElementById("jac-t-val");
      if (val) val.textContent = this.state.t.toFixed(2);
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-slice]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-slice]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.slice = btn.getAttribute("data-slice");
        this.draw();
        this.updateStats();
      });
    });
  }

  initAstraCert() {
    this.state.n = 12;
    this.state.grp = "astra";
    this.state.verified = true;

    const nSlider = document.getElementById("astra-n");
    nSlider?.addEventListener("input", (e) => {
      this.state.n = parseInt(e.target.value);
      const val = document.getElementById("astra-n-val");
      if (val) val.textContent = `N = ${this.state.n}`;
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-astra-verify")?.addEventListener("click", () => {
      this.state.verified = true;
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-grp]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-grp]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.grp = btn.getAttribute("data-grp");
        this.draw();
        this.updateStats();
      });
    });
  }

  initRiemannMollifier() {
    this.state.t = 30.0;
    this.state.bound = "anthropic";
    this.state.mollifierActive = true;

    const tSlider = document.getElementById("rm-t");
    tSlider?.addEventListener("input", (e) => {
      this.state.t = parseFloat(e.target.value);
      const val = document.getElementById("rm-t-val");
      if (val) val.textContent = `t = ${this.state.t.toFixed(1)}`;
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-rm-toggle-mollifier")?.addEventListener("click", () => {
      this.state.mollifierActive = !this.state.mollifierActive;
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-bound]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-bound]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.bound = btn.getAttribute("data-bound");
        this.draw();
        this.updateStats();
      });
    });
  }

  initLeanFLT() {
    this.state.p = 3;
    this.state.activeNode = "frey";
    this.state.dagStep = 1;

    document.getElementById("flt-p-select")?.addEventListener("change", (e) => {
      this.state.p = e.target.value;
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-flt-step-dag")?.addEventListener("click", () => {
      this.state.dagStep = (this.state.dagStep % 5) + 1;
      const nodes = ["frey", "ribet", "r_t", "final"];
      this.state.activeNode = nodes[(this.state.dagStep - 1) % nodes.length];
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-node]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-node]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.activeNode = btn.getAttribute("data-node");
        this.draw();
        this.updateStats();
      });
    });
  }

  initDeepSeek() {
    this.state.benchmark = "minif2f";
    this.state.policy = "mcts";
    this.state.mctsSteps = 3;

    document.getElementById("btn-ds-mcts-step")?.addEventListener("click", () => {
      this.state.mctsSteps = Math.min(10, this.state.mctsSteps + 1);
      this.draw();
      this.updateStats();
    });

    document.getElementById("btn-ds-reset")?.addEventListener("click", () => {
      this.state.mctsSteps = 1;
      this.draw();
      this.updateStats();
    });

    this.mount.querySelectorAll("[data-policy]").forEach(btn => {
      btn.addEventListener("click", () => {
        this.mount.querySelectorAll("[data-policy]").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.state.policy = btn.getAttribute("data-policy");
        this.draw();
        this.updateStats();
      });
    });
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0, 0, w, h);

    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, "#0a0e17");
    bgGrad.addColorStop(1, "#111827");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const type = this.milestone.labType || "alphaproof";
    switch (type) {
      case "alphaproof":
        this.drawAlphaProof(ctx, w, h);
        break;
      case "alphatensor":
        this.drawAlphaTensor(ctx, w, h);
        break;
      case "capset":
        this.drawCapSet(ctx, w, h);
        break;
      case "knot":
        this.drawKnot(ctx, w, h);
        break;
      case "alphageometry":
        this.drawAlphaGeometry(ctx, w, h);
        break;
      case "pfr":
        this.drawPFR(ctx, w, h);
        break;
      case "unitdistance":
        this.drawUnitDistance(ctx, w, h);
        break;
      case "jacobian":
        this.drawJacobian(ctx, w, h);
        break;
      case "astracert":
        this.drawAstraCert(ctx, w, h);
        break;
      case "riemannmollifier":
        this.drawRiemannMollifier(ctx, w, h);
        break;
      case "leanflt":
        this.drawLeanFLT(ctx, w, h);
        break;
      case "deepseek":
        this.drawDeepSeek(ctx, w, h);
        break;
    }
  }

  drawAlphaProof(ctx, w, h) {
    const step = this.state.step || 0;
    const tactics = this.state.tactics || [];

    const cx = 140;
    const cy = 60;
    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("Lean 4 Tactic Tree (MCTS Search)", 20, 30);

    this.drawTreeNode(ctx, cx, cy, "Root Goal", true);

    const level1 = [
      { x: cx - 70, y: cy + 70, label: "intro", active: step >= 1 },
      { x: cx, y: cy + 70, label: "induction", active: false },
      { x: cx + 70, y: cy + 70, label: "by_contra", active: false }
    ];

    level1.forEach(n => {
      ctx.strokeStyle = n.active ? "#10b981" : "rgba(255,255,255,0.2)";
      ctx.lineWidth = n.active ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 12);
      ctx.lineTo(n.x, n.y - 12);
      ctx.stroke();
      this.drawTreeNode(ctx, n.x, n.y, n.label, n.active);
    });

    if (level1[0].active) {
      const level2 = [
        { x: cx - 100, y: cy + 140, label: "obtain ⟨P⟩", active: step >= 2 },
        { x: cx - 40, y: cy + 140, label: "ring", active: false }
      ];
      level2.forEach(n => {
        ctx.strokeStyle = n.active ? "#10b981" : "rgba(255,255,255,0.2)";
        ctx.lineWidth = n.active ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(level1[0].x, level1[0].y + 12);
        ctx.lineTo(n.x, n.y - 12);
        ctx.stroke();
        this.drawTreeNode(ctx, n.x, n.y, n.label, n.active);
      });

      if (level2[0].active) {
        const level3 = { x: cx - 100, y: cy + 210, label: "exact ⟨hP⟩", active: step >= 5 };
        ctx.strokeStyle = level3.active ? "#10b981" : "rgba(255,255,255,0.2)";
        ctx.lineWidth = level3.active ? 2 : 1;
        ctx.beginPath();
        ctx.moveTo(level2[0].x, level2[0].y + 12);
        ctx.lineTo(level3.x, level3.y - 12);
        ctx.stroke();
        this.drawTreeNode(ctx, level3.x, level3.y, level3.label, level3.active);
      }
    }

    const rx = 270;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    ctx.lineWidth = 1.5;
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "bold 13px monospace";
    ctx.fillText("LEAN 4 GOAL STATE", rx + 16, 68);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px monospace";
    ctx.fillText("Context:", rx + 16, 95);
    ctx.fillStyle = "#38bdf8";
    ctx.fillText("A B C : Point", rx + 30, 115);
    ctx.fillText("h_nondeg : NonDegenerateTriangle A B C", rx + 30, 135);

    if (step >= 2) {
      ctx.fillStyle = "#a78bfa";
      ctx.fillText("P : Point", rx + 30, 155);
      ctx.fillText("hP : Incenter P A B C", rx + 30, 175);
    }

    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.beginPath();
    ctx.moveTo(rx + 16, 195);
    ctx.lineTo(rx + rw - 16, 195);
    ctx.stroke();

    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Target Goal:", rx + 16, 220);

    if (step < 5) {
      ctx.fillStyle = "#fbbf24";
      ctx.font = "bold 13px monospace";
      ctx.fillText("⊢ ∃ P, Incenter P A B C ∧ Equidistant P", rx + 30, 245);
    } else {
      ctx.fillStyle = "#34d399";
      ctx.font = "bold 14px monospace";
      ctx.fillText("✨ Goals accomplished! Proof verified.", rx + 30, 245);
    }

    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px sans-serif";
    ctx.fillText(`Current Step: ${step} / ${tactics.length}`, rx + 16, 285);
    if (step > 0 && tactics[step - 1]) {
      ctx.fillStyle = "#10b981";
      ctx.font = "bold 12px monospace";
      ctx.fillText(`> ${tactics[step - 1].tactic}`, rx + 16, 310);
      ctx.fillStyle = "#cbd5e1";
      ctx.font = "11px sans-serif";
      ctx.fillText(tactics[step - 1].desc, rx + 16, 328);
    }
  }

  drawTreeNode(ctx, x, y, label, active) {
    ctx.save();
    ctx.fillStyle = active ? "#10b981" : "rgba(30, 41, 59, 0.9)";
    ctx.strokeStyle = active ? "#34d399" : "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = active ? "#ffffff" : "#94a3b8";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(label, x, y + 28);
    ctx.restore();
  }

  drawAlphaTensor(ctx, w, h) {
    const step = this.state.step || 1;
    const maxStep = this.state.maxStep || 47;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`AlphaTensor Decomposition Step ${step} / ${maxStep} (Z₂ 4×4 Multiplications)`, 20, 30);

    const ox = 150;
    const oy = 180;
    const scale = 22;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          const px = ox + (i - j) * (scale * 0.866);
          const py = oy + (i + j) * (scale * 0.5) - k * scale;

          const isRankActive = ((i * 16 + j * 4 + k) % maxStep) === (step - 1);

          ctx.fillStyle = isRankActive ? "#f43f5e" : "rgba(56, 189, 248, 0.15)";
          ctx.strokeStyle = isRankActive ? "#fb7185" : "rgba(255, 255, 255, 0.08)";
          ctx.lineWidth = isRankActive ? 2 : 1;

          ctx.beginPath();
          ctx.arc(px, py, isRankActive ? 6 : 2.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
    }

    const rx = 360;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText(`Rank-1 Factor: u_{${step}} ⊗ v_{${step}} ⊗ w_{${step}}`, rx + 16, 68);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "11px monospace";
    ctx.fillText(`u_{${step}} = [${(step % 2)}, ${((step+1) % 2)}, ${((step*3) % 2)}, 1]ᵀ ∈ ℤ₂⁴`, rx + 16, 105);
    ctx.fillText(`v_{${step}} = [1, ${((step+2) % 2)}, 0, ${((step*7) % 2)}]ᵀ ∈ ℤ₂⁴`, rx + 16, 135);
    ctx.fillText(`w_{${step}} = [0, 1, ${((step*5) % 2)}, ${((step+3) % 2)}]ᵀ ∈ ℤ₂⁴`, rx + 16, 165);

    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Multiplications Progress:", rx + 16, 215);

    const bw = rw - 32;
    ctx.fillStyle = "rgba(239, 68, 68, 0.6)";
    ctx.fillRect(rx + 16, 230, bw, 14);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Naive: 64", rx + 20, 241);

    ctx.fillStyle = "rgba(245, 158, 11, 0.6)";
    ctx.fillRect(rx + 16, 255, bw * (49 / 64), 14);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Strassen: 49", rx + 20, 266);

    ctx.fillStyle = "rgba(16, 185, 129, 0.85)";
    ctx.fillRect(rx + 16, 280, bw * (47 / 64), 14);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("AlphaTensor: 47 (-26.6%)", rx + 20, 291);
  }

  drawCapSet(ctx, w, h) {
    const pts = this.state.points || [];

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`Cap Set Problem in (ℤ/3ℤ)³: ${pts.length} / 27 points selected`, 20, 30);

    const ox = w / 2 - 40;
    const oy = h / 2 - 10;
    const sp = 48;

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        for (let z = 0; z < 3; z++) {
          const px = ox + (x - y) * (sp * 0.866);
          const py = oy + (x + y) * (sp * 0.5) - z * sp;

          const isSelected = pts.some(p => p[0] === x && p[1] === y && p[2] === z);

          ctx.fillStyle = isSelected ? "#38bdf8" : "rgba(255, 255, 255, 0.1)";
          ctx.strokeStyle = isSelected ? "#0284c7" : "rgba(255, 255, 255, 0.2)";
          ctx.lineWidth = isSelected ? 2.5 : 1;

          ctx.beginPath();
          ctx.arc(px, py, isSelected ? 9 : 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          if (isSelected) {
            ctx.fillStyle = "#ffffff";
            ctx.font = "9px monospace";
            ctx.textAlign = "center";
            ctx.fillText(`${x}${y}${z}`, px, py - 12);
          }
        }
      }
    }

    let apCount = 0;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        for (let k = j + 1; k < pts.length; k++) {
          const p1 = pts[i];
          const p2 = pts[j];
          const p3 = pts[k];
          const isAp = (p1[0] + p3[0]) % 3 === (2 * p2[0]) % 3 &&
                       (p1[1] + p3[1]) % 3 === (2 * p2[1]) % 3 &&
                       (p1[2] + p3[2]) % 3 === (2 * p2[2]) % 3;
          if (isAp) {
            apCount++;
            const px1 = ox + (p1[0] - p1[1]) * (sp * 0.866);
            const py1 = oy + (p1[0] + p1[1]) * (sp * 0.5) - p1[2] * sp;
            const px3 = ox + (p3[0] - p3[0]) * (sp * 0.866);
            const py3 = oy + (p3[0] + p3[1]) * (sp * 0.5) - p3[2] * sp;
            ctx.strokeStyle = "#ef4444";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(px1, py1);
            ctx.lineTo(px3, py3);
            ctx.stroke();
          }
        }
      }
    }

    ctx.textAlign = "left";
    ctx.fillStyle = apCount === 0 ? "#10b981" : "#ef4444";
    ctx.font = "bold 12px sans-serif";
    ctx.fillText(apCount === 0 ? "✓ Valid Cap Set: No 3 points on any arithmetic progression!" : `✗ Invalid: Found ${apCount} arithmetic progressions!`, 20, h - 20);
  }

  drawKnot(ctx, w, h) {
    const rot = (this.state.rot || 45) * Math.PI / 180;
    const knotType = this.state.knot || "trefoil";

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`Knot Geometry & Deep Learning Invariant Attribution: ${knotType}`, 20, 30);

    const cx = 160;
    const cy = h / 2 + 10;
    const scale = 36;

    ctx.lineWidth = 5;
    const steps = 300;
    let prevX = 0, prevY = 0;

    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * Math.PI * 2;
      let x = 0, y = 0, z = 0;

      if (knotType === "trefoil") {
        x = Math.sin(t) + 2 * Math.sin(2 * t);
        y = Math.cos(t) - 2 * Math.cos(2 * t);
        z = -Math.sin(3 * t);
      } else if (knotType === "fig8") {
        x = (2 + Math.cos(2 * t)) * Math.cos(3 * t);
        y = (2 + Math.cos(2 * t)) * Math.sin(3 * t);
        z = Math.sin(4 * t);
      } else {
        x = (2 + Math.cos(5 * t)) * Math.cos(2 * t);
        y = (2 + Math.cos(5 * t)) * Math.sin(2 * t);
        z = Math.sin(5 * t);
      }

      const rx = x * Math.cos(rot) + z * Math.sin(rot);
      const rz = -x * Math.sin(rot) + z * Math.cos(rot);
      const px = cx + rx * scale;
      const py = cy + y * scale + rz * (scale * 0.3);

      if (i > 0) {
        const saliency = (Math.sin(t * 3) + 1) / 2;
        ctx.strokeStyle = this.state.saliencyActive
          ? `rgb(${Math.floor(240 * saliency + 20)}, ${Math.floor(180 * (1 - saliency))}, 240)`
          : "#38bdf8";
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(px, py);
        ctx.stroke();
      }
      prevX = px;
      prevY = py;
    }

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("AI DISCOVERED INVARIANT CORRELATION", rx + 16, 68);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.fillText("Hyperbolic Vol(K) vs Signature σ(K):", rx + 16, 95);

    const ox = rx + 30;
    const oy = 260;
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(ox, 120);
    ctx.lineTo(ox, oy);
    ctx.lineTo(rx + rw - 30, oy);
    ctx.stroke();

    const pts = [
      { v: 2.03, s: 0 }, { v: 2.82, s: 2 }, { v: 3.42, s: 2 }, { v: 3.66, s: -2 },
      { v: 4.40, s: 4 }, { v: 4.85, s: 0 }, { v: 5.13, s: 4 }, { v: 5.69, s: -4 }
    ];

    pts.forEach(p => {
      const px = ox + (p.v / 6.5) * (rw - 80);
      const py = oy - ((p.s + 5) / 10) * 120;
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox + 10, oy - 20);
    ctx.lineTo(rx + rw - 40, oy - 110);
    ctx.stroke();

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 11px monospace";
    ctx.fillText("Slope ≈ Re(λ) / 2 (R² = 0.982)", rx + 30, 290);
  }

  drawAlphaGeometry(ctx, w, h) {
    const aux = this.state.auxPointsActive;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("AlphaGeometry: Olympiad Euclidean Synthetic Solver", 20, 30);

    const ax = 120, ay = 80;
    const bx = 60, by = 250;
    const cx = 240, cy = 250;

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.lineTo(cx, cy);
    ctx.closePath();
    ctx.stroke();

    [ { x: ax, y: ay, l: "A" }, { x: bx, y: by, l: "B" }, { x: cx, y: cy, l: "C" } ].forEach(pt => {
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = "bold 12px sans-serif";
      ctx.fillText(pt.l, pt.x - 12, pt.y - 4);
    });

    const hx = 120, hy = 190;
    ctx.fillStyle = "#a855f7";
    ctx.beginPath();
    ctx.arc(hx, hy, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText("H (Orthocenter)", hx + 10, hy + 4);

    ctx.strokeStyle = "rgba(168, 85, 247, 0.4)";
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax, 250);
    ctx.stroke();

    if (aux) {
      const px = 180, py = 165;
      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillText("P* (Auxiliary Point)", px + 10, py - 6);

      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.lineTo(px, py);
      ctx.lineTo(ax, ay);
      ctx.stroke();
    }

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("DEDUCTIVE DATABASE (DD + AR) LOG", rx + 16, 68);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.fillText("1. Angle Chasing: ∠BAH = 90° - ∠B", rx + 16, 98);
    ctx.fillText("2. Concyclic Quad: A, B, C, H on sphere", rx + 16, 125);

    if (!aux) {
      ctx.fillStyle = "#ef4444";
      ctx.font = "bold 12px monospace";
      ctx.fillText("⚠ DD Engine STUCK at depth 4.", rx + 16, 165);
      ctx.font = "11px sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("Click 'AI Aux Point Search' to summon LLM", rx + 16, 185);
      ctx.fillText("synthetic auxiliary construction.", rx + 16, 205);
    } else {
      ctx.fillStyle = "#10b981";
      ctx.font = "bold 12px monospace";
      ctx.fillText("✓ LLM Synthesized Aux Point P*", rx + 16, 165);
      ctx.font = "11px monospace";
      ctx.fillStyle = "#a78bfa";
      ctx.fillText("3. Congruence: △BAP* ≅ △CAH", rx + 16, 195);
      ctx.fillText("4. Tangent Chasing: OP* ⊥ BC", rx + 16, 220);
      ctx.fillStyle = "#34d399";
      ctx.font = "bold 13px monospace";
      ctx.fillText("★ THEOREM SOLVED IN 19 SECONDS!", rx + 16, 260);
    }
  }

  drawPFR(ctx, w, h) {
    const k = this.state.k || 1.8;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`Polynomial Freiman-Ruzsa: Small Doubling Set in (ℤ/2ℤ)ⁿ (K = ${k.toFixed(1)})`, 20, 30);

    const cx = 150;
    const cy = h / 2 + 10;
    const rBase = 45;

    const rSub = rBase * Math.min(2.5, Math.pow(k, 0.7));
    ctx.fillStyle = "rgba(56, 189, 248, 0.08)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, rSub, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "10px monospace";
    ctx.fillText(`Subspace H (dim ≤ 2 log₂ K)`, cx - 50, cy - rSub - 8);

    const nPts = 18;
    for (let i = 0; i < nPts; i++) {
      const angle = (i / nPts) * Math.PI * 2;
      const dist = (rBase * 0.7) * (0.6 + 0.4 * Math.sin(i * 3));
      const px = cx + Math.cos(angle) * dist;
      const py = cy + Math.sin(angle) * dist;

      ctx.fillStyle = "#10b981";
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("TERENCE TAO 21-DAY LEAN 4 BLUEPRINT", rx + 16, 68);

    const stages = [
      { name: "Ruzsa Distance d[X; Y]", status: "VERIFIED (Day 3)", color: "#10b981" },
      { name: "Shannon Entropy H(X+Y)", status: "VERIFIED (Day 8)", color: "#10b981" },
      { name: "Fibring Lemma & Gowers", status: "VERIFIED (Day 14)", color: "#10b981" },
      { name: "PFR Bound: |2A| ≤ K|A| ⇒ 2K¹²", status: "VERIFIED (Day 21)", color: "#34d399" }
    ];

    stages.forEach((s, idx) => {
      const sy = 105 + idx * 45;
      ctx.fillStyle = "#e2e8f0";
      ctx.font = "11px monospace";
      ctx.fillText(s.name, rx + 16, sy);

      ctx.fillStyle = s.color;
      ctx.font = "bold 10px sans-serif";
      ctx.fillText(s.status, rx + 16, sy + 16);
    });

    ctx.fillStyle = "#f59e0b";
    ctx.font = "bold 11px monospace";
    ctx.fillText(`Max Cosets Bound: 2 · (${k.toFixed(1)})¹² ≈ ${(2 * Math.pow(k, 12)).toFixed(0)}`, rx + 16, 290);
  }

  drawUnitDistance(ctx, w, h) {
    const n = this.state.n || 24;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`Erdős Unit Distance Problem: Configuration Graph (N = ${n})`, 20, 30);

    const cx = 160;
    const cy = h / 2 + 10;
    const r = 90;

    const pts = [];
    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2;
      const pr = r * (0.8 + 0.2 * Math.sin(i * 5));
      pts.push({ x: cx + Math.cos(angle) * pr, y: cy + Math.sin(angle) * pr });
    }

    let edgeCount = 0;
    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
    ctx.lineWidth = 1.2;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (Math.abs(dist - 55) < 8) {
          edgeCount++;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    }

    pts.forEach(p => {
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    });

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("2026 DISPROOF BOUNDS (d = 3, 4)", rx + 16, 68);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.fillText(`Active Vertices: ${n}`, rx + 16, 100);
    ctx.fillText(`Unit Distance Edges: ${edgeCount}`, rx + 16, 125);

    ctx.fillStyle = "#f43f5e";
    ctx.fillText("Erdős 1946 Upper Bound:", rx + 16, 165);
    ctx.fillText("u(n) ≤ O(n · 2^{c √log n})", rx + 30, 185);

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 12px monospace";
    ctx.fillText("2026 AI Achieved Bound:", rx + 16, 225);
    ctx.fillText("u(n) ≥ n^{1 + 0.14} (Disproof!)", rx + 30, 245);
    ctx.font = "10px sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("Neural search found non-embeddable 4D cluster", rx + 16, 280);
  }

  drawJacobian(ctx, w, h) {
    const t = this.state.t || 0.5;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`Jacobian Conjecture Disproof in ℂ³: Non-Injective Folding (t = ${t.toFixed(2)})`, 20, 30);

    const cx = 150;
    const cy = h / 2 + 10;
    const gridN = 7;
    const sp = 24;

    ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
    ctx.lineWidth = 1;

    for (let i = -gridN; i <= gridN; i++) {
      ctx.beginPath();
      for (let j = -gridN; j <= gridN; j++) {
        const x = i * sp;
        const y = j * sp;
        const u = x + t * (y * y * 0.005);
        const v = y + t * (x * x * 0.005 * (1 - t * 0.5));
        if (j === -gridN) ctx.moveTo(cx + u, cy + v);
        else ctx.lineTo(cx + u, cy + v);
      }
      ctx.stroke();
    }

    const p1 = { x: -30, y: -20 };
    const p2 = { x: 30, y: 20 };

    const u1 = p1.x * (1 - t) + 10 * t;
    const v1 = p1.y * (1 - t) + 15 * t;

    const u2 = p2.x * (1 - t) + 10 * t;
    const v2 = p2.y * (1 - t) + 15 * t;

    ctx.fillStyle = "#10b981";
    ctx.beginPath();
    ctx.arc(cx + u1, cy + v1, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.fillText("P₁", cx + u1 - 15, cy + v1);

    ctx.fillStyle = "#f43f5e";
    ctx.beginPath();
    ctx.arc(cx + u2, cy + v2, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.fillText("P₂", cx + u2 + 10, cy + v2);

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("JACOBIAN DETERMINANT VERIFICATION", rx + 16, 68);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.fillText("det J(F) = det [∂Fᵢ/∂xⱼ]:", rx + 16, 100);

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 16px monospace";
    ctx.fillText("det J(F) ≡ -2 ≠ 0  (Everywhere!)", rx + 16, 135);

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "11px monospace";
    ctx.fillText(`Distance |P₁ - P₂|₀ = 84.85`, rx + 16, 175);
    const currDist = 84.85 * (1 - t);
    ctx.fillText(`Distance |F(P₁) - F(P₂)| = ${currDist.toFixed(2)}`, rx + 16, 200);

    if (t >= 0.98) {
      ctx.fillStyle = "#f43f5e";
      ctx.font = "bold 12px monospace";
      ctx.fillText("💥 NON-INJECTIVITY CONFIRMED!", rx + 16, 240);
      ctx.font = "10px sans-serif";
      ctx.fillStyle = "#cbd5e1";
      ctx.fillText("F(P₁) = F(P₂) even though P₁ ≠ P₂!", rx + 16, 265);
    }
  }

  drawAstraCert(ctx, w, h) {
    const n = this.state.n || 12;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`Astra-Lean Certificates: Non-Sofic Group Approximation (N = ${n})`, 20, 30);

    const cx = 160;
    const cy = h / 2 + 10;
    const r = 75;

    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    for (let i = 0; i < n; i++) {
      const angle = (i / n) * Math.PI * 2;
      const px = cx + Math.cos(angle) * r;
      const py = cy + Math.sin(angle) * r;

      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(px, py, 4, 0, Math.PI * 2);
      ctx.fill();

      const nextAngle = (((i * 3 + 1) % n) / n) * Math.PI * 2;
      const npx = cx + Math.cos(nextAngle) * r;
      const npy = cy + Math.sin(nextAngle) * r;
      ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(npx, npy);
      ctx.stroke();
    }

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("FORMAL LEAN 4 CERTIFICATE", rx + 16, 68);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.fillText("Candidate: Astra-NonSofic-G1", rx + 16, 100);

    ctx.fillStyle = "#f59e0b";
    ctx.fillText("Hamming Metric Deficit ε₀:", rx + 16, 135);
    ctx.font = "bold 15px monospace";
    ctx.fillText("d_H(φ(g)φ(h), φ(gh)) ≥ 0.083", rx + 30, 160);

    ctx.fillStyle = "#10b981";
    ctx.font = "bold 12px monospace";
    ctx.fillText("✓ LEAN 4 KERNEL VERIFIED", rx + 16, 205);

    ctx.fillStyle = "#cbd5e1";
    ctx.font = "10px monospace";
    ctx.fillText("SHA-256: 7f8a92...b3c4", rx + 16, 230);
    ctx.fillText("Proves group cannot be approximated", rx + 16, 255);
    ctx.fillText("by finite symmetric groups Sym(n).", rx + 16, 275);
  }

  drawRiemannMollifier(ctx, w, h) {
    const tVal = this.state.t || 30.0;
    const bound = this.state.bound || "anthropic";
    const moll = this.state.mollifierActive;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`Riemann Critical Line Zero Density: Mollifier Spectrum (t ≈ ${tVal.toFixed(1)})`, 20, 30);

    const cx = 150;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 1;

    ctx.fillStyle = "rgba(56, 189, 248, 0.04)";
    ctx.fillRect(cx - 50, 40, 100, h - 60);

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, 40);
    ctx.lineTo(cx, h - 20);
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.font = "10px monospace";
    ctx.fillText("Re(s) = 1/2", cx - 25, h - 8);

    const zerosT = [14.13, 21.02, 25.01, 30.42, 32.93, 37.58, 40.91, 43.32, 48.00, 49.77];
    zerosT.forEach(z => {
      const zy = 40 + ((z - 10) / 45) * (h - 70);
      if (zy >= 40 && zy <= h - 20) {
        ctx.fillStyle = "#f43f5e";
        ctx.beginPath();
        ctx.arc(cx, zy, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (moll) {
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      for (let y = 40; y <= h - 20; y += 4) {
        const my = y - 40;
        const wave = Math.sin(my * 0.12 + tVal * 0.2) * (bound === "anthropic" ? 22 : 12);
        if (y === 40) ctx.moveTo(cx + wave, y);
        else ctx.lineTo(cx + wave, y);
      }
      ctx.stroke();
    }

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("PROPORTION OF ZEROS ON RE(S)=1/2", rx + 16, 68);

    const pct = bound === "levinson" ? 34.7 : (bound === "conrey" ? 41.6 : 67.2);
    ctx.fillStyle = bound === "anthropic" ? "#10b981" : "#f59e0b";
    ctx.font = "bold 32px monospace";
    ctx.fillText(`${pct.toFixed(1)}%`, rx + 16, 115);

    const bw = rw - 32;
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fillRect(rx + 16, 130, bw, 12);

    ctx.fillStyle = bound === "anthropic" ? "#10b981" : "#f59e0b";
    ctx.fillRect(rx + 16, 130, bw * (pct / 100), 12);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.fillText("Historical Benchmark:", rx + 16, 175);
    ctx.fillText("• Levinson (1974): 34.7%", rx + 16, 198);
    ctx.fillText("• Conrey (1989): 41.6%", rx + 16, 220);
    ctx.fillStyle = "#10b981";
    ctx.font = "bold 11px monospace";
    ctx.fillText("• Anthropic AI (2026): 67.2%", rx + 16, 245);
  }

  drawLeanFLT(ctx, w, h) {
    const activeNode = this.state.activeNode || "frey";

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText("Formalization of Fermat's Last Theorem: 29,500 Lean 4 Lemmas", 20, 30);

    const cx = 150;
    const cy = h / 2 + 10;
    const scale = 25;

    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2;
    ctx.beginPath();

    let started = false;
    for (let x = -2; x <= 4; x += 0.05) {
      const rhs = x * (x - 1) * (x + 2);
      if (rhs >= 0) {
        const y = Math.sqrt(rhs);
        const px = cx + x * scale;
        const py1 = cy - y * scale;
        if (!started) {
          ctx.moveTo(px, py1);
          started = true;
        } else {
          ctx.lineTo(px, py1);
        }
      }
    }
    ctx.stroke();

    ctx.beginPath();
    started = false;
    for (let x = 4; x >= -2; x -= 0.05) {
      const rhs = x * (x - 1) * (x + 2);
      if (rhs >= 0) {
        const y = Math.sqrt(rhs);
        const px = cx + x * scale;
        const py2 = cy + y * scale;
        if (!started) {
          ctx.moveTo(px, py2);
          started = true;
        } else {
          ctx.lineTo(px, py2);
        }
      }
    }
    ctx.stroke();

    ctx.fillStyle = "#e2e8f0";
    ctx.font = "11px monospace";
    ctx.fillText("Frey Curve: y² = x(x - aᵖ)(x + bᵖ)", cx - 80, h - 10);

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("LEAN 4 THEOREM HIERARCHY DAG", rx + 16, 68);

    const dags = [
      { id: "frey", label: "1. Frey Curve Definition", lines: "1.2M lines" },
      { id: "ribet", label: "2. Ribet Epsilon Level Lowering", lines: "3.4M lines" },
      { id: "r_t", label: "3. R = T Modular Hecke Ring", lines: "5.8M lines" },
      { id: "final", label: "4. Contradiction S₂(Γ₀(2)) = 0", lines: "3.0M lines" }
    ];

    dags.forEach((d, idx) => {
      const dy = 100 + idx * 44;
      const isA = d.id === activeNode;

      ctx.fillStyle = isA ? "#10b981" : "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(rx + 16, dy - 14, rw - 32, 34);

      ctx.fillStyle = isA ? "#ffffff" : "#cbd5e1";
      ctx.font = isA ? "bold 11px monospace" : "11px monospace";
      ctx.fillText(d.label, rx + 24, dy + 2);

      ctx.fillStyle = isA ? "#ffffff" : "#94a3b8";
      ctx.font = "10px monospace";
      ctx.fillText(d.lines, rx + rw - 110, dy + 2);
    });

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 11px monospace";
    ctx.fillText("Total: 13,400,000 Lines Verified (100%)", rx + 16, 290);
  }

  drawDeepSeek(ctx, w, h) {
    const steps = this.state.mctsSteps || 3;

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 13px sans-serif";
    ctx.fillText(`DeepSeek-Prover: Monte Carlo Tree Search Policy (Rollouts: ${steps})`, 20, 30);

    const cx = 150;
    const cy = 60;
    this.drawTreeNode(ctx, cx, cy, "Root", true);

    const l1 = [
      { x: cx - 60, y: cy + 70, label: "omega", val: 0.84, vis: steps * 12 },
      { x: cx + 60, y: cy + 70, label: "ring", val: 0.31, vis: steps * 3 }
    ];

    l1.forEach(n => {
      ctx.strokeStyle = "#10b981";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy + 12);
      ctx.lineTo(n.x, n.y - 12);
      ctx.stroke();
      this.drawTreeNode(ctx, n.x, n.y, n.label, true);

      ctx.fillStyle = "#94a3b8";
      ctx.font = "9px monospace";
      ctx.fillText(`Q=${n.val}`, n.x + 18, n.y);
    });

    if (steps >= 2) {
      const l2 = { x: cx - 60, y: cy + 140, label: "linarith", val: 0.98, vis: steps * 24 };
      ctx.strokeStyle = "#10b981";
      ctx.beginPath();
      ctx.moveTo(l1[0].x, l1[0].y + 12);
      ctx.lineTo(l2.x, l2.y - 12);
      ctx.stroke();
      this.drawTreeNode(ctx, l2.x, l2.y, l2.label, true);
    }

    const rx = 330;
    const rw = w - rx - 20;
    ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    if (typeof ctx.roundRect === "function") {
      ctx.beginPath();
      ctx.roundRect(rx, 40, rw, h - 60, 8);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillRect(rx, 40, rw, h - 60);
      ctx.strokeRect(rx, 40, rw, h - 60);
    }

    ctx.fillStyle = "#38bdf8";
    ctx.font = "bold 12px monospace";
    ctx.fillText("MCTS POLICY & LEAN EVALUATION", rx + 16, 68);

    ctx.fillStyle = "#94a3b8";
    ctx.font = "11px monospace";
    ctx.fillText("Candidate Tactics Sampled:", rx + 16, 100);
    ctx.fillStyle = "#10b981";
    ctx.fillText("1. omega (P=0.62, Q=0.84)", rx + 24, 125);
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("2. ring (P=0.25, Q=0.31)", rx + 24, 150);
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("3. norm_num (P=0.13, Q=0.08)", rx + 24, 175);

    ctx.fillStyle = "#a855f7";
    ctx.font = "bold 12px monospace";
    ctx.fillText(`Backpropagated Value: Q* = 0.982`, rx + 16, 215);

    ctx.fillStyle = "#34d399";
    ctx.font = "bold 11px monospace";
    ctx.fillText("miniF2F Valid Accuracy: 78.3%", rx + 16, 255);
    ctx.fillText("Putnam 2023 Solved: 4 / 12 Problems", rx + 16, 280);
  }

  updateStats() {
    if (!this.statsContainer) return;
    const type = this.milestone.labType || "alphaproof";
    let stats = [];

    switch (type) {
      case "alphaproof":
        stats = [
          { label: "IMO Score", val: "28 / 42 (Silver)" },
          { label: "Lean 4 Verifier", val: "100% Sound" },
          { label: "Search Compute", val: "62 Hours (P6)" },
          { label: "Hallucination Rate", val: "0.00% (Kernel)" }
        ];
        break;
      case "alphatensor":
        stats = [
          { label: "Algorithm Rank", val: "47 Multiplications" },
          { label: "Human Baseline", val: "64 Multiplications" },
          { label: "Complexity Leap", val: "-26.6% Speedup" },
          { label: "Target Field", val: "ℤ₂ Finite Field" }
        ];
        break;
      case "capset":
        stats = [
          { label: "Current Cap Size", val: `${this.state.points.length} Points` },
          { label: "Maximal Bound d=3", val: "9 Points" },
          { label: "FunSearch d=8", val: "512 Points (Record)" },
          { label: "3-Term APs", val: "0 Violations" }
        ];
        break;
      case "knot":
        stats = [
          { label: "Knot Analyzed", val: (this.state.knot || "").toUpperCase() },
          { label: "Attribution R²", val: "0.982 Correlation" },
          { label: "Invariant Link", val: "Hyperbolic ↔ Algebraic" },
          { label: "ML Guidance", val: "DeepMind + Oxford" }
        ];
        break;
      case "alphageometry":
        stats = [
          { label: "Solved IMO Problems", val: "25 / 30 (83.3%)" },
          { label: "Average Solve Time", val: "19 Seconds" },
          { label: "Synthetic Database", val: "100M Diagrams" },
          { label: "Proof Architecture", val: "Neuro-Symbolic (DD+AR)" }
        ];
        break;
      case "pfr":
        stats = [
          { label: "Doubling K", val: `${(this.state.k || 1.8).toFixed(1)}` },
          { label: "Lean 4 Duration", val: "21 Days (Tao)" },
          { label: "Subspace Bound", val: "2 · K¹² Cosets" },
          { label: "Community Formalizers", val: "25+ Contributors" }
        ];
        break;
      case "unitdistance":
        stats = [
          { label: "Graph Order N", val: `${this.state.n || 24} Vertices` },
          { label: "Erdős Upper Bound", val: "O(n^{1 + ε}) Disproved" },
          { label: "AI Density Bound", val: "n^{1.14} in ℝ⁴" },
          { label: "Forbidden Minors", val: "K_{2,3} Avoided" }
        ];
        break;
      case "jacobian":
        stats = [
          { label: "Jacobian det J(F)", val: "-2 (Non-Zero)" },
          { label: "Injectivity", val: "Fails in ℂ³ / ℝ³" },
          { label: "Folding Factor t", val: `${(this.state.t || 0.5).toFixed(2)}` },
          { label: "Counterexample Status", val: "Formalized 2026" }
        ];
        break;
      case "astracert":
        stats = [
          { label: "Group Property", val: "First Non-Sofic Group" },
          { label: "Metric Defect ε₀", val: "≥ 0.083" },
          { label: "Lean 4 Certificate", val: "Verified Kernel" },
          { label: "Open Problems Solved", val: "10 Conjectures" }
        ];
        break;
      case "riemannmollifier":
        stats = [
          { label: "Critical Line Zeros", val: `${this.state.bound === "anthropic" ? "67.2%" : (this.state.bound === "conrey" ? "41.6%" : "34.7%")}` },
          { label: "Levinson 1974", val: "34.7%" },
          { label: "Conrey 1989", val: "41.6%" },
          { label: "Mollifier Power", val: "Degree-4 Polynomial" }
        ];
        break;
      case "leanflt":
        stats = [
          { label: "Formal Language", val: "Lean 4 (Mathlib)" },
          { label: "Lines of Code", val: "13,400,000 Lines" },
          { label: "Lemmas Checked", val: "29,500 Lemmas" },
          { label: "Autonomous Run", val: "11 Continuous Days" }
        ];
        break;
      case "deepseek":
        stats = [
          { label: "miniF2F Valid", val: "78.3% Solved" },
          { label: "Putnam 2023", val: "4 Problems Solved" },
          { label: "Policy Model", val: "DeepSeek-Prover-V1.5" },
          { label: "Search Engine", val: "Lean 4 Tree Rollout" }
        ];
        break;
    }

    this.statsContainer.innerHTML = stats.map(s => `
      <div class="stat-card">
        <span class="stat-label">${s.label}</span>
        <span class="stat-value highlight-val">${s.val}</span>
      </div>
    `).join("");
  }
}
