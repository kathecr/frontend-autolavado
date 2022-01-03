import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center absolute inset-x-0 bottom-0 h-16">
      <span>©Katherine Castelblanco, 2021</span>
      <span>Contacto 👋 3022183843</span>
      <a href="www.linkedin.com/in/katherin-castelblanco" target="_blank">
        {" "}
        Linkedin{" "}
      </a>
    </footer>
  );
};

export default Footer;
