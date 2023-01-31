import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* import './Fonts/Lato-Bold.ttf';
import './Fonts/Lato-Bold.eot';
import './Fonts/Lato-Bold.woff';
import './Fonts/Lato-Medium.ttf';
import './Fonts/Lato-Medium.eot';
import './Fonts/Lato-Medium.woff';
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
	);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
