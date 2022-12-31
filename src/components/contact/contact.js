import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md';
import { AiOutlineInstagram } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from 'emailjs-com';
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pd9pzjf', 'template_5hbmogi', form.current, 'zuBynHZamUUqjsbah')
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Let's Talk</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-opt">
          <article className="contact-art">
          <MdOutlineMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>madeputra.6166@gmail.com</h5>
            <a href="mailto:madeputra.6166@gmail.com" target="_blank">Send a Message</a>
          </article>

          <article className="contact-art">
          <RiMessengerLine className='contact-icon'/>
            <h4>Messanger</h4>
            <h5>Putra Sanjaya</h5>
            <a href="https://www.facebook.com/made.sanjaya.52035/">Send a Message</a>
          </article>

          <article className="contact-art">
          <AiOutlineInstagram className='contact-icon'/>
            <h4>Instagram</h4>
            <h5>mdsanjaya._</h5>
            <a href="https://instagram.com/mdsanjaya._">Send a Message</a>
          </article>
        </div>
        {/* end of contact person */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' id="" required />
          <input type="email" name="email" placeholder='Your Email' id="" required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact