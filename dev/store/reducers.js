import {ACTION_CHANGE_USER} from './actions'
  
  export const rootRedducer = (state, action)=>{
      switch (action.type){
          case ACTION_CHANGE_USER:
              return {...state, user: action.payload}
      }

    return state
  }