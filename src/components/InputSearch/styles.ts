import { styled } from "@stitches/react";

export const InputSearchContainer = styled("div", {
  gap: "$2",
  maxWidth: "400px",
  width: "100%",
  display: "flex",
  padding: "$2 $4",
  borderRadius: "16px",
  alignItems: "center",
  backgroundColor: "$white",

  svg: {
    color: "$gray200",
  },

  input: {
    border: 0,
    outline: 0,
    width: "$full",
    fontSize: "$sm",
    color: "$gray500",
    paddingRight: "$4",
    background: "transparent",

    "&::placeholder": {
      color: "$gray200",
    },
  },

  variants: {
    focus: {
      true: {
        boxShadow: "0 0 0 2px #00B37E",
      },
      false: {},
    },
    error: {
      true: {
        boxShadow: "0 0 0 2px #e05959",
      },
      false: {},
    },
  },
});
