import { GlobalStylesProps } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const globalStyles: GlobalStylesProps["styles"] = {
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    height: "100%",
  },
  body: {
    fontFamily: "'Roboto', sans-serif",
    height: "100%",
  },
  "#root": {
    height: "100%",
  },
};

export const useStyles = makeStyles({
  rootContainer: {
    height: "100%",
  },
  contentContainer: {
    padding: 20,
    paddingTop: 52 + 20,
    height: "100%",
  },
});
