import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/style';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <>
        <GlobalStyle/>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </>
);