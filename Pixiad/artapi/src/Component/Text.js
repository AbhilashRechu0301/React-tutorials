import React from "react";

const variantClasses = {
  h1: "font-medium md:text-5xl sm:text-[42px] text-[56px]",
  h2: "font-medium md:text-3xl sm:text-[28px] text-[32px]",
  h3: "font-medium text-2xl md:text-[22px] sm:text-xl",
  h4: "font-medium text-lg",
  h5: "font-medium text-base",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default Text;
