import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "none",
  },
  root: {
    fontFamily: "Courier New",
    fontSize: "1.5rem",
    fontWeight: 700,
  },
  mapRoot: {
    fontFamily: "Courier New",
    fontSize: "1.5rem",
    fontWeight: 700,
    wordBreak: "break-word",
  },
});

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export default function PositTable({ allEnv, allEnvKeys }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell classes={{ root: classes.root }}>
              Environment(Nvalue_EsValue)
            </TableCell>
            <TableCell classes={{ root: classes.root }} align="left">
              Posit
            </TableCell>
            <TableCell classes={{ root: classes.root }} align="left">
              Relative Error
            </TableCell>
            <TableCell classes={{ root: classes.root }} align="left">
              Absolute Error
            </TableCell>
            <TableCell classes={{ root: classes.root }} align="left">
              Posit To Decimal
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allEnvKeys.map((key) => (
            <TableRow key={key}>
              <TableCell
                classes={{ root: classes.mapRoot }}
                component="th"
                scope="row"
              >
                {key}
              </TableCell>
              <TableCell classes={{ root: classes.mapRoot }} align="left">
                {allEnv[key][0]}
              </TableCell>
              <TableCell classes={{ root: classes.mapRoot }} align="left">
                {allEnv[key][1]}
              </TableCell>
              <TableCell classes={{ root: classes.mapRoot }} align="left">
                {allEnv[key][2]}
              </TableCell>
              <TableCell classes={{ root: classes.mapRoot }} align="left">
                {allEnv[key][3]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
