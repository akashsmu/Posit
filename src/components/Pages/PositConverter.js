import { Button, FormControl, makeStyles, TextField } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 150,
    margin: theme.spacing(1),
    fontSize: theme.spacing(2),
  },
}));
export default function PositConverter() {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <TextField type="number" label="Enter es value"></TextField>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Button color="primary" variant="contained">
          Convert
        </Button>
      </FormControl>
    </div>
  );
}
