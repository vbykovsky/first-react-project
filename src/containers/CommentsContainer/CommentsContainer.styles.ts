import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    marginTop: 30,
  },
  actionsContainer: {
    marginTop: 15,
    display: "flex",
    justifyContent: "flex-end",
  },
  formContainer: {
    width: 500,
  },
  formField: {
    marginBottom: "15px !important",
    display: "block !important",

    "&:last-child": {
      margin: "0 !important",
    },
  },
});
