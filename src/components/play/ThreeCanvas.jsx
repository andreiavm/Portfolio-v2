import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, TorusKnot, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import displacementMapImage from './displacement-map.webp';

const ThreeCanvas = () => {


    const torusRef = useRef();
    const [displacementMap, setDisplacementMap] = useState(null);
    const [displacementOffset, setDisplacementOffset] = useState({ x: 0, y: 0 });

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (torusRef.current) {
            torusRef.current.rotation.y += 0.001;

            const smoothOffsetX = Math.sin(time * 0.001);
            const smoothOffsetY = Math.sin(time * 0.001);

            setDisplacementOffset({
                x: smoothOffsetX,
                y: smoothOffsetY,
            });

            const scale = 1 + Math.sin(time * 0.2) * 0.5;
            torusRef.current.scale.set(scale, scale, scale);
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
            <ambientLight intensity={2.3} color={0xffffff} />
            {displacementMap && (
                <>
                    <TorusKnot
                        ref={torusRef}
                        args={[25,2, 500, 50]}
                        position={[0, 0, 0]}
                    >
                        <meshStandardMaterial
                            wireframe={true}
                            color={0xDA5116}
                            displacementMap={displacementMap}
                            displacementScale={5}
                            displacementBias={0}
                            transparent
                            opacity={0.6}
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
            camera={{ position: [0, 0, 40], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <ThreeCanvas />
            </Suspense>
            <Preload all />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default TorusCanvas;
