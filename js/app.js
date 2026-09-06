/**
 * WonderMath Application Bootstrap & Router
 * Manages view states, grade-level adaptation, multi-language switching,
 * simulation lifecycle, and AI lab initialization.
 */

import { getLocalizedConjectures } from "./data/conjectures.js";
import { getLocalizedAIBreakthroughs } from "./data/ai_breakthroughs.js";
import { i18n } from "./i18n/i18n.js";

// Import Simulations
import { CollatzSimulation } from "./simulations/collatz.js";
import { PrimeGapsSimulation } from "./simulations/prime_gaps.js";
import { GoldbachSimulation } from "./simulations/goldbach.js";
import { FourColorSimulation } from "./simulations/four_color.js";
import { UnitDistanceSimulation } from "./simulations/unit_distance.js";
import { RiemannZerosSimulation } from "./simulations/riemann_zeros.js";
import { JacobianGridSimulation } from "./simulations/jacobian_grid.js";
import { EllipticCurveSimulation } from "./simulations/elliptic_curve.js";
import { LessonExporter } from "./export/lesson_exporter.js";

// Import AI Lab
import { AIConjectureExplorer } from "./ai_lab/explorer.js";
import { LeanViewer } from "./ai_lab/lean_viewer.js";
import { CounterexampleHunter } from "./ai_lab/counterexample_sim.js";

class WonderMathApp {
  constructor() {
    this.currentGrade = "explorers"; // 'explorers', 'investigators', 'pioneers'
    this.currentView = "gallery";
    this.activeConjectureId = null;
    this.activeSimulation = null;

    // AI Lab singletons
    this.aiExplorer = null;
    this.leanViewer = null;
    this.counterHunter = null;
  }

  get conjectures() {
    return getLocalizedConjectures(i18n.getLanguage());
  }

