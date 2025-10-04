"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const ThreeGlobe = () => {
  return (
    <div className="w-[100%] h-screen bg-red-300 flex items-center justify-center overflow-hidden">
      <Globe
        height={326}
        width={326}
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
