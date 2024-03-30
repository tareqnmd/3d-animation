import About from './About';
import CanvasContainer from './CanvasContainer';
import Introduction from './Introduction';

function App() {
	return (
		<div className="container">
			<Introduction />
			<div className="canvas-container h-screen">
				<CanvasContainer />I
			</div>
			<About />
		</div>
	);
}

export default App;
