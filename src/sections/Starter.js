import WorkImage from "../assets/work.svg";
import "../styles/sections/Starter.scss";
import { GoPlay } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Button from "../components/Button";
import Navbar from "../components/Navbar";


const Starter = () => {
  return (
     <div className="main-container" >
         <Navbar />
        <div className="container">
           <div className="content">
                <h1>
                    We Provide Solutions to Help You to Build or Grow Your Buisness!
                </h1>
                <p>
                    A professional web and mobile app development agency with over 100+
                    web and app developed. We provide a high- quality service in web and
                    mobile app development as well as in design.
                </p>
                <div className="button-container">
                   <Button content="Watch Video" icon={<GoPlay />} />
                   <Button  color="pink" content="Request Quote"  icon={<HiOutlineArrowNarrowRight />}
            />
                </div> 
            </div> 
            <div className="image">
                <img src={WorkImage} alt="People working" />
            </div> 
        </div>
    </div>
   
  )
}

export default Starter