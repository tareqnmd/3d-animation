import * as THREE from 'three';
import { GLTFExporter, STLLoader } from 'three/examples/jsm/Addons.js';

export const convertSTLtoGLTF = (stlFile: ArrayBuffer): Promise<Blob> => {
	return new Promise((resolve, reject) => {
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
						const gltfBlob = new Blob([JSON.stringify(gltf)], {
							type: 'application/json',
						});
						resolve(gltfBlob); // Return the Blob of GLTF data
					},
					(error: ErrorEvent) => {
						reject(
							new Error(
								'An error occurred during the GLTF export: ' +
									error.message
							)
						);
					}
				);
			},
			undefined,
			(error: any) => {
				reject(
					new Error(
						'An error occurred while loading the STL file: ' +
							error.message
					)
				);
			}
		);
	});
};

export const downloadFile = (blob: Blob, name = 'model.gltf') => {
	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = url;
	link.download = name;
	link.click();
	URL.revokeObjectURL(url);
};
