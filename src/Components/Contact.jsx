import React from 'react'
import "../style/Contact.css"
// import { FaRegAddressBook } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pa2bugs', 'template_m5rtnz1', form.current, {
        publicKey: 'D5SDDKOEPG2rcgR-l',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          alert('Message Sent Successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>

     <div id='contact_heading'>Contact</div>
      
         <div id='contact_container'>


          <div id='social_media'> 
          <div><BsFillTelephoneForwardFill />  8827079303 </div>
          <div><MdMarkEmailRead /> amarthpatel.ap@gmail.com</div>
              
              <div> < IoLocationOutline /> M.P. Nagar ,Bhopal,Madhya Pradesh</div>

              <div id='contact_icon'> <CiLinkedin onClick={()=>{ window.open("https://www.linkedin.com/in/amarth-patel-58712b185/")}}  />   <FaGithub  onClick={()=>{ window.open("https://github.com/Amarth1998")}} />  <FaFacebookSquare  onClick={()=>{ window.open("https://www.facebook.com/amarth.patel.5?mibextid=ZbWKwL")}} /> 
      < FaInstagramSquare  onClick={()=>{ window.open("https://www.instagram.com/a_4_amarth?igsh=MWtwazVnY3k3bG9wYw==")}} /> < FaSquareXTwitter  onClick={()=>{ window.open("https://x.com/amarth_patel?t=58dMb2-7Dnd_KFhZJgGB2Q&s=09")}} /> </div>
             
             </div>


          <div id='contact_form'>  

            <div id='form_container'> 
            <div id='contact_form_heading'>Send me a mail </div>
          <form ref={form} onSubmit={sendEmail}>
  
  <input type="text" id="name"  name="to_name" placeholder="Your name..."/>
  <input type="text" id="email" name="from__name" placeholder="Your email..."/>
  <textarea name="message" placeholder='Type message ...' />

  <input type="submit" value="Submit"/>
</form>
</div>

          </div>



         </div>

<div id='mapp'> 

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14664.932156152203!2d77.42329469425243!3d23.23460543194365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4269deb07df9%3A0xfee61a854a2e5374!2sMaharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1720421647985!5m2!1sen!2sin" style={{width:"100%" ,height:"400px"}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

    </>
  )
}

export default Contact
