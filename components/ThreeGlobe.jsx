"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeGlobeNextjs() {
  const mountRef = useRef(null);
  const frameId = useRef(null);

  useEffect(() => {
    let renderer;
    let scene;
    let camera;
    let globe;
    let controls;

    let width = 0;
    let height = 0;

    let req = null;

    const init = async () => {
      // dynamic imports to avoid SSR issues in Next.js
      const THREE = await import("three");
      const { OrbitControls } = await import("three-stdlib");
      const Globe = (await import("three-globe")).default;

      if (!mountRef.current) return;

      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;

      // renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio || 1);
      renderer.setSize(width, height);
      renderer.outputEncoding = THREE.sRGBEncoding;
      mountRef.current.appendChild(renderer.domElement);

      // scene + camera
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.set(0, 0, 300);

      // lights
      const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
      hemi.position.set(0, 200, 0);
      scene.add(hemi);

      const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
      dirLight.position.set(0, 200, 100);
      scene.add(dirLight);

      // globe
      globe = new Globe({
        waitForGlobeReady: true,
      });
      globe
        .globeImageUrl(
          "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        )
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")

        .labelsData([{ lat: 11.1085, lng: 77.3411, text: "Tiruppur" }])
        .labelLat((d) => d.lat)
        .labelLng((d) => d.lng)
        .labelText((d) => d.text)
        .labelSize(1.5)
        .labelDotRadius(0.5)
        .labelColor(() => "rgba(255,255,255,0.85)");

      scene.add(globe);

      // atmosphere glow (slight)
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(101, 64, 64),
        new THREE.MeshBasicMaterial({
          color: 0x00aaff,
          transparent: true,
          opacity: 0.06,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        })
      );
      scene.add(atmosphere);

      // optional: add a few small moving 'shooting stars'
      const starGeo = new THREE.BufferGeometry();
      const starCount = 60;
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 1200;
        positions[i * 3 + 1] = Math.random() * 600 - 200;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 1200;
      }
      starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const starMaterial = new THREE.PointsMaterial({
        size: 0.8,
        transparent: true,
        opacity: 0.7,
      });
      const stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      // controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.minDistance = 110;
      controls.maxDistance = 600;

      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.0006; // adjust speed here

      // simple auto-rotation
      let lastTime = performance.now();
      const animate = () => {
        req = requestAnimationFrame(animate);
        const now = performance.now();
        const dt = now - lastTime;
        lastTime = now;

        // auto-rotate globe
        if (globe) {
          globe.rotation.y += 0.0006; // tweak speed
        }

        // subtle star movement
        stars.rotation.y += 0.00005;

        controls.update();
        renderer.render(scene, camera);
      };

      animate();

      // handle resize
      const onResize = () => {
        if (!mountRef.current) return;
        width = mountRef.current.clientWidth;
        height = mountRef.current.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener("resize", onResize);

      // cleanup function
      return () => {
        if (req) cancelAnimationFrame(req);
        window.removeEventListener("resize", onResize);
        controls?.dispose();
        renderer?.forceContextLoss();
        renderer?.dispose();
        mountRef.current?.removeChild(renderer.domElement);
      };
    };

    // run init and catch cleanup function returned by init
    let cleanupFn;
    init()
      .then((maybeCleanup) => {
        cleanupFn = maybeCleanup;
      })
      .catch((err) => {
        // show error in console during development; keep UI silent
        // eslint-disable-next-line no-console
        console.error("ThreeGlobe init failed", err);
      });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <div className="w-[100%] h-[500px] bg-black rounded-2xl overflow-hidden shadow-2xl">
      <div
        ref={mountRef}
        className="w-full h-full bg-[#04091a] dark:bg-black"
      />
    </div>
  );
}

/*
Usage instructions (quick):
1) Install deps:
   npm install three three-globe three-stdlib

2) Put this file under components/ThreeGlobeNextjs.tsx

3) Use it in a client page (app/page.tsx or a client component):
   import ThreeGlobeNextjs from '@/components/ThreeGlobeNextjs';
   export default function Page() {
     return <div className="p-6"><ThreeGlobeNextjs /></div>
   }

Notes:
- This component uses dynamic imports to avoid SSR errors in Next.js. Ensure the file that imports it is a client component ("use client").
- Swap globe textures by changing globe.globeImageUrl to your preferred imagery URL.
- For heavy production use, consider preloading textures and handling WebGL context loss more thoroughly.
*/
