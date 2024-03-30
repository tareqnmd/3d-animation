'use client';
import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const SphereFrame = () => {
	const sphereRef: any = useRef(null);

	useFrame(() => {
		if (sphereRef.current) {
			const scrollY = window.scrollY;
			const breakAmount = scrollY / 1000;
			sphereRef.current.rotation.x += 0.01;
			sphereRef.current.rotation.y += 0.01;
			sphereRef.current.scale.set(
				1 - breakAmount,
				1 - breakAmount,
				1 - breakAmount
			);
		}
	});

	return (
		<mesh ref={sphereRef}>
			<Sphere args={[1, 32, 32]}>
				<meshPhongMaterial
					attach="material"
					color="#3f583f"
				/>
			</Sphere>
		</mesh>
	);
};

export default SphereFrame;
