'use client';
import { convertSTLtoGLTF, downloadFile } from '@/lib/stl-gl';
import { useState } from 'react';

const STLToGLTFConverter: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleConvert = async () => {
		if (file) {
			const reader = new FileReader();
			reader.onload = async (e: ProgressEvent<FileReader>) => {
				const arrayBuffer = e.target?.result;
				if (arrayBuffer instanceof ArrayBuffer) {
					try {
						const gltfBlob = await convertSTLtoGLTF(arrayBuffer);
						console.log(gltfBlob);
						const name = file.name.replace(/.stl/i, '.gltf') ?? '';
						downloadFile(gltfBlob, name);
					} catch (error) {
						console.error(error);
					}
				}
			};

			reader.readAsArrayBuffer(file);
		}
	};

	return (
		<div>
			<input
				type="file"
				accept=".stl"
				onChange={handleFileChange}
			/>
			<button
				onClick={handleConvert}
				disabled={!file}
			>
				Convert to GLTF
			</button>
		</div>
	);
};

export default STLToGLTFConverter;
