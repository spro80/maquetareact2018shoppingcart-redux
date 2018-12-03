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
		    <Router>
			<App />
		    </Router>
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



******************************************************************
ERRORES:

ERROR 1:  Al agregar React REDUX:

./node_modules/react-redux/es/connect/mapDispatchToProps.js
Module not found: Can't resolve 'redux' in '/home/prueba/Escritorio/JS/GITHUB/maquetareact2018shoppingcart-redux/node_modules/react-redux/es/connect'






******************************************************************

