import * as React from "react";
import { useState } from "react";
// Animate
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { swipeImages } from "../animations";
// Images
import swipe_1 from "../img/swipe_1.jpg";
import swipe_2 from "../img/swipe_2.jpg";
import swipe_3 from "../img/swiper_3.jpg";
// Style
import styled from "styled-components";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const images = [swipe_1, swipe_2, swipe_3];

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const SwipeGallery = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <Img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={swipeImages}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <ContainerArrow className="next" onClick={() => paginate(1)}>
        <FontAwesomeIcon size="4x" icon={faArrowCircleRight} />
      </ContainerArrow>
      <ContainerArrow className="prev" onClick={() => paginate(-1)}>
        <FontAwesomeIcon size="4x" icon={faArrowCircleLeft} />
      </ContainerArrow>
    </>
  );
};

export default SwipeGallery;

const Img = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const ContainerArrow = styled.div`
  top: 50%;
  position: absolute;
  user-select: none;
  color: grey;
  cursor: pointer;
  z-index: 2;

  &.next {
    right: 10px;
  }

  &.prev {
    left: 10px;
  }

  @media (max-width: 650px) {
    top: 75%;
    color: #333;
  }
`;
