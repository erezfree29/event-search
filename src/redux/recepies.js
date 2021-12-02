const GET_RECEPIES = 'FOOD/GET_RECEPIES';
const initialState = [];

export const updateRecepies = (payload) => ({
  type: GET_RECEPIES,
  payload,
});

const recepiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECEPIES:
      return action.payload;
    default:
      return state;
  }
};

export default recepiesReducer;
