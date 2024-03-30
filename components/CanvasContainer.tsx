'use client';
import { Canvas } from 'react-three-fiber';
import SphereFrame from './SphereFrame';

const CanvasContainer = () => {
	return (
		<div className="app-canvas">
			<Canvas>
				<SphereFrame />
			</Canvas>
		</div>
	);
};

export default CanvasContainer;
