import { BrowserRouter } from 'react-router-dom';

import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App bg-red-600 h-screen w-screen" >
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
