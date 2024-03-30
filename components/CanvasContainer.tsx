'use client';
import { Canvas } from 'react-three-fiber';
import SphereFrame from './SphereFrame';

const CanvasContainer = () => {
	return (
		<div className="canvas-container">
			<Canvas>
				<SphereFrame />
			</Canvas>
		</div>
	);
};

export default CanvasContainer;
