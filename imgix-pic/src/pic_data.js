export let PIC_DATA = {
    pic_url: "https://jdawsons3.imgix.net/vapor-cat-1.jpeg",
    q: 65, 
    border_classic: {
        bg: "C9E5ED",
        border: "10,000000",
        pad: 35,
        pic_style: "bold"
    },
    border_bold: {
        bg: "C9E5ED",
        border: "10,000000",
        pad: "0"
    },
    border_ever: {
        bg: "C9E5ED",
        border: "10,FFFFFF",
        pad: "45"
    }
 
    
}

export default PIC_DATA;


/*
  const updateBorder = (word, borderSelected) => {
    if (word === "classic") {

     

      borderFunction(
      buildURL("https://jdawsons3.imgix.net/vapor-cat-1.jpeg", {
        q:  PIC_DATA.q,
        bg: PIC_DATA.bg,
        border: PIC_DATA.border,
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
        pad: "45"
      })
      )
    }
  };
  */