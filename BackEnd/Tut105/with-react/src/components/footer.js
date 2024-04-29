import React from 'react';
import "./footer.css";

const Footer = (props) => {
    return (
        <footer className="footer">
            <p>{props.logoText}</p>
            <p>##I am Footer##</p>
        </footer>
    );
};

export default Footer;

