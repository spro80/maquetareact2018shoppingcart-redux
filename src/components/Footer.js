import React from 'react'
import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';

import './../styles.css'


export default class Footer extends React.Component{

	render(){
	
		return(
		
			<Row className="" >
				
				<Col xs={1} sm={6} md={6} lg={12} >
					<footer class="py-5 bg-dark">
						<div class="container">
							<p class="m-0 text-center text-white">Copyright &copy; TodoBelleza.cl</p>
							<p class="m-0 text-center text-white">Contactar: +569 89194282</p>
						</div>
					</footer>
				</Col>
			
			</Row>

		)
	
	}
	
}


