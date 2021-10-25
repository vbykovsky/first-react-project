import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    padding: "10px 20px",
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    display: "block",
  },
  navigation: {
    marginLeft: 15,
    display: "flex",
    alignItems: "center",
  },
  navigationLink: {
    textDecoration: "none",
  },
  navigationLinkContent: {
    marginRight: 15,
    color: "white",
    cursor: "pointer",
  },
});
