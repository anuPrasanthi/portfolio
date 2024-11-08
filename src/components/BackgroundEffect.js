import React, { useEffect, useRef } from "react";
import "./BackgroundEffect.css";

const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  const particles = [];

  const createParticle = (x, y) => {
    const size = Math.random() * 10 + 5;
    particles.push({
      x,
      y,
      size,
      alpha: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      decay: Math.random() * 0.02 + 0.01,
    });
  };

  const drawParticle = (ctx, particle) => {
    ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  };

  const animateParticles = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.forEach((particle, index) => {
      drawParticle(ctx, particle);
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.alpha -= particle.decay;
      if (particle.alpha <= 0) {
        particles.splice(index, 1);
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    resizeCanvas();
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      animateParticles(ctx);
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="wave-canvas" />;
};

export default BackgroundEffect;
