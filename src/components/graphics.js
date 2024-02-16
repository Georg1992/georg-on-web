import React, { useEffect, useRef } from 'react';

const renderGraphics = (ctx, numberOfBeams, time) => {
  const canvas = ctx.canvas;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const beamLength = 100;
  const maxOpacity = 1;
  const fadeOutDuration = 50; // Number of frames for fade-out

  for (let i = 0; i < numberOfBeams; i++) {
    const angle = (i * (Math.PI * 2)) / numberOfBeams;
    const distance = (time / 2) % fadeOutDuration; // Gradual outward movement

    const endX = centerX + Math.cos(angle) * (beamLength + distance);
    const endY = centerY + Math.sin(angle) * (beamLength + distance);

    const opacity = 1 - distance / fadeOutDuration;
    const adjustedOpacity = Math.max(0, Math.min(maxOpacity, opacity));

    const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY);
    gradient.addColorStop(0, `rgba(255, 0, 0, ${adjustedOpacity})`); // Red color
    gradient.addColorStop(1, 'transparent');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
};

const Graphics = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const numberOfBeams = 50;
    let time = 0;

    const renderCanvas = () => {
      renderGraphics(ctx, numberOfBeams, time);
      time += 1;
      requestAnimationFrame(renderCanvas);
    };

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Initial setup
    handleResize();
    renderCanvas();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Graphics;