import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  });