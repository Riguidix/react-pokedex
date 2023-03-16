import StatBar from "./StatBar";

function DataPokemon(props) {
    const handleHeight = (height) => {
        return (height / 10) + ' mts';
    } 

    const handleWeight = (weight) => {
        return (weight / 10) + ' kg';
    }

    return (
        <div
            className="
                flex flex-col items-center justify-center h-2/4 w-full pt-2
                sm:rounded-t-lg
                md:rounded-t-none md:h-full md:w-2/4 md:rounded-tl-lg md:rounded-l-lg
            "
        >
            <div className="flex flex-col items-center justify-evenly mb-3 w-full">
                <div className="flex items-center justify-evenly w-full">
                    <p>Height:</p>
                    <p>{ handleHeight(props.height) }</p>
                </div>
                <div className="flex items-center justify-evenly w-full">
                    <p>Weight:</p>
                    <p>{ handleWeight(props.weight) }</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-3 w-3/4">
                {
                    props.stats.map((stat) => {
                        return (
                            <div
                                key={ stat.stat.name }
                                className="flex items-center w-full"
                            >
                                <p className="text-sm w-3/5">
                                    { stat.stat.name }
                                </p>

                                <StatBar color={ props.type } value={ stat.base_stat } />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default DataPokemon;