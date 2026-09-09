/**
 * Goldbach Conjecture Interactive Simulation
 * Prime Balance Scale & Goldbach Comet scatter canvas.
 */

import { i18n } from "../i18n/i18n.js";

export class GoldbachSimulation {
  constructor(containerId, cometCanvasId, statsId) {
    this.container = document.getElementById(containerId);
    this.cometCanvas = document.getElementById(cometCanvasId);
    this.statsContainer = document.getElementById(statsId);
    this.ctx = this.cometCanvas?.getContext("2d");
    this.targetEven = 28;
    this.partitions = [];
    this.activePartitionIdx = 0;
    this.maxEven = 2000;
    this.primes = this.sieve(this.maxEven);
    this.primeSet = new Set(this.primes);
  }

  destroy() {}

  sieve(limit) {
    const isP = new Uint8Array(limit + 1).fill(1);
    isP[0] = isP[1] = 0;
    for (let i = 2; i * i <= limit; i++) {
      if (isP[i]) {
        for (let j = i * i; j <= limit; j += i) isP[j] = 0;
      }
    }
    const res = [];
    for (let i = 2; i <= limit; i++) if (isP[i]) res.push(i);
    return res;
  }

  findPartitions(n) {
    const parts = [];
    for (let p of this.primes) {
      if (p > n / 2) break;
      const q = n - p;
      if (this.primeSet.has(q)) {
        parts.push([p, q]);
      }
    }
    return parts;
  }

  init() {
    this.setEvenNumber(this.targetEven);
    this.drawComet();
  }

  setEvenNumber(n) {
    this.targetEven = Math.max(4, Math.min(this.maxEven, Math.floor(n / 2) * 2));
    this.partitions = this.findPartitions(this.targetEven);
    this.activePartitionIdx = 0;
    this.render();
    this.updateStats();
  }

  nextPartition() {
    if (this.partitions.length > 0) {
      this.activePartitionIdx = (this.activePartitionIdx + 1) % this.partitions.length;
      this.render();
    }
  }

  prevPartition() {
    if (this.partitions.length > 0) {
      this.activePartitionIdx = (this.activePartitionIdx - 1 + this.partitions.length) % this.partitions.length;
      this.render();
    }
  }

  render() {
    if (!this.container) return;
    const lang = i18n.getLanguage();
    const currentPair = this.partitions[this.activePartitionIdx] || [0, 0];
    const [p1, p2] = currentPair;

    const tEvenLabel = {
      en: "Even Number ($N$):",
      de: "Gerade Zahl ($N$):",
      fr: "Nombre pair ($N$) :",
      it: "Numero pari ($N$):",
      ja: "偶数 ($N$):",
      ko: "짝수 ($N$):",
      "zh-Hans": "目标偶数 ($N$):",
      "zh-Hant": "目標偶數 ($N$):"
    }[lang] || "Even Number ($N$):";

    const tQuick = {
      en: "Quick Picks:",
      de: "Schnellwahl:",
      fr: "Choix rapide :",
      it: "Scelta rapida:",
      ja: "クイック選択:",
      ko: "빠른 선택:",
      "zh-Hans": "快速预设:",
      "zh-Hant": "快速預設:"
    }[lang] || "Quick Picks:";

    const tTargetEven = {
      en: "Target Even",
      de: "Gerade Zielzahl",
      fr: "Nombre pair cible",
      it: "Pari bersaglio",
      ja: "目標の偶数",
      ko: "목표 짝수",
      "zh-Hans": "目标偶数",
      "zh-Hant": "目標偶數"
    }[lang] || "Target Even";

    const tBalanced = {
      en: `Balanced! (${p1} + ${p2} = ${this.targetEven})`,
      de: `Ausgeglichen! (${p1} + ${p2} = ${this.targetEven})`,
      fr: `Équilibré ! (${p1} + ${p2} = ${this.targetEven})`,
      it: `In equilibrio! (${p1} + ${p2} = ${this.targetEven})`,
      ja: `釣り合いました！ (${p1} + ${p2} = ${this.targetEven})`,
      ko: `균형 완료! (${p1} + ${p2} = ${this.targetEven})`,
      "zh-Hans": `天平平衡！ (${p1} + ${p2} = ${this.targetEven})`,
      "zh-Hant": `天平平衡！ (${p1} + ${p2} = ${this.targetEven})`
    }[lang] || `Balanced! (${p1} + ${p2} = ${this.targetEven})`;

    this.container.innerHTML = `
      <div class="goldbach-controls">
        <div class="input-slider-group">
          <label>${tEvenLabel} <strong id="goldbach-n-val" class="highlight-val">${this.targetEven}</strong></label>
          <input type="range" id="goldbach-slider" min="4" max="200" step="2" value="${this.targetEven}">
        </div>
        <div class="quick-pick-btns">
          <span>${tQuick}</span>
          <button class="btn-xs" data-val="10">10</button>
          <button class="btn-xs" data-val="28">28</button>
          <button class="btn-xs" data-val="100">100</button>
          <button class="btn-xs" data-val="180">180</button>
        </div>
      </div>

      <!-- Prime Balance Scale UI -->
      <div class="balance-scale-stage">
        <div class="balance-beam">
          <div class="balance-fulcrum">▲</div>
          <div class="beam-arm"></div>
          
          <div class="pan pan-left">
            <div class="pan-chain"></div>
            <div class="weight-plate even-plate">
              <span class="weight-title">${tTargetEven}</span>
              <span class="weight-num">${this.targetEven}</span>
            </div>
          </div>

          <div class="pan pan-right">
            <div class="pan-chain"></div>
            <div class="weight-plate prime-pair-plate">
              <div class="prime-weights-row">
                <span class="prime-weight">${p1}</span>
                <span class="weight-plus">+</span>
                <span class="prime-weight">${p2}</span>
              </div>
              <span class="weight-sub">${tBalanced}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Partitions Carousel / List -->
      <div class="partition-navigator">
        <button class="btn-sm" id="btn-prev-part" ${this.partitions.length <= 1 ? 'disabled' : ''}>◀</button>
        <span class="partition-count">Solution ${this.activePartitionIdx + 1} / ${this.partitions.length}</span>
        <button class="btn-sm" id="btn-next-part" ${this.partitions.length <= 1 ? 'disabled' : ''}>▶</button>
      </div>

      <div class="partitions-chips">
        ${this.partitions.map((pair, idx) => `
          <button class="chip ${idx === this.activePartitionIdx ? 'active' : ''}" data-idx="${idx}">
            ${pair[0]} + ${pair[1]}
          </button>
        `).join('')}
      </div>
    `;

    // Listeners
    const slider = document.getElementById("goldbach-slider");
    slider?.addEventListener("input", (e) => {
      this.setEvenNumber(parseInt(e.target.value, 10));
    });

    document.querySelectorAll(".quick-pick-btns button").forEach(btn => {
      btn.addEventListener("click", () => {
        this.setEvenNumber(parseInt(btn.getAttribute("data-val"), 10));
      });
    });

    document.getElementById("btn-prev-part")?.addEventListener("click", () => this.prevPartition());
    document.getElementById("btn-next-part")?.addEventListener("click", () => this.nextPartition());

    document.querySelectorAll(".partitions-chips button").forEach(chip => {
      chip.addEventListener("click", () => {
        this.activePartitionIdx = parseInt(chip.getAttribute("data-idx"), 10);
        this.render();
      });
    });
  }

