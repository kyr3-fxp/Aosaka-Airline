/**
 * AOSAKA AIRLINES - 3D VECTOR GRAPHIC ENGINE (Vector3DEngine.js)
 * 100% Vector-based 3D Flight Route & Wireframe Airplane Matrix (No raster images)
 */

class Vector3DEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.angle = 0;
    this.isInitialized = false;
  }

  init() {
    this.canvas = document.getElementById('vector-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();

    window.addEventListener('resize', () => this.resizeCanvas());

    const hero = this.canvas.parentElement;
    if (hero) {
      hero.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.targetX = (e.clientX - rect.left - rect.width / 2) * 0.05;
        this.mouse.targetY = (e.clientY - rect.top - rect.height / 2) * 0.05;
      });
    }

    if (!this.isInitialized) {
      this.isInitialized = true;
      this.animate();
    }
  }

  resizeCanvas() {
    if (!this.canvas || !this.canvas.parentElement) return;
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (!this.ctx || !this.canvas) return;

    const w = this.canvas.width;
    const h = this.canvas.height;

    // Smooth Mouse Parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    this.ctx.clearRect(0, 0, w, h);

    // Deep Dark Midnight Background
    const bgGrad = this.ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#0A0F1D');
    bgGrad.addColorStop(1, '#1E293B');
    this.ctx.fillStyle = bgGrad;
    this.ctx.fillRect(0, 0, w, h);

    this.angle += 0.008;

    // Center Coordinate with Parallax Offset
    const cx = w / 2 + this.mouse.x * 20;
    const cy = h / 2.5 + this.mouse.y * 15;

    // 1. Render 3D Vector Wireframe Jet Airplane
    this.draw3DVectorAirplane(cx, cy);

    // 2. Render 3D Vector Flight Arcs & Nodes
    this.drawVectorFlightArcs(cx, cy, w, h);
  }

  draw3DVectorAirplane(cx, cy) {
    const scale = 1.2;
    const t = this.angle;

    // 3D Airplane Vertices (Fuselage, Wings, Tail)
    const rawVertices = [
      { x: 0, y: -90, z: 0 },   // Nose
      { x: 0, y: 30, z: -15 },  // Top Tail
      { x: 0, y: 50, z: 0 },    // Tail end
      { x: -110, y: 10, z: 0 }, // Left Wing tip
      { x: 110, y: 10, z: 0 },  // Right Wing tip
      { x: -35, y: -20, z: 0 }, // Left Wing base
      { x: 35, y: -20, z: 0 },  // Right Wing base
      { x: 0, y: 0, z: 12 }     // Cockpit belly
    ];

    // Rotate vertices in 3D (Pitch & Yaw)
    const pitch = Math.sin(t * 0.5) * 0.15 + (this.mouse.y * 0.01);
    const roll = Math.cos(t * 0.8) * 0.1 + (this.mouse.x * 0.01);

    const projected = rawVertices.map(v => {
      // 3D Pitch rotation
      let y1 = v.y * Math.cos(pitch) - v.z * Math.sin(pitch);
      let z1 = v.y * Math.sin(pitch) + v.z * Math.cos(pitch);

      // 3D Roll rotation
      let x2 = v.x * Math.cos(roll) - z1 * Math.sin(roll);
      let z2 = v.x * Math.sin(roll) + z1 * Math.cos(roll);

      return {
        x: cx + x2 * scale,
        y: cy + y1 * scale
      };
    });

    // Draw Vector Lines (Crisp Cyan & Red Vector Lines)
    this.ctx.lineWidth = 1.8;
    this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.7)';
    this.ctx.shadowColor = '#38BDF8';
    this.ctx.shadowBlur = 10;

    // Outer Fuselage & Wings Vector Wireframe
    const edges = [
      [0, 5], [5, 3], [3, 2], [2, 4], [4, 6], [6, 0], // Main wing silhouette
      [0, 7], [7, 2], [1, 2], [1, 0]                   // Cockpit & tail fin
    ];

    edges.forEach(([i, j]) => {
      this.ctx.beginPath();
      this.ctx.moveTo(projected[i].x, projected[i].y);
      this.ctx.lineTo(projected[j].x, projected[j].y);
      this.ctx.stroke();
    });

    // Red Glowing Vector Wingtip Navigation Beacons
    this.drawVectorBeacon(projected[3].x, projected[3].y, '#EF4444');
    this.drawVectorBeacon(projected[4].x, projected[4].y, '#38BDF8');
    this.drawVectorBeacon(projected[0].x, projected[0].y, '#FFFFFF');

    this.ctx.shadowBlur = 0;
  }

  drawVectorBeacon(x, y, color) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, 4, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.shadowColor = color;
    this.ctx.shadowBlur = 12;
    this.ctx.fill();
  }

  drawVectorFlightArcs(cx, cy, w, h) {
    const nodes = [
      { code: 'BOG', x: cx - 280, y: cy + 70 },
      { code: 'MDE', x: cx - 140, y: cy - 40 },
      { code: 'CTG', x: cx + 40, y: cy - 70 },
      { code: 'NAS', x: cx + 220, y: cy - 20 },
      { code: 'PUJ', x: cx + 300, y: cy + 80 }
    ];

    // Draw Vector Flight Paths
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
    this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([6, 6]);

    for (let i = 0; i < nodes.length - 1; i++) {
      const n1 = nodes[i];
      const n2 = nodes[i + 1];
      this.ctx.moveTo(n1.x, n1.y);
      this.ctx.quadraticCurveTo((n1.x + n2.x) / 2, (n1.y + n2.y) / 2 - 35, n2.x, n2.y);
    }
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Vector Destination Radar Nodes
    nodes.forEach(node => {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, 5, 0, Math.PI * 2);
      this.ctx.fillStyle = '#EF4444';
      this.ctx.fill();

      // Vector Label
      this.ctx.fillStyle = '#94A3B8';
      this.ctx.font = 'bold 11px Poppins, sans-serif';
      this.ctx.fillText(node.code, node.x + 10, node.y + 4);
    });
  }
}

export default new Vector3DEngine();
