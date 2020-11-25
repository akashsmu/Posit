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
  const [n, setN] = useState(8);
  const [posit, setposit] = useState(0);

  const handleEsChange = (event) => {
    setEs(event.target.value);
  };
  const handleNChange = (event) => {
    setN(event.target.value);
  };

  // useEffect(() => {
  //   const getPositData = async () => {
  //     await fetch("http://localhost:8000/wel/")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setposit(data.posit);
  //         console.log(data);
  //       });
  //   };
  //   getPositData();
  // }, [es]);

  const axios = require("axios").default;
  const handleConvert = () => {
    axios
      .post("https://fast-beach-74311.herokuapp.com/wel/", {
        decimal: 23.125,
        esValue: es,
        nValue: n,
      })
      .then(function (response) {
        console.log(response);
      });

    axios
      .get("https://fast-beach-74311.herokuapp.com/wel/")
      .then((data) => console.log(data.data));
  };

  return (
    <div>
      <FormControl className={classes.formcontrol}>
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
      <FormControl className={classes.formcontrol}>
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
      <FormControl className={classes.formcontrol}>
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
    </div>
  );
}
