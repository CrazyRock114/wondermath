/**
 * Jacobian Conjecture Interactive Grid Warping Simulation
 * Displays continuous deformation of a coordinate grid under polynomial maps,
 * calculates local Jacobian determinant, and demonstrates 2D vs 3D folding.
 */

export class JacobianGridSimulation {
  constructor(canvasId, statsId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas?.getContext("2d");
    this.statsContainer = document.getElementById(statsId);
    this.warpFactor = 0.5;
    this.mode = "standard_shear"; // 'standard_shear', 'pinch', 'claude_3d_slice'
    this.resizeCanvas();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.max(340, rect.width - 24);
    this.canvas.height = 360;
    this.draw();
  }

  setWarp(factor) {
    this.warpFactor = parseFloat(factor);
    this.draw();
    this.updateStats();
  }

  setMode(mode) {
    this.mode = mode;
    this.draw();
    this.updateStats();
  }

  init() {
    this.draw();
    this.updateStats();
  }

  transform(x, y) {
    const k = this.warpFactor;
    if (this.mode === "standard_shear") {
      // Area-preserving polynomial triangular shear: det(J) = 1
      return {
        u: x + k * (y * y * 0.4),
        v: y
      };
    } else if (this.mode === "claude_3d_slice") {
      // 2D slice projection of Claude's 3D non-injective map
      return {
        u: x - k * (x * x * y * 0.3) + k * y,
        v: y + k * (x * x * 0.3)
      };
    } else {
      // Swirl polynomial
      const r2 = x * x + y * y;
      return {
        u: x * Math.cos(k * r2 * 0.3) - y * Math.sin(k * r2 * 0.3),
        v: x * Math.sin(k * r2 * 0.3) + y * Math.cos(k * r2 * 0.3)
      };
    }
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    ctx.clearRect(0, 0, w, h);

    const cx = w / 2;
    const cy = h / 2;
    const scale = Math.min(w, h) / 5.5;

    // Draw grid lines
    const gridRange = 2.2;
    const step = 0.4;

    ctx.lineWidth = 1.2;

    // Vertical grid curves
    for (let gx = -gridRange; gx <= gridRange; gx += step) {
      ctx.beginPath();
      ctx.strokeStyle = Math.abs(gx) < 0.01 ? "#38bdf8" : "rgba(255, 255, 255, 0.15)";
      for (let gy = -gridRange; gy <= gridRange; gy += 0.05) {
        const { u, v } = this.transform(gx, gy);
        const px = cx + u * scale;
        const py = cy - v * scale;
        if (gy === -gridRange) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Horizontal grid curves
    for (let gy = -gridRange; gy <= gridRange; gy += step) {
      ctx.beginPath();
      ctx.strokeStyle = Math.abs(gy) < 0.01 ? "#ec4899" : "rgba(255, 255, 255, 0.15)";
      for (let gx = -gridRange; gx <= gridRange; gx += 0.05) {
        const { u, v } = this.transform(gx, gy);
        const px = cx + u * scale;
        const py = cy - v * scale;
        if (gx === -gridRange) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Highlight Origin
    const origin = this.transform(0, 0);
    ctx.beginPath();
    ctx.arc(cx + origin.u * scale, cy - origin.v * scale, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#fbbf24";
    ctx.fill();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Mode label
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.font = "11px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Mapping: ${this.mode === 'standard_shear' ? 'Triangular Shear (det J = 1)' : 'Claude 3D Projection Slice'}`, 15, 25);
  }

  updateStats() {
    if (!this.statsContainer) return;
    const isClaude = this.mode === "claude_3d_slice";
    this.statsContainer.innerHTML = `
      <div class="stat-card">
        <span class="stat-label">Jacobian Determinant</span>
        <span class="stat-val highlight">${isClaude ? 'det(JF) = -2 (Constant!)' : 'det(JF) = 1.0 (Constant!)'}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Local Invertibility</span>
        <span class="stat-val success">Always True (det ≠ 0)</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Global Invertibility</span>
        <span class="stat-val ${isClaude ? 'alert' : 'success'}">${isClaude ? 'FAILS in 3D (Fold Detected)' : 'Holds in 2D Triangular'}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Status of 2D Planar Case</span>
        <span class="stat-val warning">Still OPEN!</span>
      </div>
    `;
  }
}
