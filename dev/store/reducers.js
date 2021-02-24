import {ACTION_CHANGE_USER, ACTION_TOGGLE_ERROR} from './actions'
  
  export const rootRedducer = (state, action)=>{
      switch (action.type){
          case ACTION_CHANGE_USER:
            return {...state, user: action.payload}
          case ACTION_TOGGLE_ERROR:
            console.log(state.error)
            return {...state, error: !state.error}
      }

    return state
  }


  