import React from "react";
import { useRef as UseRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
const Contact = () => {
  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_nlfy1bt",
      "template_vanpjnh",
      form.current,
      "f1OFDMUtpjQWm3lwD"
    );

    e.target.reset();
  };
  return (
    <div className="contact__css">
      <div className="img"></div>
      <div className="contact__details">
        <form className="form__css" ref={form} onSubmit={sendEmail}>
          <h3>Contact Me</h3>
          <input className="inputarea" type="text" placeholder="Your name" />
          <input
            className="inputarea"
            type="email"
            name=""
            id=""
            placeholder="email"
          />
          <textarea
            className="textarea__css"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your message"
          ></textarea>
          <button className="button__css" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
