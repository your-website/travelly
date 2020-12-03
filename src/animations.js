export const animLocation = {
  hidden: {
    y: "100%",
    transition: {
      duration: 1.25,
      ease: "easeOut",
    },
  },
  show: {
    y: "0%",
    transition: {
      duration: 1.25,
      ease: "easeOut",
    },
  },
};

export const animBenefits = {
  hidden: {
    x: "100%",
    transition: {
      duration: 1.25,
      ease: "easeOut",
    },
  },
  show: {
    x: "0%",
    transition: {
      duration: 1.25,
      ease: "easeOut",
    },
  },
};

export const animContact = {
  hidden: {
    x: "-100%",
    transition: {
      duration: 1.25,
      ease: "easeOut",
    },
  },
  show: {
    x: "0%",
    transition: {
      duration: 1.25,
      ease: "easeOut",
    },
  },
};

export const staggerPage = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 1,
  },
};
