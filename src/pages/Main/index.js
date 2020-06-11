import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./styles";
import Header from "../../components/Header";
import { Grid } from "@material-ui/core";
import Incomes from "../Incomes";
import Expenses from "../Expenses";
import Balance from "../../components/Balance";
import GlobalContextProvider from "../../context/GlobalContextProvides";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  const styles = useStyles();

  return (
    <GlobalContextProvider>
      <Header />
      <CssBaseline />
      <div className={styles.root}>
        <Grid container justify="space-between" direction="row">
          <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <Balance />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Incomes />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Expenses />
          </Grid>
        </Grid>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </GlobalContextProvider>
  );
};

export default Main;
