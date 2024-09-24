import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia aquí
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';


const rootElement = document.getElementById('root'); // Make sure this matches the HTML
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
