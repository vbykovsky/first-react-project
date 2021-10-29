import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    marginBottom: 20,
    display: "flex",
  },
  image: {
    marginRight: 15,
    width: 200,

    "& > img": {
      display: "block",
    },
  },
  description: {
    flex: 1,
  },
});
