/**
 * WonderMath - Standalone Offline Interactive Lesson Exporter
 * Generates a self-contained, zero-dependency HTML worksheet/lab
 * that runs completely offline in any web browser.
 */

import { i18n } from "../i18n/i18n.js";

export class LessonExporter {
  constructor(conjecture) {
    this.conjecture = conjecture;
  }

  toHTML(gradeLevel = "investigators") {
    return LessonExporter.generateLessonHTML(this.conjecture, gradeLevel);
  }

  toMarkdown(gradeLevel = "investigators") {
    return LessonExporter.generateLessonMarkdown(this.conjecture, gradeLevel);
  }

  static generateLessonMarkdown(conjecture, gradeLevel = "investigators") {
    const lang = i18n.getLanguage();
    const gradeData = (conjecture.grades && conjecture.grades[gradeLevel]) || (conjecture.grades && conjecture.grades.investigators) || {};
    const gradeTitle = {
      explorers: i18n.t("grade_explorers"),
      investigators: i18n.t("grade_investigators"),
      pioneers: i18n.t("grade_pioneers")
    }[gradeLevel] || gradeLevel;

    return `# ${conjecture.name} (${gradeTitle})
**${conjecture.subtitle || ''}**
*${conjecture.field || ''} • Status: ${conjecture.statusBadge || ''}*

---

## 🎯 Learning Target & Core Riddle
> ${gradeData.tagline || ''}

### Intuitive Analogy
${gradeData.analogy || ''}

---

## 📋 Investigation Rules & Steps
${(gradeData.rules || []).map((r, i) => `${i + 1}. ${r}`).join('\n')}

---

## 🔍 The Unsolved Mystery / Key Theorem
${gradeData.mystery || ''}

💡 **Fun Fact**: ${gradeData.funFact || ''}

---

## 📜 Historical Progression
${(conjecture.history || []).map(h => `- **${h.year}** (${h.author}): ${h.note}`).join('\n')}

---

## 🤖 Lean 4 Formalization
\`\`\`lean
${conjecture.leanCode || '-- Formal proof code'}
\`\`\`
`;
  }

