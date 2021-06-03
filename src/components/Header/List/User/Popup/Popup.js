import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "../../../../../store/store";
import { setPopup, changeUser } from "../../../../../store/actions";
import Popper from "@material-ui/core/Popover";
import useReactRouter from "use-react-router";
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import "./Popup.scss";
const Popup = () => {
  // const { history } = useReactRouter();
  const dispatch = useDispatch();
  // const handleClick = (event) => {
  //   this.props.setPopup(event.currentTarget);
  // };
  const { history } = useReactRouter();

  const popupOpen = useSelector((state) => state.popupOpen);
  const user = useSelector((state) => state.user);
  return (
    <Popper
      className="popupContainer"
      open={Boolean(popupOpen)}
      anchorEl={popupOpen}
      onClose={() => dispatch(setPopup(null))}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className={"popup"}>
        <div className={"popupData"}>
          <span>Имя</span>
          <span>{user.name}</span>
          <span>E-mail</span>
          <span>{user.email}</span>
          <span>Телефон</span>
          <span>{user.phone}</span>
        </div>
        <Button
          fullWidth={true}
          onClick={() => {
            if (/.*\/cabinet/.test(window.location.pathname)) {
              history.push(`/`);
            }
            dispatch(changeUser(""));
          }}
        >
          Выход
        </Button>
      </div>
    </Popper>
  );
};

export default class UserWithStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Popup />
      </Provider>
    );
  }
}
