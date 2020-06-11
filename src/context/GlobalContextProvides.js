import React, { createContext, useState, useEffect } from "react";
import { incomesGet, api, expensesGet } from "../services/api";

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [itemIncome, setItemIncome] = useState(null);

  //Incomes Actions

  const addIncomes = (values) => {
    api
      .post("create-incomes", values)
      .then((response) => {
        alert("ok");
      })
      .catch((err) => {
        console.log(err.response.data.err);
      });
  };
  const deleteIncome = (id) => {
    api.delete(`delete-incomes/${id}`).then((response) => {
      alert("ok");
    });
  };

  const findIncome = (id) => {
    setItemIncome(incomes.find((income) => income.id === id));
  };

  const updateIncome = (id, name, value) => {
    api.put(`update-Incomes/${id}`, { name, value }).then((response) => {
      alert("ok");
    });
  };

  useEffect(() => {
    incomesGet.then((response) => {
      setIncomes(response.data);
    });
  }, [incomes]);

  //expenses

  useEffect(() => {
    expensesGet.then((response) => {
      setExpenses(response.data);
    });
  }, [expenses]);

  const addExpenses = (values) => {
    api
      .post("create-expenses", values)
      .then((response) => {
        alert("Expenses Add");
      })
      .catch((err) => {
        console.log(err.response.data.err);
      });
  };

  const deleteExpenses = (id) => {
    api.delete(`delete-expenses/${id}`).then((response) => {
      alert("Expenses deleted");
    });
  };

  const updateExpenses = (id, name, value) => {
    api.put(`update-expenses/${id}`, {name, value}).then(response => {
      alert('Expenses Updated')
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        incomes,
        addIncomes,
        findIncome,
        updateIncome,
        deleteIncome,
        itemIncome,
        expenses,
        addExpenses,
        deleteExpenses,
        updateExpenses
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
