import React, { Component } from "react";
import LoginModal from "../../../Modal/LoginModal/LoginModal";
import { Provider, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { store } from "../../../../store/store";
import { changeUser, setPopup } from "../../../../store/actions";
import Button from "@material-ui/core/Button";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "./User.scss";
import { Link } from "@material-ui/core";
import Popup from "./Popup/Popup";
import NavLink from "../NavLink/NavLink";

class User extends React.Component {
  render() {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
    const handleClick = (event) => {
      this.props.setPopup(event.currentTarget);
    };
    if (this.props.user) {
      return (
        <li className={"User"}>
          <Link
            component={NavLink}
            className="cabinetLink"
            to="/enter"
            onClick={scrollToTop}
          >
            Личный кабинет
          </Link>
          <Popup />
          <span className={"UserName"} onClick={handleClick}>
            {this.props.user.name}
          </span>
        </li>
      );
    } else {
      return (
        <li className={"User UserGuest"}>
          <Button className={"headerListReg"}>
            <Link to={"/reg"} component={NavLink} onClick={scrollToTop}>
              Регистрация
            </Link>
          </Button>
          <LoginModal />
        </li>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    popupOpen: state.popupOpen,
  };
};
const putActionsToProps = (dispatch) => {
  return {
    changeUser: bindActionCreators(changeUser, dispatch),
    setPopup: bindActionCreators(setPopup, dispatch),
  };
};

const WrapedUser = connect(mapStateToProps, putActionsToProps)(User);

export default class UserWithStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WrapedUser />
      </Provider>
    );
  }
}
