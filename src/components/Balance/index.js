import React, { useContext } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
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
    alignSelf: "center",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
  },
  incomes: {
    color:  "rgba(43, 190, 242)"
  },
  expense: {
    color: "rgb(234,55,163)",
  },
  balance: {
    color: '#000'
  }, 
  title: {
    fontSize: 40
  }
}));

const Balance = () => {
   const { incomes, expenses } = useContext(GlobalContext);

  const incomeValue = incomes.map((income) => income.value);
  const expensesValue = expenses.map((expense) => expense.value);

  const totalIncome = incomeValue
    .reduce((accumulator, item) => (accumulator += item), 0)
    .toFixed(2);

  const totalExpense = expensesValue
    .reduce((accumutator, item) => (accumutator += item), 0)
    .toFixed(2);

  const balance = (totalIncome - totalExpense).toFixed(2);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        className={classes.paper}
      >
        <ListItem>
          <ListItemIcon className={classes.balance}>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Balance" secondary={balance} />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.incomes}>
            <AddIcon />
          </ListItemIcon>
          <ListItemText  primary="Incomes" secondary={totalIncome} />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.expense}>
            <RemoveIcon />
          </ListItemIcon>
          <ListItemText className={classes.title} primary="Expenses" secondary={totalExpense}  />
        </ListItem>
      </List>
    </div>
  );
};

export default Balance;
