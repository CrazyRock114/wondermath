/**
 * Collatz Conjecture Interactive Simulation
 * Hailstone trajectory curve, granular step-by-step controls, auto-scan,
 * speed adjustment, classic presets (27, 97, 871), and live formula telemetry.
 */

import { i18n } from "../i18n/i18n.js";

export class CollatzSimulation {
  constructor(canvasId, statsContainerId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas?.getContext("2d");
    this.statsContainer = document.getElementById(statsContainerId);
    this.trajectory = [];
    this.animTimer = null;
    this.currentStep = 0;
    this.ruleA = 3;
    this.ruleB = 1;
    this.isPlaying = false;
    this.speedDelay = 80; // ms per step

    this._onResize = () => this.resizeCanvas();
    this.resizeCanvas();
    window.addEventListener("resize", this._onResize);
  }

  destroy() {
    this.pause();
    if (this._onResize) {
      window.removeEventListener("resize", this._onResize);
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    const rect = (parent && typeof parent.getBoundingClientRect === "function")
      ? parent.getBoundingClientRect()
      : (typeof this.canvas.getBoundingClientRect === "function" ? this.canvas.getBoundingClientRect() : { width: 600, height: 360 });
    this.canvas.width = Math.max(320, (rect.width || 600) - 24);
    this.canvas.height = 360;
    if (this.trajectory.length > 0) {
      this.drawTrajectory(this.currentStep || this.trajectory.length);
    }
  }

  calculateTrajectory(start, a = 3, b = 1, maxSteps = 1500) {
    this.pause();
    this.ruleA = a;
    this.ruleB = b;
    let n = Math.max(1, parseInt(start, 10) || 1);
    const path = [n];
    const visited = new Set([n]);
    let cycleDetected = false;

    for (let i = 0; i < maxSteps; i++) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = a * n + b;
      }
      path.push(n);

      if (a === 3 && b === 1 && n === 1) {
        break;
      }
      if (visited.has(n)) {
        cycleDetected = true;
        break;
      }
      visited.add(n);
      if (n > 1e14 || n < -1e14) break;
    }

