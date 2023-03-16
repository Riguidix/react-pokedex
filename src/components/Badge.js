import { colors } from "../helpers/PokemonTypes";

function Badge(props) {
    return (
        <div
            className="Badge flex items-center justify-evenly w-full"
        >
            {
                props.types.map((type) => {
                    return (
                        <div
                            key={ type.type.name }
                            className="border text-center rounded-full text-white py-1 px-3 z-50"
                            style={ { backgroundColor: colors[type.type.name] } }
                        >
                            { type.type.name }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Badge;