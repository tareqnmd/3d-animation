import { useGLTF } from '@react-three/drei';

export function Music(props: any) {
	const { nodes, materials }: any = useGLTF('model/music/scene.gltf');
	return (
		<group
			{...props}
			dispose={null}
		>
			<group
				position={[-69.393, -16.642, -175.668]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane_main_0.geometry}
					material={materials.main}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane_metal_0.geometry}
					material={materials.metal}
				/>
			</group>
			<group
				position={[-195.619, 80.718, -1.364]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane003_metal_0.geometry}
					material={materials.metal}
				/>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Plane003_main_0.geometry}
					material={materials.main}
				/>
			</group>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube_main_0.geometry}
				material={materials.main}
				position={[0.126, 34.914, 0.871]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle_main_0.geometry}
				material={materials.main}
				position={[2.39, 65.452, 68.273]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle001_main_0.geometry}
				material={materials.main}
				position={[2.281, 91.535, 67.456]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane001_main_0.geometry}
				material={materials.main}
				position={[-173.542, 55.989, -144.779]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle004_main_0.geometry}
				material={materials.main}
				position={[124.718, 71.47, -141.549]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle013_main_0.geometry}
				material={materials.main}
				position={[-257.973, 116.808, 57.552]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane002_main_0.geometry}
				material={materials.main}
				position={[-67.067, 191.327, 433.388]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane004_main_0.geometry}
				material={materials.main}
				position={[24.573, -0.688, 122.19]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane005_main_0.geometry}
				material={materials.main}
				position={[257.687, 1.408, 301.807]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Circle002_main_0.geometry}
				material={materials.main}
				position={[205.341, 3.673, -238.72]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane006_main_0.geometry}
				material={materials.main}
				position={[310.175, 2.129, -92.679]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={100}
			/>
		</group>
	);
}

useGLTF.preload('model/music/scene.gltf');
