import { defineStyle, defineStyleConfig, cssVar } from "@chakra-ui/react";

const $startColor = cssVar("skeleton-start-color");
const $endColor = cssVar("skeleton-end-color");

const black = defineStyle({
  _light: {
    [$startColor.variable]: "colors.whiteAlpha.400",
    [$endColor.variable]: "colors.whiteAlpha.500",
  },
});

const Skeleton = defineStyleConfig({
  variants: { black },
  defaultProps: { variant: "black" },
});

export { Skeleton };
