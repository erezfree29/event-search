/* eslint-disable import/prefer-default-export */
const SET_MATCHES = 'laliga/GET_LALIGA';
const initialState = [];

export const updateLaLiga = (payload) => ({
  type: SET_MATCHES,
  payload,
});

const laLigaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.payload;
    default:
      return state;
  }
};

export default laLigaReducer;
