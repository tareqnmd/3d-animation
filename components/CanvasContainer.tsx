'use client';
import { useState } from 'react';
import Models from './Models';
import { EiffelSTL } from './models/stl-gl/EiffelSTL';
import { EiffelGL } from './models/stl-gl/EiffelGL';

const CanvasContainer = () => {
	const [type, setType] = useState('music');
	return (
		<>
			<Models
				type={type}
				setType={setType}
			/>
			<EiffelGL />
			<EiffelSTL />
			{/* <div className="app-canvas">
				{type === 'music' ? (
					<MusicModel />
				) : type === 'dog' ? (
					<DogModel />
				) : type === 'cd' ? (
					<CDModel />
				) : type === 'apple' ? (
					<AppleModel />
				) : null}
			</div> */}
		</>
	);
};

export default CanvasContainer;
