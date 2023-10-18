const isMobile = () => {
  return window.innerWidth <= 1000;
};

export const fadeInRightVariant = {
  hidden: {
    x: isMobile() ? 0 : 5,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: isMobile() ? "" : "tween",
      duration: 1,
    },
  },
};

export const fadeInLeftVariant = {
  hidden: {
    x: isMobile() ? 0 : -5,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: isMobile() ? "" : "tween",
      duration: 1,
    },
  },
};
