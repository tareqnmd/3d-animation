'use client';
import { useState } from 'react';
import Models from './Models';
import { AppleModel } from './models/AppleModel';
import { CDModel } from './models/CDModel';
import { DogModel } from './models/DogModel';
import { MusicModel } from './models/MusicModel';

const CanvasContainer = () => {
	const [type, setType] = useState('music');
	return (
		<>
			<Models
				type={type}
				setType={setType}
			/>
			<div className="app-canvas">
				{type === 'music' ? (
					<MusicModel />
				) : type === 'dog' ? (
					<DogModel />
				) : type === 'cd' ? (
					<CDModel />
				) : type === 'apple' ? (
					<AppleModel />
				) : null}
			</div>
		</>
	);
};

export default CanvasContainer;
