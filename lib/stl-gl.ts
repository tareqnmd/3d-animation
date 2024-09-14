import * as THREE from 'three';
import { GLTFExporter, STLLoader } from 'three/examples/jsm/Addons.js';

export const convertSTLtoGLTF = (stlFile: ArrayBuffer): void => {
	const loader = new STLLoader();

	// Load the STL file using the array buffer
	loader.load(
		URL.createObjectURL(new Blob([stlFile])),
		(geometry: THREE.BufferGeometry) => {
			const material = new THREE.MeshStandardMaterial({
				color: 0x00ff00,
			});
			const mesh = new THREE.Mesh(geometry, material);

			const exporter = new GLTFExporter();

			exporter.parse(
				mesh,
				(gltf: any) => {
					const blob = new Blob([JSON.stringify(gltf)], {
						type: 'application/json',
					});
					const url = URL.createObjectURL(blob);

					const link = document.createElement('a');
					link.href = url;
					link.download = 'model.gltf';
					link.click();
				},
				(error: ErrorEvent) => {
					console.error(
						'An error occurred during the GLTF export:',
						error
					);
				}
			);
		},
		undefined,
		(error: any) => {
			console.error('An error occurred while loading STL file:', error);
		}
	);
};
