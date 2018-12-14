import React from 'react'
//import logo from './../logo.svg';

//Responsive
//import { Grid, Row, Col } from 'react-flexbox-grid';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import './../styles.css'


export default class Login extends React.Component{


	mostrarLogin = () => {
	
		let mostrarData = this.props.loginStatus
		console.log("Mostrando en funcion: ",mostrarData);
		return mostrarData
	}


	render(){

		const { login } = this.props
		console.log( "[Login.jsx] ++++++++++++++++++++++++++++++++++++++++++++++++++++INIT en Componente LOGIN 0+++++++++++++++++++" );
		console.log( this.props );
		console.log( "[Login.jsx] +++++++++++++++++++Exit en Componente LOGIN 1+++++++++++++++++++" );
		console.log( this.props.login.user.login );
		console.log( "[Login.jsx] ++++++++++++++++++++++++++++++++++++++++++++++++++++EXIT en Componente LOGIN 2+++++++++++++++++++" );
		
		
		return(

			<div>
			<Row className="" key="1" >

				<div class="container">
					INI CARGANDO EL COMPONENTE LOGINNNNN!!!!
					<div >( { this.props.login.user.name } )  </div>
					FIN CARGANDO EL COMPONENTE LOGINNNNN!!!!
					

				</div>

			</Row>
			
			{`-\n`}

			</div>
			
			
		)
	
	}
	
}


