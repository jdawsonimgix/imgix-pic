import Imgix from "react-imgix";
import { buildURL } from "react-imgix";
import React, { useState } from "react";
import PIC_DATA from './pic_data.js';

export default function App() {

const [borderClassic, borderClassicFunction] = useState(
    buildURL(PIC_DATA.pic_url, {
      q:  PIC_DATA.q,
      bg: PIC_DATA.border_classic.bg,
      border: PIC_DATA.border_classic.border,
      pad: PIC_DATA.border_classic.pad
    })
  );

  const [borderBold, borderBoldFunction] = useState(
    buildURL(PIC_DATA.pic_url, {
      q:  PIC_DATA.q,
      bg: PIC_DATA.border_bold.bg,
      border: PIC_DATA.border_bold.border,
      pad: PIC_DATA.border_bold.pad
    })
  );


  return (
    <div className="App">
      <h4>
        Here is an example on how imgix can be used for creating borders and
        cropping
      </h4>

      <div class="row">
         <div class="column">
           <Imgix src={borderClassic} width={300} height={300}/>
           <div class="column" >Classic</div>
         </div>
          <div class="column">
          <Imgix src={borderBold} width={300} height={300} />
          <div class="column">Bold</div>
        </div>
          <div class="column">
          <Imgix src={borderBold} width={300} height={300} />
          <div class="column">Everclear (pending)</div>
      </div>
  </div>

      {/* <Imgix src={borderClassic} width={300} height={300}/>
      <Imgix src={borderBold} width={300} height={300} /> */}

   
    </div>
  );
}

