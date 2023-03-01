import { React, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail as EmailIcon } from "react-icons/md";
import { SiWhatsapp as WhatsappIcon } from "react-icons/si";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xfsu0od",
        "template_h7v4nhm",
        form.current,
        "j30tbPz0EBwUlYHZP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div data-aos="zoom-in-up">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <EmailIcon className="contact__option-icon" />
              <h4>Email</h4>
              <h5>szpatrichard@proton.me</h5>
              <a href="mailto:szpatrichard@proton.me">Send me an email</a>
            </article>

            <article className="contact__option">
              <WhatsappIcon className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5></h5>
              <a href="https://wa.link/v9tf0l" target="_blank">
                Send me a message
              </a>
            </article>
          </div>

          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              tabIndex="1"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              tabIndex="2"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              tabIndex="3"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary" tabIndex="4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
