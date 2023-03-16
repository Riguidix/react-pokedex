import { colors } from "../helpers/PokemonTypes";

function StatBar(props) {
    return (
        <div className="w-2/5">
            <progress
                className="nes-progress h-1/4 w-3/4"
                style={ { backgroundColor: colors[props.color] } }
                value={ props.value }
                max="255"
            ></progress>
        </div>
    );
}

export default StatBar