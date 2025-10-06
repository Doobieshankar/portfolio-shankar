"use client";

import dynamic from "next/dynamic";
import React from "react";
import { useEffect, useRef, useState } from "react";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const ThreeGlobe = () => {
  const parentRef = useRef(null);
  const [size, setSize] = useState({ width: 300, height: 300 });

  useEffect(() => {
    if (!parentRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setSize({
          width: Math.min(width * 0.6, 600), // scale based on parent width
          height: Math.min(width * 0.6, 600), // keep square shape
        });
      }
    });

    resizeObserver.observe(parentRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={parentRef} className="w-full flex justify-center bg-green-500">
      <Globe
        width={size.width + 100}
        height={size.height + 100}
        backgroundColor="rgba(0, 0, 0, 0)"
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        /* globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" */
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          {
            lat: 11.1085,
            lng: 77.3411,
            text: "Tiruppur, Tamil Nadu",
            color: "white",
            size: 18,
          },
        ]}
      />
    </div>
  );
};

export default ThreeGlobe;
