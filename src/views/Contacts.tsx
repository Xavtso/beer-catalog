import { useState, useEffect, } from "react";
import "../styles/Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";
import Modal from "../components/Modal";

export default function Contacts() {
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [showAnim, setShowAnim] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  
  useEffect(() => {
    if (showAnim) {
      const timerId = setTimeout(() => {
        handleAnimation();
        setIsAgree(!isAgree);
        setShowModal(true);
      }, 3000);

      return () => clearTimeout(timerId);
    }
    // eslint-disable-next-line
  }, [showAnim,setIsAgree,isAgree]);

  function handleAnimation() {
    setFullName("");
    setPhone("");
    setMessage("");
    setShowAnim(!showAnim);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    handleAnimation();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsAgree(e.target.checked);
  }

  return (
    <div className="contactsBody">
      <h2 className="contactTitle">Contact Us</h2>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="fullname">
          Full Name:
        </label>
        <input
          className="formInput"
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <br />

        <label className="formLabel" htmlFor="phone">
          Phone:
        </label>
        <input
          className="formInput"
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />

        <label className="formLabel" htmlFor="message">
          Message:
        </label>
        <textarea
          className="formArea"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br />

        <label className={`checkLabel ${isAgree && "agreed"}`}>
          <input
            className="checkInput"
            type="checkbox"
            name="agreeToTerms"
            onChange={handleChange}
            required
          />
          I agree to the terms and policy
        </label>
        <br />

        <button
          className={`formButton ${!isAgree && "disabled"} ${
            showAnim && "sendAnim"
          }`}
          type="submit"
          disabled={!isAgree}
        >
          {showAnim ? <FontAwesomeIcon icon={faCheck} /> : "Send"}
        </button>
      </form>
      {showModal && createPortal(<Modal onClose={() => setShowModal(false)} />, document.body)}
    </div>
  );
}
