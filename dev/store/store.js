import {createStore, bindActionCreators} from 'redux'
import {rootRedducer} from './reducers'


const initialState = {
    user: {
      name: 'Владимир',
      cheki: 50,
      prizi: 4,
      phone: '+7 888 555 6666',
      email: 'sqs@sa.ssa',
    },
      error: false,
    popupOpen: false,
  }
export const store = createStore(rootRedducer, initialState)


