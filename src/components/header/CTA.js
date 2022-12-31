import { React, useState } from "react";
import NotFound from "./notFound";
function CTA() {
  let [img, setImg] = useState('https://google.com')

  const handleChange = () => {
    return setImg(!img)
  }
  

  return (
    <div className='cta'>
        <a onClick={() => handleChange()} className='btn'>
          {img ? 'Download CV' : <NotFound /> }
        </a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA