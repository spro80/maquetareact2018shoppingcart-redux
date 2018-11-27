import React from 'react'
import logo from './../logo.svg';

import InformationWelcome from './InformationWelcome'
import InformationLogin from './InformationLogin'

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
import { Grid, Row, Col } from 'react-bootstrap';




export default class Information extends React.Component{

	render(){
	
		return(
	
	
		<Row className="informationContainer">

			<Col xs={1} sm={6} md={6} lg={6} className="informationWelcome" >
			  
				<InformationWelcome>
				</InformationWelcome>
				
			</Col>


			<Col xs={1} sm={6} md={6} lg={6} className="informationLogin" >
			  
				<InformationLogin>
				</InformationLogin>
			
			</Col>

		</Row>		

		)
	
	}
	
}


