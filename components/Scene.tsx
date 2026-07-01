"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { PARTS } from "./Part";
import { Part } from "./Part";

function AutoRotate({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

function ExplodedModel() {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#scene-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      PARTS.forEach((part, index) => {
        const mesh = meshRefs.current[index];
        if (!mesh) return;

        tl.to(
          mesh.position,
          {
            x: part.explodedPosition[0],
            y: part.explodedPosition[1],
            z: part.explodedPosition[2],
            ease: "power2.out",
          },
          0
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <AutoRotate>
      {PARTS.map((part, index) => (
        <Part
          key={part.name}
          part={part}
          ref={(el) => {
            meshRefs.current[index] = el;
          }}
        />
      ))}
    </AutoRotate>
  );
}

export default function Scene() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 3, 6], fov: 45 }}
      className="!fixed !inset-0"
    >
      <color attach="background" args={["#05070A"]} />

      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-5, -3, -5]} intensity={0.5} color="#2C7A4B" />

      <ExplodedModel />

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.5}
        scale={12}
        blur={2.5}
        far={4}
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.6}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
