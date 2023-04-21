import { styled } from "../../styles";

export const Content = styled("main", {
  marginTop: "$12",

  h1: {
    color: "$blue800",
    fontWeight: 500,
    fontSize: "$2xl",
    marginBottom: "$8",
  },
});

export const FlexCard = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "$10",

  "@bp3": {
    justifyContent: "flex-start",
  },

  "@bp2": {
    justifyContent: "center",
  },
});

export const ContainerLoading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$full",
  height: "370px",
});
