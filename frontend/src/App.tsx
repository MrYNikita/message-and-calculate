import './App.css';

import {Route, Routes} from 'react-router-dom';
import PageMessage from './pages/Message';
import PageCalculate from './pages/Calculate';

function App() {
  return (
        <Routes>
            <Route path='/' element={<PageMessage/>} />
            <Route path='/calculate' element={<PageCalculate/>}/>
        </Routes>
  );
}

export default App;
