import PokeballColor from "./PokeballColor";

function Title(props) {
    const handleNumber = (id) => {
        let number;
        if (id < 10) {
            number = '#00' + id;
        } else if (id < 100) {
            number = '#0' + id;
        } else {
            number = '#' + id;
        }

        return id ? number : '';
    }

    return (
        <div className="flex items-center h-10 py-7 text-white w-full">
            <PokeballColor type="white" layout="relative h-14 w-14" />

            <h1>
                { props.label } { handleNumber(props.number) }
            </h1>
        </div>
    );
}

export default Title;