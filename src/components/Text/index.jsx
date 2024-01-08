import React from "react";

const sizeClasses = {
  txtUrbanistMedium20WhiteA700: "font-medium font-urbanist",
  txtUrbanistSemiBold60: "font-semibold font-urbanist",
  txtUrbanistMedium18Gray300: "font-medium font-urbanist",
  txtUrbanistMedium18Gray500: "font-medium font-urbanist",
  txtUrbanistSemiBold40: "font-semibold font-urbanist",
  txtUrbanistSemiBold1501: "font-semibold font-urbanist",
  txtUrbanistSemiBold24: "font-semibold font-urbanist",
  txtUrbanistSemiBold48: "font-semibold font-urbanist",
  txtUrbanistSemiBold26: "font-semibold font-urbanist",
  txtUrbanistMedium24: "font-medium font-urbanist",
  txtUrbanistSemiBold30: "font-semibold font-urbanist",
  txtUrbanistSemiBold20: "font-semibold font-urbanist",
  txtUrbanistMedium20: "font-medium font-urbanist",
  txtUrbanistMedium18: "font-medium font-urbanist",
  txtUrbanistBold30: "font-bold font-urbanist",
  txtUrbanistBold40: "font-bold font-urbanist",
  txtUrbanistMedium18Gray700: "font-medium font-urbanist",
  txtUrbanistRegular24: "font-normal font-urbanist",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
