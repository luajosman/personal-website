import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import FloatingKnot from "./FloatingKnot";

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 2, 2]} intensity={1.2} />
      <FloatingKnot />
      <Environment preset="city" />
    </Canvas>
  );
}
