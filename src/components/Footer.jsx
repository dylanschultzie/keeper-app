import React from "react";

function Footer() {
const year = new Date().getFullYear();

  return (
      <p>Copyright ⓒSchultzie {year}.</p>
  );
}

export default Footer;
