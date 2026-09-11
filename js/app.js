/**
 * WonderMath Application Bootstrap & Router
 * Manages view states, grade-level adaptation, multi-language switching,
 * simulation lifecycle, and AI lab initialization.
 */

import { getLocalizedConjectures } from "./data/conjectures.js";
import { getLocalizedAIBreakthroughs, getBreakthroughById } from "./data/ai_breakthroughs.js";
import { getConcreteWalkthroughHtml, getTierChallenges, getBreakthroughChallenges } from "./data/concrete_walkthroughs.js";
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
import { UniversalConjectureLab } from "./simulations/universal_lab.js";
import { AIBreakthroughLab } from "./simulations/ai_breakthrough_labs.js";

// Import AI Lab
import { AIConjectureExplorer } from "./ai_lab/explorer.js";
import { LeanViewer } from "./ai_lab/lean_viewer.js";
import { CounterexampleHunter } from "./ai_lab/counterexample_sim.js";

export class WonderMathApp {
  constructor() {
    this.currentGrade = "all"; // 'all', 'explorers', 'investigators', 'pioneers'
    this.currentView = "gallery";
    this.activeConjectureId = null;
    this.activeBreakthroughId = null;
    this.activeSimulation = null;
    this.searchQuery = "";
    this.activeCategoryFilter = "all";

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
    this.setupGalleryControls();

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
    this.handleRoute();
    window.addEventListener("hashchange", () => this.handleRoute());
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
    } else if (this.currentView === "breakthrough-detail" && this.activeBreakthroughId) {
      const milestone = getBreakthroughById(this.activeBreakthroughId, i18n.getLanguage());
      if (milestone) {
        if (this.activeSimulation && typeof this.activeSimulation.destroy === "function") {
          this.activeSimulation.destroy();
        }
        this.activeSimulation = null;
        this.renderBreakthroughDetail(milestone);
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

    if (this.currentView === "gallery") {
      this.renderGallery();
      return;
    }

    // In detail or breakthrough views, smoothly scroll to and spotlight the target tier
    const targetTierId = grade === "explorers" ? "tier-gr35"
      : grade === "investigators" ? "tier-gr68"
      : grade === "pioneers" ? "tier-gr912"
      : "zone-principles";

    const heroFocus = document.querySelector(".tier-focus-text");
    if (heroFocus) {
      if (this.activeConjectureId) {
        const conj = this.conjectures.find(c => c.id === this.activeConjectureId);
        if (conj) {
          const t = grade === "all" ? (conj.grades.investigators?.tagline || conj.grades.explorers?.tagline || conj.subtitle) : conj.grades[grade]?.tagline;
          if (t) heroFocus.textContent = "🎯 " + t;
        }
      } else if (this.activeBreakthroughId) {
        const milestone = getBreakthroughById(this.activeBreakthroughId, i18n.getLanguage());
        if (milestone) {
          const t = grade === "all" ? (milestone.grades?.investigators?.tagline || milestone.grades?.explorers?.tagline || milestone.subtitle) : milestone.grades?.[grade]?.tagline;
          if (t) heroFocus.textContent = "🎯 " + t;
        }
      }
    }

    const targetEl = document.getElementById(targetTierId);
    if (targetEl) {
      if (typeof targetEl.scrollIntoView === "function") {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (targetEl.classList) {
        targetEl.classList.remove("tier-spotlight");
        void targetEl.offsetWidth; // force DOM reflow to re-trigger pulse
        targetEl.classList.add("tier-spotlight");
        setTimeout(() => {
          targetEl.classList.remove("tier-spotlight");
        }, 1600);
      }
    }
  }

  switchView(viewId) {
    if (viewId !== "detail" && viewId !== "breakthrough-detail" && this.activeSimulation) {
      if (typeof this.activeSimulation.destroy === "function") {
        this.activeSimulation.destroy();
      }
      this.activeSimulation = null;
    }

    this.currentView = viewId;
    if (viewId !== "breakthrough-detail") {
      window.location.hash = viewId;
    }

    document.querySelectorAll(".nav-link").forEach(l => {
      const targetNav = viewId === "breakthrough-detail" ? "timeline" : viewId;
      l.classList.toggle("active", l.getAttribute("data-view") === targetNav);
    });

    document.querySelectorAll(".view-container").forEach(v => v.classList.remove("active"));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
      target.classList.add("active");
      target.classList.add("animate-fade-in");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  setupGalleryControls() {
    const searchInput = document.getElementById("conjecture-search-input");
    const clearBtn = document.getElementById("search-clear-btn");
    const filterPills = document.getElementById("category-filter-pills");

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        if (clearBtn) {
          clearBtn.style.display = this.searchQuery ? "flex" : "none";
        }
        this.renderGallery();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (searchInput) searchInput.value = "";
        this.searchQuery = "";
        clearBtn.style.display = "none";
        this.renderGallery();
      });
    }

    if (filterPills) {
      filterPills.querySelectorAll(".filter-pill").forEach(pill => {
        pill.addEventListener("click", () => {
          filterPills.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
          pill.classList.add("active");
          this.activeCategoryFilter = pill.getAttribute("data-filter") || "all";
          this.renderGallery();
        });
      });
    }
  }

