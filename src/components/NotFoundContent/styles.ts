import { styled } from "../../styles";

export const MessageNotFound = styled("p", {
  color: "$gray400",
  fontSize: "$xs",
  padding: "$10 0",
  width: "$full",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$2",

  svg: {
    color: "$red300",
  },
});
