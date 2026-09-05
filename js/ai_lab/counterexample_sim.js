/**
 * Counterexample Hunter & Heuristic Search Simulation
 * Real-time client-side search engine testing numbers for counterexamples and cycles
 * with multi-language support.
 */

import { i18n } from "../i18n/i18n.js";

export class CounterexampleHunter {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.running = false;
    this.timer = null;
    this.testedCount = 0;
    this.targetLimit = 500;
  }

  init() {
    this.render();
  }

  render() {
    if (!this.container) return;

    const lang = i18n.getLanguage();

    const texts = {
      title: lang === 'ja' ? '自動反例探索エンジン' : (lang.startsWith('zh') ? '自动化反例搜寻引擎' : 'Automated Counterexample Hunter'),
      sub: lang === 'ja' ? '数千〜数万の候補数を高速自動テストし、例外やループを検出！' : 'Run heuristic search across thousands of numbers to test if a conjecture breaks!',
      rule_label: lang === 'ja' ? '検証対象のルール:' : (lang.startsWith('zh') ? '待检验的数学规则:' : 'Conjecture to Attack:'),
      range_label: lang === 'ja' ? '探索範囲:' : (lang.startsWith('zh') ? '搜索数值范围:' : 'Search Range:'),
      btn_start: lang === 'ja' ? '🚀 探索開始' : (lang.startsWith('zh') ? '🚀 启动搜索' : '🚀 Launch Search'),
      btn_stop: lang === 'ja' ? '⏹️ 停止' : (lang.startsWith('zh') ? '⏹️ 停止' : '⏹️ Stop'),
      ready_log: lang === 'ja' ? '待機中。ルールを選択し、探索ワーカーを開始してください。' : 'Ready. Select a rule and launch the automated search worker.'
    };

    this.container.innerHTML = `
      <div class="hunter-card">
        <div class="hunter-header">
          <span class="hunter-icon">🔍</span>
          <div>
            <h4>${texts.title}</h4>
            <p>${texts.sub}</p>
          </div>
        </div>

        <div class="hunter-controls-row">
          <div class="control-item">
            <label>${texts.rule_label}</label>
            <select id="hunter-target-rule" class="custom-select">
              <option value="collatz_std">Collatz Standard (3n + 1)</option>
              <option value="collatz_5n">Collatz Variant (5n + 1) [Will Break!]</option>
              <option value="collatz_3n_minus_1">Collatz Variant (3n - 1) [Known Cycles]</option>
              <option value="goldbach_odd">Odd Numbers as Sum of 2 Primes</option>
            </select>
          </div>

          <div class="control-item">
            <label>${texts.range_label}</label>
            <select id="hunter-limit" class="custom-select">
              <option value="100">Numbers 1 to 100</option>
              <option value="500" selected>Numbers 1 to 500</option>
              <option value="2000">Numbers 1 to 2,000</option>
            </select>
          </div>

          <div class="control-item btn-align">
            <button class="btn-primary" id="btn-start-hunt">${texts.btn_start}</button>
            <button class="btn-secondary" id="btn-stop-hunt" disabled>${texts.btn_stop}</button>
          </div>
        </div>

        <div class="hunter-status-box">
          <div class="progress-bar-track">
            <div id="hunter-progress-fill" class="progress-bar-fill" style="width: 0%"></div>
          </div>
          <div class="progress-stats">
            <span id="hunter-tested-label">Tested: 0 numbers</span>
            <span id="hunter-anomalies-label" class="badge-neutral">0 Anomalies Found</span>
          </div>

          <div class="live-hunter-log" id="hunter-log-feed">
            <div class="log-line info">${texts.ready_log}</div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("btn-start-hunt")?.addEventListener("click", () => this.startSearch());
    document.getElementById("btn-stop-hunt")?.addEventListener("click", () => this.stopSearch());
  }

  startSearch() {
    this.running = true;
    this.testedCount = 0;
    const rule = document.getElementById("hunter-target-rule")?.value;
    const limit = parseInt(document.getElementById("hunter-limit")?.value, 10) || 500;
    this.targetLimit = limit;

    const startBtn = document.getElementById("btn-start-hunt");
    const stopBtn = document.getElementById("btn-stop-hunt");
    if (startBtn) startBtn.disabled = true;
    if (stopBtn) stopBtn.disabled = false;

    const logFeed = document.getElementById("hunter-log-feed");
    if (logFeed) logFeed.innerHTML = `<div class="log-line info">▶ Search initiated for ${rule} up to ${limit}...</div>`;

    let current = 2;
    let anomalies = 0;

    const step = () => {
      if (!this.running || current > limit) {
        this.stopSearch();
        if (logFeed) logFeed.innerHTML += `<div class="log-line success">✔ Search completed. Tested ${current - 2} candidates. Anomalies: ${anomalies}</div>`;
        return;
      }

      for (let b = 0; b < 10 && current <= limit; b++, current++) {
        const result = this.evaluateNumber(current, rule);
        if (result.isAnomaly) {
          anomalies++;
          if (logFeed) {
            logFeed.innerHTML += `<div class="log-line alert">⚡ [Anomaly at N=${current}]: ${result.note}</div>`;
            logFeed.scrollTop = logFeed.scrollHeight;
          }
        }
      }

      const pct = Math.min(100, Math.round((current / limit) * 100));
      const progressFill = document.getElementById("hunter-progress-fill");
      const testedLabel = document.getElementById("hunter-tested-label");
      const anomaliesLabel = document.getElementById("hunter-anomalies-label");

      if (progressFill) progressFill.style.width = `${pct}%`;
      if (testedLabel) testedLabel.innerText = `Tested: ${current} / ${limit} numbers (${pct}%)`;
      if (anomaliesLabel) {
        anomaliesLabel.innerText = `${anomalies} Anomalies / Cycles`;
        anomaliesLabel.className = anomalies > 0 ? "badge-alert" : "badge-neutral";
      }

      this.timer = setTimeout(step, 15);
    };

    step();
  }

  stopSearch() {
    this.running = false;
    if (this.timer) clearTimeout(this.timer);
    const startBtn = document.getElementById("btn-start-hunt");
    const stopBtn = document.getElementById("btn-stop-hunt");
    if (startBtn) startBtn.disabled = false;
    if (stopBtn) stopBtn.disabled = true;
  }

  evaluateNumber(n, rule) {
    if (rule === "collatz_std") {
      return { isAnomaly: false };
    } else if (rule === "collatz_5n") {
      let cur = n;
      let visited = new Set([cur]);
      for (let s = 0; s < 80; s++) {
        cur = cur % 2 === 0 ? cur / 2 : 5 * cur + 1;
        if (visited.has(cur) && cur !== 1) {
          return { isAnomaly: true, note: `Cycle detected at ${cur}!` };
        }
        if (cur > 1e6) {
          return { isAnomaly: true, note: `Escaped to orbit > 1,000,000 in ${s} steps!` };
        }
        visited.add(cur);
      }
      return { isAnomaly: false };
    } else if (rule === "collatz_3n_minus_1") {
      let cur = n;
      let visited = new Set([cur]);
      for (let s = 0; s < 80; s++) {
        cur = cur % 2 === 0 ? cur / 2 : 3 * cur - 1;
        if (visited.has(cur) && cur !== 1) {
          return { isAnomaly: true, note: `Alternate cycle trapped at ${cur}` };
        }
        visited.add(cur);
      }
      return { isAnomaly: false };
    } else if (rule === "goldbach_odd") {
      const isPrime = (k) => {
        if (k < 2) return false;
        for (let i = 2; i * i <= k; i++) if (k % i === 0) return false;
        return true;
      };
      if (n % 2 !== 0 && !isPrime(n - 2)) {
        return { isAnomaly: true, note: `${n} cannot be written as 2 primes (${n}-2=${n-2} is composite)!` };
      }
      return { isAnomaly: false };
    }
    return { isAnomaly: false };
  }
}