  getFilteredConjectures() {
    let list = this.conjectures;

    if (this.activeCategoryFilter !== "all") {
      if (this.activeCategoryFilter === "millennium") {
        list = list.filter(c => c.isMillennium);
      } else if (this.activeCategoryFilter === "ai-frontier") {
        list = list.filter(c => c.isAIFrontier);
      } else {
        list = list.filter(c => c.category === this.activeCategoryFilter || c.domain === this.activeCategoryFilter);
      }
    }

    if (this.searchQuery && this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(c => {
        const nameMatch = c.name && c.name.toLowerCase().includes(q);
        const subMatch = c.subtitle && c.subtitle.toLowerCase().includes(q);
        const fieldMatch = c.field && c.field.toLowerCase().includes(q);
        const badgeMatch = c.statusBadge && c.statusBadge.toLowerCase().includes(q);
        const idMatch = c.id && c.id.toLowerCase().includes(q);
        const histMatch = c.history && c.history.some(h => 
          (h.author && h.author.toLowerCase().includes(q)) || 
          (h.note && h.note.toLowerCase().includes(q))
        );
        const curGrade = c.grades && (c.grades[this.currentGrade] || c.grades.explorers || c.grades.investigators || c.grades.pioneers);
        const gradeMatch = curGrade && (
          (curGrade.tagline && curGrade.tagline.toLowerCase().includes(q)) ||
          (curGrade.analogy && curGrade.analogy.toLowerCase().includes(q)) ||
          (curGrade.mystery && curGrade.mystery.toLowerCase().includes(q)) ||
          (curGrade.funFact && curGrade.funFact.toLowerCase().includes(q))
        );
        return nameMatch || subMatch || fieldMatch || badgeMatch || idMatch || histMatch || gradeMatch;
      });
    }

    return list;
  }

