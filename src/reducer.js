import { handleActions } from "redux-actions";

import { FETCH_DOG_BREEDS_SUCCESS, FETCH_DOG_PICTURE_SUCCESS } from "./actions";

const initialState = {
  dogBreeds: [],
  dogPicture: ""
};

export const reducer = handleActions(
  {
    [FETCH_DOG_BREEDS_SUCCESS]: (state, action) => ({
      ...state,
      dogBreeds: action.payload
    }),
    [FETCH_DOG_PICTURE_SUCCESS]: (state, action) => ({
      ...state,
      dogPicture: action.payload
    })
  },
  initialState
);
