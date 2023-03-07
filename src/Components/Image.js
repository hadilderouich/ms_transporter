import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


function Image(props) {
    const sliderImages = props.itemData
  return (
    <div className='Images'>
         <SimpleImageSlider
            showBullets={true}
            loop={true}
            autoPlay
            width={650}
            height={350}
            images={sliderImages}
            style={{ borderRadius: '20%'}} 
         />
    </div>
  )
}

export default Image
