'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

function MeshComponent() {
	const fileUrl = 'model/cd/scene.gltf';
	const mesh = useRef<Mesh>(null!);
	const gltf = useLoader(GLTFLoader, fileUrl);

	useFrame(() => {
		mesh.current.rotation.y += 0.01;
		mesh.current.rotation.x += 0.01;
		mesh.current.rotation.z += 0.01;
	});

	return (
		<mesh ref={mesh}>
			<primitive object={gltf.scene} />
		</mesh>
	);
}

export function CDModel() {
	return (
		<Canvas>
			<OrbitControls />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<MeshComponent />
		</Canvas>
	);
}
