"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import IdleUser from "./models/idleUser";

const ThreeUser = () => {
  return (
    <div className="w-[100%] h-screen">
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }} shadows>
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 10]} intensity={2} />

        <Suspense fallback={null}>
          {/* Model */}
          <IdleUser scale={3} position={[0, -3.2, 0]} />
        </Suspense>

        {/* Orbit controls */}
        <OrbitControls enablePan enableZoom={false} />

        {/* Optional: HDRI environment */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeUser;
