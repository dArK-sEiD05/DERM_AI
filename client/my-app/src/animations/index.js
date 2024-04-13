export const buttonClick={
    whileTap:{scale:0.95}
}
export const fadeInOut={
    initial:{opacity:-1},
    animate:{opacity:2},
    exit:{opacity:-1},
}

export const slideTop = {
initial: { opacity: 0, y: 30 },
animate: { opacity: 1, y: 0 },
exit: { opacity: 0, y: 30 },
};

export const slideIn = {
initial: { opacity: 0, x: 30 },
animate: { opacity: 1, x: 0 },
exit: { opacity: 0, x: 30 },
};
  
export const staggerFadeInOut = (i) => {
return {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1.5, y: 0 },
    exit: { opacity: 1, y: 50 },
    transition: { duration: 0.3, delay: i * 0.15 },
    key: { i },
};
};
export const whileHov = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.3 },
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
    whileTap: { scale: 0.95 },
  };
  ;