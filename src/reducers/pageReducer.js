const initState = {
  benefits: false,
  contact: false,
  travel: true,
  location: false,
  selectPage: "travel",
};

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_BENEFITS_PAGE":
      return {
        ...state,
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };
    case "SET_CONTACT_PAGE":
      return {
        ...state,
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };
    case "SET_TRAVEL_PAGE":
      return {
        ...state,
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };
    case "SET_LOCATION_PAGE":
      return {
        ...state,
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };

    case "SET_SELECT_PAGE":
      return {
        ...state,
        selectPage: action.payload.selectPage,
      };

    default:
      return { ...state };
  }
};

export default pageReducer;
