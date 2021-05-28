import { Paper, Box, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import React, { Component } from "react";
import Table from "../Table/Table";
import "./Winners.scss";

function Winners() {
  return (
    <Box id="c_winners" className={"winners"}>
      <h2>Победители</h2>
      <Paper component="form" className={"winnersForm"}>
        <InputBase
          className={"winnersInput"}
          placeholder="e-mail"
          inputProps={{ "aria-label": "e-mail" }}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={"winnersButton"}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Table rows={rows} columns={columns} rowsPerPage={10} />
    </Box>
  );
}

export default Winners;

const columns = [
  {
    id: "date",
    label: "Дата",
  },
  {
    id: "email",
    label: "e-mail",
  },
  {
    id: "name",
    label: "имя",
  },
  {
    id: "priz",
    label: "приз",
  },
];
function createData(date, email, name, priz) {
  return { date, email, name, priz };
}

const rows = [
  createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"),
  createData("25.02.21", "r.bol***@ya.ru", "Evgeny", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
  createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
  createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
  createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
  createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
  createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
  createData("25.02.21", "r.bol***@ya.ru", "Роман", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
  createData("25.02.21", "anya***@yahoo.com", "Анна", "Еженедельный"),
];
