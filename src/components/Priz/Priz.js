import { Box, Grid } from "@material-ui/core";
import React, { Component } from "react";

import "./Priz.scss";

const Priz = () => {
  return (
    <>
      <Box className={"priz"} id={"c_prizes"}>
        <h2 className="title">Призы</h2>
        <Grid
          container
          alignItems={"center"}
          justify={"center"}
          className={"prizContainer"}
        >
          <Grid item xs={12} lg={3}>
            <img src="./images/priz1.png" className={"prizImg"} />
          </Grid>
          <Grid item xs={12} lg={3}>
            <img src="./images/priz2.png" className={"prizImg"} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <img src="./images/priz3.png" className={"prizImg prizImg_pc"} />
            <img src="./images/priz3-1.png" className={"prizImg prizImg_mob"} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Priz;
