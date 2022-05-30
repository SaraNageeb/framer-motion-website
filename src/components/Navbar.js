import  { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";


const Navbar = () => {
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
        <nav>
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
            <li>
              <Button content="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar