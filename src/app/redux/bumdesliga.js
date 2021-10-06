/* eslint-disable import/prefer-default-export */
const SET_MATCHES = 'bundesliga/GET_BUNDESLIGA';
const initialState = [];

export const updateBLiga = (payload) => ({
  type: SET_MATCHES,
  payload,
});

const bundesLigaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.payload;
    default:
      return state;
  }
};

export default bundesLigaReducer;
