 import React from "react";

const Footer = () => {
  var d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>{`© ${d.getFullYear()} All Rights Reserved`}</p>
      </div>
    </div>
  );
};

export default Footer;
