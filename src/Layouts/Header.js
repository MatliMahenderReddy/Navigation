import React from "react";

const Header = () => {
  // Define a CSS style object with a green background
  const headerStyle = {
    backgroundColor: "green",
    padding: "10px", // Add padding for spacing
    color: "white", // Set text color to white for better visibility
  };

  return (
    <div style={headerStyle}>
      <center>Header</center>
    </div>
  );
};

export default Header;
