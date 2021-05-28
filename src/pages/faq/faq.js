import React from "react";

import Grid from "@material-ui/core/Grid";

import Questions from "../../components/Questions/Questions";
import Modal from "../../components/Modal/Modal";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { verify } from "../../components/Modal/SimpleModal/SimpleModal";
import Form from "../../components/Form/Form";
import "./faq.scss";

export default function FAQ() {
  return (
    <Grid container justify={"space-between"} className={"FAQ"} id="faq">
      <Questions />
      {/* <Cleave 
            options={{
                phone: true,
                phoneRegionCode: 'RU'
                }}/> */}
      <Form />
    </Grid>
  );
}
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
