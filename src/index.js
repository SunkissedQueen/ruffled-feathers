import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export {default as Home} from './pages/Home'
export {default as CluckIndex} from './pages/CluckIndex'
export {default as CluckShow} from './pages/CluckShow'
export {default as CluckNew} from './pages/CluckNew'
export {default as CluckEdit} from './pages/CluckEdit'
export {default as NoCluck} from './pages/NoCluck'
export {default as Header} from './components/Header'
export {default as Footer} from './components/Footer'
export {default as MockCoop} from './MockCoop'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
