import React from "react";
import { Comment as CommentType } from "@ts/comment";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Comment: React.FC<CommentType> = ({ text, author, rating, date }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>
        {author} - {new Date(date).toLocaleDateString("ru") + " " + new Date(date).toLocaleTimeString("ru")} (
        {`rating: ${rating}`})
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{text}</Typography>
    </AccordionDetails>
  </Accordion>
);