  renderGallery() {
    const container = document.getElementById("conjectures-grid-container");
    const countText = document.getElementById("results-count-text");
    if (!container) return;

    const filtered = this.getFilteredConjectures();

    if (countText) {
      const tpl = i18n.t("results_showing", "Showing {count} of {total} conjectures");
      countText.textContent = tpl.replace("{count}", filtered.length).replace("{total}", this.conjectures.length);
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="conjecture-empty-state">
          <span style="font-size: 3rem;">🔍</span>
          <h4>${i18n.t("no_results_found", "No conjectures match your search or filter.")}</h4>
          <p>${i18n.t("hero_sub_gallery")}</p>
          <button class="btn-primary" id="btn-empty-clear-filters">${i18n.t("btn_clear_filters", "Clear Filters")}</button>
        </div>
      `;
      document.getElementById("btn-empty-clear-filters")?.addEventListener("click", () => {
        const searchInput = document.getElementById("conjecture-search-input");
        const clearBtn = document.getElementById("search-clear-btn");
        if (searchInput) searchInput.value = "";
        if (clearBtn) clearBtn.style.display = "none";
        this.searchQuery = "";
        this.activeCategoryFilter = "all";
        const filterPills = document.getElementById("category-filter-pills");
        if (filterPills) {
          filterPills.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
          filterPills.querySelector('[data-filter="all"]')?.classList.add("active");
        }
        this.renderGallery();
      });
      return;
    }

    container.innerHTML = filtered.map(c => {
      const gradeData = (this.currentGrade === "all" || !c.grades[this.currentGrade])
        ? (c.grades.investigators || c.grades.explorers || c.grades.pioneers)
        : c.grades[this.currentGrade];
      let badgeClass = "badge-open";
      const sb = (c.statusBadge || "").toUpperCase();
      if (sb.includes("SOLVED") || sb.includes("BREAKTHROUGH") || sb.includes("SENSATION") || c.statusBadge.includes("反例") || c.statusBadge.includes("WIDERLEGT") || c.statusBadge.includes("破解")) badgeClass = "badge-ai";
      else if (sb.includes("FORMALIZED") || c.statusBadge.includes("形式化")) badgeClass = "badge-formalized";
      else if (sb.includes("PROVEN") || sb.includes("PROVED") || c.statusBadge.includes("証明済み") || c.statusBadge.includes("已证明") || c.statusBadge.includes("定理")) badgeClass = "badge-proven";
      else if (sb.includes("MILLENNIUM") || c.statusBadge.includes("千禧")) badgeClass = "badge-formalized";
      else if (sb.includes("ACTIVE") || sb.includes("FRONTIER") || c.statusBadge.includes("前沿") || c.statusBadge.includes("最前線")) badgeClass = "badge-ai";

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
            <span>${(c.field || "").split('&')[0]}</span>
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
    if (this.activeSimulation && typeof this.activeSimulation.destroy === "function") {
      this.activeSimulation.destroy();
    }
    this.activeSimulation = null;

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

    const lang = i18n.getLanguage();
    const exp = (conj.grades && conj.grades.explorers) || {};
    const inv = (conj.grades && conj.grades.investigators) || {};
    const pio = (conj.grades && conj.grades.pioneers) || {};
    const challenges = getTierChallenges(conj.id, lang);
    const concreteWalkthroughHtml = getConcreteWalkthroughHtml(conj, lang);

    let badgeClass = "badge-open";
    if (conj.statusBadge.includes("SOLVED") || conj.statusBadge.includes("反例") || conj.statusBadge.includes("WIDERLEGT")) badgeClass = "badge-ai";
    else if (conj.statusBadge.includes("FORMALIZED") || conj.statusBadge.includes("形式化")) badgeClass = "badge-formalized";
    else if (conj.statusBadge.includes("PROVEN") || conj.statusBadge.includes("証明済み") || conj.statusBadge.includes("已证明")) badgeClass = "badge-proven";

    container.innerHTML = `
      <section class="detail-hero animate-fade-in">
        <div class="grade-tier-indicator grade-all" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="tier-pill">🌟 ${i18n.t("grade_all")}</span>
            <span class="tier-focus-text">🎯 ${inv.tagline || exp.tagline || conj.subtitle}</span>
          </div>
          <div class="tier-nav-shortcuts" style="display: flex; gap: 0.4rem; align-items: center;">
            <button class="tier-jump-btn" data-target="tier-gr35" style="background: none; border: none; padding: 0; cursor: pointer;">
              <span class="level-tag tag-gr35">🎒 ${i18n.t("tag_gr35")}</span>
            </button>
            <button class="tier-jump-btn" data-target="tier-gr68" style="background: none; border: none; padding: 0; cursor: pointer;">
              <span class="level-tag tag-gr68">🔬 ${i18n.t("tag_gr68")}</span>
            </button>
            <button class="tier-jump-btn" data-target="tier-gr912" style="background: none; border: none; padding: 0; cursor: pointer;">
              <span class="level-tag tag-gr912">🚀 ${i18n.t("tag_gr912")}</span>
            </button>
          </div>
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

      <!-- 4-Zone Quick Jump Navigation -->
      <nav class="zone-nav-bar" aria-label="4-Zone Navigation">
        <button class="zone-nav-pill active" data-target="zone-principles">${i18n.t("nav_zone_1")}</button>
        <button class="zone-nav-pill" data-target="zone-history">${i18n.t("nav_zone_2")}</button>
        <button class="zone-nav-pill" data-target="zone-lab">${i18n.t("nav_zone_3")}</button>
        <button class="zone-nav-pill" data-target="zone-extension">${i18n.t("nav_zone_4")}</button>
      </nav>

      <!-- ZONE ①: Principles & Formulations (全阶梯贯通认知) -->
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

        <!-- Tier 1: Gr 3–5 Foundations -->
        <div class="tier-section" id="tier-gr35">
          <div class="tier-section-header">
            <h4 class="tier-section-title">
              <span class="tier-icon">🎒</span>
              <span>${i18n.t("tier_foundations")}</span>
              <span class="level-tag tag-gr35">${i18n.t("tag_gr35")}</span>
            </h4>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 1rem;">
            <strong style="color: #38bdf8;">💡 ${exp.tagline || i18n.t("concept_overview_label")}</strong>
            <p style="margin-top: 0.35rem; line-height: 1.6;">${exp.analogy || ""}</p>
          </div>
          ${exp.rules && exp.rules.length ? `
            <h5 style="margin: 0.75rem 0 0.5rem; color: var(--accent-cyan); font-size: 0.95rem; font-weight: 600;">
              📋 ${i18n.t("rules_title")}
            </h5>
            <ul class="english-points" style="margin-bottom: 1rem;">
              ${exp.rules.map(r => `<li>${r}</li>`).join('')}
            </ul>
          ` : ''}
        </div>

        <!-- Concrete Calculation Walkthrough (具象推演与真实数字手算) -->
        ${concreteWalkthroughHtml}

        <!-- Tier 2: Gr 6–8 Mechanics & Invariants -->
        <div class="tier-section" id="tier-gr68">
          <div class="tier-section-header">
            <h4 class="tier-section-title">
              <span class="tier-icon">🔬</span>
              <span>${i18n.t("tier_investigation")}</span>
              <span class="level-tag tag-gr68">${i18n.t("tag_gr68")}</span>
            </h4>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 1rem; border-left-color: var(--accent-purple);">
            <strong style="color: #c084fc;">⚙️ ${inv.tagline || i18n.t("tier_investigation")}</strong>
            <p style="margin-top: 0.35rem; line-height: 1.6;">${inv.analogy || ""}</p>
          </div>
          ${inv.rules && inv.rules.length ? `
            <h5 style="margin: 0.75rem 0 0.5rem; color: #c084fc; font-size: 0.95rem; font-weight: 600;">
              ⚖️ ${i18n.t("rules_title")}
            </h5>
            <ul class="english-points" style="margin-bottom: 1rem;">
              ${inv.rules.map(r => `<li>${r}</li>`).join('')}
            </ul>
          ` : ''}
        </div>

        <!-- Tier 3: Gr 9–12 Frontier Rigor & Proofs -->
        <div class="tier-section" id="tier-gr912">
          <div class="tier-section-header">
            <h4 class="tier-section-title">
              <span class="tier-icon">🚀</span>
              <span>${i18n.t("tier_frontier")}</span>
              <span class="level-tag tag-gr912">${i18n.t("tag_gr912")}</span>
            </h4>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 1rem; border-left-color: var(--accent-rose);">
            <strong style="color: #fb7185;">🏛️ ${pio.tagline || i18n.t("tier_frontier")}</strong>
            <p style="margin-top: 0.35rem; line-height: 1.6;">${pio.analogy || ""}</p>
          </div>
          ${pio.rules && pio.rules.length ? `
            <h5 style="margin: 0.75rem 0 0.5rem; color: #fb7185; font-size: 0.95rem; font-weight: 600;">
              📐 ${i18n.t("rules_title")}
            </h5>
            <ul class="english-points" style="margin-bottom: 1rem;">
              ${pio.rules.map(r => `<li>${r}</li>`).join('')}
            </ul>
          ` : ''}
        </div>

        <!-- Progressive Mystery Exploration (3-Tier View) -->
        <div style="margin-top: 1.75rem;">
          <h4 style="margin-bottom: 0.85rem; color: var(--accent-rose); font-size: 1.05rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>❓</span>
            <span>${i18n.t("mystery_title")}</span>
          </h4>
          <div class="mystery-tier-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
            <div class="detail-analogy-box" style="border-left-color: var(--accent-cyan); background: rgba(56, 189, 248, 0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <strong style="color: #38bdf8;">🎒 ${i18n.t("grade_explorers")}</strong>
                <span class="level-tag tag-gr35">${i18n.t("tag_gr35")}</span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: #cbd5e1; margin: 0;">${exp.mystery || ""}</p>
            </div>
            <div class="detail-analogy-box" style="border-left-color: var(--accent-purple); background: rgba(168, 85, 247, 0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <strong style="color: #c084fc;">🔬 ${i18n.t("grade_investigators")}</strong>
                <span class="level-tag tag-gr68">${i18n.t("tag_gr68")}</span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: #cbd5e1; margin: 0;">${inv.mystery || ""}</p>
            </div>
            <div class="detail-analogy-box" style="border-left-color: var(--accent-rose); background: rgba(244, 63, 94, 0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <strong style="color: #fb7185;">🚀 ${i18n.t("grade_pioneers")}</strong>
                <span class="level-tag tag-gr912">${i18n.t("tag_gr912")}</span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: #cbd5e1; margin: 0;">${pio.mystery || ""}</p>
            </div>
          </div>
        </div>

        <!-- Fun Fact Across Tiers -->
        <div class="lean-tip-box" style="margin-top: 1.25rem;">
          <span class="tip-icon">🌟</span>
          <p><strong>${i18n.t("fun_fact_label")}</strong> ${inv.funFact || exp.funFact || pio.funFact || ""}</p>
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

        <!-- Tiered Exploration Challenges (梯级探究任务) -->
        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 0.98rem; margin-bottom: 0.75rem; color: var(--accent-cyan); display: flex; align-items: center; gap: 0.4rem;">
            <span>🎯</span>
            <span>${i18n.t("lab_challenges_title")}</span>
          </h4>
          <div class="lab-challenge-grid">
            <div class="lab-challenge-card">
              <div class="lab-challenge-header">
                <span style="font-weight: 600; color: #38bdf8;">🎒 ${i18n.t("grade_explorers")}</span>
                <span class="level-tag tag-gr35">${i18n.t("tag_gr35")}</span>
              </div>
              <p>${challenges.explorers}</p>
            </div>
            <div class="lab-challenge-card">
              <div class="lab-challenge-header">
                <span style="font-weight: 600; color: #c084fc;">🔬 ${i18n.t("grade_investigators")}</span>
                <span class="level-tag tag-gr68">${i18n.t("tag_gr68")}</span>
              </div>
              <p>${challenges.investigators}</p>
            </div>
            <div class="lab-challenge-card">
              <div class="lab-challenge-header">
                <span style="font-weight: 600; color: #fb7185;">🚀 ${i18n.t("grade_pioneers")}</span>
                <span class="level-tag tag-gr912">${i18n.t("tag_gr912")}</span>
              </div>
              <p>${challenges.pioneers}</p>
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

    // Hook up tier quick jump buttons
    container.querySelectorAll(".tier-jump-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const el = document.getElementById(targetId);
        if (el) {
          if (typeof el.scrollIntoView === "function") {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          if (el.classList) {
            el.classList.remove("tier-spotlight");
            void el.offsetWidth;
            el.classList.add("tier-spotlight");
            setTimeout(() => el.classList.remove("tier-spotlight"), 1600);
          }
        }
      });
    });

