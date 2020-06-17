import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { GlobalContext } from "../../context/GlobalContextProvides";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  paper: {
    borderRadius: 20,
  },
  incomes: {
    color: "#b83a2e",
  },
  expense: {
    color: "rgb(97, 143, 116)",
  },
  balance: {
    color: "#000",
  },
  title: {
    fontSize: 40,
  },
}));

const Balance = () => {
  const { incomes, expenses } = useContext(GlobalContext);

  const incomeValue = incomes.map((income) => income.value);
  const expensesValue = expenses.map((expense) => expense.value);

  const totalIncome =
    incomeValue.reduce((accumulator, item) => (accumulator += item), 0) * 1;

  const totalExpense =
    expensesValue.reduce((accumutator, item) => (accumutator += item), 0) * 1;

  const balance = (totalIncome - totalExpense).toFixed(2);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <ListItemIcon className={classes.balance}>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary="Balance" secondary={`R$ ${balance}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.incomes}>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Incomes" secondary={`R$ ${totalIncome.toFixed(2)}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.expense}>
              <RemoveIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.title}
              primary="Expenses"
              secondary={`R$ ${totalExpense.toFixed(2)}`}
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default Balance;
