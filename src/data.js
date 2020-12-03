import routeIcon from "./icons/route-solid.svg";
import debIcon from "./icons/bed-solid.svg";
import planeIcon from "./icons/plane-departure-solid.svg";

const data = () => {
  return [
    {
      icon: routeIcon,
      title: "Travel",
      description: "Travel in over 250 countries with no effort.",
      alt: "travel",
    },
    {
      icon: debIcon,
      title: "Hotel",
      description: "Hotels located near popular areas.",
      alt: "hotel",
    },
    {
      icon: planeIcon,
      title: "Fly",
      description: "Flight included in every purchased trip.",
      alt: "fly",
    },
  ];
};

export default data;
