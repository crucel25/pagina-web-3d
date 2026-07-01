"use client";

import { forwardRef } from "react";
import * as THREE from "three";

export type PartDefinition = {
  name: string;
  basePosition: [number, number, number];
  explodedPosition: [number, number, number];
  geometry: "box" | "cylinder" | "sphere" | "torus";
  args: number[];
  color: string;
};

export const PARTS: PartDefinition[] = [
  {
    name: "nucleo",
    basePosition: [0, 0, 0],
    explodedPosition: [0, 0, 0],
    geometry: "box",
    args: [1.4, 1.4, 1.4],
    color: "#0F2027",
  },
  {
    name: "anillo_superior",
    basePosition: [0, 0.7, 0],
    explodedPosition: [0, 3.2, 0],
    geometry: "torus",
    args: [1.1, 0.15, 16, 48],
    color: "#2C7A4B",
  },
  {
    name: "anillo_inferior",
    basePosition: [0, -0.7, 0],
    explodedPosition: [0, -3.2, 0],
    geometry: "torus",
    args: [1.1, 0.15, 16, 48],
    color: "#2C7A4B",
  },
  {
    name: "pieza_frontal",
    basePosition: [0, 0, 0.7],
    explodedPosition: [0, 0, 3.5],
    geometry: "cylinder",
    args: [0.5, 0.5, 0.6, 32],
    color: "#3B82C4",
  },
  {
    name: "pieza_trasera",
    basePosition: [0, 0, -0.7],
    explodedPosition: [0, 0, -3.5],
    geometry: "cylinder",
    args: [0.5, 0.5, 0.6, 32],
    color: "#3B82C4",
  },
  {
    name: "pieza_izquierda",
    basePosition: [-0.7, 0, 0],
    explodedPosition: [-3.5, 0, 0],
    geometry: "sphere",
    args: [0.45, 32, 32],
    color: "#D9A441",
  },
  {
    name: "pieza_derecha",
    basePosition: [0.7, 0, 0],
    explodedPosition: [3.5, 0, 0],
    geometry: "sphere",
    args: [0.45, 32, 32],
    color: "#D9A441",
  },
];

type PartProps = {
  part: PartDefinition;
};

export const Part = forwardRef<THREE.Mesh, PartProps>(({ part }, ref) => {
  const renderGeometry = () => {
    switch (part.geometry) {
      case "box":
        return <boxGeometry args={part.args as [number, number, number]} />;
      case "cylinder":
        return (
          <cylinderGeometry
            args={part.args as [number, number, number, number]}
          />
        );
      case "sphere":
        return <sphereGeometry args={part.args as [number, number]} />;
      case "torus":
        return (
          <torusGeometry
            args={part.args as [number, number, number, number]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <mesh
      ref={ref}
      name={part.name}
      position={part.basePosition}
      castShadow
      receiveShadow
    >
      {renderGeometry()}
      <meshStandardMaterial
        color={part.color}
        metalness={0.4}
        roughness={0.35}
      />
    </mesh>
  );
});

Part.displayName = "Part";
