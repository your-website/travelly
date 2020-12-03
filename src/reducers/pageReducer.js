const initState = {
  benefits: true,
  contact: true,
  travel: true,
  location: true,
};

const pageReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_BENEFITS_PAGE":
      return {
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };
    case "SET_CONTACT_PAGE":
      return {
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };
    case "SET_TRAVEL_PAGE":
      return {
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };
    case "SET_LOCATION_PAGE":
      return {
        benefits: action.payload.benefits,
        contact: action.payload.contact,
        location: action.payload.location,
        travel: action.payload.travel,
      };
    default:
      return { ...state };
  }
};

export default pageReducer;
