import "./style.css"
import { data } from "./data";
import Card from "./component/card";
import Button from "./component/Example";
import { useState } from "react";
import { example } from "./data";
function App() {
   const [selectedbtn , setSelectedbtn] = useState()
   function clickHandaler(selectedbtn){
      setSelectedbtn(selectedbtn)
      // console.log(selectedbutton)
   }
 return(
   <div className="container">
      <h2> Core Concept!</h2>

      <section id="core_concept">
         <ul>
            {data.map((item) => (<Card {...item} />))}
         </ul>
      </section>
      <section id="example">
         <menu>
            <Button isSelected={selectedbtn === "js" ? "active" : ""} onClick={() => clickHandaler("js")}>js</Button>
            <Button isSelected={selectedbtn === "react" ? "active" : ""} onClick={() => clickHandaler("react")}>react</Button>
            <Button isSelected={selectedbtn === "laravel" ? "active" : ""} onClick={() => clickHandaler("laravel")}>laravel</Button>
            <Button isSelected={selectedbtn === "php" ? "active" : ""} onClick={() => clickHandaler("php")}>php</Button>
         </menu>
        
      </section>
     {!selectedbtn && <p>please select a topic!</p>} 
     {
      selectedbtn &&  <div className="selectdtopic">
      <h3>{example[selectedbtn].title}</h3>
      <hr />
      <h6>{example[selectedbtn].description}</h6>
      <p>{example[selectedbtn].code}</p>
      </div>
     }
      
   </div>
 )
}
export default App;