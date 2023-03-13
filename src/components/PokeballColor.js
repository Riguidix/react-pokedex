import generateColor from '../helpers/ColorGenerator';
import PokeballImage from '../images/pokeball_transparent.png';

function PokeballColor(props) {
    let { style, color } = generateColor(props.type);
    const containerStyle = "Pokeball absolute flex items-center justify-center";

    return (
        <div className={ containerStyle + ' ' + props.layout}>
            <img
                src={ PokeballImage }
                className="opacity-20 w-3/4 md:w-2/4 lg:w-2/5"
                style={ { filter: style } }
            />
        </div>
    );
}

export default PokeballColor;