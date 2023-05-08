import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import Projectone from "./Components/3D-one/Projectone";

function App() {
  return (
    <div className="abc">
      <Projectone />
    </div>
  );
}

export default App;
