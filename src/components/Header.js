import React from 'react'
import logo from './../logo.svg';

//Responsive
import { Grid, Row, Col } from 'react-bootstrap';


export default class Header extends React.Component{

	render(){
	
		return(
		
			<Row>
				<Col xs={1} sm={6} md={6} lg={12} >
					<div class="container">
						<header class="jumbotron my-4">
							<h1 class="display-3">Welcome to ShoppingCart 2018!!!</h1>
							<p class="lead">In this site, you can to buy Products that you need.</p>
							<p class="lead">Is neccesary that you can to start session in our System.Press Button Login!!!</p>
							<a href="#" class="btn btn-primary btn-lg"> Iniciar Sesion!!! </a>
						</header>
					</div>
				</Col>
			</Row>
		
		)
	
	}
	
}


