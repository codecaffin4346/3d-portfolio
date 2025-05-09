
import { useEffect, useRef } from 'react';

export function ThreeDScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Basic animation to simulate 3D movement
    const container = containerRef.current;
    if (!container) return;
    
    const cube = document.createElement('div');
    cube.className = 'cube';
    cube.style.width = '100px';
    cube.style.height = '100px';
    cube.style.backgroundColor = '#9b87f5';
    cube.style.position = 'absolute';
    cube.style.top = '50%';
    cube.style.left = '50%';
    cube.style.transform = 'translate(-50%, -50%)';
    cube.style.transition = 'transform 0.3s ease';
    cube.style.boxShadow = '0 0 15px rgba(155, 135, 245, 0.6)';
    cube.style.borderRadius = '10px';
    
    const text = document.createElement('div');
    text.textContent = 'PORTFOLIO';
    text.style.position = 'absolute';
    text.style.color = '#9b87f5';
    text.style.fontSize = '24px';
    text.style.fontWeight = 'bold';
    text.style.top = '15%';
    text.style.left = '50%';
    text.style.transform = 'translateX(-50%)';
    
    container.appendChild(cube);
    container.appendChild(text);
    
    // Floating animation
    let position = 0;
    let direction = 1;
    
    const animate = () => {
      position += 0.01 * direction;
      
      if (position > 1) direction = -1;
      if (position < -1) direction = 1;
      
      cube.style.transform = `translate(-50%, calc(-50% + ${position * 10}px)) rotate(${position * 5}deg)`;
      text.style.transform = `translateX(-50%) translateY(${position * 3}px)`;
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      if (container.contains(cube)) container.removeChild(cube);
      if (container.contains(text)) container.removeChild(text);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full bg-transparent"
      style={{ perspective: '800px' }}
    />
  );
}
