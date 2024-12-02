import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_v5srb6r",
      "template_41h27xl",
      form.current,
      "YbU98O7LZ-AKpJV8k"
    );
    e.target.reset();
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">I'd Love to Hear from You</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Reach Out</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="contact__card-icon bx bx-mail-send"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                saswatseth.work@gmail.com
              </span>
              <a
                href="mailto:saswatseth.work@gmail.com"
                className="contact__button"
              >
                Send Email{" "}
                <i className="contact__button-icon bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="contact__card-icon bx bxl-linkedin"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">Saswat Seth</span>
              <a
                href="https://www.linkedin.com/in/saswat-seth-0a782223b/"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Send Message{" "}
                <i className="contact__button-icon bx bx-right-arrow-alt"></i>
              </a>
            </div>

            <div className="contact__card">
              <FontAwesomeIcon className="contact__card-icon" icon={faSkype} />
              <h3 className="contact__card-title">Skype</h3>
              <span className="contact__card-data">
                saswatseth.work@gmail.com
              </span>
              <span className="contact__card-data">
                live:.cid.4bbb301e8e36333d
              </span>
              <a
                href="https://join.skype.com/invite/r9YkKVjdA3Jr"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Send Message{" "}
                <i className="contact__button-icon bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Submit Your Inquiry</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Message"
              ></textarea>
            </div>
            <button href="#contact" className="button button--flex">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
