export const animLocation = (delay) => {
  return {
    hidden: {
      y: "100%",
      transition: {
        duration: delay,
        ease: "easeOut",
      },
    },
    show: {
      y: "0%",
      transition: {
        duration: delay,
        ease: "easeOut",
      },
    },
  };
};

export const animBenefits = (delay) => {
  return {
    hidden: {
      x: "100%",
      transition: {
        duration: delay,
        ease: "easeOut",
      },
    },
    show: {
      x: "0%",
      transition: {
        duration: delay,
        ease: "easeOut",
      },
    },
  };
};

export const animContact = (delay) => {
  return {
    hidden: {
      x: "-100%",
      transition: {
        duration: delay,
        ease: "easeOut",
      },
    },
    show: {
      x: "0%",
      transition: {
        duration: delay,
        ease: "easeOut",
      },
    },
  };
};

export const staggerPage = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
  exit: {
    opacity: 1,
  },
};

export const swipeImages = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};
