import React from 'react'
import { Link } from 'react-router-dom'
//import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

/*
								<div class="collapse navbar-collapse" id="navbarResponsive">
									<ul class="navbar-nav ml-auto">
										<li class="nav-item active">
											<Link to="/">Home</Link>
											<a class="nav-link" href="#">Inicio
											<span class="sr-only">(current)</span>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Productos</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Promociones</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Mis Pedidos</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Contacto</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#">Ver Carrito ( 0 ) </a>
										</li>

									</ul>
								</div>
*/ 

export default class Info extends React.Component{

	setLabelTotalProduct = valorTotalStock => {

		let labelTotalProduct = "";
		/*if ( this.props.valorTotalStock == 0 )	labelTotalProduct = "Producto"
		else if ( this.props.valorTotalStock > 0 )	labelTotalProduct = "Productos"*/

		return labelTotalProduct;

	}
	
	render(){
		
		console.log( "[Info.jsx] +++++++++++++++++++INIT en Componente INFO 0+++++++++++++++++++" );
		console.log( this.props );
		console.log( "[Info.jsx] +++++++++++++++++++Exit en Componente INFO 1+++++++++++++++++++" );
		console.log( this.props.valorTotalStock );
		console.log( "[Info.jsx] +++++++++++++++++++Exit en Componente INFO 2+++++++++++++++++++" );
		//console.log( this.props.valorTotalStock.dataCountAllProducts );
		//console.log( "[Info.jsx] +++++++++++++++++++Exit en Componente INFO 3+++++++++++++++++++" );
		//console.log( this.props.dataCountAllProducts );
		//console.log( "[Info.jsx] +++++++++++++++++++Exit en Componente INFO4+++++++++++++++++++" );
		
		return(



			<Row>
				<Col xs={1} sm={3} md={6} lg={12}>
					
					<div>

						( {this.props.valorTotalStock} )  { this.setLabelTotalProduct( this.props.valorTotalStock ) }

						<Link to="/vercarrito">Ver Carrito</Link>
						
					</div>

				</Col>
			</Row>
		)
	
	}
	
}

//<a class="navbar-brand" href="#"> ( {this.props.valorTotalStock} )  { this.setLabelTotalProduct( this.props.valorTotalStock ) } </a>
/*
<ul class="sidenav">
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
*/