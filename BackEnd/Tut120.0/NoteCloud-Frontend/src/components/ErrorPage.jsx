import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred or This page does not Exists</p>
    </div>
  );
};

export default ErrorPage;
