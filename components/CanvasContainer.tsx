'use client';
import { Canvas } from 'react-three-fiber';
import SphereFrame from './SphereFrame';

const CanvasContainer = () => {
	return (
		<Canvas>
			<SphereFrame />
		</Canvas>
	);
};

export default CanvasContainer;
