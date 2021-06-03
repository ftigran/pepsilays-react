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
import { useSelector, useDispatch } from 'react-redux'



const User = ({onClick}) => {
    const scrollToTop = () => {
      onClick()
      scroll.scrollToTop();
    };
    const dispatch = useDispatch()
    const handleClick = (event) => {
      onClick()
      dispatch(setPopup(event.currentTarget))
    };
    const name = useSelector(state=>state.user.name)

    if (name) {
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
            {name}
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

export default ({onClick})=>(
      <Provider store={store}>
        <User onClick={onClick}/>
      </Provider>
    );
