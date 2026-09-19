"use client";

import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.2, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.25 + pointer.y * 0.5, 0.04);
    camera.lookAt(0, 0.35, 0);
  });

  return null;
}

function PyramidAtrium() {
  const group = useRef<THREE.Group>(null);
  const bars = useMemo(
    () =>
      Array.from({ length: 22 }, (_, index) => {
        const sideIndex = index < 11 ? index : 21 - index;
        const height = 3.7 - sideIndex * 0.22;
        const x = (index - 10.5) * 0.34;
        const z = Math.abs(index - 10.5) * -0.035;
        return { height, x, z };
      }),
    []
  );
  const lightPlanes = useMemo(
    () =>
      Array.from({ length: 7 }, (_, index) => ({
        x: (index - 3) * 0.72,
        y: 0.2 + Math.sin(index) * 0.18,
        z: -0.55 - index * 0.08,
        rotation: (index - 3) * 0.08,
        height: 2.7 + index * 0.16
      })),
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.22) * 0.09;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.34) * 0.035;
  });

  return (
    <group ref={group}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, -0.1]} receiveShadow>
        <planeGeometry args={[9, 8]} />
        <meshStandardMaterial color="#f7f5ef" roughness={0.86} metalness={0.08} />
      </mesh>
      <mesh position={[0, -0.96, -1.95]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.35, 2.72, 4, 1]} />
        <meshStandardMaterial color="#4c0202" roughness={0.52} metalness={0.12} />
      </mesh>
      {lightPlanes.map((plane, index) => (
        <mesh
          key={`plane-${index}`}
          position={[plane.x, plane.y, plane.z]}
          rotation={[0.16, plane.rotation, index % 2 === 0 ? 0.1 : -0.1]}
        >
          <boxGeometry args={[0.02, plane.height, 1.9]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.32}
            roughness={0.18}
            metalness={0.08}
          />
        </mesh>
      ))}
      {bars.map((bar, index) => (
        <Float key={index} speed={0.8 + index * 0.01} rotationIntensity={0.12} floatIntensity={0.12}>
          <mesh position={[bar.x, bar.height / 2 - 1.05, bar.z]} castShadow>
            <boxGeometry args={[0.09, bar.height, 0.16]} />
            <meshStandardMaterial color="#530303" roughness={0.48} metalness={0.2} />
          </mesh>
        </Float>
      ))}
      <mesh position={[0, -0.12, 0.05]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[0.46, 0.72, 4]} />
        <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.16} />
      </mesh>
    </group>
  );
}

export default function AtriumScene() {
  return (
    <Canvas shadows dpr={[1, 1.8]}>
      <PerspectiveCamera makeDefault position={[0, 1.25, 5.7]} fov={36} />
      <color attach="background" args={["#ffffff"]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[3, 5, 4]} intensity={2.4} castShadow />
      <spotLight position={[-4, 3, 4]} intensity={2.2} angle={0.36} penumbra={0.8} />
      <PyramidAtrium />
      <CameraRig />
      <Environment preset="apartment" />
    </Canvas>
  );
}
