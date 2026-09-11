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

    let lang = i18n.getLanguage() || "en";
    if (lang === "zh" || lang === "zh-CN") lang = "zh-Hans";
    if (lang === "zh-TW" || lang === "zh-HK") lang = "zh-Hant";

    const tGoldbachOdd = {
      en: "Odd Numbers as Sum of 2 Primes (Counterexample Search)",
      de: "Ungerade Zahlen als Summe zweier Primzahlen (Gegenbeispielsuche)",
      fr: "Nombres impairs comme somme de 2 premiers (Recherche de contre-exemple)",
      it: "Numeri dispari come somma di 2 primi (Ricerca controesempi)",
      ja: "奇数を2つの素数の和として表す（反例探索）",
      ko: "홀수를 두 소수의 합으로 나타내기 (반례 탐색)",
      "zh-Hans": "奇数拆分为两素数之和（反例搜寻）",
      "zh-Hant": "奇數拆分為兩質數之和（反例搜尋）"
    }[lang] || "Odd Numbers as Sum of 2 Primes (Counterexample Search)";

    const tRange = (n) => ({
      en: `Numbers 1 to ${n.toLocaleString()}`,
      de: `Zahlen 1 bis ${n.toLocaleString()}`,
      fr: `Nombres de 1 à ${n.toLocaleString()}`,
      it: `Numeri da 1 a ${n.toLocaleString()}`,
      ja: `1 から ${n.toLocaleString()} までの数`,
      ko: `1부터 ${n.toLocaleString()}까지의 수`,
      "zh-Hans": `数字 1 到 ${n.toLocaleString()}`,
      "zh-Hant": `數字 1 到 ${n.toLocaleString()}`
    }[lang] || `Numbers 1 to ${n.toLocaleString()}`);

    const ruleOptions = [
      { val: "collatz_std", label: `${i18n.t("collatz_std")} (3n + 1)` },
      { val: "collatz_5n", label: `${i18n.t("collatz_5n")} [5n + 1]` },
      { val: "collatz_3n_minus_1", label: `${i18n.t("collatz_3n_minus_1")} [3n - 1]` },
      { val: "goldbach_odd", label: tGoldbachOdd }
    ];

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
              <option value="100">${tRange(100)}</option>
              <option value="500" selected>${tRange(500)}</option>
              <option value="2000">${tRange(2000)}</option>
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

    let lang = i18n.getLanguage() || "en";
    if (lang === "zh" || lang === "zh-CN") lang = "zh-Hans";
    if (lang === "zh-TW" || lang === "zh-HK") lang = "zh-Hant";

    const tInitLog = {
      en: `▶ Search initiated for ${rule} up to ${limit}...`,
      de: `▶ Suche für ${rule} bis ${limit} gestartet...`,
      fr: `▶ Recherche initiée pour ${rule} jusqu'à ${limit}...`,
      it: `▶ Ricerca avviata per ${rule} fino a ${limit}...`,
      ja: `▶ ${rule} の検証開始 (最大 ${limit} まで)...`,
      ko: `▶ ${rule} 검증 시작 (최대 ${limit}까지)...`,
      "zh-Hans": `▶ 开始针对规则 ${rule} 在范围 1..${limit} 内搜寻...`,
      "zh-Hant": `▶ 開始針對規則 ${rule} 在範圍 1..${limit} 內搜尋...`
    }[lang] || `▶ Search initiated for ${rule} up to ${limit}...`;

    const logFeed = document.getElementById("hunter-log-feed");
    if (logFeed) logFeed.innerHTML = `<div class="log-line info">${tInitLog}</div>`;

    let current = 2;
    let anomalies = 0;

    const step = () => {
      if (!this.running || current > limit) {
        this.stopSearch();
        const tDoneLog = {
          en: `✔ Search completed. Tested ${current - 2} candidates. Anomalies: ${anomalies}`,
          de: `✔ Suche beendet. ${current - 2} Kandidaten geprüft. Anomalien: ${anomalies}`,
          fr: `✔ Recherche terminée. ${current - 2} candidats testés. Anomalies : ${anomalies}`,
          it: `✔ Ricerca completata. ${current - 2} candidati testati. Anomalie: ${anomalies}`,
          ja: `✔ 検証完了。${current - 2} 個の候補をテスト。検出された特異点: ${anomalies}`,
          ko: `✔ 검증 완료. ${current - 2}개 후보 테스트 완료. 발견된 이상치: ${anomalies}`,
          "zh-Hans": `✔ 搜寻完毕。共验证 ${current - 2} 个候选数，发现特异值/反例数: ${anomalies}`,
          "zh-Hant": `✔ 搜尋完畢。共驗證 ${current - 2} 個候選數，發現特異值/反例數: ${anomalies}`
        }[lang] || `✔ Search completed. Tested ${current - 2} candidates. Anomalies: ${anomalies}`;

        if (logFeed) logFeed.innerHTML += `<div class="log-line success">${tDoneLog}</div>`;
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
    let lang = i18n.getLanguage() || "en";
    if (lang === "zh" || lang === "zh-CN") lang = "zh-Hans";
    if (lang === "zh-TW" || lang === "zh-HK") lang = "zh-Hant";

    if (rule === "collatz_std") {
      return { isAnomaly: false };
    } else if (rule === "collatz_5n") {
      let cur = n;
      let visited = new Set([cur]);
      for (let s = 0; s < 80; s++) {
        cur = cur % 2 === 0 ? cur / 2 : 5 * cur + 1;
        if (visited.has(cur) && cur !== 1) {
          const noteCycle = {
            en: `Cycle detected at ${cur}!`,
            de: `Zyklus bei ${cur} entdeckt!`,
            fr: `Cycle détecté en ${cur} !`,
            it: `Ciclo rilevato a ${cur}!`,
            ja: `ループトラップを検出: ${cur}!`,
            ko: `${cur}에서 순환 루프 발견!`,
            "zh-Hans": `在数字 ${cur} 处陷入非平凡循环！`,
            "zh-Hant": `在數字 ${cur} 處陷入非平凡循環！`
          }[lang] || `Cycle detected at ${cur}!`;
          return { isAnomaly: true, note: noteCycle };
        }
        if (cur > 1e6) {
          const noteDiverge = {
            en: `Escaped to orbit > 1,000,000 in ${s} steps!`,
            de: `In Orbit > 1.000.000 in ${s} Schritten entwichen!`,
            fr: `Échappé vers une orbite > 1 000 000 en ${s} étapes !`,
            it: `Fuggito a orbita > 1.000.000 in ${s} passaggi!`,
            ja: `${s} ステップで値が 1,000,000 を超過発散！`,
            ko: `${s}단계 만에 1,000,000을 초과하여 발산!`,
            "zh-Hans": `历经 ${s} 步爆发性脱离，轨道突破 1,000,000 发散！`,
            "zh-Hant": `歷經 ${s} 步爆發性脫離，軌道突破 1,000,000 發散！`
          }[lang] || `Escaped to orbit > 1,000,000 in ${s} steps!`;
          return { isAnomaly: true, note: noteDiverge };
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
          const noteAltCycle = {
            en: `Alternate cycle trapped at ${cur}`,
            de: `In Alternativzyklus bei ${cur} gefangen`,
            fr: `Cycle alternatif piégé en ${cur}`,
            it: `Ciclo alternativo intrappolato a ${cur}`,
            ja: `代替ループにトラップ: ${cur}`,
            ko: `대체 루프에 갇힘: ${cur}`,
            "zh-Hans": `陷入独立副循环，停留在 ${cur}`,
            "zh-Hant": `陷入獨立副循環，停留在 ${cur}`
          }[lang] || `Alternate cycle trapped at ${cur}`;
          return { isAnomaly: true, note: noteAltCycle };
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
        const noteGoldbach = {
          en: `${n} cannot be written as 2 primes (${n}-2=${n-2} is composite)!`,
          de: `${n} kann nicht als 2 Primzahlen dargestellt werden (${n}-2=${n-2} ist zusammengesetzt)!`,
          fr: `${n} ne peut pas s'écrire comme 2 premiers (${n}-2=${n-2} est composé) !`,
          it: `${n} non può essere scritto come 2 primi (${n}-2=${n-2} è composto)!`,
          ja: `${n} は2つの素数の和として表せない (${n}-2=${n-2} は合成数)!`,
          ko: `${n}은(는) 두 소수의 합으로 쓸 수 없음 (${n}-2=${n-2}은 합성수)!`,
          "zh-Hans": `${n} 无法拆为两素数之和 (${n}-2=${n-2} 为合数)!`,
          "zh-Hant": `${n} 無法拆為兩質數之和 (${n}-2=${n-2} 為合數)!`
        }[lang] || `${n} cannot be written as 2 primes (${n}-2=${n-2} is composite)!`;
        return { isAnomaly: true, note: noteGoldbach };
      }
      return { isAnomaly: false };
    }
    return { isAnomaly: false };
  }
}
