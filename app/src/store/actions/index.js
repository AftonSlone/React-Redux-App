import axios from "axios";

export const FETCH_SET_DATA_START = "FETCH_SET_DATA_START";
export const FETCH_SET_DATA_SUCCESS = "FETCH_SET_DATA_SUCCESS";
export const FETCH_SET_DATA_FAILURE = "FETCH_SET_DATA_FAILURE";
export const SET_CARD_DATA = "SET_CARD_DATA";

export const getSetData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SET_DATA_START });

    axios
      .get(`https://api.pokemontcg.io/v2/sets`)
      .then((res) => {
        dispatch({ type: FETCH_SET_DATA_SUCCESS, payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SET_DATA_FAILURE, payload: err.message });
      });
  };
};

export const setCardData = (setId) => {
  return (dispatch) => {
    axios
      .get(`https://api.pokemontcg.io/v2/cards?q=set.id:${setId}`)
      .then((res) => {
        dispatch({ type: SET_CARD_DATA, payload: res.data.data });
      })
      .catch((err) => {
        dispatch({ type: FETCH_SET_DATA_FAILURE, payload: err.message });
      });
  };
};
