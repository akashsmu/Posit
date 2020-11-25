import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
// import PositTable from "./pageComponents/PositTable";
const usestyles = makeStyles((theme) => ({
  formcontrol: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
}));
export default function PositConverter() {
  const classes = usestyles();
  const [es, setEs] = useState();
  const [n, setN] = useState();
  const [posit, setposit] = useState();
  const [decimal, setDecimal] = useState();

  const handleEsChange = (event) => {
    setEs(event.target.value);
  };
  const handleNChange = (event) => {
    setN(event.target.value);
  };

  const handleDecimalChange = (event) => {
    setDecimal(event.target.value);
  };

  const axios = require("axios").default;
  const handleConvert = () => {
    axios
      .post("https://fast-beach-74311.herokuapp.com/wel/", {
        decimal: decimal,
        esValue: es,
        nValue: n,
      })
      .then(function (response) {
        console.log(response);
        axios
          .get("https://fast-beach-74311.herokuapp.com/wel/")
          .then((data) => (setposit(data.data.posit), console.log(data.data)));
      });
  };

  return (
    <div>
      <FormControl className={classes.formcontrol} required>
        <InputLabel id="select-es" defaultValue={1}>
          Es Value
        </InputLabel>
        <Select
          labelId="select-es"
          id="es-select"
          value={es}
          onChange={handleEsChange}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formcontrol} required>
        <InputLabel id="select-n">N Value</InputLabel>
        <Select
          labelId="select-n"
          id="n-select"
          value={n}
          onChange={handleNChange}>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={32}>32</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        className={classes.formcontrol}
        onChange={handleDecimalChange}
        required>
        <TextField
          id="standard"
          type="number"
          label="Enter a number"></TextField>
      </FormControl>
      <FormControl className={classes.formcontrol}>
        <Button color="primary" variant="contained" onClick={handleConvert}>
          Convert
        </Button>
      </FormControl>
      {/* <PositTable></PositTable> */}
      <div style={{ color: "#000" }}> Posit: {posit}</div>
    </div>
  );
}
