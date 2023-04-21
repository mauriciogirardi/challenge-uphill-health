import { styled } from "../../styles";

export const PageErrorContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "$20",

  img: {
    width: "$64",
  },

  h1: {
    fontWeight: 500,
    color: "$blue800",
    fontSize: "$lg",
    width: "50%",
    textAlign: "center",
  },

  span: {
    fontSize: "$xs",
    color: "$gray400",
    lineHeight: "2rem",
  },
});
