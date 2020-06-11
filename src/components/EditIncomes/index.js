import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContextProvides";
import { useState } from "react";

export default function EditIncome({ income }) {
  const [open, setOpen] = React.useState(false);
  const { updateIncome } = useContext(GlobalContext);
  const [input, setInput] = useState({
    name: income.name,
    value: income.value,
  });
  const { name, value } = input;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateIncome(income.id, name, value);
    setInput({ name: "", value: 0 });
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update Incomes</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you wanna change samething?</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            value={name}
            onChange={handleChange}
            type="name"
            fullWidth
          />
          <TextField
            margin="dense"
            name="value"
            label="Value"
            value={value}
            onChange={handleChange}
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
