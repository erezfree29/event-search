/* eslint-disable import/prefer-default-export */
const SET_MATCHES = 'sertia/GET_SERIAA';
const initialState = [];

export const updateSeriaA = (payload) => ({
  type: SET_MATCHES,
  payload,
});

const seriaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MATCHES:
      return action.payload;
    default:
      return state;
  }
};

export default seriaReducer;
