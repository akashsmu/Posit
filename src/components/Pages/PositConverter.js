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
import clsx from "clsx";
import NumberFormat from "react-number-format";
import ReactLoading from "react-loading";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import PositTable from "./PositTable";
import PositGraph from "./PositGraph";
import sample from "../../components/InfoSection/hardwareRed.jpg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

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
  ConvertButtons: {
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
  const [es, setEs] = useState(0);
  const [n, setN] = useState(0);
  const [posit, setposit] = useState();
  const [decimal, setDecimal] = useState(0);

  const [table, setTable] = useState();
  const [tableKeys, setTableKeys] = useState();
  const [showTable, setShowTable] = useState(false);
  const [name, setName] = useState("Show Table");
  const [gname, setGname] = useState("Show Graph");
  const [disabled, setDisabled] = useState(true);
  const [showGraph, setShowGraph] = useState(false);

  const handleShowTable = (event) => {
    setShowTable(!showTable);
    !showTable ? setName("Hide Table") : setName("Show Table");
  };
  const handleGname = (event) => {
    setShowGraph(!showGraph);
    !showGraph ? setGname("Hide Graph") : setGname("Show Graph");
  };
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
    setposit(null);
    setShowTable(false);
    setShowGraph(false);
    setName("Show Table");
    setGname("Show Graph");
    setDisabled(true);
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
          .then((data) => {
            setposit(data.data[0].posit);
            setTableKeys(Object.keys(data.data[0].allEnv));
            setTable(data.data[0].allEnv);
            setDisabled(false);

            // console.log(data.data[0]);
            // console.log(Object.keys(data.data[0].allEnv));
            // console.log(data.data[0].allEnv);
          });
      });
  };

  const handleClear = () => {
    setposit("");
    setDecimal(0);
    setEs(0);
    setN(0);
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h1"
          style={{
            color: "#000",
            fontFamily: "Courier New",
            fontWeight: "700",
            textAlign: "center",
            paddingTop: "2%",
          }}
        >
          Convert Decimal to Posit
        </Typography>
      </ThemeProvider>

      <MainApp>
        <AppLeft>
          <FormControl
            required
            className={clsx(classes.formcontrol, classes.TextWidth)}
          >
            <InputLabel id="select-es" style={{ fontSize: "1.3rem" }}>
              Es Value
            </InputLabel>
            <Select
              labelId="select-es"
              id="es-select"
              value={es}
              defaultValue={0}
              onChange={handleEsChange}
              className={classes.customInput}
            >
              <MenuItem value={0} style={{ fontSize: "1.3rem" }}>
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
            onChange={handleNChange}
          >
            <TextField
              required
              autoComplete={"off"}
              id="standard"
              type="number"
              value={n}
              label="Enter N Value"
              InputProps={{
                inputProps: { min: 0, max: 60 },
                classes: { input: classes.customInput },
              }}
              InputLabelProps={{ classes: { root: classes.customLabel } }}
              style={{ fontSize: "1.5rem" }}
            ></TextField>
          </FormControl>
          <FormControl
            className={clsx(classes.formcontrol, classes.TextWidth)}
            onChange={handleDecimalChange}
          >
            <TextField
              required
              label="Enter a Decimal Number"
              id="standard"
              autoComplete={"off"}
              value={decimal}
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
              }}
            >
              Convert
            </Button>
          </FormControl>

          <PositValue>
            Posit:
            {posit === null ? (
              <ReactLoading
                type={"spinningBubbles"}
                color={"gray"}
                height={"3rem"}
                width={"3rem"}
              ></ReactLoading>
            ) : (
              posit
            )}
          </PositValue>

          <ButtonDiv>
            <Button
              variant="contained"
              onClick={handleShowTable}
              disabled={disabled}
              classes={{
                root: classes.ConvertButton,
              }}
            >
              {name}
            </Button>

            <Button
              variant="contained"
              onClick={handleClear}
              classes={{
                root: classes.ConvertButton,
              }}
            >
              Clear Values
            </Button>
          </ButtonDiv>
        </AppLeft>
        <AppRight>
          <Button
            onClick={handleGname}
            disabled={disabled}
            classes={{
              root: classes.ConvertButtons,
            }}
            variant="contained"
          >
            {gname}
          </Button>
          {showGraph ? (
            <PositGraph allEnv={table} allEnvKeys={tableKeys}></PositGraph>
          ) : (
            <></>
          )}
        </AppRight>
      </MainApp>
      {showTable ? (
        <PosTable>
          <PositTable allEnv={table} allEnvKeys={tableKeys}></PositTable>
        </PosTable>
      ) : (
        <> </>
      )}
    </Wrapper>
  );
}

const PosTable = styled.div``;
const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  height: 100vh;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

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
  word-wrap: break-word;
  width: 600px;
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
