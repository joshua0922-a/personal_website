"use client";
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const LiveBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Load lightweight version of particles
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#f4f4f4" }, // light background
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#333333" }, // dark particles
          shape: { type: "circle" },
          opacity: { value: 0.3 }, // higher visibility on light bg
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#666666", // dark gray lines
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default LiveBackground;
