import {
  FETCH_SET_DATA_START,
  FETCH_SET_DATA_SUCCESS,
  FETCH_SET_DATA_FAILURE,
  SET_CARD_DATA,
} from "../actions";

const initialState = {
  isLoading: false,
  cardData: null,
  setData: null,
  error: "",
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SET_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_SET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        setData: action.payload,
      };
    case FETCH_SET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_CARD_DATA:
      return {
        ...state,
        isLoading: false,
        cardData: action.payload,
      };
    default:
      return state;
  }
};
