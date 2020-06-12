import React, { useContext, memo } from "react";
import FormTransactions from "../../components/FormTransactions";
import {
  TextField,
  Button,
  ListItem,
  Typography,
  IconButton,
  List,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ListTransactions from "../../components/ListTransactions";
import useStyles from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { GlobalContext } from "../../context/GlobalContextProvides";
import EditIncome from "../../components/EditIncomes";
function Incomes() {
  const classes = useStyles();
  const { incomes, addIncomes, deleteIncome } = useContext(GlobalContext);

  const IncomeSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    value: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Value is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      value: 0,
    },
    validationSchema: IncomeSchema,
    onSubmit: (values) => {
      addIncomes(values);
    },
  });

  const map = incomes.map((income) => (
    <ListItem className={classes.listItem} key={income.id}>
      <div className={classes.listItemContainer}>
        <Typography>{income.name}</Typography>
        <Typography className={classes.listItemContainerValue}>
          R$ {income.value}
        </Typography>
      </div>
      <div className={classes.buttonContainer}>
        <IconButton onClick={() => deleteIncome(income.id)}>
          <DeleteOutlineIcon />
        </IconButton>
        <EditIncome income={income} />
      </div>
    </ListItem>
  ));

  return (
    <>
      <FormTransactions title="Add Incomes">
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            label="Incomes"
            className={classes.input}
            type="text"
            name="name"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />

          <TextField
            label="Value"
            className={classes.input}
            type="number"
            name="value"
            value={formik.values.value}
            onChange={formik.handleChange}
            error={formik.errors.value}
          />

          <Button className={classes.button} type="submit">
            Add
          </Button>
        </form>
      </FormTransactions>
      <ListTransactions title="Your Incomes">
        <div className={classes.listContainer}>
          <List className={classes.list}>
            {incomes.length ? (
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
}

export default memo(Incomes);
