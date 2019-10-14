import { createAction } from "redux-actions";
// import Axios from "axios";

export const FETCH_DOG_BREEDS = "FETCH_DOG_BREEDS";
export const FETCH_DOG_BREEDS_SUCCESS = "FETCH_DOG_BREEDS_SUCCESS";
export const FETCH_DOG_PICTURE = "FETCH_DOG_PICTURE";
export const FETCH_DOG_PICTURE_SUCCESS = "FETCH_DOG_PICTURE_SUCCESS";

export const fetchDogBreedsSuccess = createAction(FETCH_DOG_BREEDS_SUCCESS);
export const fetchDogPictureSuccess = createAction(FETCH_DOG_PICTURE_SUCCESS);

// export const fetchDogBreeds = () => dispatch =>
//   Axios.get("https://dog.ceo/api/breeds/list/all").then(response => {
//     if (response.status === 200) {
//       dispatch(fetchDogBreedsSuccess(response.data.message));
//     }
//   });

export const fetchDogBreeds = createAction(FETCH_DOG_BREEDS);

// export const fetchDogPicture = breed => dispatch =>
//   Axios.get(`https://dog.ceo/api/breed/${breed}/images/random`).then(
//     response => {
//       if (response.status === 200) {
//         dispatch(fetchDogPictureSuccess(response.data.message));
//       }
//     }
//   );

export const fetchDogPicture = createAction(FETCH_DOG_PICTURE);
