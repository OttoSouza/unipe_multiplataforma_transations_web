import React, { createContext, useState, useEffect } from "react";
import { incomesGet, api, expensesGet } from "../services/api";
import { toast } from "react-toastify";
export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  //Incomes Actions
  useEffect(() => {
    incomesGet.then((response) => {
      setIncomes(response.data);
    });
  }, []);

  const addIncomes = (name, value) => {
    api.post("create-incomes", { name, value }).then((response) => {
      toast.success("Income Add");
      const newIncome = response.data[0];
      setIncomes([...incomes, newIncome]);
    });
  };

  const deleteIncome = (id) => {
    api.delete(`delete-incomes/${id}`).then((response) => {
      setIncomes(incomes.filter((income) => income.id !== id));
      toast.success("Income Deleted");
    });
  };

  const updateIncome = (id, name, value) => {
    api.put(`update-Incomes/${id}`, { name, value }).then((response) => {
      const newList = incomes.map((income) =>
        income.id === id ? { id, name, value } : incomes
      );
      setIncomes(newList);
      toast.success("Income Update");
    });
  };

  //expenses

  useEffect(() => {
    expensesGet.then((response) => {
      setExpenses(response.data);
    });
  }, []);

  const addExpenses = (values) => {
    api
      .post("create-expenses", values)
      .then((response) => {
        toast.success("Expense Add");
        const newExpenses = response.data[0];
        setExpenses([...expenses, newExpenses]);
      })
      .catch((err) => {
        console.log(err.response.data.err);
      });
  };

  const deleteExpenses = (id) => {
    api.delete(`delete-expenses/${id}`).then((response) => {
      setExpenses(expenses.filter((expense) => expense.id !== id));
      toast.success("Expense Deleted");
    });
  };

  const updateExpenses = (id, name, value) => {
    api.put(`update-expenses/${id}`, { name, value }).then((response) => {
      const newExpenses = expenses.map((expense) =>
        expense.id === id ? { id, name, value } : expenses
      );
      setExpenses(newExpenses);
      toast.success("Expense Updated");
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        incomes,
        addIncomes,
        updateIncome,
        deleteIncome,
        expenses,
        addExpenses,
        deleteExpenses,
        updateExpenses,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
