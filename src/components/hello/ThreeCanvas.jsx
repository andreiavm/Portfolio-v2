import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';
import displacementMapImage from './displacement-map.webp';

const ThreeCanvas = () => {
    const torusRef = useRef();

    const [displacementMap, setDisplacementMap] = useState(null);
    const [displacementOffset, setDisplacementOffset] = useState({ x: 0, y: 0 });
    const [displacementBias, setDisplacementBias] = useState(10);
    // const [displacementScale, setDisplacementScale] = useState(10);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (torusRef.current) {
            torusRef.current.rotation.y += 0.0005;
            // torusRef.current.rotation.x += 0.001;
            // torusRef.current.rotation.z += 0.001;

            const smoothOffsetX = Math.sin(time * 0.001);
            const smoothOffsetY = Math.sin(time * 0.001);

            const newDisplacementBias = 1 + Math.sin(time * 0.25) * 0.5;
            // const newDisplacementScale = -5 + Math.sin(time * 0.25) * 5;

            setDisplacementBias(newDisplacementBias);
            // setDisplacementScale(newDisplacementScale);

            setDisplacementOffset({
                x: smoothOffsetX,
                y: smoothOffsetY,
            });
        }

    });
    useEffect(() => {
        const loadDisplacementMap = async () => {
            const texture = await new THREE.TextureLoader().loadAsync(displacementMapImage);
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            setDisplacementMap(texture);
        };
        loadDisplacementMap();
    }, []);


    return (
        <>
            <ambientLight intensity={2} color={0xffffff} />
            <directionalLight castShadow position={[50, 100, 300]} intensity={0.9} />
            {displacementMap && (
                <>
                    {/* <Tetrahedron
                        ref={torusRef}
                        args={[40, 500, 100, 50]}
                        position={[0, 0, 0]}
                    >
                        <meshStandardMaterial
                            wireframe={false}
                            color={0x112FA7}
                            displacementMap={displacementMap}
                            displacementScale={100}
                            displacementBias={displacementBias}
                            transparent
                            opacity={1}
                            displacementMap-offset={new THREE.Vector2(displacementOffset.x, displacementOffset.y)}
                        />
                    </Tetrahedron> */}
                    <TorusKnot
                        ref={torusRef}
                        args={[20, 0.01, 500, 50]}
                        position={[0, 0, 0]}
                        scale={[0.7, 0.7, 0.7]}
                    >
                        <meshStandardMaterial
                            wireframe={true}
                            color={0xDA5116}
                            displacementMap={displacementMap}
                            displacementScale={5}
                            displacementBias={displacementBias}
                            transparent
                            opacity={1}
                            displacementMap-offset={new THREE.Vector2(displacementOffset.x, displacementOffset.y)}
                        />
                    </TorusKnot>
                </>
            )}
        </>
    );
};

const TorusCanvas = () => {
    return (
        <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [10, 5, 40], fov: 30 }}
            gl={{
                preserveDrawingBuffer: true,
                // pointerEvents: "none"
            }}
        >
            <Suspense fallback={null}>
                <ThreeCanvas />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default TorusCanvas;
