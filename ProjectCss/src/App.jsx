import "./App.css";
import { FlashCardModle } from "./assets/FlashCardModle";
import { data } from "../data.js";
import { useState } from "react";

function App() {
  let OurData = ([OurData, setOurData] = useState(""));

  function getOurData() {
    data.map((item, MyKey) => {
      setOurData(item.suomi);
    });
    console.log(OurData);
  }
  return (
    <>
      <div>
        <h1>Welcome to css</h1>
        <div className="container">
          <FlashCardModle
            Word={"https://placehold.co/600x400"}
            title={"data[0].word"}
            description={"this is some test for this model"}
            isSuomi={"Finnsh"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
