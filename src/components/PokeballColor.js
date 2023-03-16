import generateColor from '../helpers/ColorGenerator';
import PokeballImage from '../images/pokeball_transparent.png';

function PokeballColor(props) {
    let { style } = generateColor(props.type);
    const containerStyle = "Pokeball absolute flex items-center justify-center";

    return (
        <div className={ containerStyle + ' ' + props.layout}>
            <img
                alt="Pokeball Colored Vector"
                className="h-full w-full z-0"
                src={ PokeballImage }
                style={ { filter: style } }
            />
        </div>
    );
}

export default PokeballColor;