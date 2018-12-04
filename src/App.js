import React, { Component } from 'react';

import { Route } from 'react-router-dom'

import { incrementar, decrementar, setear } from './reducers'

//Components
//import { Button } from 'react-bootstrap';
//import { Grid, Row, Col } from 'react-bootstrap';
import { HorizontalMenu, Info, Header, Login, Products, Promotions, Contact, MyOrders, ShoopingCartProducts, Footer } from './components'


import { connect } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom';

//Styles
import './App.css';
import './styles.css'


class App extends Component {
	
	render() {

		console.log( "render INIT." )
		console.log( this.props )
		console.log( "render END." )

		//Recupera las variables desde props.
		const { incrementar, decrementar, setear, valorStock } = this.props

		return (
    
			<div className="App">

			<button onClick={ incrementar }> INCREMENTAR  </button>
			<button onClick={ decrementar }> DECREMENTAR  </button>	
			
			<Route path="/" component={HorizontalMenu} />

			<Route path="/" render={(props) => <Info {...props} isAuthed={true} valorStock={valorStock} />} />

			<Route path="/" component={Header} />
			
			<Route exact path="/login" component={Login} />			
						
			<Route exact path="/productos" component={Products} />
			
			<Route exact path="/promociones" component={Promotions} />
			
			<Route exact path="/contacto" component={Contact} />
			
			<Route exact path="/mispedidos" component={MyOrders} />

			<Route path="/vercarrito" component={ShoopingCartProducts}  />

			<Route path="/" component={Footer} />
			
			</div>
      
		);
	}
}
//<Route path="/vercarrito" render={()=><ShoopingCartProducts num="2" someProp={100}/>}/>
//<Route exact path="/vercarrito" render={(props) => <ShoopingCartProducts globalStore={globalStore} {...props} /> } />			
//<Route exact path="/details/:id" render={(props) => <DetailsPage globalStore={globalStore} {...props} /> } />
//<Route exact path="/vercarrito" component={ShoopingCartProducts} datosPorProps={number} />
//render={(props) => <TestWidget {...props} someProp={100} />} />
//<Route path="/abc" render={(props) => <TestWidget {...props} someProp={100} />} />

const mapStateToProps = state => {
	console.log( "****mapStateToProps INI IMPRIME EL VALOR DEL STATE: " )
	console.log( state )
	console.log( "****mapStateToProps  FIN IMPRIME EL VALOR DEL STATE:" )
	return {
		valorStock: state,
	}
}


const mapDispatchToProps = dispatch => ({

	incrementar: () => dispatch( incrementar() ),
	//incrementar: payload => dispatch( incrementar( payload ) ),
	decrementar: () => dispatch( decrementar() ),
	setear: payload => dispatch( setear( payload ) ),

})


export default connect( 
	mapStateToProps, 
	mapDispatchToProps )( App )