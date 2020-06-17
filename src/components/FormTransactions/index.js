import React from "react";
import useStyles from "./styles";
import { Paper, Typography } from "@material-ui/core";
const FormTransactions = ({ children, title }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {title === "Add Incomes" ? (
          <Typography className={classes.titleIncomes}>Add Incomes</Typography>
        ) : (
          <Typography className={classes.titleExpenses}>Add Expenses</Typography>
        )}
        <Paper className={classes.paper} elevation={5}>
          <div className={classes.container}>{children}</div>
        </Paper>
      </div>
    </>
  );
};

export default FormTransactions;
