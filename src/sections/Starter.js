import WorkImage from "../assets/work.svg";
import "../styles/sections/Starter.scss";
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import WorkImgAnimation from "../utils/WorkImgAnimation"
import { headerAnimation,showfomRight } from "../utils/Animations";
import { motion } from "framer-motion";

const Starter = () => {
  return (
     <div className="main-container" >
         <Navbar />
        <div className="container">
           <motion.div className="content"
           variants={headerAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false , amount: 0.4  }}
           transition="transition"
           
           >
                <h1>
                    Grow Your Buisness!
                </h1>
                <p>
                    A professional web and mobile app development agency with over 100+
                    web and app developed.
                </p>
                <div className="button-container">
                   <Button content="Watch " icon={<GoPlay />} />  <br/>
                   <Button  color="pink" content="Request"  icon={<HiOutlineArrowNarrowRight />}
            />
                </div> 
            </motion.div>
            <motion.div className="image"variants={showfomRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false , amount: 0.8  }}
           transition="transition">
                           <WorkImgAnimation/>

            </motion.div> 
        </div>
    </div>
   
  )
}

export default Starter