const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'
const SETEARACERO = 'CONTADOR/SETEARACERO'
const SETEAR      = 'CONTADOR/SETEAR'


//Action Creators
export const incrementar = () => ({
    type: INCREMENTAR,
})

export const decrementar = () => ({
    type: DECREMENTAR,
})

export const setearacero = () => ({
    type: SETEARACERO,
})

export  const setear = payload => ({
    type: SETEAR,
    payload: payload
})


/*
export const incrementar = payload => ({
    type: INCREMENTAR,
    //payload: payload +1,
    payload: payload+100,
  })
*/
  
const initialState = 0


/*const initialState = {
    dataCountAllProducts: 0,
  }*/


export default function (state = initialState, action) {
    
    console.log( "---[InformationShoopingCart.js] INICIANDO EN FUNCION REDUCER---" )
    console.log( action )
    console.log( "---[InformationShoopingCart.js] SALIENDO DE FUNCION REDUCER---" )

    switch (action.type) {
        case INCREMENTAR:
            console.log("[InformationShoopingCart.js] -----> INI EN SWITCH INCREMENTAR...")
            console.log( state );
            console.log("[InformationShoopingCart.js] ----->  FIN EN SWITCH INCREMENTAR 1...")

            console.log("[InformationShoopingCart.js] ----->  FIN EN SWITCH INCREMENTAR 2 ...")

            return state + 1
            //return state.dataCountAllProducts + 1


        case DECREMENTAR:
            console.log("[InformationShoopingCart.js] INI EN SWITCH DECREMENTAR...")
            console.log("[InformationShoopingCart.js] FIN EN SWITCH DECREMENTAR...")

            if( state == 0){
                console.log("InformationShoopingCart.js NO SE PUEDE DECREMENTAR MAS, YA LLEGO A SU NIVEL MINIMO.")
                return state
            }

            return state - 1

        
        case SETEARACERO:
            console.log("[InformationShoopingCart.js] -----> INI EN SWITCH SETEARACERO...")
            console.log( state );
            console.log("[InformationShoopingCart.js] ----->  FIN EN SWITCH SETEARACERO...")

            console.log("[InformationShoopingCart.js] ----->  FIN EN SWITCH SETEARACERO ...")

            return 0

            
        case SETEAR:
            console.log("InformationShoopingCart.js INI EN SWITCH SETEAR...")
            console.log("InformationShoopingCart.js FIN EN SWITCH SETEAR...")        
            return action.payload

        default: 
            return state
    }

}

