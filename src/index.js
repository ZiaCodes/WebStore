import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';

const App = React.lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Suspense fallback={
    <Loading/>
  }>
    <App />
  </Suspense>
  </BrowserRouter>
);

