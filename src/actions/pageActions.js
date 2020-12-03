export const setBenefitsPage = (payload) => {
  return {
    type: "SET_BENEFITS_PAGE",
    payload: {
      benefits: payload,
      contact: false,
      location: true,
      travel: true,
    },
  };
};

export const setContactPage = (payload) => {
  return {
    type: "SET_CONTACT_PAGE",
    payload: {
      benefits: true,
      contact: payload,
      location: true,
      travel: true,
    },
  };
};

export const setTravelPage = (payload) => {
  return {
    type: "SET_TRAVEL_PAGE",
    payload: {
      benefits: false,
      contact: false,
      location: false,
      travel: payload,
    },
  };
};

export const setLocationPage = (payload) => {
  return {
    type: "SET_LOCATION_PAGE",
    payload: {
      benefits: false,
      contact: false,
      location: payload,
      travel: true,
    },
  };
};
