import { Routes, Route } from 'react-router-dom';

// import SearchPage from './pages/Search';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={ <h1>search</h1> } />
        </Routes>
    );
}

export default AppRouter;