/**
 * Twin Prime & Prime Gaps Interactive Simulation
 * Sieve grid, twin pair locator, gap distribution histogram, and bounded gap timeline.
 */

export class PrimeGapsSimulation {
  constructor(containerId, statsId) {
    this.container = document.getElementById(containerId);
    this.statsContainer = document.getElementById(statsId);
    this.limit = 120;
    this.primes = [];
    this.twinPairs = [];
    this.gapHistogram = {};
    this.activeFilter = "twin"; // 'all', 'twin', 'cousin', 'sexy'
  }

  init() {
    this.computePrimes(this.limit);
    this.render();
  }

  computePrimes(max) {
    this.limit = max;
    const isPrime = new Uint8Array(max + 1).fill(1);
    isPrime[0] = isPrime[1] = 0;
    for (let i = 2; i * i <= max; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= max; j += i) {
          isPrime[j] = 0;
        }
      }
    }

    this.primes = [];
    for (let i = 2; i <= max; i++) {
      if (isPrime[i]) this.primes.push(i);
    }

    this.twinPairs = [];
    this.gapHistogram = {};
    for (let i = 0; i < this.primes.length - 1; i++) {
      const p1 = this.primes[i];
      const p2 = this.primes[i + 1];
      const gap = p2 - p1;
      this.gapHistogram[gap] = (this.gapHistogram[gap] || 0) + 1;
      if (gap === 2) {
        this.twinPairs.push([p1, p2]);
      }
    }
  }

  setFilter(filter) {
    this.activeFilter = filter;
    this.render();
  }

  setLimit(limit) {
    this.computePrimes(limit);
    this.render();
  }

  render() {
    if (!this.container) return;

    // Check prime pair set for fast lookup
    const twinPrimeSet = new Set(this.twinPairs.flat());

    let gridHtml = `<div class="prime-sieve-grid">`;
    for (let i = 1; i <= this.limit; i++) {
      const isP = this.primes.includes(i);
      const isTwin = twinPrimeSet.has(i);
      let classes = "sieve-cell";
      if (isP) {
        classes += " is-prime";
        if (isTwin) classes += " is-twin";
      }
      gridHtml += `<div class="${classes}" data-num="${i}">
        <span>${i}</span>
        ${isTwin ? '<span class="twin-badge">2</span>' : ''}
      </div>`;
    }
    gridHtml += `</div>`;

    // Gap Histogram Bars
    let histHtml = `<div class="gap-histogram">`;
    const sortedGaps = Object.keys(this.gapHistogram).map(Number).sort((a, b) => a - b);
    const maxCount = Math.max(...Object.values(this.gapHistogram), 1);

    sortedGaps.forEach(gap => {
      const count = this.gapHistogram[gap];
      const pct = (count / maxCount) * 100;
      const isGap2 = gap === 2;
      histHtml += `
        <div class="hist-row">
          <span class="hist-label ${isGap2 ? 'highlight' : ''}">Gap ${gap} ${isGap2 ? '(Twins)' : ''}</span>
          <div class="hist-bar-track">
            <div class="hist-bar ${isGap2 ? 'twin-bar' : ''}" style="width: ${pct}%"></div>
          </div>
          <span class="hist-val">${count}</span>
        </div>
      `;
    });
    histHtml += `</div>`;

    // Bound Gap Progress Bar
    const boundsHtml = `
      <div class="bound-progress-box">
        <h4>Prime Gap Compression Timeline (Human & AI Progress)</h4>
        <div class="gap-ruler">
          <div class="ruler-marker marker-zhang" title="Yitang Zhang 2013">
            <span class="ruler-badge">2013: Zhang</span>
            <span class="ruler-num">70,000,000</span>
          </div>
          <div class="ruler-marker marker-maynard" title="Maynard & Polymath8 2014">
            <span class="ruler-badge">2014: Maynard</span>
            <span class="ruler-num">246</span>
          </div>
          <div class="ruler-marker marker-ai" title="AI Sieve Frontiers (Conditional)">
            <span class="ruler-badge">AI / GEH</span>
            <span class="ruler-num">6</span>
          </div>
          <div class="ruler-marker marker-goal" title="Conjecture Goal">
            <span class="ruler-badge goal-badge">Target</span>
            <span class="ruler-num">2 (Twin Primes)</span>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = `
      <div class="sim-controls-bar">
        <div class="btn-group">
          <button class="btn-sm ${this.limit === 120 ? 'active' : ''}" id="btn-limit-120">Up to 120</button>
          <button class="btn-sm ${this.limit === 240 ? 'active' : ''}" id="btn-limit-240">Up to 240</button>
        </div>
        <div class="legend-pills">
          <span class="legend-pill prime-pill">Prime</span>
          <span class="legend-pill twin-pill">Twin Prime (Gap = 2)</span>
        </div>
      </div>
      ${gridHtml}
      <div class="sim-subsections">
        <div class="sim-card">
          <h4>Frequency of Prime Gaps ($p_{n+1} - p_n$)</h4>
          ${histHtml}
        </div>
        <div class="sim-card">
          ${boundsHtml}
        </div>
      </div>
    `;

    // Wire up events
    document.getElementById("btn-limit-120")?.addEventListener("click", () => this.setLimit(120));
    document.getElementById("btn-limit-240")?.addEventListener("click", () => this.setLimit(240));

    if (this.statsContainer) {
      this.statsContainer.innerHTML = `
        <div class="stat-card">
          <span class="stat-label">Total Primes Found</span>
          <span class="stat-val highlight">${this.primes.length}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Twin Prime Pairs</span>
          <span class="stat-val highlight">${this.twinPairs.length}</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Closest Neighbors</span>
          <span class="stat-val success">(3, 5), (5, 7), (11, 13)</span>
        </div>
        <div class="stat-card">
          <span class="stat-label">Best Unconditional Gap</span>
          <span class="stat-val alert">≤ 246 (Maynard)</span>
        </div>
      `;
    }
  }
}