  static generateLessonHTML(conjecture, gradeLevel = "investigators") {
    const lang = i18n.getLanguage();
    const gradeData = (conjecture.grades && conjecture.grades[gradeLevel]) || (conjecture.grades && conjecture.grades.investigators) || {};
    const gradeTitle = {
      explorers: i18n.t("grade_explorers"),
      investigators: i18n.t("grade_investigators"),
      pioneers: i18n.t("grade_pioneers")
    }[gradeLevel] || gradeLevel;

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${conjecture.name} - WonderMath Interactive Lesson</title>
  <style>
    :root {
      --bg-base: #0a0d14;
      --bg-card: rgba(18, 24, 38, 0.95);
      --border-card: rgba(255, 255, 255, 0.1);
      --text-main: #f8fafc;
      --text-secondary: #94a3b8;
      --accent-cyan: #38bdf8;
      --accent-emerald: #10b981;
      --accent-amber: #f59e0b;
      --accent-rose: #f43f5e;
      --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg-base);
      color: var(--text-main);
      font-family: var(--font-family);
      line-height: 1.6;
      padding: 2rem 1rem;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    .header {
      text-align: center;
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-card);
    }
    .badge {
      display: inline-block;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      background: rgba(56, 189, 248, 0.15);
      color: var(--accent-cyan);
      border: 1px solid rgba(56, 189, 248, 0.3);
      margin-bottom: 0.75rem;
    }
    h1 { font-size: 2.2rem; margin-bottom: 0.5rem; color: #fff; }
    .subtitle { color: var(--text-secondary); font-size: 1.1rem; }
    .zone-card {
      background: var(--bg-card);
      border: 1px solid var(--border-card);
      border-radius: 12px;
      padding: 1.75rem;
      margin-bottom: 2rem;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }
    .zone-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      padding-bottom: 0.75rem;
    }
    .zone-pill {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border-radius: 4px;
      background: var(--accent-cyan);
      color: #000;
    }
    .zone-title { font-size: 1.3rem; font-weight: 700; color: #fff; }
    .analogy-box {
      background: rgba(56, 189, 248, 0.08);
      border-left: 4px solid var(--accent-cyan);
      padding: 1rem 1.25rem;
      border-radius: 0 8px 8px 0;
      margin-bottom: 1.5rem;
    }
    ul.rules-list { margin-left: 1.5rem; margin-bottom: 1.5rem; }
    ul.rules-list li { margin-bottom: 0.5rem; color: #e2e8f0; }
    .canvas-container {
      width: 100%;
      height: 380px;
      background: #060911;
      border: 1px solid var(--border-card);
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      margin-bottom: 1rem;
    }
    canvas { display: block; width: 100%; height: 100%; }
    .controls-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
      background: rgba(255,255,255,0.03);
      padding: 0.75rem 1rem;
      border-radius: 8px;
      border: 1px solid var(--border-card);
    }
    button {
      background: var(--accent-cyan);
      color: #000;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      font-size: 0.9rem;
      transition: opacity 0.2s;
    }
    button:hover { opacity: 0.9; }
    button.btn-secondary {
      background: rgba(255,255,255,0.1);
      color: #fff;
    }
    .timeline-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;
    }
    .timeline-year {
      font-weight: 700;
      color: var(--accent-cyan);
      min-width: 60px;
      font-family: monospace;
    }
    pre.code-block {
      background: #05080f;
      border: 1px solid var(--border-card);
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      font-family: monospace;
      font-size: 0.9rem;
      color: #e2e8f0;
    }
    .footer {
      text-align: center;
      color: var(--text-secondary);
      font-size: 0.85rem;
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--border-card);
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="badge">${gradeTitle} • ${conjecture.field}</div>
      <h1>${conjecture.icon} ${conjecture.name}</h1>
      <div class="subtitle">${conjecture.subtitle}</div>
    </header>

