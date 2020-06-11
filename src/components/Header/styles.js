import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    margin: "0 auto",
    paddingTop: 10,
    paddingBottom: 14
  },
  logo: {
    width: 60,
    height: 60,
    color: "#fff",
  },
  menu: {
    color: "#fff",
  },
  app: {
    backgroundColor: "#6b4ee6",
    borderRadius: 10
  },
  title: {
    flexGrow: 1,
  },
}));

export default useStyles;
