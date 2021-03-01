import {createStore, bindActionCreators} from 'redux'
import {rootRedducer} from './reducers'


const initialState = {
    user: '',
    error: false,
    popupOpen: false,
  }
export const store = createStore(rootRedducer, initialState)


