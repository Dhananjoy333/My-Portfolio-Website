import React from 'react'
import "./scrollup.css"

const Scrollup = () => {
    window.addEventListener("scroll", function (){
        const scrollUp = document.querySelector(".scrollup");
        //when the scroll is higher than 560 view height, add scroll
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })
  return (
    <a href="#" className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scrollup