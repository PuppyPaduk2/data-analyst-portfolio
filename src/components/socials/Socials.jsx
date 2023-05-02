import React from "react";
import "./socials.css";
import { SiLinkedin, SiGithub, SiTwitter, SiInstagram } from "react-icons/si";

export const Socials = () => {
  return (
    <div className="socials-container">
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/john27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin />
      </a>

      <a
        className="github"
        href="https://github.com/L0velySweet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub />
      </a>

      <a
        className="twitter"
        href="https://www.twitter.com/john27_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiTwitter />
      </a>

      <a
        className="gram"
        href="http://www.instagram.com/john27"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram />
      </a>
    </div>
  );
};
