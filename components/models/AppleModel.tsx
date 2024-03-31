import { useGLTF } from '@react-three/drei';

export function AppleModel(props: any) {
	const { nodes, materials }: any = useGLTF('model/apple/scene.gltf');
	return (
		<group
			{...props}
			dispose={null}
		>
			<group
				position={[24.367, -39.753, -43.146]}
				rotation={[-Math.PI / 2, 0, -Math.PI]}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes['apple_low_obj_Material_#35_0'].geometry}
					material={materials.Material_35}
					position={[24.367, 43.146, 39.753]}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('model/apple/scene.gltf');
