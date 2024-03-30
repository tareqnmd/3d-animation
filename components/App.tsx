import About from './About';
import CanvasContainer from './CanvasContainer';
import Introduction from './Introduction';

function App() {
	return (
		<>
			<CanvasContainer />
			<div className="container">
				<Introduction />
				<About />
			</div>
		</>
	);
}

export default App;
