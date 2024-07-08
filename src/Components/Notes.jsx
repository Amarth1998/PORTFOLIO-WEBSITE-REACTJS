import React from 'react'
import "..//style/Notes.css"
const Notes = () => {
  return (
    <>
      <div id='noteshead' >Notes</div>



     <div id='notes_container'>


         <div className='notes_div' onClick={()=>{ window.open("https://github.com/Amarth1998/REACT-Notes-Free")}}> 
            <div className='notes_logo'><img  src="reactlogo.png" alt="" /></div>
            <div  className='notes_name'>REACT</div>            
        </div>

        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/JAVASCRIPT-Notes-Free")}}> 
            <div className='notes_logo'><img  src="jsslogo.png" alt="" /></div>
            <div  className='notes_name'>JavaScript</div>            
        </div>

        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/PYTHON-Notes-Free")}}> 
            <div className='notes_logo'><img src="pythonlogo.jpeg" alt="" /></div>
            <div  className='notes_name'>Python</div>            
        </div>

        <div className='notes_div'   onClick={()=>{ window.open("https://github.com/Amarth1998/DJANGO-Notes-Free")}}> 
            <div className='notes_logo'><img src="djangologo.png" alt="" /></div>
            <div  className='notes_name'>Django</div>            
        </div>

        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/CPlusPlus_Notes_Codes")}}> 
            <div className='notes_logo'><img src="cpp.png" alt="" /></div>
            <div  className='notes_name'>C++</div>            
        </div>

        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/STL-Notes-Free")}}> 
            <div className='notes_logo'><img src="stllogo.png" alt="" /></div>
            <div  className='notes_name'>STL</div>            
        </div>

        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/DSA-Notes-Free")}}> 
            <div className='notes_logo'><img src="dsalogo.png" alt="" /></div>
            <div  className='notes_name'>DSA</div>            
        </div>


        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/SQL-Notes-Free")}}> 
            <div className='notes_logo'><img src="sqllogo.jpeg" alt="" /></div>
            <div  className='notes_name'>SQL</div>            
        </div>
        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/HTML-Notes-Free")}}> 
            <div className='notes_logo'><img src="htmllogo.png" alt="" /></div>
            <div  className='notes_name'>HTML</div>            
        </div>

        <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/CSS-Notes-Free")}}> 
            <div className='notes_logo'><img src="csslogo.jpeg" alt="" /></div>
            <div  className='notes_name'>CSS</div>            
        </div>   <div className='notes_div'  onClick={()=>{ window.open("https://github.com/Amarth1998/AWS-Notes-Free")}}> 
            <div className='notes_logo'><img src="awslogos.jpeg" alt="" /></div>
            <div  className='notes_name'>AWS</div>            
        </div>


     </div>
    </>
  )
}

export default Notes
