import {createStore, bindActionCreators} from 'redux'
import {rootRedducer} from './reducers'


const initialState = {
    user: {
      prizi: 4,
      cheki: 2,
      name: "Егор",
    },
    error: false,
  }
export const store = createStore(rootRedducer, initialState)


