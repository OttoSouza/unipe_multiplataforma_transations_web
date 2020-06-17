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
    color: "#b83a2e",
    fontFamily: "PT Serif",
   
  },
  titleExpenses: {
    fontSize: "2.6em",
    fontWeight: "bold",
    color: "#618F74",
    fontFamily: "PT Serif",
  },
}));

export default useStyles;
