import React from "react";
import useStyles from "./styles";
import { Typography, Paper } from "@material-ui/core";

const ListTransactions = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={
          title === "Your Incomes"
            ? classes.titleIncomes
            : classes.titleExpenses
        }
      >
        {title}
      </Typography>
      <Paper className={classes.list} elevation={5}>
        {children}
      </Paper>
    </div>
  );
};

export default ListTransactions;
