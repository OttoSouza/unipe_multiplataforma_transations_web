import React, { useContext } from "react";
import FormTransactions from "../../components/FormTransactions";
import { GlobalContext } from "../../context/GlobalContextProvides";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  ListItem,
  Typography,
  IconButton,
  List,
} from "@material-ui/core";
import useStyles from "./styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ListTransactions from "../../components/ListTransactions";
import EditExpenses from "../../components/EditExpenses";
// import { Container } from './styles';
import * as Yup from "yup";
const Expenses = () => {
  const classes = useStyles();
  const { expenses, addExpenses, deleteExpenses } = useContext(GlobalContext);

  const ExpensesSchema = Yup.object().shape({
    name: Yup.string().required("Expense is required"),
    value: Yup.number().positive().required("Value is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      value: 0,
    },
    validationSchema: ExpensesSchema,
    onSubmit: (values) => {
      addExpenses(values);
    },
  });

  const map = expenses.map((expense) => (
    <ListItem className={classes.listItem} key={expense.id}>
      <div className={classes.listItemContainer}>
        <Typography>{expense.name}</Typography>
        <Typography className={classes.listItemContainerValue}>
          R$ {expense.value}
        </Typography>
      </div>
      <div className={classes.buttonContainer}>
        <IconButton onClick={() => deleteExpenses(expense.id)}>
          <DeleteOutlineIcon />
        </IconButton>
        <EditExpenses expenses={expense} />
      </div>
    </ListItem>
  ));
  return (
    <>
      <FormTransactions title="Add Expenses">
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            label="Expenses"
            className={classes.input}
            type="text"
            name="name"
            value={formik.name}
            onChange={formik.handleChange}
            helperText={formik.errors.name}      
          />
          <TextField
            label="Value"
            className={classes.input}
            type="number"
            name="value"
            value={formik.value}
            onChange={formik.handleChange}
            helperText={formik.errors.value}        
          />
          <Button className={classes.button} type="submit">
            Add
          </Button>
        </form>
      </FormTransactions>
      <ListTransactions title="Your Expenses">
        <div className={classes.listContainer}>
          <List className={classes.list}>
            {expenses.length ? (
              map
            ) : (
              <div className={classes.empty}>
                <Typography className={classes.emptyTitle}>Empty List</Typography>
              </div>
            )}
          </List>
        </div>
      </ListTransactions>
    </>
  );
};

export default Expenses;
