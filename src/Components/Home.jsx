import React from 'react'
import { Link } from 'react-router-dom'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../style/Home.css";

const Home = () => {
  return (
    <> 

    <div id='mainContainer'>

      <div id='firstdiv'> <img id='pp' src="amarthpic.jpg" alt="profilepic" width={"400px"} />  </div>
     
       
       <div id="seconddiv" >  
                 <div id='second_div_a'>Hello i am</div>
                 <div id='second_div_b'>Amarth Patel</div>
                 <div id='second_div_c'>FULL STACK DEVELOPER</div>

                 <div id='buttonContainer'>
                  <div > <a  id='btn1_a' href="public\amarthpatel_resume.pdf" download>Download CV </a></div>
                  <div  > <Link id='btn1_b' to="Contact">Contact me</Link></div>
                 </div>

                 <div id='mediaicon'> 
                  <div><a href="#" > <CiLinkedin  onClick={()=>{ window.open("https://www.linkedin.com/in/amarth-patel-58712b185/")}} style={{fontSize:"40px",color:"black",marginRight:"10px" }} /></a>  </div> 
                  <div> <a href="#" ><FaGithub  onClick={()=>{ window.open("https://github.com/Amarth1998")}} style={{fontSize:"38px" ,color:"black"}}/></a></div>

                 </div>

       </div>

    </div>
        
      

        
      
    </>
  )
}

export default Home
