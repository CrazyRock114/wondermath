/**
 * Goldbach Conjecture Interactive Simulation
 * Prime Balance Scale & Goldbach Comet scatter canvas.
 */

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
    const currentPair = this.partitions[this.activePartitionIdx] || [0, 0];
    const [p1, p2] = currentPair;

    this.container.innerHTML = `
      <div class="goldbach-controls">
        <div class="input-slider-group">
          <label>Even Number ($N$): <strong id="goldbach-n-val" class="highlight-val">${this.targetEven}</strong></label>
          <input type="range" id="goldbach-slider" min="4" max="200" step="2" value="${this.targetEven}">
        </div>
        <div class="quick-pick-btns">
          <span>Quick Picks:</span>
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
              <span class="weight-title">Target Even</span>
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
              <span class="weight-sub">Balanced! (${p1} + ${p2} = ${this.targetEven})</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Partitions Carousel / List -->
      <div class="partition-navigator">
        <button class="btn-sm" id="btn-prev-part" ${this.partitions.length <= 1 ? 'disabled' : ''}>◀ Prev Pair</button>
        <span class="partition-count">Pair ${this.activePartitionIdx + 1} of ${this.partitions.length} total prime solutions</span>
        <button class="btn-sm" id="btn-next-part" ${this.partitions.length <= 1 ? 'disabled' : ''}>Next Pair ▶</button>
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
    this.statsContainer.innerHTML = `
      <div class="stat-card">
        <span class="stat-label">Current Even ($N$)</span>
        <span class="stat-val highlight">${this.targetEven}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Prime Combinations</span>
        <span class="stat-val highlight">${this.partitions.length} ways</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Weak Goldbach</span>
        <span class="stat-val success">Solved (2013 Helfgott)</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Max Verified by Supercomputers</span>
        <span class="stat-val alert">4 × 10¹⁸ (4 Quintillion)</span>
      </div>
    `;
  }
}