    // Hook up zone navigation smooth scrolling
    container.querySelectorAll(".zone-nav-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        container.querySelectorAll(".zone-nav-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const targetId = pill.getAttribute("data-target");
        const el = document.getElementById(targetId);
        if (el && typeof el.scrollIntoView === "function") {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Hook up offline lesson export
    document.getElementById("btn-export-lesson-action")?.addEventListener("click", () => {
      LessonExporter.exportLesson(conj, this.currentGrade === "all" ? "investigators" : this.currentGrade);
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
    return `<div id="universal-lab-mount"></div>`;
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
    } else {
      const sim = new UniversalConjectureLab("sim-mount-point", "sim-stats-container", conj);
      this.activeSimulation = sim;
    }
  }

  handleRoute() {
    const raw = window.location.hash.replace(/^#/, "");
    if (!raw || raw === "gallery") {
      this.switchView("gallery");
    } else if (["ai-lab", "timeline", "lean-view"].includes(raw)) {
      this.switchView(raw);
    } else if (raw.startsWith("timeline/")) {
      const id = raw.replace("timeline/", "");
      this.openBreakthrough(id);
    } else if (raw.startsWith("breakthrough/")) {
      const id = raw.replace("breakthrough/", "");
      this.openBreakthrough(id);
    } else {
      const conj = this.conjectures.find(c => c.id === raw);
      if (conj) {
        this.openConjecture(conj.id);
      } else {
        const milestone = getBreakthroughById(raw, i18n.getLanguage());
        if (milestone) {
          this.openBreakthrough(milestone.id);
        }
      }
    }
  }

  renderAIBreakthroughs() {
    const container = document.getElementById("ai-milestones-container");
    if (!container) return;

    const breakthroughs = getLocalizedAIBreakthroughs(i18n.getLanguage());

    container.innerHTML = `
      <div class="conjectures-grid">
        ${breakthroughs.map(m => `
          <div class="conjecture-card ai-breakthrough-card" data-id="${m.id}">
            <div class="card-header-row">
              <span style="font-size: 1.1rem; font-weight: 700; color: var(--accent-cyan); font-family: var(--font-mono);">${m.year}</span>
              <span class="status-badge badge-ai">${m.badge}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.25rem;">
              <span style="font-size: 1.6rem;">${m.icon || "⚡"}</span>
              <h3 style="margin: 0; font-size: 1.15rem;">${m.title}</h3>
            </div>
            <div class="card-subtitle" style="margin-top: 0.4rem;"><strong>${i18n.t("system_label", "System:")}</strong> ${m.model} (${m.system})</div>
            <p class="card-tagline" style="margin-bottom: 0.75rem;">${m.description}</p>
            <div class="card-footer-meta">
              <span>${m.impact}</span>
              <span style="color: var(--accent-cyan); font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
                ${i18n.t("btn_explore_lab", "Explore Lab →")}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    container.querySelectorAll(".ai-breakthrough-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        this.openBreakthrough(id);
      });
    });
  }

