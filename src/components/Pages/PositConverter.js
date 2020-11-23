import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  button: {
    width: "200px",
    height: "50px",
    fontSize: "15px",
  },
  formControl: {
    // minWidth: 150,
    margin: theme.spacing(10),
  },
  textField: {
    fontSize: "20px",
  },
}));
export default function PositConverter() {
  const classes = useStyles();
  return (
    <>
      <FormControl className={classes.formControl}>
        <TextField
          type="number"
          label="Enter a value"
          defaultValue=""
          autoFocus="true"
          InputProps={{ classes: { input: classes.textField } }}
          InputLabelProps={{ style: { fontSize: "18px" } }}></TextField>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button
          color="primary"
          variant="contained"
          classes={{
            root: classes.button,
          }}>
          Convert
        </Button>
      </FormControl>
    </>
  );
}
