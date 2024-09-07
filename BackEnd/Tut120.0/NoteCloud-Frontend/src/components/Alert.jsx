import React, { useState } from "react";
import "../styles/alert.css"; //Refer to this CSS to know what eaxh color of the alert means

const Alert = ({ alertConfig }) => {
  return (
    <div className={`alert ${alertConfig.color}`} role="alert">
      <p>
        {alertConfig.msg}
        {alertConfig.displaySomeLink && <a target="_blank" rel="noopener noreferrer" href={alertConfig.linkURL}>Click</a>}
      </p>

    </div>
  );
};

export default Alert;
