import { createStore } from 'redux';

 const initialState = {
     user: '',
 }
function reducer ( state=initialState, action ){
    switch (action.type){
        case 'CHANGE_USER':
            return {...state, name: action.payload}
    }
    return state
}

const store = createStore(reducer);

export default store;