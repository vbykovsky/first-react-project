import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 350px)",
    gridGap: 30,
    justifyContent: "center",
  },
});
