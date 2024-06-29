import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="container_contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="https://www.gmail.com/"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
