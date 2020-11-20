import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import PositTable from "./pageComponents/PositTable";
const usestyles = makeStyles((theme) => ({
  formcontrol: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
}));
export default function PositTools() {
  const classes = usestyles();
  const [es, setEs] = useState("");
  const [n, setN] = useState();
  const handleEsChange = (event) => {
    setEs(event.target.value);
  };
  const handleNChange = (event) => {
    setN(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formcontrol}>
        <InputLabel id="select-es">Es Value</InputLabel>
        <Select
          labelId="select-es"
          id="es-select"
          value={es}
          onChange={handleEsChange}
        >
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
          onChange={handleNChange}
        >
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
          label="Enter a number"
        ></TextField>
      </FormControl>
      <FormControl className={classes.formcontrol}>
        <Button color="primary" variant="contained">
          Convert
        </Button>
      </FormControl>
      <PositTable></PositTable>
    </div>
  );
}
