import { colors } from '../helpers/PokemonTypes';

function generateColor (type) {
    let style;
    let color = colors[type];

    switch (type) {
        case 'white':
            style = 'invert(100%) sepia(0%) saturate(2945%) hue-rotate(272deg) brightness(115%) contrast(100%)';
            break;
        case 'normal':
            style = 'invert(62%) sepia(1%) saturate(6196%) hue-rotate(347deg) brightness(97%) contrast(79%)';
            break;
        case 'fire':
            style = 'invert(67%) sepia(28%) saturate(7020%) hue-rotate(344deg) brightness(103%) contrast(87%)';
            break;
        case 'water':
            style = 'invert(54%) sepia(54%) saturate(2130%) hue-rotate(199deg) brightness(98%) contrast(92%)';
            break;
        case 'electric':
            style = 'invert(98%) sepia(44%) saturate(7482%) hue-rotate(330deg) brightness(100%) contrast(94%)';
            break;
        case 'grass':
            style = 'invert(72%) sepia(21%) saturate(1124%) hue-rotate(54deg) brightness(94%) contrast(87%)';
            break;
        case 'ice':
            style = 'invert(88%) sepia(35%) saturate(320%) hue-rotate(118deg) brightness(89%) contrast(89%)';
            break;
        case 'fighting':
            style = 'invert(24%) sepia(53%) saturate(2110%) hue-rotate(340deg) brightness(110%) contrast(94%)';
            break;
        case 'poison':
            style = 'invert(32%) sepia(18%) saturate(4565%) hue-rotate(267deg) brightness(93%) contrast(88%)';
            break;
        case 'ground':
            style = 'invert(84%) sepia(11%) saturate(1866%) hue-rotate(355deg) brightness(96%) contrast(84%)';
            break;
        case 'flying':
            style = 'invert(58%) sepia(60%) saturate(994%) hue-rotate(210deg) brightness(100%) contrast(91%)';
            break;
        case 'psychic':
            style = 'invert(56%) sepia(87%) saturate(3547%) hue-rotate(311deg) brightness(100%) contrast(96%)';
            break;
        case 'bug':
            style = 'invert(69%) sepia(80%) saturate(1179%) hue-rotate(21deg) brightness(96%) contrast(80%)';
            break;
        case 'rock':
            style = 'invert(66%) sepia(21%) saturate(1194%) hue-rotate(13deg) brightness(92%) contrast(91%)';
            break;
        case 'ghost':
            style = 'invert(36%) sepia(65%) saturate(372%) hue-rotate(224deg) brightness(91%) contrast(90%)';
            break;
        case 'dragon':
            style = 'invert(25%) sepia(65%) saturate(7263%) hue-rotate(255deg) brightness(101%) contrast(98%)';
            break;
        case 'dark':
            style = 'invert(34%) sepia(10%) saturate(1296%) hue-rotate(341deg) brightness(96%) contrast(87%)';
            break;
        case 'steel':
            style = 'invert(94%) sepia(2%) saturate(7349%) hue-rotate(187deg) brightness(86%) contrast(84%)';
            break;
        case 'fairy':
            style = 'invert(78%) sepia(7%) saturate(4340%) hue-rotate(289deg) brightness(91%) contrast(83%)';
            break;
        default: 
            style = '';
            color = '';
            break;
    }

    return { style, color };
}

export default generateColor;