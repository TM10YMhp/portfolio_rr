import { style } from "@vanilla-extract/css";

export const line = style({
  "::after": {
    content: "",
    // position: "static",
    // display: "inline-block",
    height: "4px",
    marginLeft: "3%",
    background: "var(--color-primary)",
    flexGrow: 1,
    borderRadius: 999,
  },
  "@media": {
    "(max-width: 768px)": {
      "::after": {
        position: "absolute",
        margin: 0,
        left: "50%",
        transform: "translateX(-50%)",
        top: "-40px",
        width: "60%",
      },
    },
  },
});
