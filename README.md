# maquetareact2018shoppingcartconreactrouter
Proyecto que contiene la maqueta react 2018 shoppingcart + react router + redux


******************************************************************
INSTALACION:
prueba@ddiaz-Inspiron-5567:~/Escritorio/JS/GITHUB/maquetareact2018shoppingcart-redux$ npm install --save redux
prueba@ddiaz-Inspiron-5567:~/Escritorio/JS/GITHUB/maquetareact2018shoppingcart-redux$ npm install --save react-redux




******************************************************************
COMO AGREGAR react-redux y redux:

1.- Abrir el archivo /home/prueba/Escritorio/JS/GITHUB/maquetareact2018shoppingcart-redux/src/index.js

	Acá debemos agregar las siguientes librerías:

	1.1.- Agregar Provider, createStore, reducer:
 
		//Agregar react-router
		import { Provider } from 'react-redux'
		import { createStore } from 'redux'
		import reducer from './reducers'

	1.2.- Agregar metodo createStore:

		//Agregar react-router
		const store = createStore( reducer )


	1.3.- Agregar Provider:

		ReactDOM.render(

		    //Agregar react-router el Provider
		    <Provider store={store}>
			<App />
		    </Provider>
		    , document.getElementById('root'));
		registerServiceWorker();


2.- Luego crear el archivo reducers en la siguiente ruta:

	2.1.- Crear Reducers:

		/home/prueba/Escritorio/JS/GITHUB/maquetareact2018shoppingcart-redux/src/reducers.js

	2.2.- El contenido del  Reducers debe ser el siguiente, podemos imprimir un console.log(action), para ver que se imprime el estado inicial de REDUX:


		const initialState = 0
		export default function (state = initialState, action) {
		    console.log( action )
		    switch (action.type) {

			case 'INCREMENTAR':
			    return state + 1
			case 'DECREMENTAR':
			    return state - 1
			default: 
			    return state
		    }

		}

3.- En App.js, debemos agregar los import necesarios para trabjar con REACT y REDUX:


import React, { Component } from 'react';

//import { Route } from 'react-router-dom'

import { connect } from 'react-redux'

//Se necesita para trabajar con las rutas
//import { BrowserRouter as Router } from 'react-router-dom'; //No funciono luego de agregar Provider en index.js
import { Router, Route } from 'react-router-dom';
import { history } from '../src/history.js';

//se agrega para trabajar con Ducks
import { bindActionCreators } from 'redux'

//Import Components
//import { Button } from 'react-bootstrap';
//import { Grid, Row, Col } from 'react-bootstrap';
import { HorizontalMenu, Info, Header, Login, Products, Promotions, Contact, MyOrders, ShoopingCartProducts, Footer } from './components'

//import { incrementar, decrementar, setear } from './reducers'
//Import Ducks
import * as InformationShoopingCartActions from './ducks/InformationShoopingCart'

//Import Styles css
import './App.css';
import './styles.css'


//A <Router> may have only one child element
class App extends Component {
	
	render() {

		console.log( "render INIT." )
		console.log( this.props )  // Validamos que propiedades tenemos disponibles en los props 
		console.log( "render END." )

		//Recupera las variables desde props.
		const { incrementar, decrementar, setear, valorTotalStock } = this.props

		return (
    
			<div className="App">

			<button onClick={ incrementar }> INCREMENTAR  </button>
			<button onClick={ decrementar }> DECREMENTAR  </button>	
			<button onClick={ decrementar }> LOGIN  </button>	

			<Router history={history}>
				<div>
					<Route path="/" component={HorizontalMenu} />

					<Route path="/" render={(props) => <Info {...props} isAuthed={true} valorTotalStock={valorTotalStock} />} />

					<Route path="/" component={Header} />
					
					<Route exact path="/login" component={Login} />			
								
					<Route exact path="/productos" component={Products} />
					
					<Route exact path="/promociones" component={Promotions} />
					
					<Route exact path="/contacto" component={Contact} />
					
					<Route exact path="/mispedidos" component={MyOrders} />

					<Route path="/vercarrito" component={ShoopingCartProducts}  />

					<Route path="/" component={Footer} />
				</div>
			</Router>
			</div>
      
		);
	}
}


const mapStateToProps = state => {
	console.log( "****mapStateToProps INI IMPRIME EL VALOR DEL STATE: " )
	console.log( state )
	console.log( "****mapStateToProps  FIN IMPRIME EL VALOR DEL STATE:" )
	return {
		valorTotalStock: state,
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	...InformationShoopingCartActions,
  }, dispatch)


export default connect( 
	mapStateToProps, 
	mapDispatchToProps )( App )









******************************************************************





******************************************************************
ERRORES:

ERROR 1:  Al agregar React REDUX:

./node_modules/react-redux/es/connect/mapDispatchToProps.js
Module not found: Can't resolve 'redux' in '/home/prueba/Escritorio/JS/GITHUB/maquetareact2018shoppingcart-redux/node_modules/react-redux/es/connect'






******************************************************************




LINK:
Administracion de usuarios con REACT + REDUX
