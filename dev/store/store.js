import {createStore, bindActionCreators} from 'redux'
import {rootRedducer} from './reducers'


const initialState = {
    user: {
      name: 'Test',
      phone: '+7 888 555 6666',
      email: 'sqs@sa.ssa',
    },
    error: false,
    popupOpen: true,
  }
export const store = createStore(rootRedducer, initialState)


