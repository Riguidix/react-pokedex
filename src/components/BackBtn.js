import { useNavigate } from 'react-router-dom';

import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function BackBtn() {
    const navigate = useNavigate();

    const handleGoTo = () => {
        navigate('/');        
    }

    return (
        <div 
            onClick={ handleGoTo }
            className="
                flex items-center justify-center h-10 py-7 text-white w-1/4
                md:w-1/5
                md:text-black
            "
        >
            <ChevronLeftIcon className="h-8 w-8" />
        </div>
    );
}

export default BackBtn;