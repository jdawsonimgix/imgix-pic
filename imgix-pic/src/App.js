import Imgix from "react-imgix";
import { buildURL } from "react-imgix";
import React, { useState } from "react";
import PIC_DATA from './pic_data.js';

export default function App() {
  const [borderSelected, borderFunction] = useState(
    buildURL("https://jdawsons3.imgix.net/vapor-cat-1.jpeg", {
      q:  PIC_DATA.q,
      bg: PIC_DATA.bg,
      border: PIC_DATA.border,
      pad: PIC_DATA.pad
    })
  );

  /*
    "q": "65", 
    "bg": "C9E5ED",
    "border": "10,000000",
    "pad": "35",
  */

  const updateBorder = (word) => {
    if (word === "classic") {
      borderFunction(
      buildURL("https://jdawsons3.imgix.net/vapor-cat-1.jpeg", {
        q:  PIC_DATA.q,
        bg: "C9E5ED",
        border: "10,000000",
        pad: "35"
      })
      )
    }

    if (word === "bold") {
      borderFunction(
      buildURL("https://jdawsons3.imgix.net/vapor-cat-1.jpeg", {
        q:  PIC_DATA.q,
        bg: "C9E5ED",
        border: "10,000000",
        pad: "0"
      })
      )
    }

    if (word === "ever") {
      borderFunction(
      buildURL("https://jdawsons3.imgix.net/vapor-cat-1.jpeg", {
        q:  PIC_DATA.q,
        bg: "C9E5ED",
        border: "10,FFFFFF",
        pad: "65"
      })
      )
    }


  };

  return (
    <div className="App">
      <h4>
        Here is an example on how imgix can be used for creating borders and
        cropping
      </h4>

      <Imgix src={borderSelected} width={300} height={300} />
      <button onClick={() => updateBorder("classic")}>Classic</button>
      <button onClick={() => updateBorder("bold")}>Bold</button>
      <button onClick={() => updateBorder("ever")}>Ever</button>
    </div>
  );
}
