import React, { useState } from "react";
import PropTypes from "prop-types";


const Button = ({ children, className = "", leftIcon, rightIcon }) => {
  const [artObjects] = useState([]);

  return (
    <>
      <button className={className}>
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
      </button>
      {artObjects.length > 0 && (
        <ul>
          {artObjects.map((artObject) => (
            <li key={artObject.id}>{artObject.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = { className: "" };
export default Button;
