import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  outline: {
    gray_900_01: "border border-gray-900_01 border-solid text-white-A700",
    deep_purple_A100_deep_purple_A100_00:
      "border border-solid deep_purple_A100_deep_purple_A100_00_border",
  },
  fill: {
    white_A700_19: "bg-white-A700_19",
    gray_900_02: "bg-gray-900_02 text-white-A700",
    gray_900: "bg-gray-900 text-white-A700",
    deep_purple_A200: "bg-deep_purple-A200 text-white-A700",
  },
};
const sizes = { xs: "p-2.5", sm: "p-4", md: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "gray_900_01",
    "deep_purple_A100_deep_purple_A100_00",
    "white_A700_19",
    "gray_900_02",
    "gray_900",
    "deep_purple_A200",
  ]),
};

export { Button };
