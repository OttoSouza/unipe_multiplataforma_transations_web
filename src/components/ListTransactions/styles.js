import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },

  list: {
    width: "80%",
    maxHeight: "100%",
    overflow: "auto",
    height: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 20,
  },

  titleIncomes: {
    fontSize: "2.6em",
    fontWeight: "bold",
    color: "rgba(43, 190, 242)",
   
  },
  titleExpenses: {
    fontSize: "2.6em",
    fontWeight: "bold",
    color: "rgb(234,55,163)",
  
  },
}));

export default useStyles;
