import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
