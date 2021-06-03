import { createStore, bindActionCreators } from "redux";
import { rootRedducer } from "./reducers";

const user = {
  name: "Владимир",
  cheki: 4,
  prizi: 3,
  phone: "+7 888 555 6666",
  email: "sqs@sa.ssa",
};
const initialState = {
  user,
  error: false,
  popupOpen: false,
};
export const store = createStore(rootRedducer, initialState);
