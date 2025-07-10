import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Themeprovider from 'react-bootstrap/Themeprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Themeprovider dir='rtl' >
        <App />
    </Themeprovider>
);



