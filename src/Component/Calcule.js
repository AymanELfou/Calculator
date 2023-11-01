import React, { useState } from 'react';
import './clc.css';

export default function Calcu() {
  // The UseState to chenge the value of input
  const [Exp,setExp] = useState('')


  //Clear Function to Delete the content
  const Clear = () =>{
    setExp('')
  } 

  //Handling Error and evaluating the number 
  const resultat = () =>{
    try{
      let v=Exp;
      setExp(eval(v));
      
    }
    catch(error){
      setExp('Invalid expression')
    }
  }

  //Function: Adding the numbers to the input 
  const TapperC = (e) =>{
    let oldValue=Exp;
    let newValue=oldValue+e.target.value
    setExp(newValue)
  }


  const deleteLastCharacter = () => {
    setExp(Exp.slice(0, -1));
  };



  return (
    <div className='calculator'>
        <div className='content'>
          <input type="text" value={Exp} placeholder='0'  id="inputBox"/>
          <div>
            <input type="button" onClick={Clear} style={{background: "#616161",color: "#a5a5a5"}} value="AC" />
            <input type="button" onClick={deleteLastCharacter} style={{background: "#616161",color: "#a5a5a5"}} value="DE" />
            <input type="button" onClick={(e) => TapperC(e)} className='main' value="%" />
            <input type="button" onClick={(e) => TapperC(e)} className='main' value="/" />
          </div>

          <div>
            <input type="button" onClick={(e) => TapperC(e)} value="7" />
            <input type="button" onClick={(e) => TapperC(e)} value="8" />
            <input type="button" onClick={(e) => TapperC(e)} value="9" />
            <input type="button" onClick={(e) => TapperC(e)} className='main' value="*" />
          </div>

          <div>
            <input type="button" onClick={(e) => TapperC(e)} value="4" />
            <input type="button" onClick={(e) => TapperC(e)} value="5" />
            <input type="button" onClick={(e) => TapperC(e)} value="6" />
            <input type="button" onClick={(e) => TapperC(e)} className='main' value="-" />
          </div>

          <div>
            <input type="button" onClick={(e) => TapperC(e)} value="1" />
            <input type="button" onClick={(e) => TapperC(e)} value="2" />
            <input type="button" onClick={(e) => TapperC(e)} value="3" />
            <input type="button" onClick={(e) => TapperC(e)} value="+" />
          </div>


          <div>
            <input type="button" onClick={(e) => TapperC(e)} value="0" />
            <input type="button" onClick={(e) => TapperC(e)} value="." />

            <input type="button" style={{"width": "144px",
            "color": "#fff",
            "background": "#1991ff",
            "font-weight": "700"}} value="=" onClick={resultat}/>
          </div>     
        </div>
    </div>
  )
}
