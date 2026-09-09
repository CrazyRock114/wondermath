/**
 * Four Color Theorem Interactive Map Coloring Simulation
 * Click regions to color with 4 palette colors, live boundary conflict detection,
 * and graph duality inspector.
 */

import { i18n } from "../i18n/i18n.js";

export class FourColorSimulation {
  constructor(containerId, statsId) {
    this.container = document.getElementById(containerId);
    this.statsContainer = document.getElementById(statsId);
    this.colors = ["#f43f5e", "#0284c7", "#10b981", "#f59e0b"]; // Red, Blue, Green, Amber
    this.colorNames = ["Crimson", "Sky Blue", "Emerald", "Amber"];
    this.selectedColorIdx = 0;

    // Defined planar map regions (SVG polygons) with adjacency lists
    this.regions = [
      { id: "A", name: "Alpha", color: 0, path: "M 60,60 L 220,50 L 200,160 L 80,150 Z", center: [140, 100], neighbors: ["B", "C", "D"] },
      { id: "B", name: "Beta", color: 1, path: "M 220,50 L 380,60 L 360,160 L 200,160 Z", center: [290, 100], neighbors: ["A", "D", "E"] },
      { id: "C", name: "Gamma", color: 2, path: "M 60,60 L 80,150 L 140,240 L 40,220 Z", center: [80, 160], neighbors: ["A", "D", "F"] },
      { id: "D", name: "Delta (Central Hub)", color: 3, path: "M 200,160 L 80,150 L 140,240 L 280,240 L 360,160 Z", center: [210, 190], neighbors: ["A", "B", "C", "E", "F", "G"] },
      { id: "E", name: "Epsilon", color: 0, path: "M 380,60 L 360,160 L 280,240 L 420,220 Z", center: [360, 160], neighbors: ["B", "D", "G"] },
      { id: "F", name: "Zeta", color: 1, path: "M 140,240 L 40,220 L 100,320 L 210,310 Z", center: [120, 270], neighbors: ["C", "D", "G"] },
      { id: "G", name: "Omega", color: 2, path: "M 280,240 L 210,310 L 340,320 L 420,220 Z", center: [310, 270], neighbors: ["D", "E", "F"] }
    ];

    this.conflicts = [];
  }

  destroy() {}

  init() {
    this.checkConflicts();
    this.render();
  }

  checkConflicts() {
    this.conflicts = [];
    const map = new Map(this.regions.map(r => [r.id, r]));

    for (let r of this.regions) {
      for (let nId of r.neighbors) {
        const neighbor = map.get(nId);
        if (neighbor && neighbor.color === r.color && r.id < nId) {
          this.conflicts.push([r.id, nId]);
        }
      }
    }
  }

  setRegionColor(regionId, colorIdx) {
    const region = this.regions.find(r => r.id === regionId);
    if (region) {
      region.color = colorIdx;
      this.checkConflicts();
      this.render();
    }
  }

  autoSolve() {
    // Backtracking 4-coloring algorithm
    const map = new Map(this.regions.map(r => [r.id, r]));
    const solve = (idx) => {
      if (idx === this.regions.length) return true;
      const current = this.regions[idx];
      for (let c = 0; c < 4; c++) {
        // Check if any neighbor has color c
        const hasConflict = current.neighbors.some(nId => {
          const n = map.get(nId);
          return n && this.regions.indexOf(n) < idx && n.color === c;
        });

        if (!hasConflict) {
          current.color = c;
          if (solve(idx + 1)) return true;
        }
      }
      return false;
    };

    solve(0);
    this.checkConflicts();
    this.render();
  }

  randomizeColors() {
    this.regions.forEach(r => {
      r.color = Math.floor(Math.random() * 4);
    });
    this.checkConflicts();
    this.render();
  }

