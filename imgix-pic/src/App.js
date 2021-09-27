import Imgix from "react-imgix";
import { buildURL } from "react-imgix";
import React, { useState } from "react";
import PIC_DATA from './pic_data.js';

export default function App() {
  const [borderSelected, borderFunction] = useState(
    buildURL("https://jdawsons3.imgix.net/vapor-cat-1.jpeg", {
      q:  PIC_DATA.q,
      border: PIC_DATA.border
    })
  );

  const updateBorder = (word) => {
    if (word === "bold") {
      //borderFunction(borderSelected + "border=20,000000");
    }
  };

  return (
    <div className="App">
      {PIC_DATA.q}
      <h4>
        Here is an example on how imgix can be used for creating borders and
        cropping
      </h4>

      <Imgix src={borderSelected} width={300} height={300} />
      <button onClick={() => updateBorder("bold")}>Bold</button>
    </div>
  );
}
