import React, { Component } from 'react';

import { connect } from 'react-redux'

//Se necesita para trabajar con las rutas
//import { Route } from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom'; //No funciono luego de agregar Provider en index.js
import { Router, Route } from 'react-router-dom';
import { history } from '../src/history.js';

//se agrega para trabajar con Ducks
import { bindActionCreators } from 'redux'

//Import Components
//import { Button } from 'react-bootstrap';
//import { Grid, Row, Col } from 'react-bootstrap';
import { InfoSession, HorizontalMenu, Info, Header, Login, Products, Promotions, Contact, MyOrders, ShoopingCartProducts, Footer } from './components'

//import { incrementar, decrementar, setear } from './reducers'
//Import Ducks
import * as InformationShoopingCartActions from './ducks/InformationShoopingCart'
import * as LoginActions from './ducks/Login'


//Import Styles css
import './App.css';
import './styles.css'


//ERROR cuando router no tiene un div, que contenga a todos los Route:
//A <Router> may have only one child element
class App extends Component {
	
	render() {

		console.log( "[App.js] -------------------------------- Metodo render INIT --------------------------------" )
		console.log( this.props )
		console.log( "[App.js] -------------------------------- Metodo  render END--------------------------------" )

		//Recupera las variables desde props.
		const { incrementar, decrementar, setearacero, setear, valorTotalStock, login, loginingresar, logincerrarsesion, loginsetear } = this.props

		//const mostrar = login.data.loginStatus
		console.log("[App.js] --------------------------------------------------------------------------------------------------> Mostrando datos: ",login)

		return (
    
			<div className="App">

			<button onClick={ incrementar }> INCREMENTAR  </button>
			<button onClick={ decrementar }> DECREMENTAR  </button>	
			<button onClick={ setearacero }> SETEAR A CERO  </button>	
			<button onClick={ logincerrarsesion }> CERRAR SESION  </button>
			
			<Router history={history}>
				<div>

					<Route path="/"                            render={(props) => <InfoSession {...props} isAuthed2={true} login={login} logincerrarsesion={logincerrarsesion} />}     />

					<Route path="/"                            render={(props) => <HorizontalMenu {...props} isAuthed2={true} login={login}  />}     />

					<Route path="/"                            render={(props) => <Info {...props} isAuthed={true} valorTotalStock={valorTotalStock} />}     />

					<Route path="/login"                       render={(props) => <Login {...props} isAuthed={true} login={login} />}     />

					<Route exact path="/productos" component={Products} />
					
					<Route exact path="/promociones" component={Promotions} />
					
					<Route exact path="/contacto" component={Contact} />

					{ login.data.loginStatus && 
						<Route exact path="/mispedidos" component={MyOrders} />
					}

					<Route path="/vercarrito" component={ShoopingCartProducts}  />

					<Route path="/" component={Header} />

					<Route path="/" component={Footer} />
				</div>
			</Router>
			</div>
      
		);
	}
}


const mapStateToProps = state => {
	console.log("\n \n");
	console.log( "[App.js] *************************************************************mapStateToProps INI IMPRIME EL VALOR DEL STATE 1: " )
	console.log( state )
	
	console.log( "[App.js] *************************************************************mapStateToProps  FIN IMPRIME EL VALOR DEL STATE 2:" )
//	console.log( state.InformationShoopingCart )

	console.log( "[App.js] *************************************************************mapStateToProps  FIN IMPRIME EL VALOR DEL STATE 3:" )
//	console.log( state.InformationShoopingCart.dataCountAllProducts )

	let getValorLoginStatus = state.Login
	console.log( "[App.js] *************************************************************mapStateToProps  getValorLoginStatus:"+getValorLoginStatus )
	console.log("\n \n");

	return {
		//valorTotalStock: state.InformationShoopingCart.dataCountAllProducts,
		valorTotalStock: state.InformationShoopingCart,
		//login: state.Login,
		//login: getValorLoginStatus
		login: state.Login
		
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	...InformationShoopingCartActions,
	...LoginActions,
  }, dispatch)


export default connect( 
	mapStateToProps, 
	mapDispatchToProps )( App )



//<Route path="/" component={HorizontalMenu} />	
//<Route path="/vercarrito" render={()=><ShoopingCartProducts num="2" someProp={100}/>}/>
//<Route exact path="/vercarrito" render={(props) => <ShoopingCartProducts globalStore={globalStore} {...props} /> } />			
//<Route exact path="/details/:id" render={(props) => <DetailsPage globalStore={globalStore} {...props} /> } />
//<Route exact path="/vercarrito" component={ShoopingCartProducts} datosPorProps={number} />
//render={(props) => <TestWidget {...props} someProp={100} />} />
//<Route path="/abc" render={(props) => <TestWidget {...props} someProp={100} />} />

/*
const mapDispatchToProps = dispatch => ({
	incrementar: () => dispatch( incrementar() ),
	//incrementar: payload => dispatch( incrementar( payload ) ),
	decrementar: () => dispatch( decrementar() ),
	setear: payload => dispatch( setear( payload ) ),
})
*/	