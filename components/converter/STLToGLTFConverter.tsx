'use client';
import { convertSTLtoGLTF } from '@/lib/stl-gl';
import { useState } from 'react';

const STLToGLTFConverter: React.FC = () => {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
		}
	};

	const handleConvert = () => {
		if (file) {
			const reader = new FileReader();
			reader.onload = (e: ProgressEvent<FileReader>) => {
				const arrayBuffer = e.target?.result;
				if (arrayBuffer instanceof ArrayBuffer) {
					convertSTLtoGLTF(arrayBuffer);
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
