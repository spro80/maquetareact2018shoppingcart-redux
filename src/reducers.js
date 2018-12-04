const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'
const SETEAR      = 'CONTADOR/SETEAR'


//Action Creators
export const incrementar = () => ({
    type: INCREMENTAR,
})

export const decrementar = () => ({
    type: DECREMENTAR,
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
/*
const initialState = {
    data: 0,
  }
*/

export default function (state = initialState, action) {
    
    console.log( "---reducer.js INICIANDO EN FUNCION REDUCER---" )
    console.log( action )
    console.log( "---reducer.js SALIENDO DE FUNCION REDUCER---" )

    switch (action.type) {
        case INCREMENTAR:
            console.log("reducer.js INI EN SWITCH INCREMENTAR...")
            console.log( state )
            console.log("reducer.js FIN EN SWITCH INCREMENTAR...")

            return state + 1


        case DECREMENTAR:
            console.log("reducer.js INI EN SWITCH DECREMENTAR...")
            console.log("reducer.js FIN EN SWITCH DECREMENTAR...")

            if( state == 0){
                console.log("reducer.js NO SE PUEDE DECREMENTAR MAS, YA LLEGO A SU NIVEL MINIMO.")
                return state
            }

            return state - 1

        case SETEAR:
            console.log("reducer.js INI EN SWITCH SETEAR...")
            console.log("reducer.js FIN EN SWITCH SETEAR...")        
            return action.payload

        default: 
            return state
    }

}