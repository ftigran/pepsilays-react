import {
  ACTION_CHANGE_USER,
  ACTION_TOGGLE_ERROR,
  ACTION_SET_POPUP,
} from "./actions";

export const rootRedducer = (state, action) => {
  switch (action.type) {
    case ACTION_CHANGE_USER:
      return { ...state, user: action.payload };
    case ACTION_TOGGLE_ERROR:
      return { ...state, error: !state.error };
    case ACTION_SET_POPUP:
      console.log(state.payload);
      return { ...state, popupOpen: action.payload };
  }

  return state;
};
