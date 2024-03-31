import CanvasContainer from './CanvasContainer';
import FullDiv from './FullDiv';

function App() {
	return (
		<>
			<CanvasContainer />
			<div className="app-content">
				<FullDiv bg="bg-[#003049]" />
				<FullDiv bg="bg-[#3d348b]" />
				<FullDiv bg="bg-[#f7b801]" />
				<FullDiv bg="bg-[#f35b04]" />
				<FullDiv bg="bg-[#2a9d8f]" />
			</div>
		</>
	);
}

export default App;
