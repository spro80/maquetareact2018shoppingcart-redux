import React from 'react'
import { Link } from 'react-router-dom'
//import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

export default class InfoSession extends React.Component{


	seeUserDataSession = ( user ) => {

		console.log( "----------------------------------------------------------------++++")
		console.log( user )
		console.log("TIPO USUARIO");
		console.log( typeof(user.name) )
		let nameUser = ""
		let lastNameUser = ""
		let fullName = "Usuario"

		if( user.name != "" && typeof(user.name) != "undefined"  ){
			nameUser = user.name
			fullName = nameUser + " "
		}    
	
		if( user.lastName != ""  &&  typeof(user.lastName) != "undefined" ){
			fullName = fullName + user.lastName
		}
		
		return fullName;

	}

	
	render(){
		
		console.log("\n \n");
		console.log( "[InfoSession.jsx] +++++++++++++++++++INIT en Componente INFO SESSION 0+++++++++++++++++++" );
		console.log( this.props );
		console.log( "[InfoSession.jsx] +++++++++++++++++++Exit en Componente INFO SESSION 1+++++++++++++++++++" );
		console.log("\n \n");

		return(
			<Row>
				<Col xs={1} sm={3} md={6} lg={12}>
					<div>
						Bienvenido (a):  { this.seeUserDataSession( this.props.login.user) } - <button onClick={ this.props.logincerrarsesion }> CERRAR SESION  </button>
					</div>
				</Col>
			</Row>
		)
	
	}
	
}