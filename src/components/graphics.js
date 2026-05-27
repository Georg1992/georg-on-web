import React, { useEffect, useRef } from 'react';

const TEAL = '107, 187, 187';
const AMBER = '201, 169, 98';

const renderGraphics = (ctx, numberOfBeams, time) => {
  const canvas = ctx.canvas;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const beamLength = Math.min(canvas.width, canvas.height) * 0.12;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const fadeOutDuration = 90;

  for (let i = 0; i < numberOfBeams; i++) {
    const angle = (i * (Math.PI * 2)) / numberOfBeams;
    const distance = (time / 3) % fadeOutDuration;

    const endX = centerX + Math.cos(angle) * (beamLength + distance);
    const endY = centerY + Math.sin(angle) * (beamLength + distance);

    const opacity = (1 - distance / fadeOutDuration) * (i % 2 === 0 ? 0.55 : 0.35);
    const rgb = i % 2 === 0 ? TEAL : AMBER;

    const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY);
    gradient.addColorStop(0, `rgba(${rgb}, ${opacity})`);
    gradient.addColorStop(1, 'transparent');

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
};

const Graphics = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const numberOfBeams = 24;
    let time = 27;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      renderGraphics(ctx, numberOfBeams, time);
    };

    const renderCanvas = () => {
      renderGraphics(ctx, numberOfBeams, time);
      time += 0.35;
      animationRef.current = requestAnimationFrame(renderCanvas);
    };

    handleResize();

    if (prefersReducedMotion) {
      renderGraphics(ctx, numberOfBeams, time);
    } else {
      animationRef.current = requestAnimationFrame(renderCanvas);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" />;
};

export default Graphics;
