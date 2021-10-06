/* eslint-disable import/prefer-default-export */
const SET_MATCHES = 'premier/GET_PREMIER';
const initialState = [];

export const updatePremier = (payload) => ({
  type: SET_MATCHES,
  payload,
});

const premierReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.payload;
    default:
      return state;
  }
};

export default premierReducer;