    this.trajectory = path;
    this.cycleDetected = cycleDetected;
    this.currentStep = 1;
    this.drawTrajectory(this.currentStep);
    this.updateStats();
  }

  step() {
    this.pause();
    if (this.trajectory.length === 0) return;
    if (this.currentStep < this.trajectory.length) {
      this.currentStep++;
      this.drawTrajectory(this.currentStep);
      this.updateStats();
    }
  }

  toggleScan(btnEl) {
    if (this.isPlaying) {
      this.pause(btnEl);
    } else {
      this.play(btnEl);
    }
  }

  play(btnEl) {
    if (this.trajectory.length === 0) return;
    this.isPlaying = true;
    if (btnEl) btnEl.innerHTML = i18n.t("btn_pause");

    if (this.currentStep >= this.trajectory.length) {
      this.currentStep = 1;
    }

    const loop = () => {
      if (!this.isPlaying) return;
      if (this.currentStep < this.trajectory.length) {
        this.currentStep++;
        this.drawTrajectory(this.currentStep);
        this.updateStats();
        this.animTimer = setTimeout(loop, this.speedDelay);
      } else {
        this.pause(btnEl);
      }
    };
    loop();
  }

  pause(btnEl) {
    this.isPlaying = false;
    if (this.animTimer) clearTimeout(this.animTimer);
    if (btnEl) btnEl.innerHTML = i18n.t("btn_scan");
  }

  reset(btnEl) {
    this.pause(btnEl);
    this.currentStep = 1;
    if (this.trajectory.length > 0) {
      this.drawTrajectory(this.currentStep);
      this.updateStats();
    }
  }

  setSpeed(multiplier) {
    // 0.5x -> 160ms, 1x -> 80ms, 2x -> 40ms, 5x -> 16ms
    this.speedDelay = Math.max(10, Math.round(80 / parseFloat(multiplier)));
  }

  loadPreset(n, btnEl) {
    const input = document.getElementById("collatz-input");
    if (input) input.value = n;
    this.calculateTrajectory(n, this.ruleA, this.ruleB);
    this.play(btnEl);
  }

  drawTrajectory(stepCount) {
    if (!this.ctx || this.trajectory.length === 0) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0, 0, w, h);

    const padding = 45;
    const visibleData = this.trajectory.slice(0, stepCount);
    const maxVal = Math.max(...this.trajectory, 10);
    const totalSteps = Math.max(this.trajectory.length - 1, 10);

    // Draw Grid
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    for (let y = 0; y <= 4; y++) {
      const yPos = h - padding - (y / 4) * (h - padding * 2);
      ctx.beginPath();
      ctx.moveTo(padding, yPos);
      ctx.lineTo(w - padding, yPos);
      ctx.stroke();

      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      ctx.font = "10px monospace";
      ctx.textAlign = "right";
      ctx.fillText(Math.round((y / 4) * maxVal).toLocaleString(), padding - 6, yPos + 3);
    }

    // Coordinates mapping
    const getX = (i) => padding + (i / totalSteps) * (w - padding * 2);
    const getY = (val) => h - padding - (val / maxVal) * (h - padding * 2);

    // Glow Gradient fill under curve
    if (visibleData.length > 1) {
      const gradient = ctx.createLinearGradient(0, padding, 0, h - padding);
      gradient.addColorStop(0, "rgba(56, 189, 248, 0.35)");
      gradient.addColorStop(1, "rgba(56, 189, 248, 0.0)");

      ctx.beginPath();
      ctx.moveTo(getX(0), getY(visibleData[0]));
      for (let i = 1; i < visibleData.length; i++) {
        ctx.lineTo(getX(i), getY(visibleData[i]));
      }
      ctx.lineTo(getX(visibleData.length - 1), h - padding);
      ctx.lineTo(getX(0), h - padding);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }

    // Curve
    ctx.beginPath();
    ctx.strokeStyle = "#38bdf8";
    ctx.lineWidth = 2.5;
    ctx.lineJoin = "round";
    for (let i = 0; i < visibleData.length; i++) {
      const x = getX(i);
      const y = getY(visibleData[i]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Data points & Peak highlight
    const peak = Math.max(...visibleData);
    for (let i = 0; i < visibleData.length; i++) {
      const x = getX(i);
      const y = getY(visibleData[i]);
      const isPeak = visibleData[i] === peak && visibleData.length > 5;
      const isLast = i === visibleData.length - 1;

      if (isPeak || isLast || visibleData.length < 30) {
        ctx.beginPath();
        ctx.arc(x, y, isPeak ? 6 : (isLast ? 5 : 2.5), 0, Math.PI * 2);
        ctx.fillStyle = isPeak ? "#f43f5e" : (isLast ? "#10b981" : "#38bdf8");
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (isPeak && i > 0) {
          ctx.fillStyle = "#f43f5e";
          ctx.font = "bold 11px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(`${i18n.t("stat_peak_prefix")}${peak.toLocaleString()}`, x, y - 10);
        }
      }
    }

    // Axis Labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(i18n.t("stat_steps_axis"), w / 2, h - 12);
  }

  getStepEquation(idx) {
    if (idx <= 0 || idx >= this.trajectory.length) return "Start";
    const prev = this.trajectory[idx - 1];
    const curr = this.trajectory[idx];
    if (prev % 2 === 0) {
      return `${prev} (even) ÷ 2 = ${curr}`;
    } else {
      return `3 × ${prev} (odd) + 1 = ${curr}`;
    }
  }

  updateStats() {
    if (!this.statsContainer || this.trajectory.length === 0) return;
    const start = this.trajectory[0];
    const totalSteps = this.trajectory.length - 1;
    const currentStep = this.currentStep;
    const currentVal = this.trajectory[Math.min(currentStep - 1, this.trajectory.length - 1)];
    const peak = Math.max(...this.trajectory.slice(0, currentStep));
    const reachesOne = this.trajectory.slice(0, currentStep).includes(1);
    const stepEq = this.getStepEquation(currentStep - 1);

    this.statsContainer.innerHTML = `
      <div class="stat-card">
        <span class="stat-label">${i18n.t("stat_start_num")}</span>
        <span class="stat-val highlight">${start.toLocaleString()}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${i18n.t("stat_current_step")}</span>
        <span class="stat-val highlight">${currentStep - 1} <small style="font-size:0.75rem; color:var(--text-muted);">/ ${totalSteps}</small></span>
        <span style="font-size:0.72rem; color:var(--accent-cyan); margin-top:2px;">Val: ${currentVal.toLocaleString()}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${i18n.t("stat_peak_altitude")}</span>
        <span class="stat-val ${peak > start * 10 ? 'alert' : ''}">${peak.toLocaleString()}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${i18n.t("stat_step_equation")}</span>
        <span class="stat-val" style="font-size:0.85rem; color:#cbd5e1; font-family:monospace;">${stepEq}</span>
        <span style="font-size:0.72rem; color:${reachesOne ? 'var(--accent-emerald)' : 'var(--accent-amber)'}; margin-top:2px;">
          ${reachesOne ? i18n.t("stat_landed_1") : (this.cycleDetected ? i18n.t("stat_trapped_cycle") : i18n.t("stat_ascending"))}
        </span>
      </div>
    `;
  }
}
