import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  paper: {
    width: "80%",
    margin: "0 auto",
    borderRadius: 10,
    paddingBottom: 14,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleIncomes: {
    fontSize: "2.4em",
    fontWeight: "bold",
    color: "rgba(43, 190, 242)",
    textAlign: "center",
    fontFamily: "PT Serif",
  },
  titleExpenses: {
    fontSize: "2.4em",
    fontWeight: "bold",
    color: "rgb(234,55,163)",
    textAlign: "center",
    fontFamily: "PT Serif",
  },
}));

export default useStyles;
