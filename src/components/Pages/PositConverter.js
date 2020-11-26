import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
// import PositTable from "./pageComponents/PositTable";
import styled from "styled-components";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  MarkSeries,
  Hint,
} from "react-vis";
import clsx from "clsx";
import NumberFormat from "react-number-format";
import ReactLoading from "react-loading";

const usestyles = makeStyles((theme) => ({
  formcontrol: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  customLabel: {
    fontSize: "1.3rem",
  },
  TextWidth: {
    width: "200px",
  },
  ConvertButton: {
    width: "150px",
    height: "50px",
    fontSize: "1.5rem",
  },
  customInput: {
    fontSize: "1.3rem",
    fontWeight: "700",
    color: "rgb(155,10,190)",
  },
}));

export default function PositConverter() {
  const classes = usestyles();
  const [es, setEs] = useState();
  const [n, setN] = useState();
  const [posit, setposit] = useState();
  const [decimal, setDecimal] = useState();
  const [value, setValue] = useState();

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

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
        setposit(null);
        axios
          .get("https://fast-beach-74311.herokuapp.com/wel/")
          .then((data) => (setposit(data.data.posit), console.log(data.data)));
      });
  };

  const rememberValue = (value) => {
    setValue(value);
  };

  const forgetValue = () => {
    setValue(null);
  };

  return (
    <>
      <Typography
        variant="h2"
        style={{ color: "#000", textAlign: "center", marginTop: "2%" }}>
        Convert Decimal to Posit
      </Typography>

      <MainApp>
        <AppLeft>
          <FormControl
            required
            className={clsx(classes.formcontrol, classes.TextWidth)}>
            <InputLabel
              id="select-es"
              defaultValue={0}
              style={{ fontSize: "1.3rem" }}>
              Es Value
            </InputLabel>
            <Select
              labelId="select-es"
              id="es-select"
              value={es}
              onChange={handleEsChange}
              className={classes.customInput}>
              <MenuItem value={6} style={{ fontSize: "1.3rem" }}>
                0
              </MenuItem>
              <MenuItem value={1} style={{ fontSize: "1.3rem" }}>
                1
              </MenuItem>
              <MenuItem value={2} style={{ fontSize: "1.3rem" }}>
                2
              </MenuItem>
              <MenuItem value={3} style={{ fontSize: "1.3rem" }}>
                3
              </MenuItem>
              <MenuItem value={4} style={{ fontSize: "1.3rem" }}>
                4
              </MenuItem>
              <MenuItem value={5} style={{ fontSize: "1.3rem" }}>
                5
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl
            className={clsx(classes.formcontrol, classes.TextWidth)}
            onChange={handleNChange}>
            <TextField
              required
              id="standard"
              type="number"
              label="Enter N Value"
              InputProps={{
                inputProps: { min: 0, max: 60 },
                classes: { input: classes.customInput },
              }}
              InputLabelProps={{ classes: { root: classes.customLabel } }}
              style={{ fontSize: "1.5rem" }}></TextField>
          </FormControl>
          <FormControl
            className={clsx(classes.formcontrol, classes.TextWidth)}
            onChange={handleDecimalChange}>
            <TextField
              required
              label="Enter a Decimal Number"
              id="standard"
              InputProps={{
                classes: {
                  input: classes.customInput,
                },
                inputComponent: NumberFormatCustom,
              }}
              InputLabelProps={{ classes: { root: classes.customLabel } }}
            />
          </FormControl>
          <FormControl className={classes.formcontrol}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleConvert}
              classes={{
                root: classes.ConvertButton,
              }}>
              Convert
            </Button>
          </FormControl>
          {/* <PositTable></PositTable> */}

          <PositValue>
            Posit:
            {posit === null ? (
              <ReactLoading
                type={"spinningBubbles"}
                color={"gray"}
                height={"3rem"}
                width={"3rem"}></ReactLoading>
            ) : (
              posit
            )}
          </PositValue>
        </AppLeft>
        <AppRight>
          <XYPlot height={400} width={400}>
            {/* <LineSeries data={data} /> */}
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <MarkSeries
              onValueMouseOver={rememberValue}
              onValueMouseOut={forgetValue}
              data={data}
            />
            {value ? <Hint value={value} /> : null}
          </XYPlot>
        </AppRight>
      </MainApp>
    </>
  );
}

const MainApp = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

const AppLeft = styled.div`
  flex: 0.7;
  margin: 5% 0%;
`;
const PositValue = styled.div`
  color: #000;
  font-size: 2rem;
  margin: 5%;
  @media screen and (max-width: 990px) {
    font-size: 200%;
  }
  @media screen and (max-width: 768px) {
    font-size: small;
  }

  width: 80px;
`;
const AppRight = styled.div`
  margin: 5% 0%;
`;
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
    />
  );
}
