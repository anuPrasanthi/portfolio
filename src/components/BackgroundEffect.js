import React, { useEffect, useRef } from 'react';
import './BackgroundEffect.css';

const BackgroundEffect = () => {
  const canvasRef = useRef(null);
  const particles = [];

  const createParticle = (x, y) => {
    const size = Math.random() * 10 + 5; // Particle size
    particles.push({
      x,
      y,
      size,
      alpha: Math.random() * 0.5 + 0.2, // Random opacity
      speedX: (Math.random() - 0.5) * 2, // Horizontal movement
      speedY: (Math.random() - 0.5) * 2, // Vertical movement
      decay: Math.random() * 0.02 + 0.01 // Fading speed
    });
  };

  const drawParticle = (ctx, particle) => {
    ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`; // White color for smoke
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  };

  const animateParticles = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.forEach((particle, index) => {
      drawParticle(ctx, particle);

      // Update particle position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.alpha -= particle.decay; // Fade out

      // Remove particle if it is faded out
      if (particle.alpha <= 0) {
        particles.splice(index, 1);
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY); // Create a particle at the cursor position
    };

    resizeCanvas();
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animateParticles(ctx);
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="wave-canvas" />;
};

export default BackgroundEffect;

// import React, { useEffect, useRef } from 'react';
// import './BackgroundEffect.css';

// const BackgroundEffect = () => {
//   const canvasRef = useRef(null);
//   const particles = [];

//   const createParticle = (x, y) => {
//     const size = Math.random() * 10 + 5; // Random size for particles
//     particles.push({
//       x,
//       y,
//       size,
//       alpha: Math.random() * 0.5 + 0.2, // Starting opacity
//       speedX: (Math.random() - 0.5) * 0.5, // Slightly random horizontal speed
//       speedY: (Math.random() * -1.5) - 1, // Upward movement
//       decay: Math.random() * 0.02 + 0.01, // Fading speed
//       angle: Math.random() * Math.PI * 2 // Random angle for drifting effect
//     });
//   };

//   const drawParticle = (ctx, particle) => {
//     ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`; // White color for smoke

//     // Draw a wisp shape
//     ctx.beginPath();
//     ctx.moveTo(particle.x, particle.y);
//     ctx.lineTo(particle.x + particle.size * Math.cos(particle.angle), particle.y + particle.size * Math.sin(particle.angle));
//     ctx.lineTo(particle.x + particle.size * 0.5 * Math.cos(particle.angle + Math.PI / 4), particle.y + particle.size * 0.5 * Math.sin(particle.angle + Math.PI / 4));
//     ctx.lineTo(particle.x + particle.size * 0.5 * Math.cos(particle.angle - Math.PI / 4), particle.y + particle.size * 0.5 * Math.sin(particle.angle - Math.PI / 4));
//     ctx.closePath();
//     ctx.fill();
//   };

//   const animateParticles = (ctx) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

//     particles.forEach((particle, index) => {
//       drawParticle(ctx, particle);

//       // Update particle position
//       particle.x += particle.speedX + (Math.random() - 0.5) * 0.05; // Slight horizontal drift
//       particle.y += particle.speedY; // Upward movement
//       particle.alpha -= particle.decay; // Fade out

//       // Remove particle if it is faded out
//       if (particle.alpha <= 0) {
//         particles.splice(index, 1);
//       }
//     });
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const handleMouseMove = (e) => {
//       createParticle(e.clientX, e.clientY); // Create a particle at the cursor position
//     };

//     resizeCanvas();
//     window.addEventListener('mousemove', handleMouseMove);

//     const animate = () => {
//       animateParticles(ctx);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     window.addEventListener('resize', resizeCanvas);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', resizeCanvas);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="wave-canvas" />;
// };

// export default BackgroundEffect;







