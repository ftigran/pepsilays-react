import React from "react";

import Grid from "@material-ui/core/Grid";
import TextFields from "../TextField/TextField";
import "./Form.scss";
import { question } from "../Modal/SimpleModal/SimpleModal";
import Checkbox from "../Checkbox/Checkbox";
import Select from "../Select/Select";

export default function EmployeeForm() {
  return (
    <Grid item xs={12} sm={12} md={4} component="form" className={"form"}>
      <h2 className={"formTitle"}>Не нашел ответ на свой вопрос ?</h2>
      <p>Задай его нам и мы обазательно тебе ответим!</p>
      <TextFields type={"email"} placeholder={"E-mail"} />
      <TextFields type={"name"} placeholder={"Имя"} />
      <Select />
      <TextFields type={"message"} placeholder={"Сообщение"} />
      <Checkbox>Согласие на обработку персональных данных</Checkbox>
      {question}
    </Grid>
  );
}
