import { useState, useEffect } from "react";
import axios from 'axios'
function Catlist() {
  let [cats, setCats] = useState([]);
  console.log(cats)
  let [catsTemp, setCatsTemp] = useState();
  console.log(catsTemp)

//   useEffect(() => {
//     fetch("https://api.thecatapi.com/v1/breeds")
//       .then((response) => response.json())
//       .then((result) => setCats([result.data]));
// console.log(result)
//     }, []);
useEffect(()=>{
    console.log('useEffect')
    axios("https://api.thecatapi.com/v1/breeds")
    .then((result)=> setCats(result.data))
},[])
   
  
  return (
    <>
      <p>catslist</p>
      {cats.map((item)=>(
        <>
         <input type="text" onChange={(e)=>setCats(e.target.value)}/>
       <h2>{item.name}</h2> 
      
        </>
      ))}
    </>
  );
}
export default Catlist;
