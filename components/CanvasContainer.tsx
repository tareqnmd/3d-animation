'use client';
import { useState } from 'react';
import { Dog } from './models/Dog';
import { Music } from './models/Music';

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
			</div>
			<div className="app-canvas">
				{type === 'music' ? <Music /> : type === 'dog' ? <Dog /> : null}
			</div>
		</>
	);
};

export default CanvasContainer;
