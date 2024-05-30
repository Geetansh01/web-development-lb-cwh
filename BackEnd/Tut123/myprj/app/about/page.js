import React from "react";
import Script from "next/script";

const page = () => {
  return (
    <>
      <div>I am Geetansh</div>

      <Script>
        {`
        alert("Welcome to About Page");
        console.log("I am on the browser console");
        `}
      </Script>
    </>
  );
};

export default page;

export const metadata = {
  title: "MyApp - About Us",
  description: "About Geetansh on this page",
};
