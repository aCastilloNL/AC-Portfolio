import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.scss";
import { spinner, tick } from "../assets/img";

export const ContactPg = () => {
  const [load, setLoad] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [msgVal, setMsgVal] = useState("");

  const waitForIt = (ms) => new Promise((res) => setTimeout(res, ms));

  const changeState = async (e) => {
    setLoad(true);
    await waitForIt(1500);
    emailjs.sendForm(
      "service_f7xta6t",
      "template_ujg2hkv",
      e.target,
      "user_1yaRpBq4ZdnGMb6AoejXw"
    );
    setLoad(false);
    setSuccess(true);
    await waitForIt(2000);
    window.alert(
      `Thank you for your message, ${name}. Your e-mail has been sent. I will respond to you as soon as possible.`
    );
    setSuccess(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    name.length === 0 || msgVal.length === 0
      ? window.alert(
          "Oops! Looks like you forgot to write the message! That's the most important part!"
        )
      : changeState(e);
  };

  return (
    <div className="contactPg">
      <h2 id="contactTtl">1st Contact</h2>
      <form onSubmit={sendEmail}>
        <fieldset>
          <label htmlFor="name"> [ Your name ] </label>
          <input
            type="text"
            name="from_name"
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label htmlFor="email"> [ Your e-Mail ] </label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            required
          />
          <label htmlFor="message"> [ Correspondence ] </label>
          <textarea
            placeholder="I'd love to hire you because..."
            name="message"
            onChange={(event) => setMsgVal(event.target.value)}
          />
        </fieldset>
        <button
          id="formButton"
          type="submit"
          value="Send"
          disabled={(load, success)}
        >
          {load ? (
            <img src={spinner} className="spin" alt="Loading spinner" />
          ) : success ? (
            <img src={tick} className="spin" alt ="Success checkmark" />
          ) : (
            "SEND"
          )}
        </button>
      </form>
    </div>
  );
};
