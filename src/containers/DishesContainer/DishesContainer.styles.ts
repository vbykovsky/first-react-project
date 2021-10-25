import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 350px)",
    gridGap: 10,
  },
});
