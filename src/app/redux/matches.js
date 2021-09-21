/* eslint-disable import/prefer-default-export */
const SET_MATCHES = 'matchStore/matches/GET_MATCHES';
const initialState = [];

export const updateState = (payload) => ({
  type: SET_MATCHES,
  payload,
});

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.payload;
    default:
      return state;
  }
};

export default matchesReducer;
