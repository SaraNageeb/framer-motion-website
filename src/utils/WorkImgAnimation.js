import "../styles/sections/Starter.scss";
import { motion } from "framer-motion";
import { showfomRight } from "../utils/Animations";
import { useRef } from "react";

const WorkImgAnimation = () => {
  const transition = { duration: 4 }
  const constraintsRef = useRef(null);


  return (
    <>
 
 <svg xmlns="http://www.w3.org/2000/svg" className="imgv"  preserveAspectRatio="none"  ref={constraintsRef} >
  
 <g id="Board_1_">
	<g id="Board">
		<path className="st0" d="M182.1,58h-52.4c-10.5,0-19,8.5-19,19v56.8c-0.7,0-1.3-0.1-2-0.2C71.9,129.8,45.2,96.8,49.1,60
			S85.9-3.5,122.7,0.4c30,3.2,54.1,25.9,59.1,55.6C181.9,56.7,182,57.3,182.1,58z"/>
		<path className="st1" d="M800.7,56h-671c-11.6,0-21,9.4-21,21v354c0,11.6,9.4,21,21,21h671c11.6,0,21-9.4,21-21V77
			C821.7,65.4,812.3,56,800.7,56z M819.7,431c0,10.5-8.5,19-19,19h-671c-10.5,0-19-8.5-19-19V77c0-10.5,8.5-19,19-19h671
			c10.5,0,19,8.5,19,19V431z"/>
		<path className="st1" d="M767.7,113.4h-605c-0.6,0-1-0.4-1-1s0.4-1,1-1h605c0.6,0,1,0.4,1,1S768.2,113.4,767.7,113.4z"/>
		<path className="st1" d="M333.7,409c-0.6,0-1-0.4-1-1V79c0-0.6,0.4-1,1-1s1,0.4,1,1v329C334.7,408.6,334.2,409,333.7,409z"/>
		<path className="st1" d="M484.7,409c-0.6,0-1-0.4-1-1V79c0-0.6,0.4-1,1-1s1,0.4,1,1v329C485.7,408.6,485.2,409,484.7,409z"/>
		<path className="st1" d="M635.7,409c-0.6,0-1-0.4-1-1V79c0-0.6,0.4-1,1-1s1,0.4,1,1v329C636.7,408.6,636.2,409,635.7,409z"/>
		<path className="st2" d="M276.7,97h-57c-2.2,0-4-1.8-4-4s1.8-4,4-4h57c2.2,0,4,1.8,4,4S278.9,97,276.7,97z"/>
		<path className="st2" d="M437.7,97h-57c-2.2,0-4-1.8-4-4s1.8-4,4-4h57c2.2,0,4,1.8,4,4S439.9,97,437.7,97z"/>
		<path className="st2" d="M588.7,97h-57c-2.2,0-4-1.8-4-4s1.8-4,4-4h57c2.2,0,4,1.8,4,4S590.9,97,588.7,97z"/>
		<path className="st2" d="M729.7,97h-57c-2.2,0-4-1.8-4-4s1.8-4,4-4h57c2.2,0,4,1.8,4,4S731.9,97,729.7,97z"/>
		<path className="st1" d="M739.5,579H1.2c-0.7,0-1.2-0.5-1.2-1.2s0.5-1.2,1.2-1.2l0,0h738.3c0.7,0,1.2,0.5,1.2,1.2S740.2,579,739.5,579
			L739.5,579z"/>
	</g>
</g>
<motion.g id="Squares_1_" 
animate={{scale: [1,1.2,1.3,1],}}
          >
	<g id="Squares">
		<motion.path animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{    delay:1 }}
      
  
             
          className="st3" d="M700.6,195.6h-36.5c-2.5,0-4.5-2-4.5-4.5V148c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C705.1,193.6,703.1,195.6,700.6,195.6z"/>
		<path className="st4" d="M765.6,207.6h-36.5c-2.5,0-4.5-2-4.5-4.5V160c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C770.1,205.6,768.1,207.6,765.6,207.6z"/>
		<path className="st4" d="M736.6,284.6h-36.5c-2.5,0-4.5-2-4.5-4.5V237c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C741.1,282.6,739.1,284.6,736.6,284.6z"/>
		<motion.path animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{    delay:1 }} className="st5" d="M612.6,268.6h-36.5c-2.5,0-4.5-2-4.5-4.5V221c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C617.1,266.6,615.1,268.6,612.6,268.6z"/>
		<path className="st5" d="M203.6,295.6h-36.5c-2.5,0-4.5-2-4.5-4.5V248c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C208.1,293.6,206.1,295.6,203.6,295.6z"/>
		<path className="st3" d="M559.6,195.6h-36.5c-2.5,0-4.5-2-4.5-4.5V148c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C564.1,193.6,562.1,195.6,559.6,195.6z"/>
		<path className="st3" d="M406.6,242.6h-36.5c-2.5,0-4.5-2-4.5-4.5V195c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C411.1,240.6,409.1,242.6,406.6,242.6z"/>
		<path className="st3" d="M288.6,339.6h-36.5c-2.5,0-4.5-2-4.5-4.5V292c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C293.1,337.6,291.1,339.6,288.6,339.6z"/>
		<motion.path animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
        }}
        transition={{    delay:1 }} className="st3" d="M236.6,216.6h-36.5c-2.5,0-4.5-2-4.5-4.5V169c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C241.1,214.6,239.1,216.6,236.6,216.6z"/>
		<path className="st4" d="M306.6,216.6h-36.5c-2.5,0-4.5-2-4.5-4.5V169c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C311.1,214.6,309.1,216.6,306.6,216.6z"/>
		<path className="st4" d="M388.6,352.6h-36.5c-2.5,0-4.5-2-4.5-4.5V305c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C393.1,350.6,391.1,352.6,388.6,352.6z"/>
		<path className="st4" d="M541.6,284.6h-36.5c-2.5,0-4.5-2-4.5-4.5V237c0-2.5,2-4.5,4.5-4.5h36.5c2.5,0,4.5,2,4.5,4.5v43.1
			C546.1,282.6,544.1,284.6,541.6,284.6z"/>
	</g>
