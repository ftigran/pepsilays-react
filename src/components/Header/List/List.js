import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import useReactRouter from "use-react-router";
import "./List.scss";
import UserWithStore from "./User/User";
import NavLink from "./NavLink/NavLink";

const List = (props) => {
  const { history } = useReactRouter();
  
  const atClick = props.handleClick || function(){};
  const handleClick = (key) => {
    if (window.location.pathname !== "") {
      history.push(`/#${key}`);
      console.log("click")
      atClick()
      console.log("clicked")

    }
  };
  const changePage = () => {
    atClick()
    scroll.scrollToTop();
  };

  const scrollLinks = {
    c_main: "Главная",
    c_rules: "Правила",
    c_prizes: "Призы",
    c_winners: "Победители",
  };
  return (
    <Grid
      container
      component={"nav"}
      className={"headerList"}
      justify={"flex-end"}
    >
      <ul>
        {Object.entries(scrollLinks).map(([key, val]) => (
          <li key={key}>
            <ScrollLink
              onClick={() => handleClick(key)}
              activeClass="active"
              to={key}
              spy
              smooth
              duration={700}
              //ignoreCancelEvents
            >
              {val}
            </ScrollLink>
            {/* <Link component={MyLink} className={'menu_item_in'} to={`/#${key}`}>{val}</Link>*/}
          </li>
        ))}
        <li>
          <Link component={NavLink} to="/faq" onClick={changePage}>
            FAQ
          </Link>
        </li>
        {/* {<li>
                    <LinkR to='main' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/"}>Главная</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='rules' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#rules"}>Правила</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='priz' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#priz"}>Призы</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='winners' spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/#winners"}>Победители</Link>
                    </LinkR>
                </li>
                <li>
                    <LinkR to='faq'spy={true} smooth={true} duration={500}>
                        <Link to={"/pages/Pepsilays/faq"}>faq</Link>
                    </LinkR>
                </li>} */}
        <div className="headerListGap"></div>

        <UserWithStore onClick={atClick}/>
        <li className={"headerListEnter"}>
          {/* <Link component={NavLink} to="/enter" onClick={scrollToTop}>
                    Войти
                </Link> */}
        </li>
      </ul>
    </Grid>
  );
};

export default List;
