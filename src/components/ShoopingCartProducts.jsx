import React from 'react'
//import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import './../styles.css'


export default class ShoopingCartProducts extends React.Component{

	render(){

		console.log("INIT EN ShoopingCartProducts Component...")
		console.log( this.props )
	
		return(

			<div>
			<Row className="" key="1" >

				<div class="container">
					CARGANDO EL COMPONENTE DE Shooping cart!!!!
				</div>

			</Row>
			
			{`-\n`}

			</div>
			
			
		)
	
	}
	
}


