import React from "react";

import { motion } from "framer-motion";

const SelectNav = ({ select }) => {
  return (
    <motion.svg
      transition={{ duration: 0.55 }}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      width="111"
      height="31"
      viewBox="0 0 111 31"
      fill="none"
    >
      <motion.path
        d="M110.664 15.7964C104.322 26.2022 75.4169 41.6622 10.5298 20.256C-18.5092 8.85923 16.5379 15.7964 66.605 3.40858C106.659 -6.50169 112.667 7.53786 110.664 15.7964Z"
        fill="#BF93C2"
      />
    </motion.svg>
  );
};

export default SelectNav;
