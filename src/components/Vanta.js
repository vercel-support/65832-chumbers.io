import React, { useState, useRef, useEffect } from "react";
import NET from "vanta/dist/vanta.NET.min";
import * as THREE from "three";

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x4ef6c7,
          backgroundColor: 0x1b1b1b,
          maxDistance: 30,
          spacing: 15,
          showDots: true,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 400.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section style={{ height: 450 }}>
      <div
        id="#animation-bg"
        className="fixed  min-h-1/2"
        style={{ position: "fixed", width: "90%", zIndex: 0 }}
        ref={vantaRef}
      ></div>
    </section>
  );
};

export default Vanta;
