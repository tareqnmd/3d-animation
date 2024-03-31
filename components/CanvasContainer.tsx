'use client';
import { useState } from 'react';
import { CDModel } from './models/CDModel';
import { DogModel } from './models/DogModel';
import { MusicModel } from './models/MusicModel';

const CanvasContainer = () => {
	const [type, setType] = useState('');
	return (
		<>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2">
					<label htmlFor="dog-model">Dog</label>
					<input
						name="model"
						id="dog-model"
						type="radio"
						value="dog"
						onChange={() => setType('dog')}
					/>
				</div>
				<div className="flex items-center gap-2">
					<label htmlFor="music-model">Music</label>
					<input
						name="model"
						id="music-model"
						type="radio"
						value="music"
						onChange={() => setType('music')}
					/>
				</div>
				<div className="flex items-center gap-2">
					<label htmlFor="apple-model">CD</label>
					<input
						name="model"
						id="apple-model"
						type="radio"
						value="apple"
						onChange={() => setType('apple')}
					/>
				</div>
			</div>
			<div className="app-canvas">
				{type === 'music' ? (
					<MusicModel />
				) : type === 'dog' ? (
					<DogModel />
				) : type === 'apple' ? (
					<CDModel />
				) : null}
			</div>
		</>
	);
};

export default CanvasContainer;
