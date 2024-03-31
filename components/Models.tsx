const Models = ({ type, setType }: any) => {
	return (
		<div className="bg-gray-900 text-white flex justify-center items-center gap-4 p-2 sticky top-0 z-20">
			<div className="flex items-center gap-2">
				<label htmlFor="music-model">Music</label>
				<input
					name="model"
					id="music-model"
					type="radio"
					value="music"
					checked={type === 'music'}
					onChange={() => setType('music')}
				/>
			</div>
			<div className="flex items-center gap-2">
				<label htmlFor="dog-model">Dog</label>
				<input
					name="model"
					id="dog-model"
					type="radio"
					value="dog"
					checked={type === 'dog'}
					onChange={() => setType('dog')}
				/>
			</div>
			<div className="flex items-center gap-2">
				<label htmlFor="cd-model">CD</label>
				<input
					name="model"
					id="cd-model"
					type="radio"
					value="cd"
					checked={type === 'cd'}
					onChange={() => setType('cd')}
				/>
			</div>
			<div className="flex items-center gap-2">
				<label htmlFor="apple-model">Apple</label>
				<input
					name="model"
					id="apple-model"
					type="radio"
					value="apple"
					checked={type === 'apple'}
					onChange={() => setType('apple')}
				/>
			</div>
		</div>
	);
};

export default Models;
