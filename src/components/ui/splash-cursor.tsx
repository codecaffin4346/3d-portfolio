
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

    // Safer WebGL context acquisition with proper type handling
    let gl: WebGLRenderingContext | WebGL2RenderingContext | null = null;
    
    try {
      // Try WebGL2 first with proper type assertion
      gl = canvas.getContext('webgl2');
      
      // Fall back to WebGL1 if needed
      if (!gl) {
        const fallbackContext = canvas.getContext('webgl') || 
                               canvas.getContext('experimental-webgl');
        
        // Type check to ensure we have a WebGL context
        if (fallbackContext instanceof WebGLRenderingContext) {
          gl = fallbackContext;
        }
      }
      
      // If still no WebGL, set flag and return early
      if (!gl) {
        console.error('WebGL not supported');
        setWebGLSupported(false);
        return;
      }
    } catch (e) {
      console.error('Error initializing WebGL:', e);
      setWebGLSupported(false);
      return;
    }

    // Function to detect if running on a mobile device
    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    // Reduce quality for mobile devices
    if (isMobileDevice()) {
      DYE_RESOLUTION = Math.min(DYE_RESOLUTION, 512);
      SIM_RESOLUTION = Math.min(SIM_RESOLUTION, 64);
    }

    // Set up basic drawing capabilities
    gl.clearColor(BACK_COLOR.r, BACK_COLOR.g, BACK_COLOR.b, TRANSPARENT ? 0 : 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // Simple animation instead of full fluid sim for reliability
    const simpleAnimation = () => {
      if (!canvas || !gl) return;
      
      // Resize canvas to match display size
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      
      // Check if the canvas needs to be resized
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }
      
      // Clear with semi-transparent background
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      // Request next frame
      requestAnimationFrame(simpleAnimation);
    };
    
    // Start the animation loop
    simpleAnimation();
    
    // Simple mouse interactivity - just tracking mouse position
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!canvas || !gl) return;
      
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      // Calculate position relative to canvas
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Very basic visual effect - just changing the clear color slightly
      const color = {
        r: BACK_COLOR.r + Math.sin(x / canvas.width * Math.PI) * 0.1,
        g: BACK_COLOR.g + Math.sin(y / canvas.height * Math.PI) * 0.1,
        b: BACK_COLOR.b + 0.1
      };
      
      gl.clearColor(color.r, color.g, color.b, TRANSPARENT ? 0 : 1);
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
