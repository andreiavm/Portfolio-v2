import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';
import displacementMapImage from './displacement-map.webp';

const ThreeCanvas = () => {
    const torusRef = useRef();
    const [displacementMap, setDisplacementMap] = useState(null);

    useFrame(() => {
        torusRef.current.rotation.y += 0.002;
        torusRef.current.rotation.x += 0.002;
    });

    useEffect(() => {
        const loadDisplacementMap = async () => {
            const texture = await new THREE.TextureLoader().loadAsync(displacementMapImage);
            setDisplacementMap(texture);
        };

        loadDisplacementMap();
    }, []);

    return (
        <>
            <ambientLight intensity={2.5} color={0xffffff} />
            {displacementMap && (
                <TorusKnot
                    ref={torusRef}
                    args={[7, 1, 500, 100]}
                    position={[0, 0, 0]}
                >
                    <meshStandardMaterial
                        wireframe={true}
                        color={0xDA5116}
                        displacementMap={displacementMap}
                        displacementScale={2.5}
                        displacementBias={0-0.25}
                        transparent
                        opacity={0.5}
                    />
                </TorusKnot>
            )}
        </>
    );
};

const TorusCanvas = () => {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 20], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <ThreeCanvas />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default TorusCanvas;
