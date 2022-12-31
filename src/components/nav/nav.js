import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBookAlt, BiMessageAdd } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
function Nav() {
  const [nav, setNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={() => setNav('#')} className={nav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setNav('#about')} className={nav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setNav('#experience')} className={nav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
        <a href="#services" onClick={() => setNav('#services')} className={nav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setNav('#contact')} className={nav === '#contact' ? 'active' : ''}><BiMessageAdd/></a>
    </nav>
  )
}

export default Nav