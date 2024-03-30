import About from './About';
import Contact from './Contact';
import Introduction from './Introduction';

const App = () => {
	return (
		<section className="container grid gap-4">
			<Introduction />
			<About />
			<Contact />
		</section>
	);
};

export default App;