</motion.g>
<motion.g id="Boy_1_" drag="x" dragConstraints={constraintsRef} >
	<g id="Boy">
		<path className="st6" d="M364.7,309c4.5,3.3,10.8,2.4,14.1-2.1c0.4-0.5,0.7-1,0.9-1.5l35.4,4.6l-8.1-16.7l-32.4-1.8
			c-5.1-2.2-11.1,0.3-13.2,5.4C359.6,301.2,361,306.2,364.7,309z"/>
		<path className="st3" d="M505.1,395.7c-16.7-0.2-32.9-5.1-46.9-14.2l-0.2-0.2V381l9.4-109.4c0.7-7.7,6.9-13.7,14.6-14.1
			c12.2-0.6,28.5,0.1,37.3,6.7c13.2,9.9,19.6,24.7,17.5,40.7c-4.4,33.2,0.6,78,1.2,83v0.4l-0.3,0.2
			C527.5,393.2,516.4,395.7,505.1,395.7z"/>
		
			<ellipse transform="matrix(0.3162 -0.9487 0.9487 0.3162 123.0923 615.1799)" className="st6" cx="488.3" cy="222.2" rx="24.6" ry="24.6"/>
		<path className="st7" d="M551.6,559l21.5-9.8l0,0l6.2,13.5l0,0l-35,16l0,0l0,0C540.8,571.2,544.1,562.4,551.6,559z"/>
		<polygon className="st6" points="572.2,553.4 561,558.5 536.1,517.9 552.5,510.4 		"/>
		<path className="st7" d="M462.2,563.8h23.6l0,0v14.9l0,0h-38.5l0,0l0,0C447.3,570.5,454,563.8,462.2,563.8L462.2,563.8z"/>
		<polygon className="st6" points="483.2,567.3 471,567.3 465.1,520 483.2,520 		"/>
		<path className="st7" d="M482.4,554.8h-11.7c-2.4,0-4.3-1.8-4.5-4.2L459.8,380c-0.2-2.5,1.7-4.6,4.2-4.8c0.3,0,0.5,0,0.8,0l67.7,7.2
			c2.3,0.2,4,2.1,4.1,4.4L538,462c0,0.4,0.1,0.8,0.2,1.2l27.8,72.1c0.9,2.3-0.3,4.9-2.6,5.8c0,0,0,0-0.1,0l-11.9,4.4
			c-2.1,0.8-4.5-0.1-5.6-2.2l-34-66.3c-0.2-0.4-0.3-0.7-0.4-1.1l-5.8-28.1c-0.4-1.9-2.2-3.1-4.1-2.7c-1.5,0.3-2.6,1.5-2.8,3
			l-11.8,102.7C486.7,553.1,484.7,554.8,482.4,554.8z"/>
		<path className="st6" d="M536.5,407.9c4.4-3.3,5.3-9.6,2-14.1c-0.4-0.5-0.8-0.9-1.2-1.3l14.4-32.7l-18.3,3.1l-10.9,30.6
			c-3.5,4.3-2.9,10.7,1.5,14.2C527.6,410.6,532.8,410.7,536.5,407.9z"/>
		<path className="st3" d="M442.8,318.1c-0.6,0-1.2,0-1.8-0.1l-55.8-7.7c-1.9-0.3-3.4-1.4-4.3-3.1c-0.1-0.3-0.2-0.5-0.3-0.8l0,0
			c-0.4-1.5-0.2-3.1,0.6-4.4l4.6-7.6c1-1.7,2.8-2.7,4.8-2.7l0,0l48.6,0.1l36.3-32.5c1.7-1.5,3.8-2.4,6.1-2.5
			c5.4-0.3,10,3.9,10.3,9.4c0.1,2.8-0.9,5.5-2.9,7.4l-36.2,40.3C450.3,316.5,446.6,318.1,442.8,318.1z"/>
		<path className="st3" d="M537.9,388.2c-1.4,0-2.7-0.6-3.7-1.6l-5.4-5.9c-1.2-1.3-1.6-3.1-1.1-4.8l12.3-41.5l-18.6-39.1
			c-0.9-1.8-1.1-3.9-0.6-5.9c1.2-4.7,5.9-7.6,10.6-6.5c2.4,0.6,4.5,2.2,5.7,4.4l25.3,41c2.1,3.4,2.4,7.6,0.7,11.2l-20.6,45.7
			c-0.7,1.5-2.1,2.6-3.8,2.9C538.4,388.1,538.1,388.2,537.9,388.2z"/>
		<path className="st7" d="M491.1,244c2.2-5.2,4.1-12.1-0.2-15.8c-2.5-2.1-6.1-2.1-9.4-2.4c-9.2-0.7-18.7-5-23.2-13.1s-2-20.1,6.5-23.7
			c5.7-2.5,12.3-0.8,18.3,0.9l18,5.1c5.4,1.5,11,3.2,14.8,7.2c6.1,6.4,5.7,17.2,0.8,24.6s-12.2,15.1-20.6,17.9L491.1,244z"/>
	</g>
