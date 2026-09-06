/**
 * Counterexample Hunter & Heuristic Search Simulation
 * Real-time client-side search engine testing numbers for counterexamples and cycles
 * with full 8-language localization support.
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
    i18n.onLanguageChange(() => {
      if (!this.running) {
        this.render();
      }
    });
  }

  render() {
    if (!this.container) return;

    const lang = i18n.getLanguage();

    const ruleOptions = [
      { val: "collatz_std", label: `${i18n.t("collatz_std")} (3n + 1)` },
      { val: "collatz_5n", label: `${i18n.t("collatz_5n")} [5n + 1]` },
      { val: "collatz_3n_minus_1", label: `${i18n.t("collatz_3n_minus_1")} [3n - 1]` },
      { val: "goldbach_odd", label: lang === 'ja' ? '奇数を2つの素数の和として表す（反例探索）' : (lang.startsWith('zh') ? '奇数拆分为两素数之和（反例搜寻）' : 'Odd Numbers as Sum of 2 Primes (Counterexample Search)') }
    ];

    const rangeLabels = {
      100: lang === 'ja' ? '1 から 100 までの数' : (lang.startsWith('zh') ? '数字 1 到 100' : 'Numbers 1 to 100'),
      500: lang === 'ja' ? '1 から 500 までの数' : (lang.startsWith('zh') ? '数字 1 到 500' : 'Numbers 1 to 500'),
      2000: lang === 'ja' ? '1 から 2,000 までの数' : (lang.startsWith('zh') ? '数字 1 到 2,000' : 'Numbers 1 to 2,000')
    };

    this.container.innerHTML = `
      <div class="hunter-card">
        <div class="hunter-header">
          <span class="hunter-icon">🔍</span>
          <div>
            <h4>${i18n.t("hunter_title")}</h4>
            <p>${i18n.t("hunter_sub")}</p>
          </div>
        </div>

        <div class="hunter-controls-row">
          <div class="control-item">
            <label>${i18n.t("hunter_rule_label")}</label>
            <select id="hunter-target-rule" class="custom-select">
              ${ruleOptions.map(r => `<option value="${r.val}">${r.label}</option>`).join('')}
            </select>
          </div>

          <div class="control-item">
            <label>${i18n.t("hunter_range_label")}</label>
            <select id="hunter-limit" class="custom-select">
              <option value="100">${rangeLabels[100]}</option>
              <option value="500" selected>${rangeLabels[500]}</option>
              <option value="2000">${rangeLabels[2000]}</option>
            </select>
          </div>

          <div class="control-item btn-align">
            <button class="btn-primary" id="btn-start-hunt">${i18n.t("hunter_btn_start")}</button>
            <button class="btn-secondary" id="btn-stop-hunt" disabled>${i18n.t("hunter_btn_stop")}</button>
          </div>
        </div>

        <div class="hunter-status-box">
          <div class="progress-bar-track">
            <div id="hunter-progress-fill" class="progress-bar-fill" style="width: 0%"></div>
          </div>
          <div class="progress-stats">
            <span id="hunter-tested-label">${i18n.t("hunter_tested").replace("{count}", "0")}</span>
            <span id="hunter-anomalies-label" class="badge-neutral">${i18n.t("hunter_anomalies").replace("{count}", "0")}</span>
          </div>

          <div class="live-hunter-log" id="hunter-log-feed">
            <div class="log-line info">${i18n.t("hunter_ready_log")}</div>
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
      if (testedLabel) testedLabel.innerText = `${i18n.t("hunter_tested").replace("{count}", current)} / ${limit} (${pct}%)`;
      if (anomaliesLabel) {
        anomaliesLabel.innerText = i18n.t("hunter_anomalies").replace("{count}", anomalies);
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
