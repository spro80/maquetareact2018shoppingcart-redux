import React from 'react';
import ReactDOM from 'react-dom'
//import { Router } from 'react-router-dom'; --> No funciona por la version de la libreria
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';
//import 'react-bootstrap/react-bootstrap.min.js';


//import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './heroic-features.css'

ReactDOM.render(
<Router> 
    <App /> 
    </Router>, document.getElementById('root'));
registerServiceWorker();


