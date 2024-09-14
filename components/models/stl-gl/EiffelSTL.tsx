'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { STLLoader } from 'three/examples/jsm/Addons.js';

function MeshComponent() {
	const fileUrl = 'model/stl-gl/eiffel/stl.STL';
	const geom = useLoader(STLLoader, fileUrl);
	const mesh = useRef<Mesh>(null!);

	useFrame(() => {
		// mesh.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={mesh}>
			<primitive object={geom} />
			<meshStandardMaterial color="blue" />
		</mesh>
	);
}

export function EiffelSTL() {
	return (
		<div className="h-screen">
			<Canvas>
				<OrbitControls />
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<MeshComponent />
			</Canvas>
		</div>
	);
}
