import React, { useState } from "react";
import {FaEnvelope} from 'react-icons/fa'

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    window.open(
      `mailto:${'shivammpandey23@gmail.com'}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="contact">
        <div className="heading text-center">
          <h1 >Get In Touch</h1>
        </div>

        <div className="heading-message text-center">
              <p> <span><FaEnvelope color="rgb(122, 122, 122)" size="1.5rem" /> </span> Message me! if any Query</p>
        </div>

        <div className="form container">
          <div className="form-box row">
           
           <div className="input">
            <label htmlFor="contactName">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              value={name}
              size="45"
              id="contactName"
              name="contactName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input">
            <label htmlFor="contactEmail">
              Email <span className="required">*</span>
            </label>
            <input
              type="text"
              defaultValue=""
              value={email}
              size="45"
              id="contactEmail"
              name="contactEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <label>Subject</label>
            <input
              type="text"
              defaultValue=""
              value={subject}
              size="45"
              id="contactSubject"
              name="contactSubject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="input">
            <label>
              Message <span className="required">*</span>
            </label>
            <textarea
              cols="45"
              rows="1"
              value={message}  
              id="contactMessage"
              name="contactMessage"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="input text-center">
            <button onClick={submitForm} type="submit" className="submit">
              Submit
            </button>
            </div>
        </div>
        </div>

<aside className="aside">
          <div className="aside-con text-center">
            <h4><span>Address and Phone</span></h4>
            <p className="address">
              B-28 Ambedkar Colony 
              <br />
              Chattarpur
              <br />
              <br />
              New Delhi, Delhi , 110074
              <br />
              <span>+91 1234567890</span>
            </p>
          </div>
        </aside>    
    </section>
  );
};

export default Contact;