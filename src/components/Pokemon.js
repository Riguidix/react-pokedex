function Pokemon(props) {
	return (
		<div className="h-full w-full">
			<img 
				className="h-full w-full opacity-1"
				src={ props.image }
				alt={ props.type + ' Pokémon' }
			/>
		</div>
	);
}

export default Pokemon;