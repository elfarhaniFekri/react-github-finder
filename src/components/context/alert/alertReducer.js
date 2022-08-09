import React from 'react'

const alertReducer = (state, action) =>{
    switch(action.payload){
        case 'REMOVE_ALERT':
            return null
            case 'SET_ALERT':
                return { ...state , msg: action.payload}
            default :
            return {...state}
    }
}

export default alertReducer