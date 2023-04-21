import { styled } from "../../styles";

export const ContainerStarAmount = styled("div", {
  gap: "$1",
  display: "flex",
  alignItems: "center",

  p: {
    color: "$blue500",
    fontWeight: 500,
  },
});

export const StarContent = styled("div", {
  width: "$4",
  height: "$4",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$blue500",
});