    <!-- Zone 1: Principles -->
    <section class="zone-card">
      <div class="zone-header">
        <span class="zone-pill">ZONE ①</span>
        <h2 class="zone-title">${i18n.t("zone_1_title")}</h2>
      </div>
      <div class="analogy-box">
        <strong>💡 ${i18n.t("concept_overview_label")}</strong>
        <p style="margin-top: 0.35rem;">${gradeData.analogy}</p>
      </div>
      <h3 style="color: var(--accent-cyan); margin-bottom: 0.75rem;">${i18n.t("rules_title")}</h3>
      <ul class="rules-list">
        ${gradeData.rules.map(r => `<li>${r}</li>`).join("")}
      </ul>
      <h3 style="color: var(--accent-rose); margin-bottom: 0.75rem;">${i18n.t("mystery_title")}</h3>
      <p style="margin-bottom: 1rem; color: #cbd5e1;">${gradeData.mystery}</p>
      <div style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); padding: 0.75rem 1rem; border-radius: 6px; color: #fde68a;">
        <strong>🌟 ${i18n.t("fun_fact_label")}</strong> ${gradeData.funFact}
      </div>
    </section>

    <!-- Zone 2: History -->
    <section class="zone-card">
      <div class="zone-header">
        <span class="zone-pill" style="background: var(--accent-amber);">ZONE ②</span>
        <h2 class="zone-title">${i18n.t("zone_2_title")}</h2>
      </div>
      <div>
        ${conjecture.history.map(item => `
          <div class="timeline-item">
            <span class="timeline-year">${item.year}</span>
            <div>
              <strong>${item.author}</strong>
              <div style="color: var(--text-secondary); font-size: 0.92rem; margin-top: 0.2rem;">${item.note}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Zone 3: Interactive Lab -->
    <section class="zone-card">
      <div class="zone-header">
        <span class="zone-pill" style="background: var(--accent-emerald);">ZONE ③</span>
        <h2 class="zone-title">${i18n.t("zone_3_title")}</h2>
      </div>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">${i18n.t("sim_header_sub")}</p>
      
      <div class="controls-bar" id="offline-controls">
        <button id="btn-offline-action">${i18n.t("btn_scan")}</button>
        <button class="btn-secondary" id="btn-offline-step">${i18n.t("btn_step")}</button>
        <button class="btn-secondary" id="btn-offline-reset">${i18n.t("btn_reset")}</button>
        <span id="offline-status" style="font-family: monospace; font-size: 0.9rem; color: var(--accent-cyan); margin-left: auto;"></span>
      </div>

      <div class="canvas-container">
        <canvas id="offline-canvas"></canvas>
      </div>
    </section>

    <!-- Zone 4: Extension & Lean -->
    <section class="zone-card">
      <div class="zone-header">
        <span class="zone-pill" style="background: #a855f7; color: #fff;">ZONE ④</span>
        <h2 class="zone-title">${i18n.t("zone_4_title")}</h2>
      </div>
      <p style="color: var(--text-secondary); margin-bottom: 1rem;">${i18n.t("lean_header_sub")}</p>
      <pre class="code-block"><code>${conjecture.leanCode}</code></pre>
    </section>

    <footer class="footer">
      <p><strong>WonderMath</strong> — Interactive Mathematics Worksheet</p>
      <p style="margin-top: 0.35rem;">Generated for offline classroom & independent study. No server required.</p>
    </footer>
  </div>

  <script>
    // Embedded Standalone Canvas Logic
    (function() {
      const canvas = document.getElementById("offline-canvas");
      const ctx = canvas.getContext("2d");
      const statusEl = document.getElementById("offline-status");
      const btnAction = document.getElementById("btn-offline-action");
      const btnStep = document.getElementById("btn-offline-step");
      const btnReset = document.getElementById("btn-offline-reset");

      function resize() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        draw();
      }
      window.addEventListener("resize", resize);

      let step = 0;
      let animId = null;
      let isPlaying = false;

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        for (let x = 0; x < canvas.width; x += 40) {
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }

        // Generic pulse / waveform representation for the offline sheet
        ctx.strokeStyle = "#38bdf8";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        const pts = Math.min(step, 100);
        for (let i = 0; i <= pts; i++) {
          const x = (i / 100) * canvas.width;
          const y = canvas.height / 2 + Math.sin(i * 0.15) * (canvas.height * 0.35) * (1 - i / 120);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        statusEl.textContent = "Step: " + step + " / 100";
      }

      function tick() {
        if (!isPlaying) return;
        step = (step + 1) % 100;
        draw();
        animId = setTimeout(tick, 50);
      }

      btnAction.addEventListener("click", () => {
        isPlaying = !isPlaying;
        btnAction.textContent = isPlaying ? "⏸️ Pause" : "▶️ Auto-Scan";
        if (isPlaying) tick();
        else clearTimeout(animId);
      });

      btnStep.addEventListener("click", () => {
        isPlaying = false;
        btnAction.textContent = "▶️ Auto-Scan";
        clearTimeout(animId);
        step = (step + 1) % 100;
        draw();
      });

      btnReset.addEventListener("click", () => {
        isPlaying = false;
        btnAction.textContent = "▶️ Auto-Scan";
        clearTimeout(animId);
        step = 0;
        draw();
      });

      resize();
    })();
  </script>
</body>
</html>`;
  }

  static exportLesson(conjecture, gradeLevel = "investigators") {
    const lang = i18n.getLanguage();
    const html = LessonExporter.generateLessonHTML(conjecture, gradeLevel);
    if (typeof Blob === "undefined" || typeof URL === "undefined" || typeof URL.createObjectURL !== "function") {
      return html;
    }
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wondermath-${conjecture.id}-${gradeLevel}-${lang}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return html;
  }
}
