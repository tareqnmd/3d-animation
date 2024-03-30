import About from './About';
import CanvasContainer from './CanvasContainer';
import Introduction from './Introduction';

function App() {
	return (
		<>
			<CanvasContainer />
			<div className="app-content container">
				<Introduction />
				<About />
			</div>
		</>
	);
}

export default App;
