const LOGININGRESAR = 'LOGIN/INGRESAR'
const LOGINCERRARSESION = 'LOGIN/CERRAR_SESION'
const LOGINSETEAR = 'LOGIN/SETEAR'


//Action Creators
export const loginingresar = () => ({
    type: LOGININGRESAR,
})

export const logincerrarsesion = () => ({
    type: LOGINCERRARSESION,
})

export  const loginsetear = payload => ({
    type: LOGINSETEAR,
    payload: payload
})

/*
export  const setear = payload => ({
    type: SETEAR,
    payload: payload
})*/



//InitialState
/*const initialState = {
    data: {
        loginStatus: false
    }
}
*/

const initialState = { data: [], user: {}, loading: true };

export default function (state = initialState, action) {
    
    console.log( "---login.js INICIANDO EN FUNCION REDUCER LOGIN---" )
    console.log( action )
    console.log( "---login.js SALIENDO DE FUNCION REDUCER LOGIN---" )
    let user = {}

    switch (action.type) {

        case LOGININGRESAR:

            console.log("[login.js] INI EN SWITCH LOGININGRESAR state:")
            console.log( state )
            console.log("[login.js] FIN EN SWITCH LOGININGRESAR state:")
            /*
            if( state.data.loginStatus == false ){
                state.data.loginStatus = true
                
                console.log("[login.js] El login esta en false, se actualizara a true...")

            }else{
                console.log("[login.js] El login esta en true, se cerrara sesion a false...")


            }*/

            /*
            state.data.loginStatus = true
            console.log("[login.js] INI EN SWITCH LOGININGRESAR copyState...")
            console.log( state.data.loginStatus )
            console.log("[login.js] FIN EN SWITCH LOGININGRESAR copyState...")

            return state.data.loginStatus
            */
            
            /*let copyState = { ...state }
            copyState.data.loginStatus = true
            console.log("[login.js] INI EN SWITCH LOGININGRESAR copyState...")
            console.log( copyState )
            console.log("[login.js] FIN EN SWITCH LOGININGRESAR copyState...")

            return copyState*/
            //state.data.login = true


            user = {

                name: "David",
                lastName: "Diaz",
                login: true

            }

            return {
                ...state,
                user,
                loading: false
              };

            
        case LOGINCERRARSESION:
            console.log("login.js INI EN SWITCH LOGINCERRARSESION...")
            console.log( state )
            console.log("login.js FIN EN SWITCH LOGINCERRARSESION...")

            let copyState2 = { ...state }
            copyState2.data.loginStatus = false

            console.log("login.js INI EN SWITCH LOGINCERRARSESION copyState... 2 ...")
            console.log( copyState2 )
            console.log("login.js FIN EN SWITCH LOGINCERRARSESION copyState... 2...")



            //state.data.login = true
            //return state.data.login
            //return copyState2

            user = {

                //name: "Maria",
                //lastName: "Sierra",
                login: false

            }

            return {
                ...state,
                user,
                loading: false
              };

            

        case LOGINSETEAR:
            console.log("login.js INI EN SWITCH LOGINSETEAR...")
            console.log("login.js FIN EN SWITCH LOGINSETEAR...")        
            return action.payload

        default: 
            return state
    }

}

