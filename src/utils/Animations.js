export const headerAnimation = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 1, opacity: 1 },
    transition: {delay: 0.2, type: "tween" },
  };
  
  export const imageAnimation = {
    hidden: { pathLength: 0  },
    show: {pathLength: 1 },
    transition: { duration: 4, yoyo: Infinity, ease: "easeInOut" },
  };
  
  export const showfomRight = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 1, opacity: 1 },
    transition: { type: "tween" },
  };