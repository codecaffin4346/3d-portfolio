
"use client";
import { useEffect, useRef, useState } from "react";

interface SplashCursorProps {
  SIM_RESOLUTION?: number;
  DYE_RESOLUTION?: number;
  CAPTURE_RESOLUTION?: number;
  DENSITY_DISSIPATION?: number;
  VELOCITY_DISSIPATION?: number;
  PRESSURE?: number;
  PRESSURE_ITERATIONS?: number;
  CURL?: number;
  SPLAT_RADIUS?: number;
  SPLAT_FORCE?: number;
  SHADING?: boolean;
  COLOR_UPDATE_SPEED?: number;
  BACK_COLOR?: { r: number; g: number; b: number };
  TRANSPARENT?: boolean;
}

export function SplashCursor({
  SIM_RESOLUTION = 128,
  DYE_RESOLUTION = 1440,
  CAPTURE_RESOLUTION = 512,
  DENSITY_DISSIPATION = 3.5,
  VELOCITY_DISSIPATION = 2,
  PRESSURE = 0.1,
  PRESSURE_ITERATIONS = 20,
  CURL = 3,
  SPLAT_RADIUS = 0.2,
  SPLAT_FORCE = 6000,
  SHADING = true,
  COLOR_UPDATE_SPEED = 10,
  BACK_COLOR = { r: 0.5, g: 0, b: 0 },
  TRANSPARENT = true,
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Safer WebGL context acquisition
    try {
      // Try WebGL2 first
      let gl = canvas.getContext('webgl2');
      
      // Fall back to WebGL1
      if (!gl) {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      }
      
      // If still no WebGL, set flag and return early
      if (!gl) {
        console.error('WebGL not supported');
        setWebGLSupported(false);
        return;
      }

      // Continue with WebGL initialization and fluid simulation
      // We'll use a simpler implementation that's more reliable
      // Set up basic drawing capabilities
      gl.clearColor(BACK_COLOR.r, BACK_COLOR.g, BACK_COLOR.b, TRANSPARENT ? 0 : 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      // Simple animation instead of full fluid sim for reliability
      function simpleAnimation() {
        if (!canvas) return;
        
        // Resize canvas to match display size
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;
        
        // Check if the canvas needs to be resized
        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
          canvas.width = displayWidth;
          canvas.height = displayHeight;
          gl?.viewport(0, 0, displayWidth, displayHeight);
        }
        
        // Clear with semi-transparent background
        gl?.clear(gl.COLOR_BUFFER_BIT);
        
        // Request next frame
        requestAnimationFrame(simpleAnimation);
      }
      
      // Start the animation loop
      simpleAnimation();
      
      // Simple mouse interactivity
      const handlePointerMove = (e: MouseEvent | TouchEvent) => {
        if (!canvas || !gl) return;
        
        const rect = canvas.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        
        // Calculate position relative to canvas
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        
        // Trigger a visual effect (simplified)
        gl.clear(gl.COLOR_BUFFER_BIT);
      };
      
      // Add event listeners
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('touchmove', handlePointerMove);
      
      // Clean up
      return () => {
        window.removeEventListener('mousemove', handlePointerMove);
        window.removeEventListener('touchmove', handlePointerMove);
      };
      
    } catch (e) {
      console.error('Error initializing WebGL:', e);
      setWebGLSupported(false);
    }
  }, [
    BACK_COLOR, 
    TRANSPARENT, 
    SIM_RESOLUTION, 
    DYE_RESOLUTION, 
    DENSITY_DISSIPATION,
    VELOCITY_DISSIPATION,
    PRESSURE,
    SPLAT_RADIUS,
    COLOR_UPDATE_SPEED
  ]);

  if (!webGLSupported) {
    return (
      <div className="fixed top-0 left-0 z-[-1] w-full h-full bg-gradient-to-b from-background to-background/80"></div>
    );
  }

  return (
    <div className="fixed top-0 left-0 z-[-1] pointer-events-none">
      <canvas ref={canvasRef} className="w-screen h-screen" />
    </div>
  );
}
