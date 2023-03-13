import { Routes, Route } from 'react-router-dom';

import LoadingPage from './pages/Loading';
import SearchPage from './pages/Search';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={ <SearchPage /> } />
        </Routes>
    );
}

export default AppRouter;