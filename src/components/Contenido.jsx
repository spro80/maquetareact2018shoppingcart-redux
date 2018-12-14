import React from 'react'
import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';

import './../styles.css'


export default class Contenido extends React.Component{

	render(){
	
		return(

			<div>
			<Row className="" key="1" >

				<div class="container">
					<div class="row text-center">

						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 1</h4>
									<p class="card-text">Este Producto 1 permite...</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>

						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 2</h4>
									<p class="card-text">Este Producto 2 permite...</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>				

						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 3</h4>
									<p class="card-text">Este Producto 3 permite...</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>
						
						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 4</h4>
									<p class="card-text">Este Producto 4 permite....</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>
				
					</div>						
				</div>
			</Row>
			
			{`-\n`}

			
			<Row className="" key="2" >

				<div class="container">
					<div class="row text-center">

						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 1</h4>
									<p class="card-text">Este Producto 1 permite...</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>

						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 2</h4>
									<p class="card-text">Este Producto 2 permite...</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>				

						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 3</h4>
									<p class="card-text">Este Producto 3 permite...</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>
						
						<Col xs={1} sm={6} md={6} lg={3} >
							<div class="card">
								<img class="card-img-top" src="http://placehold.it/500x325" alt="" />
								<div class="card-body">
									<h4 class="card-title">Producto 4</h4>
									<p class="card-text">Este Producto 4 permite....</p>
								</div>
								<div class="card-footer">
									<a href="#" class="btn btn-primary">Find Out More!</a>
								</div>
							</div>
						</Col>
				
					</div>						
				</div>
			</Row>			
			{`-\n`}
			</div>
			
			
		)
	
	}
	
}


