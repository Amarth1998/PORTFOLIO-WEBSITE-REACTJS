import React from 'react'
import "../style/About.css"
import { PiStudent } from "react-icons/pi";
import { PiCertificateLight } from "react-icons/pi";
const About = () => {
  return (
    <>
    <div id="aboutme">
      About Me
    </div>

 <div id="about1">
  <div id="hello"> Who is Amarth?</div>  I'm Amarth , Full Stack Developer  With  years of experience in the industry, I specialize in building scalable web applications using modern technologies.
<br/>

I have a strong foundation in: <br />
Frontend Development: Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, and responsive design principles. <br />
Backend Development: Experienced in Node.js, Express.js, MongoDB, SQL databases. <br />
Full Stack Development: Ability to seamlessly integrate frontend and backend functionalities to deliver robust applications. <br />
UI/UX Design: Knowledgeable about creating intuitive interfaces that enhance user satisfaction.
<br /> <br />
<div id="hello"> Skills</div> 
<img src="skll.png" alt=""  style={{width:"100%"}}/>

</div>







<div id="about2">
  <div id="details">
    <div id="details1"><PiStudent /></div>
    <div id="details2">Eduction</div>
    <div id="details3">Bachelor of Engineering  | 2020</div>
    <div id="details4">Madhav Institute of Technology and Science, Gwalior, M.P.</div>
      </div>


      <div id="certi"> 
       
        <div id="certi1"><PiCertificateLight /></div>
        <div id="certi5">Certification</div>
        <div id="certi2">Python Certification  |   Google </div>
        <div id="certi3">Full stack web development course |  Cyborm Technology </div>
        <div id="certi4">Microsoft Excel  |  Coursera</div>
      </div>



</div>
 

           

<div id="certificate_img"> 
<div id="certificate_img1" > <img src="Cybrom_amarth_patel.jpg"  /> </div> 
<div  id="certificate_img2"><img src="certificate3.jpeg"  /></div>
</div>

      
    </>
  )
}

export default About
