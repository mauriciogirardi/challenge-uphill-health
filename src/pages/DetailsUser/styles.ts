import { styled } from "../../styles";

export const CardDetails = styled("main", {
  padding: "$10",
  marginTop: "$20",
  overflow: "hidden",
  borderRadius: "8px",
  backgroundColor: "$white",
  "-webkit-box-shadow": "2px 2px 13px  rgba(0,0,0,0.2)",
  "-moz-box-shadow": "2px 2px 13px  rgba(0,0,0,0.2)",
  boxShadow: "1px 2px 13px   rgba(0,0,0,0.2)",
});

export const CardDetailsHeader = styled("div", {
  gap: "$10",
  width: "50%",
  display: "flex",
  alignItems: "center",

  img: {
    width: "$40",
    height: "$40",
    borderRadius: "50%",
    border: "2px solid $blue500",
  },

  "@bp4": {
    flexDirection: "column",
    textAlign: "center",
  },

  "@bp2": {
    width: "100%",
  },
});

export const CardDetailsHeaderWrapper = styled("div", {
  h1: {
    fontWeight: 500,
    color: "$blue800",
  },

  span: {
    fontSize: "$sm",
    color: "$blue800",
  },

  p: {
    fontSize: "$xs",
    marginTop: "$2",
    color: "$gray500",
  },
});

export const InfoFollower = styled("div", {
  gap: "$4",
  marginTop: "$4",
  display: "flex",
  alignItems: "center",

  div: {
    padding: "$1 $2",
    borderRadius: "5px",
    backgroundColor: "$blue800",
    border: "1px solid $blue500",

    span: {
      fontWeight: 500,
      fontSize: "$xs",
      color: "$white",
    },
  },
});

export const LinkGithub = styled("a", {
  cursor: "pointer",
  color: "$green500",

  ":hover": {
    color: "$green300",
  },
});

export const ContainerLoading = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100vh - 110px)",
});

export const RepositoryContainer = styled("div", {
  width: "50%",

  "@bp2": {
    width: "100%",
  },
});

export const RepositoryDescription = styled("a", {
  padding: "$3",
  marginTop: "$2",
  display: "block",
  cursor: "pointer",
  color: "$gray500",
  overflow: "hidden",
  borderRadius: "4px",
  position: "relative",
  textDecoration: "none",

  "&:before": {
    content: "",
    top: 0,
    left: 0,
    width: "5px",
    height: "$full",
    position: "absolute",
    backgroundColor: "$blue500",
  },

  "> div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    h3: {
      fontSize: "$md",
      fontWeight: 500,
      color: "$blue500",
    },
  },

  p: {
    fontSize: "$xs",
    marginTop: "$2",
    lineHeight: "1.1rem",
  },

  "&:hover": {
    backgroundColor: "$gray100",
  },
});

export const Wrapper = styled("div", {
  gap: "$5",
  display: "flex",
  alignItems: "flex-start",

  "@bp3": {
    flexDirection: "column",
  },
});
