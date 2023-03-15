function ImagePokemon(props) {
    return (
        <div 
            className="
                h-full w-4/5 z-10
                sm:h-5/6
                md:h-3/4 md:w-full md:p-5
                lg:h-3/4 ld:w-2/3
            "
        >
            <img
                alt={ 'Picture of ' + props.name }
                src={ props.image }
                className="h-full w-full"
            />
        </div>
    );
}

export default ImagePokemon;