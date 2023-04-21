import { Link } from "react-router-dom";
import { styled } from "../../styles";

export const Thumbnail = styled("div", {
  top: 0,
  left: 0,
  height: "75px",
  width: "$full",
  borderRadius: "8px",
  position: "absolute",
  transition: "all 0.2s ",

  img: {
    width: "$full",
    height: "$full",
    objectFit: "cover",
  },

  "&::before": {
    content: "",
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: "0.6",
    width: "$full",
    height: "$full",
    position: "absolute",
    backgroundColor: "$blue800",
  },
});

export const LinkProfile = styled(Link, {
  zIndex: 2,
  left: "50%",
  bottom: "20%",
  padding: "$3",
  color: "$white",
  fontWeight: 500,
  fontSize: "$sm",
  display: "none",
  position: "absolute",
  borderRadius: "24px",
  textDecoration: "none",
  border: "1px solid $white",
  transform: "translateX(-50%)",

  "&:hover": {
    color: "$gray200",
    borderColor: "$gray200",
  },
});

export const ContainerCard = styled("div", {
  gap: "$2",
  width: "$80",
  padding: "$10",
  height: "370px",
  display: "flex",
  color: "$blue800",
  overflow: "hidden",
  borderRadius: "8px",
  background: "$white",
  alignItems: "center",
  position: "relative",
  flexDirection: "column",
  boxShadow: "1px 2px 13px   rgba(0,0,0,0.2)",
  "-moz-box-shadow": "2px 2px 13px  rgba(0,0,0,0.2)",
  "-webkit-box-shadow": "2px 2px 13px  rgba(0,0,0,0.2)",

  "&:hover": {
    "strong, span, p, svg": {
      color: "$white ",
    },

    [`${LinkProfile}`]: {
      display: "block",
    },

    [`${Thumbnail}`]: {
      height: "$full",

      "&::before": {
        opacity: "0.8",
      },
    },
  },
});

export const HeaderCard = styled("div", {
  zIndex: 2,
});

export const ImageProfile = styled("img", {
  width: "$16",
  height: "$16",
  borderRadius: "50%",
  objectFit: "contain",
});

export const DescriptionCard = styled("main", {
  flex: 1,
  zIndex: 2,
  gap: "$1",
  width: "$64",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",

  strong: {
    fontWeight: 500,
    fontSize: "$md",
  },

  p: {
    fontWeight: 500,
    fontSize: "$xs",
  },

  span: {
    fontSize: "$xs",
  },
});

export const WrapperDescription = styled("div", {
  gap: "$1",
  display: "flex",
  marginTop: "$3",
  alignItems: "center",

  "strong, span": {
    fontSize: "$xs",
    color: "$blue800",
  },

  span: {
    fontWeight: 300,
  },

  svg: {
    color: "$blue800",
  },
});

export const FooterCard = styled("footer", {
  width: "$64",
  padding: "$4",
  height: "120px",
  borderRadius: "8px",
  border: "1px solid $blue500",
  borderLeft: "8px solid $blue500",

  span: {
    fontSize: "$xs",
    marginTop: "$3",
    color: "$gray400",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    textOverflow: "ellipsis",
    "-webkit-box-orient": "vertical",
  },
});

export const WrapperFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "> p": {
    width: "$40",
    fontSize: "$sm",
    color: "$blue500",
  },

  "> div": {
    gap: "$1",
    display: "flex",
    alignItems: "center",
  },
});

export const Line = styled("div", {
  height: "1px",
  width: "$full",
  maxWidth: "$64",
  margin: "$1 0  $3 0",
  backgroundColor: "$gray300",
});
