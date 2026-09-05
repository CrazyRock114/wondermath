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
      if (conj) this.renderDetailContent(conj);
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

    container.innerHTML = `
      <section class="detail-hero animate-fade-in">
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

        <div class="detail-analogy-box">
          <strong>💡 ${i18n.t("concept_overview_label")}</strong>
          <p style="margin-top: 0.35rem;">${gradeData.analogy}</p>
        </div>
      </section>

      <section class="sim-stage-box animate-fade-in">
        <div class="sim-stage-header">
          <div>
            <h3>${i18n.t("sim_header_title")}</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              ${i18n.t("sim_header_sub")}
            </p>
          </div>
        </div>

        <div id="sim-mount-point">
          ${this.getSimulationTemplate(conj.id)}
        </div>

        <div class="sim-stats-grid" id="sim-stats-container"></div>
      </section>

      <section class="sim-stage-box animate-fade-in">
        <div class="detail-tabs">
          <button class="tab-btn active" data-tab="rules">${i18n.t("tab_rules")}</button>
          <button class="tab-btn" data-tab="history">${i18n.t("tab_history")}</button>
          <button class="tab-btn" data-tab="lean">${i18n.t("tab_lean")}</button>
        </div>

        <div class="tab-content">
          <div class="tab-pane active" id="tab-rules">
            <h4 style="margin-bottom: 0.75rem; color: var(--accent-cyan);">${i18n.t("rules_title")}</h4>
            <ul class="english-points" style="margin-bottom: 1.5rem;">
              ${gradeData.rules.map(r => `<li>${r}</li>`).join('')}
            </ul>

            <h4 style="margin-bottom: 0.75rem; color: var(--accent-rose);">${i18n.t("mystery_title")}</h4>
            <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem;">
              ${gradeData.mystery}
            </p>

            <div class="lean-tip-box">
              <span class="tip-icon">🌟</span>
              <p><strong>${i18n.t("fun_fact_label")}</strong> ${gradeData.funFact}</p>
            </div>
          </div>

          <div class="tab-pane" id="tab-history">
            <h4 style="margin-bottom: 0.75rem;">${i18n.t("history_journey_title")}</h4>
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
          </div>

          <div class="tab-pane" id="tab-lean">
            <div style="margin-bottom: 1rem;">
              <span class="ai-chip">${i18n.t("lean_header_title")}</span>
              <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">
                ${i18n.t("lean_header_sub")}
              </p>
            </div>
            <pre class="lean-code-editor"><code>${conj.leanCode}</code></pre>
          </div>
        </div>
      </section>
    `;

    container.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        container.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        container.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const tabKey = btn.getAttribute("data-tab");
        const pane = container.querySelector(`#tab-${tabKey}`);
        if (pane) pane.classList.add("active");
      });
    });
  }

  getSimulationTemplate(id) {
    if (id === "collatz") {
      return `
        <div class="sim-controls-bar">
          <div class="input-slider-group">
            <label>N:</label>
            <input type="number" id="collatz-input" class="custom-input" value="27" min="1" max="100000">
            <button class="btn-primary" id="btn-collatz-run">Launch Orbit</button>
            <button class="btn-secondary" id="btn-collatz-rand">🎲 Random</button>
          </div>
          <div class="input-slider-group">
            <label>Rule:</label>
            <select id="collatz-rule-select" class="custom-select">
              <option value="3,1" selected>Standard 3n + 1</option>
              <option value="5,1">Variant 5n + 1 (Divergent!)</option>
              <option value="3,-1">Variant 3n - 1 (Multiple Cycles!)</option>
            </select>
          </div>
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
          <h4 style="margin-bottom: 0.5rem; font-size: 0.95rem; color: var(--accent-cyan);">The Goldbach Comet (N = 4 to 1,000)</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            Each dot represents an even number. The vertical height shows the number of different prime pairs that sum to it!
          </p>
          <div class="sim-canvas-container" style="height: 250px;">
            <canvas id="goldbach-comet-canvas"></canvas>
          </div>
        </div>
      `;
    } else if (id === "four-color") {
      return `<div id="four-color-sim-container"></div>`;
    } else if (id === "erdos-distance") {
      return `
        <div class="sim-controls-bar">
          <div class="input-slider-group">
            <span>Points:</span>
            <button class="btn-sm" id="btn-ud-triangle">🔺 Triangle (3 pts)</button>
            <button class="btn-sm" id="btn-ud-rhombus">💎 Rhombus (4 pts)</button>
            <button class="btn-sm" id="btn-ud-moser">🕸️ Moser Spindle (7 pts)</button>
            <button class="btn-sm" id="btn-ud-ai">🤖 2026 AI Tower</button>
          </div>
          <button class="btn-secondary" id="btn-ud-clear">Clear Board</button>
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
            <label>Warp: <strong id="jacobian-warp-val" class="highlight-val">0.5</strong></label>
            <input type="range" id="jacobian-warp-slider" min="0" max="1.5" step="0.05" value="0.5">
          </div>
          <div class="input-slider-group">
            <label>Transformation Type:</label>
            <select id="jacobian-mode-select" class="custom-select">
              <option value="standard_shear" selected>2D Triangular Shear (det J = 1)</option>
              <option value="claude_3d_slice">Claude 2026 3D Non-Invertible Slice (det J = -2)</option>
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

      document.getElementById("btn-collatz-run")?.addEventListener("click", () => {
        const input = document.getElementById("collatz-input");
        const ruleVal = document.getElementById("collatz-rule-select")?.value.split(',').map(Number) || [3, 1];
        sim.calculateTrajectory(input.value, ruleVal[0], ruleVal[1]);
      });

      document.getElementById("btn-collatz-rand")?.addEventListener("click", () => {
        const rand = Math.floor(Math.random() * 200) + 15;
        const input = document.getElementById("collatz-input");
        if (input) input.value = rand;
        const ruleVal = document.getElementById("collatz-rule-select")?.value.split(',').map(Number) || [3, 1];
        sim.calculateTrajectory(rand, ruleVal[0], ruleVal[1]);
      });

      document.getElementById("collatz-rule-select")?.addEventListener("change", (e) => {
        const [a, b] = e.target.value.split(',').map(Number);
        const input = document.getElementById("collatz-input");
        sim.calculateTrajectory(input.value || 27, a, b);
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
