import {createStore, bindActionCreators} from 'redux'
import {rootRedducer} from './reducers'


const initialState = {
    user: ''
  }
export const store = createStore(rootRedducer, initialState)


