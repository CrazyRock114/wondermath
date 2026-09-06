/**
 * WonderMath - Elliptic Curve & Fermat Frey Curve Simulation
 * Weierstrass cubic curve y² = x³ + ax + b, chord-and-tangent group law (P ⊕ Q = -R),
 * point doubling (2P), and direct bridge to Fermat's Last Theorem.
 */

import { i18n } from "../i18n/i18n.js";

export class EllipticCurveSimulation {
  constructor(canvasId, statsContainerId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas?.getContext("2d");
    this.statsContainer = document.getElementById(statsContainerId);

    // Curve parameters: y² = x³ + ax + b
    this.a = -4;
    this.b = 0;

    // Points P and Q (x-coordinates)
    this.xP = -1.2;
    this.signP = 1; // 1 for +sqrt, -1 for -sqrt
    this.xQ = 2.0;
    this.signQ = 1;

    // Viewport scale & bounds
    this.scale = 45; // pixels per math unit
    this.originX = 0;
    this.originY = 0;
    this.draggingPoint = null;

    this.initEvents();
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = Math.max(320, rect.width - 24);
    this.canvas.height = 420;
    this.originX = this.canvas.width / 2;
    this.originY = this.canvas.height / 2;
    this.render();
  }

  initEvents() {
    if (!this.canvas) return;

    const getCanvasPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (this.canvas.width / rect.width),
        y: (e.clientY - rect.top) * (this.canvas.height / rect.height)
      };
    };

    const toMath = (px, py) => ({
      x: (px - this.originX) / this.scale,
      y: -(py - this.originY) / this.scale
    });

    const toPixel = (mx, my) => ({
      x: this.originX + mx * this.scale,
      y: this.originY - my * this.scale
    });

    this.canvas.addEventListener("mousedown", (e) => {
      const pos = getCanvasPos(e);
      const P = this.getPoint(this.xP, this.signP);
      const Q = this.getPoint(this.xQ, this.signQ);

      const pixP = toPixel(P.x, P.y);
      const pixQ = toPixel(Q.x, Q.y);

      const distP = Math.hypot(pos.x - pixP.x, pos.y - pixP.y);
      const distQ = Math.hypot(pos.x - pixQ.x, pos.y - pixQ.y);

      if (distP < 18) {
        this.draggingPoint = "P";
      } else if (distQ < 18) {
        this.draggingPoint = "Q";
      }
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.draggingPoint || !this.canvas) return;
      const pos = getCanvasPos(e);
      const mathPos = toMath(pos.x, pos.y);

      // Snap to closest valid x on the curve
      const newX = this.findClosestValidX(mathPos.x);
      const sign = mathPos.y >= 0 ? 1 : -1;

      if (this.draggingPoint === "P") {
        this.xP = newX;
        this.signP = sign;
      } else if (this.draggingPoint === "Q") {
        this.xQ = newX;
        this.signQ = sign;
      }
      this.render();
    });

    window.addEventListener("mouseup", () => {
      this.draggingPoint = null;
    });

    // Touch support
    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const pos = getCanvasPos(touch);
        const P = this.getPoint(this.xP, this.signP);
        const Q = this.getPoint(this.xQ, this.signQ);
        const pixP = toPixel(P.x, P.y);
        const pixQ = toPixel(Q.x, Q.y);

        if (Math.hypot(pos.x - pixP.x, pos.y - pixP.y) < 24) this.draggingPoint = "P";
        else if (Math.hypot(pos.x - pixQ.x, pos.y - pixQ.y) < 24) this.draggingPoint = "Q";
      }
    }, { passive: true });

    this.canvas.addEventListener("touchmove", (e) => {
      if (!this.draggingPoint || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const pos = getCanvasPos(touch);
      const mathPos = toMath(pos.x, pos.y);
      const newX = this.findClosestValidX(mathPos.x);
      const sign = mathPos.y >= 0 ? 1 : -1;

      if (this.draggingPoint === "P") {
        this.xP = newX;
        this.signP = sign;
      } else if (this.draggingPoint === "Q") {
        this.xQ = newX;
        this.signQ = sign;
      }
      this.render();
    }, { passive: true });

    this.canvas.addEventListener("touchend", () => {
      this.draggingPoint = null;
    });
  }

  setParams(a, b) {
    this.a = parseFloat(a) || 0;
    this.b = parseFloat(b) || 0;
    this.xP = this.findClosestValidX(this.xP);
    this.xQ = this.findClosestValidX(this.xQ);
    this.render();
  }

  loadPreset(name) {
    if (name === "standard") {
      this.a = -4;
      this.b = 0;
      this.xP = -1.2;
      this.signP = 1;
      this.xQ = 2.0;
      this.signQ = 1;
    } else if (name === "rank1") {
      this.a = -2;
      this.b = 1;
      this.xP = -1.4;
      this.signP = 1;
      this.xQ = 1.0;
      this.signQ = 1;
    } else if (name === "frey") {
      // Representation of a 3-real-root Frey curve
      this.a = -7;
      this.b = 6;
      this.xP = -2.5;
      this.signP = 1;
      this.xQ = 1.8;
      this.signQ = 1;
    }
    this.render();
  }

  doubleP() {
    this.xQ = this.xP;
    this.signQ = this.signP;
    this.render();
  }

  evaluateY2(x) {
    return x * x * x + this.a * x + this.b;
  }

  findClosestValidX(targetX) {
    let bestX = targetX;
    if (this.evaluateY2(targetX) >= 0) return targetX;

    // Search outwards for valid x
    for (let delta = 0.05; delta < 6; delta += 0.05) {
      if (this.evaluateY2(targetX + delta) >= 0) return targetX + delta;
      if (this.evaluateY2(targetX - delta) >= 0) return targetX - delta;
    }
    return 0;
  }

  getPoint(x, sign = 1) {
    const y2 = this.evaluateY2(x);
    if (y2 < 0) {
      const validX = this.findClosestValidX(x);
      return { x: validX, y: sign * Math.sqrt(Math.max(0, this.evaluateY2(validX))) };
    }
    return { x, y: sign * Math.sqrt(y2) };
  }

  computeGroupAddition() {
    const P = this.getPoint(this.xP, this.signP);
    const Q = this.getPoint(this.xQ, this.signQ);

    const isIdentical = Math.abs(P.x - Q.x) < 0.001 && Math.abs(P.y - Q.y) < 0.001;
    const isVerticalOpposite = Math.abs(P.x - Q.x) < 0.001 && Math.abs(P.y + Q.y) < 0.001;

    if (isVerticalOpposite && Math.abs(P.y) > 0.001) {
      return {
        P, Q,
        R: null,
        Sum: null,
        isInfinity: true,
        m: Infinity,
        formula: "P ⊕ Q = \\mathcal{O} \\text{ (Point at Infinity)}"
      };
    }

    let m;
    if (isIdentical) {
      // Tangent slope: m = (3x² + a) / (2y)
      if (Math.abs(P.y) < 0.0001) {
        return {
          P, Q,
          R: null,
          Sum: null,
          isInfinity: true,
          m: Infinity,
          formula: "2P = \\mathcal{O} \\text{ (Vertical Tangent)}"
        };
      }
      m = (3 * P.x * P.x + this.a) / (2 * P.y);
    } else {
      // Secant slope: m = (yQ - yP) / (xQ - xP)
      m = (Q.y - P.y) / (Q.x - P.x);
    }

    // Third root of x³ - m²x² + ... = 0 is xR = m² - xP - xQ
    const xR = m * m - P.x - Q.x;
    // Intersection y on secant: yR = yP + m(xR - xP)
    const yR = P.y + m * (xR - P.x);

    // Sum point is reflection across x-axis: P ⊕ Q = (xR, -yR)
    const Sum = { x: xR, y: -yR };
    const R = { x: xR, y: yR };

    return {
      P, Q, R, Sum,
      isInfinity: false,
      m,
      isDouble: isIdentical
    };
  }

  render() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Draw background grid & axes
    this.drawGrid(ctx, w, h);

    // Draw Weierstrass curve
    this.drawCurve(ctx);

    // Calculate group addition
    const addition = this.computeGroupAddition();

    // Draw secant / tangent line
    this.drawLine(ctx, addition);

    // Draw points
    this.drawPoints(ctx, addition);

    // Update stats container
    this.updateStats(addition);
  }

  drawGrid(ctx, w, h) {
    ctx.save();
    ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
    ctx.lineWidth = 1;

    // Vertical grid
    for (let x = this.originX % this.scale; x < w; x += this.scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    // Horizontal grid
    for (let y = this.originY % this.scale; y < h; y += this.scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, this.originY);
    ctx.lineTo(w, this.originY);
    ctx.moveTo(this.originX, 0);
    ctx.lineTo(this.originX, h);
    ctx.stroke();

    // Axis tick labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "10px Inter, sans-serif";
    ctx.textAlign = "center";
    for (let mathX = -6; mathX <= 6; mathX += 2) {
      if (mathX === 0) continue;
      const px = this.originX + mathX * this.scale;
      ctx.fillText(`${mathX}`, px, this.originY + 14);
    }
    ctx.textAlign = "right";
    for (let mathY = -4; mathY <= 4; mathY += 2) {
      if (mathY === 0) continue;
      const py = this.originY - mathY * this.scale;
      ctx.fillText(`${mathY}`, this.originX - 6, py + 3);
    }
    ctx.restore();
  }

  drawCurve(ctx) {
    ctx.save();
    ctx.strokeStyle = "#38bdf8"; // Cyan curve
    ctx.lineWidth = 2.5;

    const minMathX = -this.originX / this.scale;
    const maxMathX = (this.canvas.width - this.originX) / this.scale;
    const step = 0.02;

    let upperPath = [];
    let lowerPath = [];

    const flushPaths = () => {
      if (upperPath.length > 1) {
        ctx.beginPath();
        ctx.moveTo(upperPath[0].x, upperPath[0].y);
        for (let i = 1; i < upperPath.length; i++) ctx.lineTo(upperPath[i].x, upperPath[i].y);
        for (let i = lowerPath.length - 1; i >= 0; i--) ctx.lineTo(lowerPath[i].x, lowerPath[i].y);
        ctx.stroke();
      }
      upperPath = [];
      lowerPath = [];
    };

    for (let x = minMathX; x <= maxMathX; x += step) {
      const y2 = this.evaluateY2(x);
      if (y2 >= 0) {
        const y = Math.sqrt(y2);
        const px = this.originX + x * this.scale;
        const pyUpper = this.originY - y * this.scale;
        const pyLower = this.originY + y * this.scale;
        upperPath.push({ x: px, y: pyUpper });
        lowerPath.push({ x: px, y: pyLower });
      } else {
        flushPaths();
      }
    }
    flushPaths();
    ctx.restore();
  }

  drawLine(ctx, add) {
    if (!add || add.isInfinity) return;
    const { P, m } = add;

    ctx.save();
    ctx.strokeStyle = "rgba(244, 63, 94, 0.7)"; // Rose secant/tangent line
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    const minMathX = -this.originX / this.scale - 2;
    const maxMathX = (this.canvas.width - this.originX) / this.scale + 2;

    const y1 = P.y + m * (minMathX - P.x);
    const y2 = P.y + m * (maxMathX - P.x);

    const p1x = this.originX + minMathX * this.scale;
    const p1y = this.originY - y1 * this.scale;
    const p2x = this.originX + maxMathX * this.scale;
    const p2y = this.originY - y2 * this.scale;

    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.stroke();

    // Draw vertical reflection line between R and Sum
    if (add.R && add.Sum) {
      ctx.strokeStyle = "rgba(16, 185, 129, 0.6)"; // Emerald dashed reflection
      ctx.beginPath();
      const rx = this.originX + add.R.x * this.scale;
      const ry = this.originY - add.R.y * this.scale;
      const sy = this.originY - add.Sum.y * this.scale;
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx, sy);
      ctx.stroke();
    }
    ctx.restore();
  }

  drawPoints(ctx, add) {
    if (!add) return;
    const { P, Q, R, Sum } = add;

    const drawMarker = (pt, label, color, radius = 7) => {
      if (!pt || isNaN(pt.x) || isNaN(pt.y)) return;
      const px = this.originX + pt.x * this.scale;
      const py = this.originY - pt.y * this.scale;

      ctx.save();
      ctx.beginPath();
      ctx.arc(px, py, radius + 4, 0, Math.PI * 2);
      ctx.fillStyle = color.replace(")", ", 0.25)").replace("rgb", "rgba");
      ctx.fill();

      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.font = "bold 12px Inter, sans-serif";
      ctx.fillStyle = "#fff";
      ctx.fillText(label, px + 10, py - 6);
      ctx.restore();
    };

    drawMarker(P, "P", "rgb(56, 189, 248)"); // Cyan
    if (add.isDouble) {
      drawMarker(P, "P = Q (Tangent)", "rgb(245, 158, 11)");
    } else {
      drawMarker(Q, "Q", "rgb(245, 158, 11)"); // Amber
    }

    if (R) drawMarker(R, "R (Secant ∩ Curve)", "rgb(244, 63, 94)", 5); // Rose
    if (Sum) drawMarker(Sum, "P ⊕ Q = -R", "rgb(16, 185, 129)", 8); // Emerald
  }

  updateStats(add) {
    if (!this.statsContainer) return;

    const disc = -16 * (4 * Math.pow(this.a, 3) + 27 * Math.pow(this.b, 2));
    const discFormatted = disc.toFixed(1);
    const discStatus = disc > 0 ? "2 Components (Δ > 0)" : disc < 0 ? "1 Component (Δ < 0)" : "Singular (Δ = 0)";

    const formatPt = (pt) => pt ? `(${pt.x.toFixed(2)}, ${pt.y.toFixed(2)})` : "∞ (Infinity)";

    this.statsContainer.innerHTML = `
      <div class="stat-card">
        <span class="stat-label">${i18n.t("ec_stat_curve")}</span>
        <span class="stat-val highlight" style="font-size: 0.95rem;">y² = x³ ${this.a >= 0 ? '+ ' + this.a : '- ' + Math.abs(this.a)}x ${this.b >= 0 ? '+ ' + this.b : '- ' + Math.abs(this.b)}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${i18n.t("ec_stat_disc")}</span>
        <span class="stat-val ${disc > 0 ? 'success' : 'alert'}">${discFormatted}</span>
        <span style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${discStatus}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${i18n.t("ec_stat_p")}</span>
        <span class="stat-val highlight" style="font-size: 1rem;">${formatPt(add?.P)}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${i18n.t("ec_stat_q")}</span>
        <span class="stat-val warning" style="font-size: 1rem;">${add?.isDouble ? 'Same as P (2P)' : formatPt(add?.Q)}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">${i18n.t("ec_stat_sum")}</span>
        <span class="stat-val success" style="font-size: 1rem;">${add?.isInfinity ? '𝒪 (Infinity)' : formatPt(add?.Sum)}</span>
      </div>
    `;
  }
}
