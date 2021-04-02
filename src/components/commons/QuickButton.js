import React from "react";

const QuickButton = ({ text, href }) => {
  return (
    <React.Fragment>
      <a href={href} alt={text}>
        <button>{text}</button>
      </a>
    </React.Fragment>
  );
};

export default QuickButton;
