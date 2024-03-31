'use client';
import { useGLTF } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';

export function CDModel(props: any) {
	const { nodes, materials }: any = useGLTF('model/cd/scene.gltf');
	return (
		<Canvas>
			<group
				{...props}
				dispose={null}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object_2.geometry}
					material={materials.CdMaterial}
					rotation={[-Math.PI / 2, 0, 0]}
				/>
			</group>
		</Canvas>
	);
}

useGLTF.preload('model/cd/scene.gltf');
