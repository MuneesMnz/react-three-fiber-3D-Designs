import { useBox } from "@react-three/cannon";
import React from "react";

const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 0.5, position: [0, 20, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Box;
