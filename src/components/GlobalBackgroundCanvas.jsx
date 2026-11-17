import React, { useEffect, useRef } from 'react';

export default function GlobalBackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    // Scroll tracking for parallax wave
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle nodes configuration
    const particleCount = Math.min(Math.floor((width * height) / 16000), 75);
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.size = Math.random() * 2 + 1.2;
        this.color = Math.random() > 0.4 ? '#CCD0CF' : '#9BA8AB';
        this.alpha = Math.random() * 0.5 + 0.25;
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        // Move with velocity
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // Subtle scroll parallax shift
        const scrollDelta = (scrollY - targetScrollY) * 0.05;
        this.y += scrollDelta * 0.2;

        // Pulse alpha
        this.pulse += 0.02;
        this.currentAlpha = this.alpha + Math.sin(this.pulse) * 0.15;

        // Mouse repulsion / gravitation
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 2.5;
          this.y -= Math.sin(angle) * force * 2.5;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, this.currentAlpha));
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    // Ambient floating glowing orbs in background
    let orbAngle = 0;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw Slow Moving Ambient Glowing Aura in Background
      orbAngle += 0.005;
      const orb1X = width * 0.3 + Math.cos(orbAngle) * 120;
      const orb1Y = height * 0.4 + Math.sin(orbAngle * 0.8) * 90;

      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 10, orb1X, orb1Y, width * 0.4);
      grad1.addColorStop(0, 'rgba(37, 39, 69, 0.25)'); // #252745
      grad1.addColorStop(0.6, 'rgba(17, 33, 45, 0.12)'); // #11212D
      grad1.addColorStop(1, 'rgba(6, 20, 27, 0)');
      ctx.fillStyle = grad1;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.75 + Math.sin(orbAngle * 0.7) * 140;
      const orb2Y = height * 0.65 + Math.cos(orbAngle * 0.9) * 100;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, width * 0.45);
      grad2.addColorStop(0, 'rgba(74, 92, 106, 0.16)'); // #4A5C6A
      grad2.addColorStop(0.7, 'rgba(17, 33, 45, 0.08)');
      grad2.addColorStop(1, 'rgba(6, 20, 27, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Update & Draw Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // 3. Draw Constellation Interconnecting Filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#4A5C6A';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Connect to mouse if near
        const mdx = mouse.x - particles[i].x;
        const mdy = mouse.y - particles[i].y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          const mAlpha = (1 - mdist / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#9BA8AB';
          ctx.globalAlpha = mAlpha;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}

