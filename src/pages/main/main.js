import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import Rules from "../../components/Rules/Rules";
import Top from "../../components/Top/Top";
import Priz from "../../components/Priz/Priz";
import Random from "../../components/Random/Random";
import Winners from "../../components/Winners/Winners";
import Footer from "../../components/Footer/Footer";
import useReactRouter from "use-react-router";

import { Link, animateScroll as scroll } from "react-scroll";

const Main = () => {
  const { history } = useReactRouter();

  return (
    <>
      <Grid
        container
        direction={"column"}
        justify={"flex-start"}
        alignItems={"stretch"}
        className={"wrap"}
      >
        <Grid item xs={12} className={"blockContainer"}>
          <Top />
          <Rules />
          <Priz />
          <Random />
          <Winners />
        </Grid>
      </Grid>
    </>
  );
};
export default Main;
