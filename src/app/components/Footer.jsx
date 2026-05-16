import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-border border-l-transparent border-r-transparent text-foreground">
      <div className="container p-12 flex justify-between">
        <span>Yimesgen Amanuel</span>
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Yimesgen Amanuel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
