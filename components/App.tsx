import About from './About';
import CanvasContainer from './CanvasContainer';
import Contact from './Contact';
import Introduction from './Introduction';

function App() {
	return (
		<>
			<CanvasContainer />
			<div className="app-content container">
				<Introduction />
				<About />
				<Contact />
			</div>
		</>
	);
}

export default App;
