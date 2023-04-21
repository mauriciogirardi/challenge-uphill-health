import { styled } from "../../styles";

export const ContainerLoading = styled("div", {
  display: "flex",
  width: "$full",
  height: "370px",
  alignItems: "center",
  justifyContent: "center",
});

export const Content = styled("section", {
  marginTop: "$12",

  h1: {
    fontWeight: 500,
    fontSize: "$2xl",
    color: "$blue800",
    marginBottom: "$8",
  },
});

export const FlexCard = styled("div", {
  gap: "$10",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",

  "@bp3": {
    justifyContent: "flex-start",
  },

  "@bp2": {
    justifyContent: "center",
  },
});
