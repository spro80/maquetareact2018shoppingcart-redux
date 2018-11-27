import React from 'react'
import logo from './../logo.svg';

import { Link } from 'react-router-dom'


//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';

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

	render(){
	
		return(

			<Row>
				<Col xs={1} sm={3} md={6} lg={12}>
					
					<div>
						<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
							<div class="container">
								<a class="navbar-brand" href="#">(0) Productos! </a>

								<Link to="/vercarrito">Ver Carrito</Link>

							</div>
						</nav>
					</div>

				</Col>
			</Row>
		)
	
	}
	
}


/*
<ul class="sidenav">
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
*/
