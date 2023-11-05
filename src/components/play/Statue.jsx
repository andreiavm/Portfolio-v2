import React from "react";
import { useGLTF } from "@react-three/drei";
import statue from "./Statue.glb";

export function Model(props) {
    const { nodes, materials } = useGLTF(statue);
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={nodes.Sphere.material}
                position={[-0.694, 5.076, 0]}
            />
        </group>
    );
}

useGLTF.preload(statue);


export default Model;