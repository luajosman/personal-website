import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function FloatingKnot() {
  const mesh = useRef<THREE.Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += delta * 0.35;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, -mouse.y * 0.25, 0.05);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, -mouse.x * 0.12, 0.05);

    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, mouse.x * 0.15, 0.04);
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]}>
      <torusKnotGeometry args={[1.05, 0.32, 220, 18]} />
      <MeshDistortMaterial
        color={"#8B5CF6"}
        roughness={0.2}
        metalness={0.6}
        distort={0.35}
        speed={1.2}
      />
    </mesh>
  );
}
