import  { useState } from "react";
 import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";


const Navbar = () => {
  let variants = {};
  const isMobile = (window.innerWidth < 768) ||(window.innerWidth == 768) ; //Add the width you want to check for here (now 768px)
  if (isMobile) {
    variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: "-100%" },
    nothing: { opacity: 1 },
  } }
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const navbarToggler = () => {
        setToggleNavbar(!toggleNavbar);
      };
  return (
    <div className={`navbar ${toggleNavbar === true ? "active" : ""}`}>
        <div className="col">
            <BrandName />
            <div className="collapseble-button">
                {!toggleNavbar ? (<GiHamburgerMenu onClick={navbarToggler} />) :
                 ( <MdClose onClick={navbarToggler} />)
                }
            </div>
        </div>
        <motion.nav 
       
         animate={toggleNavbar ? "open" :  "closed"}
        initial="nothing"
      variants={variants}>
        <nav></nav>
        <div className="links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#testimonial">Testimonial</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
             
          </ul>
        </div>
        
      </motion.nav>
    </div>
  )
}

export default Navbar