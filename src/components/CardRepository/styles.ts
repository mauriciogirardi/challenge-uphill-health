import { styled } from "../../styles";

export const ContainerCard = styled("div", {
  width: "240px",
  height: "240px",
  display: "flex",
  color: "$blue800",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  background: "$white",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: "1px 2px 13px   rgba(0,0,0,0.2)",
  "-moz-box-shadow": "2px 2px 13px  rgba(0,0,0,0.2)",
  "-webkit-box-shadow": "2px 2px 13px  rgba(0,0,0,0.2)",
});

export const DescriptionCard = styled("main", {
  gap: "$4",
  width: "$40",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  flexDirection: "column",

  "> p": {
    fontSize: "$sm",
    height: "80px",
    width: "200px",
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    textOverflow: "ellipsis",
    "-webkit-box-orient": "vertical",
  },

  h3: {
    color: "$blue800",
    width: "200px",
    overflow: "hidden",
    "-webkit-line-clamp": 3,
    textOverflow: "ellipsis",
    "-webkit-box-orient": "vertical",
  },

  "&:before": {
    content: "",
    top: 0,
    left: 0,
    height: "$2",
    width: "$full",
    position: "absolute",
    backgroundColor: "$blue500",
  },
});