  openBreakthrough(id) {
    if (this.activeSimulation && typeof this.activeSimulation.destroy === "function") {
      this.activeSimulation.destroy();
    }
    this.activeSimulation = null;

    this.activeBreakthroughId = id;
    const milestone = getBreakthroughById(id, i18n.getLanguage());
    if (!milestone) return;

    window.location.hash = `timeline/${id}`;
    this.switchView("breakthrough-detail");
    this.renderBreakthroughDetail(milestone);
  }

  renderBreakthroughDetail(milestone) {
    const container = document.getElementById("breakthrough-detail-content");
    if (!container) return;

    const lang = i18n.getLanguage();
    const exp = (milestone.grades && milestone.grades.explorers) || {};
    const inv = (milestone.grades && milestone.grades.investigators) || {};
    const pio = (milestone.grades && milestone.grades.pioneers) || {};
    const challenges = getBreakthroughChallenges(milestone.id, lang);

    container.innerHTML = `
      <div style="margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
        <button class="btn-outline" id="btn-back-to-timeline" style="display: inline-flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          ${i18n.t("btn_back_to_timeline", "← Back to 2021–2026 Milestones")}
        </button>
        <span class="status-badge badge-ai">${milestone.badge}</span>
      </div>

      <!-- Hero Banner -->
      <section class="breakthrough-hero animate-fade-in">
        <div class="grade-tier-indicator grade-all" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <span class="tier-pill">🌟 ${i18n.t("grade_all")}</span>
            <span class="tier-focus-text">🎯 ${inv.tagline || exp.tagline || milestone.subtitle || ""}</span>
          </div>
          <div class="tier-nav-shortcuts" style="display: flex; gap: 0.4rem; align-items: center;">
            <button class="tier-jump-btn" data-target="tier-gr35" style="background: none; border: none; padding: 0; cursor: pointer;">
              <span class="level-tag tag-gr35">🎒 ${i18n.t("tag_gr35")}</span>
            </button>
            <button class="tier-jump-btn" data-target="tier-gr68" style="background: none; border: none; padding: 0; cursor: pointer;">
              <span class="level-tag tag-gr68">🔬 ${i18n.t("tag_gr68")}</span>
            </button>
            <button class="tier-jump-btn" data-target="tier-gr912" style="background: none; border: none; padding: 0; cursor: pointer;">
              <span class="level-tag tag-gr912">🚀 ${i18n.t("tag_gr912")}</span>
            </button>
          </div>
        </div>

        <div style="display: flex; align-items: flex-start; gap: 1.25rem;">
          <span style="font-size: 3.5rem; line-height: 1;">${milestone.icon || "⚡"}</span>
          <div style="flex: 1;">
            <h2 style="font-size: 1.85rem; margin: 0 0 0.5rem 0;">${milestone.title}</h2>
            <div class="card-subtitle" style="font-size: 1.05rem; margin-bottom: 0.75rem;">
              <strong>${milestone.year} (${milestone.dateFull})</strong> • ${milestone.model} (${milestone.system})
            </div>
            <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              ${milestone.description}
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center;">
              <span class="status-badge badge-proven">${i18n.t("impact_label", "Impact:")} ${milestone.impact}</span>
              ${milestone.paperUrl ? `
                <a href="${milestone.paperUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.35rem 0.85rem; font-size: 0.85rem;">
                  📄 ${milestone.paperTitle || i18n.t("original_publication", "Original Publication")} ↗
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </section>

      <!-- Zone 1: Multi-Grade Adapted Learning Tiers (全阶梯贯通) -->
      <section class="zone-card animate-fade-in" id="zone-principles" style="margin-bottom: 2rem;">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z1">${i18n.t("ai_zone_1_pill", "Zone ① Differentiated Learning")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("ai_zone_1_title", "Multi-Tier Intuition & Mechanics")}</h3>
              <p>${i18n.t("ai_zone_1_sub", "Step-by-step cognitive escalation from elementary intuition to mathematical rigor.")}</p>
            </div>
          </div>
        </div>

        <!-- Tier 1: Gr 3–5 Foundations -->
        <div class="tier-section" id="tier-gr35">
          <div class="tier-section-header">
            <h4 class="tier-section-title">
              <span class="tier-icon">🎒</span>
              <span>${i18n.t("tier_foundations")}</span>
              <span class="level-tag tag-gr35">${i18n.t("tag_gr35")}</span>
            </h4>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 0.85rem;">
            <strong>${i18n.t("intuitive_analogy_label", "💡 Intuitive Analogy:")}</strong>
            <p style="margin: 0.35rem 0 0 0; line-height: 1.6;">${exp.analogy || ""}</p>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 1rem; border-left-color: var(--accent-cyan);">
            <strong style="color: #38bdf8;">${i18n.t("how_it_works_elem", "⚙️ How It Works (Elementary):")}</strong>
            <p style="margin: 0.35rem 0 0 0; line-height: 1.5; white-space: pre-line;">${exp.howItWorks || ""}</p>
          </div>
        </div>

        <!-- Tier 2: Gr 6–8 Mechanics -->
        <div class="tier-section" id="tier-gr68">
          <div class="tier-section-header">
            <h4 class="tier-section-title">
              <span class="tier-icon">🔬</span>
              <span>${i18n.t("tier_investigation")}</span>
              <span class="level-tag tag-gr68">${i18n.t("tag_gr68")}</span>
            </h4>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 0.85rem; border-left-color: var(--accent-purple);">
            <strong style="color: #c084fc;">${i18n.t("algorithmic_mechanics", "⚙️ Algorithmic Mechanics:")}</strong>
            <p style="margin: 0.35rem 0 0 0; line-height: 1.6;">${inv.analogy || ""}</p>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 1rem; border-left-color: var(--accent-purple);">
            <strong style="color: #c084fc;">${i18n.t("systematic_breakdown", "🔍 Systematic Breakdown:")}</strong>
            <p style="margin: 0.35rem 0 0 0; line-height: 1.5; white-space: pre-line;">${inv.howItWorks || ""}</p>
          </div>
        </div>

        <!-- Tier 3: Gr 9–12 Frontier Rigor -->
        <div class="tier-section" id="tier-gr912">
          <div class="tier-section-header">
            <h4 class="tier-section-title">
              <span class="tier-icon">🚀</span>
              <span>${i18n.t("tier_frontier")}</span>
              <span class="level-tag tag-gr912">${i18n.t("tag_gr912")}</span>
            </h4>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 0.85rem; border-left-color: var(--accent-rose);">
            <strong style="color: #fb7185;">${i18n.t("frontier_architecture", "🏛️ Frontier Architecture:")}</strong>
            <p style="margin: 0.35rem 0 0 0; line-height: 1.6;">${pio.analogy || ""}</p>
          </div>
          <div class="detail-analogy-box" style="margin-bottom: 1rem; border-left-color: var(--accent-rose);">
            <strong style="color: #fb7185;">${i18n.t("formal_kernel_loss", "📐 Formal Kernel & Loss Mechanics:")}</strong>
            <p style="margin: 0.35rem 0 0 0; line-height: 1.5; white-space: pre-line;">${pio.howItWorks || ""}</p>
          </div>
        </div>

        <!-- Progressive Mystery Solved Comparison -->
        <div style="margin-top: 1.5rem;">
          <h4 style="margin-bottom: 0.75rem; color: var(--accent-emerald); font-size: 1.05rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>🔍</span>
            <span>${i18n.t("mystery_cracked_title", "Unsolved Mystery Cracked Across Tiers")}</span>
          </h4>
          <div class="mystery-tier-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
            <div class="detail-analogy-box" style="border-left-color: var(--accent-cyan); background: rgba(56, 189, 248, 0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <strong style="color: #38bdf8;">🎒 ${i18n.t("grade_explorers")}</strong>
                <span class="level-tag tag-gr35">${i18n.t("tag_gr35")}</span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: #cbd5e1; margin: 0;">${exp.mysterySolved || ""}</p>
            </div>
            <div class="detail-analogy-box" style="border-left-color: var(--accent-purple); background: rgba(168, 85, 247, 0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <strong style="color: #c084fc;">🔬 ${i18n.t("grade_investigators")}</strong>
                <span class="level-tag tag-gr68">${i18n.t("tag_gr68")}</span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: #cbd5e1; margin: 0;">${inv.mysterySolved || ""}</p>
            </div>
            <div class="detail-analogy-box" style="border-left-color: var(--accent-rose); background: rgba(244, 63, 94, 0.04);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <strong style="color: #fb7185;">🚀 ${i18n.t("grade_pioneers")}</strong>
                <span class="level-tag tag-gr912">${i18n.t("tag_gr912")}</span>
              </div>
              <p style="font-size: 0.88rem; line-height: 1.5; color: #cbd5e1; margin: 0;">${pio.mysterySolved || ""}</p>
            </div>
          </div>
        </div>

        <div class="card-footer-meta" style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-top: 1rem;">
          <span style="color: #fbbf24; font-weight: 600;">✨ ${i18n.t("fun_fact_label")}</span>
          <span style="color: var(--text-primary); margin-left: 0.5rem;">${inv.funFact || exp.funFact || pio.funFact || ""}</span>
        </div>
      </section>

      <!-- Zone 2: Human vs AI Mathematical Collaboration -->
      <section class="zone-card animate-fade-in" style="margin-bottom: 2rem;">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z2">${i18n.t("ai_zone_2_pill", "Zone ② Collaboration Division")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("ai_zone_2_title", "Human Mathematician & Artificial Intelligence Synergy")}</h3>
              <p>${i18n.t("ai_zone_2_sub", "How intuitive insight and machine-scale formal search united to conquer open problems.")}</p>
            </div>
          </div>
        </div>

        <div class="collaboration-grid">
          <div class="collab-card human">
            <h4>${i18n.t("human_mathematician", "🧑 Human Mathematician")}</h4>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.6; color: var(--text-secondary);">
              <li>${i18n.t("human_role_1", "Formulating conceptual frameworks & conjectures")}</li>
              <li>${i18n.t("human_role_2", "Spatial geometric reasoning & heuristic diagram sketching")}</li>
              <li>${i18n.t("human_role_3", "Translating informal intuition into structured lemma architectures")}</li>
            </ul>
          </div>
          <div class="collab-card ai">
            <h4>${i18n.t("ai_automated_reasoning", "🤖 AI & Automated Reasoning")}</h4>
            <ul style="padding-left: 1.25rem; margin: 0; line-height: 1.6; color: var(--text-secondary);">
              <li>${i18n.t("ai_role_1", "Exploring tens of millions of proof trees via MCTS & RL")}</li>
              <li>${i18n.t("ai_role_2", "High-dimensional tensor rank and algebraic decomposition")}</li>
              <li>${i18n.t("ai_role_3", "100% formal kernel type checking with zero hallucination")}</li>
            </ul>
          </div>
          <div class="collab-card synergy">
            <h4>${i18n.t("breakthrough_division", "🤝 The Breakthrough Division")}</h4>
            <p style="margin: 0; line-height: 1.6; color: var(--text-primary);">
              ${inv.humanVsAi || exp.humanVsAi || pio.humanVsAi || ""}
            </p>
          </div>
        </div>
      </section>

      <!-- Zone 3: Interactive Breakthrough Laboratory -->
      <section class="zone-card animate-fade-in" style="margin-bottom: 2rem;">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z3">${i18n.t("ai_zone_3_pill", "Zone ③ Hands-On Lab")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("ai_lab_title", "Interactive Verification Sandbox:")} ${milestone.model}</h3>
              <p>${i18n.t("ai_lab_sub", "Experiment with parameters, step through proof trajectories, and watch AI optimization live.")}</p>
            </div>
          </div>
        </div>

        <!-- Tiered Exploration Challenges -->
        <div style="margin-bottom: 1.25rem;">
          <h4 style="font-size: 0.98rem; margin-bottom: 0.75rem; color: var(--accent-cyan); display: flex; align-items: center; gap: 0.4rem;">
            <span>🎯</span>
            <span>${i18n.t("lab_challenges_title")}</span>
          </h4>
          <div class="lab-challenge-grid">
            <div class="lab-challenge-card">
              <div class="lab-challenge-header">
                <span style="font-weight: 600; color: #38bdf8;">🎒 ${i18n.t("grade_explorers")}</span>
                <span class="level-tag tag-gr35">${i18n.t("tag_gr35")}</span>
              </div>
              <p>${challenges.explorers}</p>
            </div>
            <div class="lab-challenge-card">
              <div class="lab-challenge-header">
                <span style="font-weight: 600; color: #c084fc;">🔬 ${i18n.t("grade_investigators")}</span>
                <span class="level-tag tag-gr68">${i18n.t("tag_gr68")}</span>
              </div>
              <p>${challenges.investigators}</p>
            </div>
            <div class="lab-challenge-card">
              <div class="lab-challenge-header">
                <span style="font-weight: 600; color: #fb7185;">🚀 ${i18n.t("grade_pioneers")}</span>
                <span class="level-tag tag-gr912">${i18n.t("tag_gr912")}</span>
              </div>
              <p>${challenges.pioneers}</p>
            </div>
          </div>
        </div>

        <div id="ai-lab-mount" style="margin-top: 1rem;"></div>
        <div id="ai-lab-stats" class="sim-stats-grid" style="margin-top: 1.25rem;"></div>
      </section>

      <!-- Zone 4: Machine-Checked Code & Formal Verification -->
      <section class="zone-card animate-fade-in" style="margin-bottom: 2rem;">
        <div class="zone-header-row">
          <div class="zone-title-wrap">
            <span class="zone-badge z4">${i18n.t("ai_zone_4_pill", "Zone ④ Formal Artifact")}</span>
            <div class="zone-title-text">
              <h3>${i18n.t("ai_zone_4_title", "Lean 4 / Machine-Checked Formal Specification")}</h3>
              <p>${i18n.t("ai_zone_4_sub", "Certified mathematical logic verified by formal proof kernel.")}</p>
            </div>
          </div>
          <button class="btn-outline" id="btn-copy-lean-snippet" style="font-size: 0.85rem; padding: 0.35rem 0.75rem; cursor: pointer;">
            ${i18n.t("btn_copy_snippet", "📋 Copy Formal Snippet")}
          </button>
        </div>

        <pre class="breakthrough-code-block"><code>${milestone.leanSnippet || "-- Formal code artifact"}</code></pre>
        <div style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: var(--accent-emerald);">${i18n.t("formal_guarantee_label", "🛡️ Formal Verification Guarantee:")}</span>
          ${i18n.t("formal_guarantee_desc", "Verified by Lean 4 interactive theorem prover. Dependent Type Theory eliminates human grading oversights.")}
        </div>
      </section>
    `;

    // Hook up tier quick jump buttons
    container.querySelectorAll(".tier-jump-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const el = document.getElementById(targetId);
        if (el) {
          if (typeof el.scrollIntoView === "function") {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          if (el.classList) {
            el.classList.remove("tier-spotlight");
            void el.offsetWidth;
            el.classList.add("tier-spotlight");
            setTimeout(() => el.classList.remove("tier-spotlight"), 1600);
          }
        }
      });
    });

    document.getElementById("btn-back-to-timeline")?.addEventListener("click", () => {
      this.switchView("timeline");
    });

    document.getElementById("btn-copy-lean-snippet")?.addEventListener("click", () => {
      if (milestone.leanSnippet && typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(milestone.leanSnippet).then(() => {
          const btn = document.getElementById("btn-copy-lean-snippet");
          if (btn) {
            btn.textContent = i18n.t("copied_to_clipboard", "✓ Copied to Clipboard!");
            setTimeout(() => { btn.textContent = i18n.t("btn_copy_snippet", "📋 Copy Formal Snippet"); }, 2000);
          }
        });
      }
    });

    // Mount Interactive Laboratory
    const lab = new AIBreakthroughLab("ai-lab-mount", "ai-lab-stats", milestone);
    this.activeSimulation = lab;
  }
}

// Bootstrap on DOM ready or immediately if already loaded
function startApp() {
  if (window.wonderMathApp) return;
  const app = new WonderMathApp();
  app.init();
  window.wonderMathApp = app;
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startApp);
  } else {
    startApp();
  }
}
