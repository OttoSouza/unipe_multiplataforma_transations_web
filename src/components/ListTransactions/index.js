import React from "react";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

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
      <div className={classes.list}>
        {children}
      </div>
    </div>
  );
};

export default ListTransactions;
