import React, {createContext, useContext , useReducer} from 'react'
import alertReducer from './alertReducer';

const AlertContext = createContext();

export const AlertContextProvider = ({children}) =>{

     const initialState = null;

    const [ state , dispatch ] = useReducer(alertReducer, initialState);

    const setAlert = (msg) =>{
            if(msg){
                dispatch({
                    msg : msg,
                    type:'SET_ALERT'
                })

              setTimeout( () => dispatch({ msg:null, type:'REMOVE_ALERT' }) , 3000)   
            }
    }
   return (
     <AlertContext.Provider value={{setAlert , alert : state}}>
           {children}
     </AlertContext.Provider>
  )
}

export default AlertContext