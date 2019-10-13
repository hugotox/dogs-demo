import { connect } from "react-redux";
import App from "./App";
import { fetchDogBreeds, fetchDogPicture } from "./actions";

const mapStateToProps = state => {
  return {
    dogBreeds: state.dogBreeds,
    dogPicture: state.dogPicture
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      dispatch(fetchDogBreeds());
    },
    fetchDogPicture: breed => {
      dispatch(fetchDogPicture(breed));
    }
  };
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
