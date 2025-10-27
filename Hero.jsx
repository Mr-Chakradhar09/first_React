import React from 'react'
import swiggy from "../first_web_img/swiggy.webp"
import zomato from "../first_web_img/zomato.webp"
import kfc from "../first_web_img/kfc_png.webp"
const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <span className='title'>TASTE THE BEST KFC CHICKEN</span>
        <p>Kentucky Fried Chicken (KFC), founded by Harland Sanders in 1930, is
globally recognized fast-food chain renowned for its signature fried
chicken, which is seasoned with a secret blend Of 11 herbs and spices
developed by Sanders himself. Thé company's journey began with a
roadside restaurant in Corbin, Kentucky, during the Great Depression,
and it officially launched its franchising model in 1952, marking the
beginning of its rapid expansion across the United States. KFC' s
iconic brand identity, anchored by the image of Colonel Sanders and
the slogan "Finger Lickir€f Good," has remained a cornerstone of its
marketing strategy, contributing significantly to its widespread
recognition and enduring appeal.
</p>

<div className='btns'>
  <button className='btn1'>ORDER NOW</button>
  <button className='btn2'>KFC CHICKEN</button>
</div>
<div className='social'>
  <span className='social-1'> Also Available On </span>
  <div className='social-icon'>
    <img src={swiggy} alt="" /> 
    <img src={zomato} alt="" />
  </div>
</div>
      </div>
      <div className="right">
        <img src={kfc} alt="" />
      </div>
    </div>
  )
}

export default Hero