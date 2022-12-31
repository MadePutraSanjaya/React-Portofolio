import React from 'react'
import Header from "./header/header"
import Nav from "./nav/nav"
import About from "./about/about"
import Exp from "./experience/exp"
import Services from "./services/service"
import Portofolio from "./portofolio/portofolio"
import Contact from "./contact/contact"
import Footer from "./footer/footer"

function index() {
  return (
    <div className="text-light">
      <Header />
      <Nav />
      <About />
      <Exp />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default index