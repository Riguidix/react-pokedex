import { Routes, Route } from 'react-router-dom';

import SearchPage from './pages/Search';
import MainPage from './pages/Main';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={ <SearchPage /> } />
            <Route path="/entry" element={ <MainPage /> } />
        </Routes>
    );
}

export default AppRouter;