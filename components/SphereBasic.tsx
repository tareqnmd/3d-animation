'use client';
import { Sphere } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';

const SphereBasic = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.15}
				penumbra={1}
			/>
			<Sphere args={[1, 32, 32]}>
				<meshPhongMaterial
					attach="material"
					color="#00ff00"
				/>
			</Sphere>
		</Canvas>
	);
};

export default SphereBasic;
