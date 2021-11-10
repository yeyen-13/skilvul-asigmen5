import { useState, useEffect } from "react";
import axios from "axios";
function Catlist() {
  let [cats, setCats] = useState([]);
  console.log(cats);
  let [catsTemp, setCatsTemp] = useState();
  console.log(catsTemp);

  //   useEffect(() => {
  //     fetch("https://api.thecatapi.com/v1/breeds")
  //       .then((response) => response.json())
  //       .then((result) => setCats([result.data]));
  // console.log(result)
  //     }, []);
  let [input, setInput] = useState("");
  console.log(input);
  let handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    axios("https://api.thecatapi.com/v1/breeds").then((result) => {
      setCats(result.data);
      setCatsTemp(result.data);
    });
  }, []);

  useEffect(() => {
    const filterInput = catsTemp.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setCats(filterInput);
    console.log(filterInput);
  }, [input]);

  return (
    <>
      <input type="text" onChange={handleChange} value={input} />
      <div>
        {cats.map((item) => (
          <div>
            <div>
              <p>{item.name}</p>
              <img src={item.image?.url} width="150" />
            </div>
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Catlist;
