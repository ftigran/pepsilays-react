import React, { Component } from "react";
import "./Top.scss";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import promo1 from "../../img/promo.png";
import promo2 from "../../img/promo2.png";

function Rules() {
  return (
    <Grid
      direction={"column"}
      container
      justify={"flex-start"}
      alignItems="center"
      className={"topGrid"}
      id={"c_main"}
    >
      <img className={"topPromo"} src={promo1}></img>
      <img className={"topPromoM"} src={promo2}></img>

      <h3 className="topText">Попробуй жанры на вкус</h3>
      <Button size="large" color="primary">
        Зарегистрировать чек
      </Button>
    </Grid>
  );
}

export default Rules;