  init() {
    this.setupLanguageSelector();
    this.setupNavigation();
    this.setupGradeSwitcher();

    // Initial DOM translations
    i18n.applyDOMTranslations();

    this.renderGallery();
    this.renderAIBreakthroughs();

    // Initialize AI Lab & Lean modules
    this.aiExplorer = new AIConjectureExplorer("ai-explorer-container");
    this.aiExplorer.init();

    this.counterHunter = new CounterexampleHunter("counterexample-hunter-container");
    this.counterHunter.init();

    this.leanViewer = new LeanViewer("lean-viewer-container");
    this.leanViewer.init();

    // Subscribe to language changes
    i18n.onLanguageChange((lang) => {
      this.handleLanguageChange(lang);
    });

    // Handle initial hash routing if present
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      if (["gallery", "ai-lab", "timeline", "lean-view"].includes(hash)) {
        this.switchView(hash);
      } else {
        const conj = this.conjectures.find(c => c.id === hash);
        if (conj) this.openConjecture(conj.id);
      }
    }
  }

  setupLanguageSelector() {
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.value = i18n.getLanguage();
      langSelect.addEventListener("change", (e) => {
        i18n.setLanguage(e.target.value);
      });
    }
  }

  handleLanguageChange(lang) {
    const langSelect = document.getElementById("lang-select");
    if (langSelect && langSelect.value !== lang) {
      langSelect.value = lang;
    }

    this.renderGallery();
    this.renderAIBreakthroughs();

    if (this.currentView === "detail" && this.activeConjectureId) {
      const conj = this.conjectures.find(c => c.id === this.activeConjectureId);
      if (conj) {
        this.renderDetailContent(conj);
        this.initConjectureSimulation(conj);
      }
    }

    this.aiExplorer?.render();
    this.leanViewer?.render();
    this.counterHunter?.render();
  }

  setupNavigation() {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        const view = link.getAttribute("data-view");
        this.switchView(view);
      });
    });

    document.getElementById("nav-brand")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.switchView("gallery");
    });

    document.getElementById("btn-back-to-gallery")?.addEventListener("click", () => {
      this.switchView("gallery");
    });
  }

  setupGradeSwitcher() {
    document.querySelectorAll(".grade-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const grade = btn.getAttribute("data-grade");
        this.setGradeLevel(grade);
      });
    });
  }

  setGradeLevel(grade) {
    this.currentGrade = grade;
    document.querySelectorAll(".grade-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-grade") === grade);
    });

    this.renderGallery();
    if (this.activeConjectureId && this.currentView === "detail") {
      const conj = this.conjectures.find(c => c.id === this.activeConjectureId);
      if (conj) {
        this.renderDetailContent(conj);
        this.initConjectureSimulation(conj);
      }
    }
  }

  switchView(viewId) {
    this.currentView = viewId;
    window.location.hash = viewId;

    document.querySelectorAll(".nav-link").forEach(l => {
      l.classList.toggle("active", l.getAttribute("data-view") === viewId);
    });

    document.querySelectorAll(".view-container").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.classList.add("active");
      target.classList.add("animate-fade-in");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderGallery() {
    const container = document.getElementById("conjectures-grid-container");
    if (!container) return;

    container.innerHTML = this.conjectures.map(c => {
      const gradeData = c.grades[this.currentGrade];
      let badgeClass = "badge-open";
      if (c.statusBadge.includes("SOLVED") || c.statusBadge.includes("反例") || c.statusBadge.includes("WIDERLEGT")) badgeClass = "badge-ai";
      else if (c.statusBadge.includes("FORMALIZED") || c.statusBadge.includes("形式化")) badgeClass = "badge-formalized";
      else if (c.statusBadge.includes("PROVEN") || c.statusBadge.includes("証明済み") || c.statusBadge.includes("已证明")) badgeClass = "badge-proven";
      else if (c.statusBadge.includes("ACTIVE") || c.statusBadge.includes("FRONTIER") || c.statusBadge.includes("前沿") || c.statusBadge.includes("最前線")) badgeClass = "badge-ai";

      return `
        <article class="conjecture-card animate-fade-in" data-id="${c.id}">
          <div class="card-header-row">
            <span class="card-icon">${c.icon}</span>
            <span class="status-badge ${badgeClass}">${c.statusBadge}</span>
          </div>
          <h3>${c.name}</h3>
          <div class="card-subtitle">${c.subtitle}</div>
          <p class="card-tagline">${gradeData.tagline}</p>
          <div class="card-footer-meta">
            <span>${c.field.split('&')[0]}</span>
            <span class="card-cta">${i18n.t("btn_explore")}</span>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll(".conjecture-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        this.openConjecture(id);
      });
    });
  }

  openConjecture(conjId) {
    this.activeConjectureId = conjId;
    const conj = this.conjectures.find(c => c.id === conjId);
    if (!conj) return;

    this.switchView("detail");
    this.renderDetailContent(conj);
    this.initConjectureSimulation(conj);
  }

  renderDetailContent(conj) {
    const container = document.getElementById("conjecture-detail-content");
    if (!container) return;

    const gradeData = conj.grades[this.currentGrade];

    let badgeClass = "badge-open";
    if (conj.statusBadge.includes("SOLVED") || conj.statusBadge.includes("反例") || conj.statusBadge.includes("WIDERLEGT")) badgeClass = "badge-ai";
    else if (conj.statusBadge.includes("FORMALIZED") || conj.statusBadge.includes("形式化")) badgeClass = "badge-formalized";
    else if (conj.statusBadge.includes("PROVEN") || conj.statusBadge.includes("証明済み") || conj.statusBadge.includes("已证明")) badgeClass = "badge-proven";

    const gradeName = i18n.t(`grade_${this.currentGrade}`);

    container.innerHTML = `
      <section class="detail-hero animate-fade-in">
        <div class="grade-tier-indicator grade-${this.currentGrade}">
          <span class="tier-pill">${gradeName}</span>
          <span class="tier-focus-text">🎯 ${gradeData.tagline}</span>
        </div>

        <div class="detail-header-row">
          <div class="detail-title-group">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span style="font-size: 2.5rem;">${conj.icon}</span>
              <div>
                <h2>${conj.name}</h2>
                <div class="card-subtitle">${conj.subtitle} • <em>${conj.field}</em></div>
              </div>
            </div>
          </div>
          <span class="status-badge ${badgeClass}" style="font-size: 0.85rem; padding: 0.4rem 0.85rem;">
            ${conj.statusBadge}
          </span>
        </div>
      </section>

      <!-- 4-Zone Quick Jump Navigation (from mathexperiment & edulab) -->
      <nav class="zone-nav-bar" aria-label="4-Zone Navigation">
        <button class="zone-nav-pill active" data-target="zone-principles">${i18n.t("nav_zone_1")}</button>
        <button class="zone-nav-pill" data-target="zone-history">${i18n.t("nav_zone_2")}</button>
        <button class="zone-nav-pill" data-target="zone-lab">${i18n.t("nav_zone_3")}</button>
        <button class="zone-nav-pill" data-target="zone-extension">${i18n.t("nav_zone_4")}</button>
      </nav>

      <!-- ZONE ①: Principles & Formulations -->
      <section class="zone-card animate-fade-in" id="zone-principles">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z1">${i18n.t("zone_1_pill")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("zone_1_title")}</h3>
              <p>${i18n.t("zone_1_sub")}</p>
            </div>
          </div>
        </div>

        <div class="detail-analogy-box" style="margin-bottom: 1.5rem;">
          <strong>💡 ${i18n.t("concept_overview_label")} (${gradeName})</strong>
          <p style="margin-top: 0.35rem;">${gradeData.analogy}</p>
        </div>

        <h4 style="margin-bottom: 0.75rem; color: var(--accent-cyan); font-size: 1.05rem;">${i18n.t("rules_title")} (${gradeName})</h4>
        <ul class="english-points" style="margin-bottom: 1.5rem;">
          ${gradeData.rules.map(r => `<li>${r}</li>`).join('')}
        </ul>

        <h4 style="margin-bottom: 0.75rem; color: var(--accent-rose); font-size: 1.05rem;">${i18n.t("mystery_title")} (${gradeName})</h4>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">
          ${gradeData.mystery}
        </p>

        <div class="lean-tip-box">
          <span class="tip-icon">🌟</span>
          <p><strong>${i18n.t("fun_fact_label")}</strong> ${gradeData.funFact}</p>
        </div>
      </section>

      <!-- ZONE ②: Historical Chronicles & Milestones -->
      <section class="zone-card animate-fade-in" id="zone-history">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z2">${i18n.t("zone_2_pill")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("zone_2_title")}</h3>
              <p>${i18n.t("zone_2_sub")}</p>
            </div>
          </div>
        </div>

        <div class="history-timeline">
          ${conj.history.map(item => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-year">${item.year}</span>
                <span class="timeline-author">— ${item.author}</span>
                <div class="timeline-note">${item.note}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ZONE ③: Hands-On Interactive Laboratory -->
      <section class="zone-card animate-fade-in" id="zone-lab">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z3">${i18n.t("zone_3_pill")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("zone_3_title")}</h3>
              <p>${i18n.t("zone_3_sub")}</p>
            </div>
          </div>
        </div>

        <div id="sim-mount-point">
          ${this.getSimulationTemplate(conj.id)}
        </div>

        <div class="sim-stats-grid" id="sim-stats-container"></div>
      </section>

      <!-- ZONE ④: Extension, AI Exploration & Lean 4 Formalization -->
      <section class="zone-card animate-fade-in" id="zone-extension">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z4">${i18n.t("zone_4_pill")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("zone_4_title")}</h3>
              <p>${i18n.t("zone_4_sub")}</p>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <span class="ai-chip">${i18n.t("lean_header_title")}</span>
          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">
            ${i18n.t("lean_header_sub")}
          </p>
        </div>
        <pre class="lean-code-editor"><code>${conj.leanCode}</code></pre>

        <!-- Lesson Exporter Banner (from edulab) -->
        <div class="export-lesson-banner">
          <div class="export-lesson-info">
            <h4>📄 ${i18n.t("btn_export_lesson")}</h4>
            <p>${i18n.t("export_toast_msg")}</p>
          </div>
          <button class="btn-export-action" id="btn-export-lesson-action">
            ${i18n.t("btn_export_lesson")}
          </button>
        </div>
      </section>
    `;

    // Hook up zone navigation smooth scrolling
    container.querySelectorAll(".zone-nav-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        container.querySelectorAll(".zone-nav-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const targetId = pill.getAttribute("data-target");
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Hook up offline lesson export
    document.getElementById("btn-export-lesson-action")?.addEventListener("click", () => {
      LessonExporter.exportLesson(conj, this.currentGrade);
      this.showToast(i18n.t("export_toast_title"), i18n.t("export_toast_msg"));
    });
  }

  showToast(title, msg) {
    const existing = document.querySelector(".wm-toast");
    if (existing) existing.remove();
    const toast = document.createElement("div");
    toast.className = "wm-toast";
    toast.innerHTML = `<span>✅</span><div><strong>${title}</strong><div style="font-size:0.8rem; color:#94a3b8;">${msg}</div></div>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(20px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  getSimulationTemplate(id) {
    if (id === "collatz") {
      return `
        <div class="sim-controls-bar">
          <div class="input-slider-group">
            <label>N:</label>
            <input type="number" id="collatz-input" class="custom-input" value="27" min="1" max="1000000">
            <button class="btn-control-step" id="btn-collatz-step">${i18n.t("btn_step")}</button>
            <button class="btn-primary" id="btn-collatz-scan">${i18n.t("btn_scan")}</button>
            <button class="btn-secondary" id="btn-collatz-reset">${i18n.t("btn_reset")}</button>
            <button class="btn-secondary" id="btn-collatz-rand">${i18n.t("sim_random")}</button>
          </div>
          <div class="input-slider-group">
            <label>${i18n.t("speed_label")}</label>
            <select id="collatz-speed-select" class="custom-select" style="width: 80px;">
              <option value="0.5">0.5x</option>
              <option value="1" selected>1x</option>
              <option value="2">2x</option>
              <option value="5">5x</option>
            </select>
            <label>${i18n.t("sim_rule")}</label>
            <select id="collatz-rule-select" class="custom-select">
              <option value="3,1" selected>${i18n.t("collatz_std")}</option>
              <option value="5,1">${i18n.t("collatz_5n")}</option>
              <option value="3,-1">${i18n.t("collatz_3n_minus_1")}</option>
            </select>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem; flex-wrap: wrap;">
          <span style="font-size: 0.8rem; color: var(--text-muted);">${i18n.t("presets_label")}</span>
          <button class="preset-pill-btn" data-seed="27">N = 27 (Everest: 111 steps)</button>
          <button class="preset-pill-btn" data-seed="97">N = 97 (118 steps)</button>
          <button class="preset-pill-btn" data-seed="871">N = 871 (178 steps)</button>
        </div>
        <div class="sim-canvas-container">
          <canvas id="collatz-canvas"></canvas>
        </div>
      `;
    } else if (id === "twin-primes") {
      return `<div id="primes-sim-container"></div>`;
    } else if (id === "goldbach") {
      return `
        <div id="goldbach-sim-container"></div>
        <div style="margin-top: 1.5rem;">
          <h4 style="margin-bottom: 0.5rem; font-size: 0.95rem; color: var(--accent-cyan);">${i18n.t("goldbach_comet_title")}</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            ${i18n.t("goldbach_comet_desc")}
          </p>
          <div class="sim-canvas-container" style="height: 250px;">
            <canvas id="goldbach-comet-canvas"></canvas>
          </div>
        </div>
      `;
    } else if (id === "four-color") {
      return `<div id="four-color-sim-container"></div>`;
    } else if (id === "fermat") {
      return `
        <div class="sim-controls-bar">
          <div class="input-slider-group">
            <label>${i18n.t("ec_param_a")}</label>
            <input type="number" id="ec-param-a" class="custom-input" value="-4" step="0.5" style="width: 70px;">
            <label>${i18n.t("ec_param_b")}</label>
            <input type="number" id="ec-param-b" class="custom-input" value="0" step="0.5" style="width: 70px;">
            <button class="btn-primary" id="btn-ec-apply">${i18n.t("ec_double_p")}</button>
          </div>
          <div class="input-slider-group">
            <label>${i18n.t("presets_label")}</label>
            <select id="ec-preset-select" class="custom-select">
              <option value="standard" selected>${i18n.t("ec_preset_std")}</option>
              <option value="rank1">${i18n.t("ec_preset_rank1")}</option>
              <option value="frey">${i18n.t("ec_preset_frey")}</option>
            </select>
          </div>
        </div>
        <div class="detail-analogy-box" style="margin-bottom: 1rem; background: rgba(244,63,94,0.08); border-color: var(--accent-rose);">
          <strong style="color: var(--accent-rose);">🔗 ${i18n.t("ec_connection_fermat")}</strong>
          <p style="margin-top: 0.35rem; font-size: 0.88rem; color: #cbd5e1;">${i18n.t("ec_connection_desc")}</p>
        </div>
        <div class="sim-canvas-container" style="height: 420px;">
          <canvas id="elliptic-canvas"></canvas>
        </div>
      `;
    } else if (id === "erdos-distance") {
      return `
        <div class="sim-controls-bar">
          <div class="input-slider-group">
            <span>${i18n.t("ud_stat_pts")}:</span>
            <button class="btn-sm" id="btn-ud-triangle">${i18n.t("btn_ud_triangle")}</button>
            <button class="btn-sm" id="btn-ud-rhombus">${i18n.t("btn_ud_rhombus")}</button>
            <button class="btn-sm" id="btn-ud-moser">${i18n.t("btn_ud_moser")}</button>
            <button class="btn-sm" id="btn-ud-ai">${i18n.t("btn_ud_ai")}</button>
          </div>
          <button class="btn-secondary" id="btn-ud-clear">${i18n.t("btn_clear_board")}</button>
        </div>
        <div class="sim-canvas-container">
          <canvas id="unit-distance-canvas"></canvas>
        </div>
      `;
    } else if (id === "riemann") {
      return `
        <div class="sim-canvas-container">
          <canvas id="riemann-canvas"></canvas>
        </div>
      `;
    } else if (id === "jacobian") {
      return `
        <div class="sim-controls-bar">
          <div class="input-slider-group">
            <label>${i18n.t("jacobian_warp_label")} <strong id="jacobian-warp-val" class="highlight-val">0.5</strong></label>
            <input type="range" id="jacobian-warp-slider" min="0" max="1.5" step="0.05" value="0.5">
          </div>
          <div class="input-slider-group">
            <label>${i18n.t("jacobian_type_label")}</label>
            <select id="jacobian-mode-select" class="custom-select">
              <option value="standard_shear" selected>${i18n.t("jacobian_2d_shear")}</option>
              <option value="claude_3d_slice">${i18n.t("jacobian_3d_claude")}</option>
            </select>
          </div>
        </div>
        <div class="sim-canvas-container">
          <canvas id="jacobian-canvas"></canvas>
        </div>
      `;
    }
    return `<p>Simulation loading...</p>`;
  }

  initConjectureSimulation(conj) {
    if (conj.id === "collatz") {
      const sim = new CollatzSimulation("collatz-canvas", "sim-stats-container");
      this.activeSimulation = sim;
      sim.calculateTrajectory(27, 3, 1);

      const scanBtn = document.getElementById("btn-collatz-scan");

      document.getElementById("btn-collatz-step")?.addEventListener("click", () => {
        sim.step();
      });

      scanBtn?.addEventListener("click", () => {
        sim.toggleScan(scanBtn);
      });

      document.getElementById("btn-collatz-reset")?.addEventListener("click", () => {
        sim.reset(scanBtn);
      });

      document.getElementById("btn-collatz-rand")?.addEventListener("click", () => {
        const rand = Math.floor(Math.random() * 200) + 15;
        const input = document.getElementById("collatz-input");
        if (input) input.value = rand;
        const ruleVal = document.getElementById("collatz-rule-select")?.value.split(',').map(Number) || [3, 1];
        sim.calculateTrajectory(rand, ruleVal[0], ruleVal[1]);
        sim.play(scanBtn);
      });

      document.getElementById("collatz-speed-select")?.addEventListener("change", (e) => {
        sim.setSpeed(e.target.value);
      });

      document.getElementById("collatz-rule-select")?.addEventListener("change", (e) => {
        const [a, b] = e.target.value.split(',').map(Number);
        const input = document.getElementById("collatz-input");
        sim.calculateTrajectory(input?.value || 27, a, b);
      });

      document.querySelectorAll(".preset-pill-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const seed = parseInt(btn.getAttribute("data-seed"), 10);
          sim.loadPreset(seed, scanBtn);
        });
      });
    } else if (conj.id === "fermat") {
      const sim = new EllipticCurveSimulation("elliptic-canvas", "sim-stats-container");
      this.activeSimulation = sim;

      document.getElementById("btn-ec-apply")?.addEventListener("click", () => {
        sim.doubleP();
      });

      const updateParams = () => {
        const a = document.getElementById("ec-param-a")?.value;
        const b = document.getElementById("ec-param-b")?.value;
        sim.setParams(a, b);
      };

      document.getElementById("ec-param-a")?.addEventListener("input", updateParams);
      document.getElementById("ec-param-b")?.addEventListener("input", updateParams);

      document.getElementById("ec-preset-select")?.addEventListener("change", (e) => {
        sim.loadPreset(e.target.value);
        const aInput = document.getElementById("ec-param-a");
        const bInput = document.getElementById("ec-param-b");
        if (aInput) aInput.value = sim.a;
        if (bInput) bInput.value = sim.b;
      });
    } else if (conj.id === "twin-primes") {
      const sim = new PrimeGapsSimulation("primes-sim-container", "sim-stats-container");
      this.activeSimulation = sim;
      sim.init();
    } else if (conj.id === "goldbach") {
      const sim = new GoldbachSimulation("goldbach-sim-container", "goldbach-comet-canvas", "sim-stats-container");
      this.activeSimulation = sim;
      sim.init();
    } else if (conj.id === "four-color") {
      const sim = new FourColorSimulation("four-color-sim-container", "sim-stats-container");
      this.activeSimulation = sim;
      sim.init();
    } else if (conj.id === "erdos-distance") {
      const sim = new UnitDistanceSimulation("unit-distance-canvas", "sim-stats-container");
      this.activeSimulation = sim;
      sim.init();

      document.getElementById("btn-ud-triangle")?.addEventListener("click", () => sim.loadPreset("triangle"));
      document.getElementById("btn-ud-rhombus")?.addEventListener("click", () => sim.loadPreset("rhombus"));
      document.getElementById("btn-ud-moser")?.addEventListener("click", () => sim.loadPreset("moser"));
      document.getElementById("btn-ud-ai")?.addEventListener("click", () => sim.loadPreset("ai_breakthrough"));
      document.getElementById("btn-ud-clear")?.addEventListener("click", () => sim.clear());
    } else if (conj.id === "riemann") {
      const sim = new RiemannZerosSimulation("riemann-canvas", "sim-stats-container");
      this.activeSimulation = sim;
      sim.init();
    } else if (conj.id === "jacobian") {
      const sim = new JacobianGridSimulation("jacobian-canvas", "sim-stats-container");
      this.activeSimulation = sim;
      sim.init();

      document.getElementById("jacobian-warp-slider")?.addEventListener("input", (e) => {
        const label = document.getElementById("jacobian-warp-val");
        if (label) label.innerText = e.target.value;
        sim.setWarp(e.target.value);
      });

      document.getElementById("jacobian-mode-select")?.addEventListener("change", (e) => {
        sim.setMode(e.target.value);
      });
    }
  }

  renderAIBreakthroughs() {
    const container = document.getElementById("ai-milestones-container");
    if (!container) return;

    const breakthroughs = getLocalizedAIBreakthroughs(i18n.getLanguage());

    container.innerHTML = `
      <div class="conjectures-grid">
        ${breakthroughs.map(m => `
          <div class="conjecture-card" style="cursor: default;">
            <div class="card-header-row">
              <span style="font-size: 1.1rem; font-weight: 700; color: var(--accent-cyan); font-family: var(--font-mono);">${m.year}</span>
              <span class="status-badge badge-ai">${m.badge}</span>
            </div>
            <h3>${m.achievement}</h3>
            <div class="card-subtitle"><strong>System:</strong> ${m.model} (${m.system})</div>
            <p class="card-tagline" style="margin-bottom: 0.75rem;">${m.description}</p>
            <div class="card-footer-meta">
              <span>${m.impact}</span>
              <span style="color: var(--accent-emerald);">${i18n.t("verified_badge")}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Bootstrap on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const app = new WonderMathApp();
  app.init();
  window.wonderMathApp = app;
});
