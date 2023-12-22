import { useState, useEffect } from "react";
import "../styles/Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import contacts from '../assets/contacts.jpg'

interface ModalProps {
  onClose: () => void;
}


export default function Contacts({onClose}:ModalProps) {
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [showAnim, setShowAnim] = useState<boolean>(false);


  function handleClose() {
    onClose();
  }

  useEffect(() => {
    if (showAnim) {
      const timerId = setTimeout(() => {
        handleAnimation();
        setIsAgree(!isAgree);
        handleClose()
      }, 3000);

      return () => clearTimeout(timerId);
    }
    // eslint-disable-next-line
  }, [showAnim, setIsAgree, isAgree]);

  function handleAnimation() {
    setFullName("");
    setPhone("");
    setEmail("");
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
    <div className="overflow">
      <div className="contactsBody">

        <p className="closeForm" onClick={handleClose}>&times;</p>
      <div className="contactsContent">
        <img src={contacts} alt="contactsJPG" className="contactsImage" />
        <form className="contactForm" onSubmit={handleSubmit}>
          <h2 className="contactTitle">Contact Us</h2>
          <h4>Fiil in the contact form and send request.</h4>
          <input
            className="formInput"
            type="text"
            placeholder="Your name"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            />
          <br />

          <input
            className="formInput"
            type="tel"
            name="phone"
            placeholder="Number of phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            />
          <br />

          <input
            type="email"
            className="formInput"
            name="message"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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
       
      </div>
            </div>
    </div>
  );
}