  render() {
    if (!this.container) return;

    const conflictCount = this.conflicts.length;
    const isPerfect = conflictCount === 0;
    const lang = i18n.getLanguage();

    const tPalette = {
      en: "Choose a Crayon:",
      de: "Farbe wählen:",
      fr: "Choisir une couleur :",
      it: "Scegli colore:",
      ja: "クレヨンを選択:",
      ko: "크레용 선택:",
      "zh-Hans": "选择画笔颜色:",
      "zh-Hant": "選擇畫筆顏色:"
    }[lang] || "Choose a Crayon:";

    const tAuto = {
      en: "✨ Auto-Color Validly",
      de: "✨ Automatisch 4-färben",
      fr: "✨ Colorier avec 4 couleurs",
      it: "✨ Risolvi a 4 colori",
      ja: "✨ 4色で自動塗り分け",
      ko: "✨ 4색 자동 채색",
      "zh-Hans": "✨ 自动四色求解",
      "zh-Hant": "✨ 自動四色求解"
    }[lang] || "✨ Auto-Color Validly";

    const tRandom = {
      en: "🎲 Scramble",
      de: "🎲 Mischen",
      fr: "🎲 Mélanger",
      it: "🎲 Mescola",
      ja: "🎲 ランダム配置",
      ko: "🎲 무작위 섞기",
      "zh-Hans": "🎲 随机填色",
      "zh-Hant": "🎲 隨機填色"
    }[lang] || "🎲 Scramble";

    const tValidMsg = {
      en: "🎉 <strong>Valid Map!</strong> No adjacent countries share the same crayon!",
      de: "🎉 <strong>Gültige Karte!</strong> Keine benachbarten Regionen teilen dieselbe Farbe!",
      fr: "🎉 <strong>Carte valide !</strong> Aucun pays voisin ne partage la même couleur !",
      it: "🎉 <strong>Mappa valida!</strong> Nessun paese confinante condivide lo stesso colore!",
      ja: "🎉 <strong>塗り分け成功！</strong> 隣り合うどの地域も異なる色で塗られています！",
      ko: "🎉 <strong>유효한 지도 완성!</strong> 인접한 어떤 구역도 같은 색을 공유하지 않습니다!",
      "zh-Hans": "🎉 <strong>四色着色成功！</strong> 任意相邻国家边界均无相同颜色！",
      "zh-Hant": "🎉 <strong>四色著色成功！</strong> 任意相鄰國家邊界均無相同顏色！"
    }[lang] || "🎉 <strong>Valid Map!</strong> No adjacent countries share the same crayon!";

    const tConflictMsg = {
      en: `⚠️ <strong>Conflict Alert!</strong> ${conflictCount} neighboring border${conflictCount > 1 ? 's' : ''} have the same color!`,
      de: `⚠️ <strong>Konflikt!</strong> ${conflictCount} benachbarte Grenze(n) haben dieselbe Farbe!`,
      fr: `⚠️ <strong>Alerte conflit !</strong> ${conflictCount} frontière(s) partagent la même couleur !`,
      it: `⚠️ <strong>Conflitto!</strong> ${conflictCount} confine(i) hanno lo stesso colore!`,
      ja: `⚠️ <strong>境界線の色が衝突！</strong> ${conflictCount} 箇所の境界が同じ色です！`,
      ko: `⚠️ <strong>경계 충돌!</strong> ${conflictCount}개 경계선에서 색상이 겹칩니다!`,
      "zh-Hans": `⚠️ <strong>边界颜色冲突！</strong> ${conflictCount} 处相邻边界颜色相同！`,
      "zh-Hant": `⚠️ <strong>邊界顏色衝突！</strong> ${conflictCount} 處相鄰邊界顏色相同！`
    }[lang] || `⚠️ <strong>Conflict Alert!</strong> ${conflictCount} neighboring border${conflictCount > 1 ? 's' : ''} have the same color!`;

    this.container.innerHTML = `
      <div class="four-color-dashboard">
        <div class="color-palette-bar">
          <span class="palette-label">${tPalette}</span>
          <div class="crayon-buttons">
            ${this.colors.map((c, idx) => `
              <button class="crayon-btn ${this.selectedColorIdx === idx ? 'active' : ''}" 
                      style="background-color: ${c};" 
                      data-color="${idx}">
                ${this.colorNames[idx]}
              </button>
            `).join('')}
          </div>
          <div class="map-action-btns">
            <button class="btn-sm" id="btn-fc-solve">${tAuto}</button>
            <button class="btn-sm" id="btn-fc-random">${tRandom}</button>
          </div>
        </div>

        <div class="map-canvas-wrapper">
          <svg viewBox="0 0 460 360" class="planar-map-svg">
            <!-- Region Polygons -->
            ${this.regions.map(r => `
              <path d="${r.path}" 
                    fill="${this.colors[r.color]}" 
                    stroke="#ffffff" 
                    stroke-width="3"
                    class="map-region ${this.conflicts.some(c => c.includes(r.id)) ? 'region-conflict' : ''}" 
                    data-id="${r.id}"/>
              <text x="${r.center[0]}" y="${r.center[1]}" 
                    fill="#ffffff" 
                    font-weight="bold" 
                    font-size="14" 
                    text-anchor="middle"
                    pointer-events="none">
                ${r.id}
              </text>
            `).join('')}
          </svg>
        </div>

        <div class="map-feedback-bar ${isPerfect ? 'feedback-success' : 'feedback-error'}">
          ${isPerfect ? tValidMsg : tConflictMsg}
        </div>
      </div>
    `;

    // Wire up events
    document.querySelectorAll(".crayon-buttons button").forEach(btn => {
      btn.addEventListener("click", () => {
        this.selectedColorIdx = parseInt(btn.getAttribute("data-color"), 10);
        this.render();
      });
    });

    document.querySelectorAll(".map-region").forEach(path => {
      path.addEventListener("click", () => {
        const id = path.getAttribute("data-id");
        this.setRegionColor(id, this.selectedColorIdx);
      });
    });

    document.getElementById("btn-fc-solve")?.addEventListener("click", () => this.autoSolve());
    document.getElementById("btn-fc-random")?.addEventListener("click", () => this.randomizeColors());

    if (this.statsContainer) {
      this.statsContainer.innerHTML = `
        <div class="stat-card">
          <span class="stat-label">${lang === 'ja' ? '使用色数' : (lang.startsWith('zh') ? '使用颜色数' : 'Colors Used')}</span>
          <span class="stat-val highlight">4</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">${lang === 'ja' ? '境界色の衝突数' : (lang.startsWith('zh') ? '冲突边界数' : 'Border Conflicts')}</span>
          <span class="stat-val ${conflictCount === 0 ? 'success' : 'alert'}">${conflictCount}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">${lang === 'ja' ? '計算機証明の年' : (lang.startsWith('zh') ? '计算机证明年份' : 'Year Proved')}</span>
          <span class="stat-val">1976</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">${lang === 'ja' ? '5色必要になる地図は？' : (lang.startsWith('zh') ? '能否逼出第5种颜色？' : '5 Colors Needed?')}</span>
          <span class="stat-val warning">${lang === 'ja' ? '数学的に存在しない！' : (lang.startsWith('zh') ? '数学已证绝不可能！' : 'Impossible!')}</span>
        </div>
      `;
    }
  }
}
