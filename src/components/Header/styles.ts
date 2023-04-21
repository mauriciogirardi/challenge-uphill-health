import { Link } from "react-router-dom";
import { styled } from "../../styles";

export const ContainerHeader = styled("div", {
  backgroundColor: "$blue800",
});

export const ContentHeader = styled("header", {
  gap: "$4",
  height: "$16",
  padding: "0 $4",
  display: "flex",
  margin: "0 auto",
  alignItems: "center",
  maxWidth: "$container",
  justifyContent: "space-between",

  img: {
    width: "150px",
  },

  "@bp1": {
    height: "$40",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const BackButton = styled(Link, {
  gap: "$2",
  fontWeight: 500,
  color: "$white",
  display: "flex",
  fontSize: "$sm",
  alignItems: "center",
  textDecoration: "none",

  "&:hover": {
    color: "$gray100",
  },
});
