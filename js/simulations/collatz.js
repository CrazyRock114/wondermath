/**
 * Collatz Conjecture Interactive Simulation
 * Hailstone trajectory curve, peak altitude, step statistics, and cycle visualizer.
 */

export class CollatzSimulation {
  constructor(canvasId, statsContainerId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas?.getContext("2d");
    this.statsContainer = document.getElementById(statsContainerId);
    this.trajectory = [];
    this.animFrame = null;
    this.currentStep = 0;
    this.ruleA = 3;
    this.ruleB = 1;
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.max(320, rect.width - 24);
    this.canvas.height = 360;
    if (this.trajectory.length > 0) {
      this.drawTrajectory(this.trajectory.length);
    }
  }

  calculateTrajectory(start, a = 3, b = 1, maxSteps = 1000) {
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
        break; // reached standard loop
      }
      if (visited.has(n)) {
        cycleDetected = true;
        break;
      }
      visited.add(n);
      if (n > 1e12 || n < -1e12) break;
    }

    this.trajectory = path;
    this.cycleDetected = cycleDetected;
    this.startAnimation();
    this.updateStats();
  }

  startAnimation() {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.currentStep = 1;
    const animate = () => {
      this.drawTrajectory(this.currentStep);
      if (this.currentStep < this.trajectory.length) {
        this.currentStep = Math.min(this.trajectory.length, this.currentStep + Math.max(1, Math.floor(this.trajectory.length / 80)));
        this.animFrame = requestAnimationFrame(animate);
      }
    };
    animate();
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
        ctx.arc(x, y, isPeak ? 5 : (isLast ? 4 : 2.5), 0, Math.PI * 2);
        ctx.fillStyle = isPeak ? "#f43f5e" : (isLast ? "#22c55e" : "#38bdf8");
        ctx.fill();
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 1;
        ctx.stroke();

        if (isPeak && i > 0) {
          ctx.fillStyle = "#f43f5e";
          ctx.font = "bold 11px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(`Peak: ${peak.toLocaleString()}`, x, y - 10);
        }
      }
    }

    // Axis Labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Steps (Time)", w / 2, h - 12);
  }

  updateStats() {
    if (!this.statsContainer || this.trajectory.length === 0) return;
    const start = this.trajectory[0];
    const steps = this.trajectory.length - 1;
    const peak = Math.max(...this.trajectory);
    const reachesOne = this.trajectory.includes(1);

    this.statsContainer.innerHTML = `
      <div class="stat-card">
        <span class="stat-label">Starting Number</span>
        <span class="stat-val highlight">${start.toLocaleString()}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Total Steps to Finish</span>
        <span class="stat-val">${steps}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Peak Altitude</span>
        <span class="stat-val ${peak > start * 10 ? 'alert' : ''}">${peak.toLocaleString()}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Outcome</span>
        <span class="stat-val ${reachesOne ? 'success' : 'warning'}">
          ${reachesOne ? '✅ Landed on 1 (4-2-1 Loop)' : (this.cycleDetected ? '🔄 Trapped in Cycle' : '🚀 Escaped!')}
        </span>
      </div>
    `;
  }
}
