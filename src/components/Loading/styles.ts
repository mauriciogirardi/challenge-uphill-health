import { keyframes, styled } from "../../styles";

const animate = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(360deg)" },
});

export const LoadingContainer = styled("div", {
  width: "min-content",
  height: "min-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  svg: {
    animation: `${animate} 1s linear infinite`,
  },

  p: {
    color: "$gray400",
    fontSize: "$xs",
  },
});