  drawComet() {
    if (!this.ctx || !this.cometCanvas) return;
    const ctx = this.ctx;
    const w = (this.cometCanvas.width = 500);
    const h = (this.cometCanvas.height = 240);
    ctx.clearRect(0, 0, w, h);

    const maxN = 1000;
    const counts = [];
    let maxCount = 1;

    for (let n = 4; n <= maxN; n += 2) {
      let count = 0;
      for (let p of this.primes) {
        if (p > n / 2) break;
        if (this.primeSet.has(n - p)) count++;
      }
      counts.push({ n, count });
      if (count > maxCount) maxCount = count;
    }

    // Grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i++) {
      const y = h - 25 - (i / 3) * (h - 45);
      ctx.beginPath();
      ctx.moveTo(35, y);
      ctx.lineTo(w - 15, y);
      ctx.stroke();
    }

    // Draw Comet Points
    counts.forEach(({ n, count }) => {
      const x = 35 + ((n - 4) / (maxN - 4)) * (w - 50);
      const y = h - 25 - (count / maxCount) * (h - 45);

      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = n % 6 === 0 ? "rgba(244, 63, 94, 0.75)" : "rgba(56, 189, 248, 0.6)";
      ctx.fill();
    });

    // Axis labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.font = "10px sans-serif";
    ctx.fillText("0", 20, h - 25);
    ctx.fillText(maxCount.toString(), 15, 30);
    ctx.fillText("Even Numbers (N = 4 to 1000) ➔", w / 2 - 60, h - 8);
  }

  updateStats() {
    if (!this.statsContainer) return;
    const lang = i18n.getLanguage();

    const tEvenLabel = {
      en: "Current Even ($N$)",
      de: "Aktuelle Zahl ($N$)",
      fr: "Nombre pair ($N$)",
      it: "Pari corrente ($N$)",
      ja: "現在の偶数 ($N$)",
      ko: "현재 짝수 ($N$)",
      "zh-Hans": "当前检验偶数 ($N$)",
      "zh-Hant": "當前檢驗偶數 ($N$)"
    }[lang] || "Current Even ($N$)";

    const tCombos = {
      en: `${this.partitions.length} ways`,
      de: `${this.partitions.length} Paare`,
      fr: `${this.partitions.length} façons`,
      it: `${this.partitions.length} modi`,
      ja: `${this.partitions.length} 通りの素数ペア`,
      ko: `${this.partitions.length}가지 소수 쌍`,
      "zh-Hans": `${this.partitions.length} 组素数拆分`,
      "zh-Hant": `${this.partitions.length} 組素數拆分`
    }[lang] || `${this.partitions.length} ways`;

    const tWeak = {
      en: "Solved (2013 Helfgott)",
      de: "Gelöst (2013 Helfgott)",
      fr: "Résolu (Helfgott 2013)",
      it: "Risolto (2013 Helfgott)",
      ja: "証明解決 (2013年 ヘルフゴット)",
      ko: "증명 해결 (2013년 헬프곳)",
      "zh-Hans": "弱猜想已完全证明 (2013)",
      "zh-Hant": "弱猜想已完全證明 (2013)"
    }[lang] || "Solved (2013 Helfgott)";

    this.statsContainer.innerHTML = `
      <div class="stat-card">
        <span class="stat-label">${tEvenLabel}</span>
        <span class="stat-val highlight">${this.targetEven}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${lang === 'ja' ? '素数の組み合わせ' : (lang.startsWith('zh') ? '质数配对解数' : 'Prime Combinations')}</span>
        <span class="stat-val highlight">${tCombos}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${lang === 'ja' ? '弱ゴールドバッハ予想' : (lang.startsWith('zh') ? '弱哥德巴赫猜想' : 'Weak Goldbach')}</span>
        <span class="stat-val success">${tWeak}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${lang === 'ja' ? 'スパコン検証限界' : (lang.startsWith('zh') ? '超级计算机验证极值' : 'Verified by Computers')}</span>
        <span class="stat-val alert">4 × 10¹⁸</span>
      </div>
    `;
  }
}
