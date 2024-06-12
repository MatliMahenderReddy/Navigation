import React from "react";

const Footer = () => {
  // Define a CSS style object for the footer
  const footerStyle = {
    backgroundColor: "green",
    padding: "10px",
    color: "white",
    position: "absolute",
    bottom: 0, // Position at the bottom
    width: "100%", // Occupy the full width of the container
  };

  return (
    <div style={footerStyle}>
     <center> Footer</center>
    </div>
  );
};

export default Footer;
