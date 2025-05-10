
"use client";
import { useEffect, useRef } from "react";

export function SplashCursor({
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  SPLAT_RADIUS = 0.2,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0, g: 0, b: 0 },
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial resize
    resize();
    
    // Setup resize listener
    window.addEventListener('resize', resize);
    
    // Particle system
    const particles: Particle[] = [];
    const maxParticles = 100;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;
      
      constructor(x: number, y: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
        this.color = color;
        this.maxLife = 100;
        this.life = this.maxLife;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= DENSITY_DISSIPATION;
        
        // Gradually reduce speed for dissipation effect
        this.speedX *= (1 - 0.01 * VELOCITY_DISSIPATION);
        this.speedY *= (1 - 0.01 * VELOCITY_DISSIPATION);
        
        if (this.size > 0.2) {
          this.size -= 0.1;
        }
      }
      
      draw(ctx: CanvasRenderingContext2D) {
        const opacity = this.life / this.maxLife;
        ctx.fillStyle = this.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const generateColor = () => {
      const hue = Math.floor(Math.random() * 360);
      return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    };
    
    const addParticles = (x: number, y: number, amount: number) => {
      for (let i = 0; i < amount; i++) {
        const size = Math.random() * 15 * SPLAT_RADIUS + 5;
        const color = generateColor();
        particles.push(new Particle(x, y, size, color));
        
        // Remove oldest particles if we exceed max
        if (particles.length > maxParticles) {
          particles.shift();
        }
      }
    };
    
    // Mouse events
    const handlePointerMove = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Add particles less frequently during move for better performance
      if (Math.random() > 0.7) {
        addParticles(x, y, 1);
      }
    };
    
    const handlePointerDown = (e: PointerEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      addParticles(x, y, 10);
    };
    
    // Attach event listeners
    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerdown', handlePointerDown);
    
    // Animation loop
    const animate = () => {
      // Semi-transparent background to create trail effect
      ctx.fillStyle = `rgba(${BACK_COLOR.r * 255}, ${BACK_COLOR.g * 255}, ${BACK_COLOR.b * 255}, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        
        // Remove dead particles
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Add initial particles for visual interest
    const randomParticles = () => {
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        addParticles(x, y, 1);
      }
    };
    
    randomParticles();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [DENSITY_DISSIPATION, VELOCITY_DISSIPATION, SPLAT_RADIUS, COLOR_UPDATE_SPEED, BACK_COLOR]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-auto z-[-1]"
      style={{ 
        opacity: 0.8, 
        background: `rgb(${BACK_COLOR.r * 255}, ${BACK_COLOR.g * 255}, ${BACK_COLOR.b * 255})`
      }}
    />
  );
}
