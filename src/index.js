import React from 'react';
import ReactDOM from 'react-dom'

//Agregar react-router
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'



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


//Agregar react-router
const store = createStore( reducer )



ReactDOM.render(

    //Agregar react-router el Provider
    <Provider store={store}>    
    <Router>
        <App />
    </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