</motion.g>
<motion.g id="Girl_1_"   drag="x"   dragConstraints={constraintsRef} >
	<g id="Girl">
		<polygon className="st8" points="184.4,566.3 196.7,566.3 202.5,519 184.4,519 		"/>
		<path className="st7" d="M220.3,577.6h-38.5l0,0v-14.9l0,0h23.6C213.6,562.7,220.3,569.4,220.3,577.6L220.3,577.6L220.3,577.6z"/>
		<polygon className="st8" points="100.3,557.4 112.2,560.6 130,516.4 112.5,511.7 		"/>
		<path className="st7" d="M132.1,577.6l-37.2-9.9l0,0l3.8-14.4l0,0l22.8,6.1C129.5,561.5,134.2,569.7,132.1,577.6L132.1,577.6
			L132.1,577.6z"/>
		<path className="st7" d="M200,557.3h-18.7c-2.4,0-4.5-1.9-4.7-4.3l-11.4-117.9c-0.2-2.1-2-3.6-4.1-3.4c-1.5,0.1-2.8,1.2-3.2,2.7
			l-33,110.2c-0.7,2.4-3.2,3.9-5.7,3.2l-17.4-4.4c-2.5-0.6-4.1-3.2-3.5-5.8l0,0c0.3-1.1,28.4-111,28.7-112.2
			c6.4-47,14-59.6,18.1-66.3c0.3-0.6,0.7-1.1,0.9-1.6c0.4-0.6,2.5-6.6,3.9-10.6c0.4-1.3,1.2-2.4,2.4-3c17.2-8.8,37.3-2.7,43.1-0.6
			c1,0.3,1.8,1,2.3,1.8c17.3,26.1,8.8,177.5,6.9,207.6C204.5,555.4,202.5,557.3,200,557.3z"/>
		<circle className="st8" cx="151.7" cy="234" r="24.6"/>
		<path className="st2" d="M149.1,351.8l-0.2-0.2c-0.3-0.3-33.1-32.4-28.8-62c1.8-12.7,12.1-20.8,29.7-23.4c13.4-2,26.2,6.2,30,19.1
			l17.4,59.5L149.1,351.8z"/>
		<path className="st2" d="M132.3,374.6L109,351.5c-3.2-3.2-4.6-7.9-3.5-12.4l11.3-45.9c1.4-5.6,7-8.9,12.5-7.6c0.2,0.1,0.4,0.1,0.7,0.2
			c5.4,1.7,8.4,7.4,6.8,12.8L124.9,339l19.2,20.6L132.3,374.6z"/>
		<path className="st8" d="M257.4,295.6c-2.3,5-8.3,7.2-13.3,4.9c-0.5-0.2-1.1-0.5-1.5-0.9l-31.1,16.1l1.4-13.7l27.6-17.1
			c3.5-4.4,9.9-5.1,14.2-1.6C258.2,286.3,259.4,291.3,257.4,295.6L257.4,295.6z"/>
		<path className="st2" d="M239.1,305.8l-30.3,13.1c-4.1,1.8-8.8,1.3-12.5-1.3L157.7,290c-4.6-3.3-5.7-9.8-2.4-14.4
			c0.1-0.2,0.3-0.4,0.4-0.5c3.6-4.3,10-5,14.4-1.6l33.1,26l26.3-10.2L239.1,305.8z"/>
		<path className="st8" d="M149,389.9c-5.5-0.5-9.6-5.5-9-11c0.1-0.6,0.2-1.2,0.3-1.7l-25.6-23.9l13.6-3.4l25.2,20.4
			c5.3,1.9,8,7.6,6.2,12.9C158,387.6,153.7,390.4,149,389.9L149,389.9z"/>
		<path className="st7" d="M155.8,241.9c3-3.8,8.7-4,12.9-6.5c5.5-3.3,7.7-10.6,5.9-16.7s-6.9-10.9-12.9-13.2s-12.5-2.3-18.8-1.2
			c-9.3,1.6-18.5,6-24.2,13.6s-7.1,18.7-2,26.6c2.4,3.7,6,6.7,7,10.9c1.2,5.6-2.7,11-6.9,14.8c-4.8,4.4-10.3,8.1-14.4,13.1
			s-7,11.8-5.1,18c1.6,5.2,6.3,9.1,11.4,11s10.7,2.2,16.1,2.3c5.3,0.1,10.9,0,15.4-2.9c4.8-3.1,7.3-8.9,7.5-14.5s-1.7-11.2-4.2-16.3
			c-1.5-3-3.3-6-4.3-9.2s-1.2-6.9,0.4-9.9c1.7-3.1,5.1-5,8.6-5.7c0.2,0,0.4-0.1,0.6-0.1c4.1-0.5,6.9-4.2,6.4-8.3
			c0-0.1,0-0.2-0.1-0.3C154.7,245.3,154.7,243.2,155.8,241.9z"/>
	</g>
</motion.g>
           
       
      </svg>




    </>
  )
}

export default WorkImgAnimation