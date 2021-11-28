import * as types from "../constants";

const DEFAULT_STATE = {
  listItem: [],
  isFetching: false,
  isFetched: false,
  error: false,
  errorMessage: '',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_ITEM_REQUEST:
    case types.POST_ITEM_REQUEST:
    case types.DELETE_ITEM_REQUEST:
    case types.PUT_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        listItem: action.payload.listItem,
      };
    case types.POST_ITEM_SUCCESS:
    case types.DELETE_ITEM_SUCCESS:
    case types.PUT_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
      };
    case types.GET_ITEM_FAILURE:
    case types.POST_ITEM_FAILURE:
    case types.DELETE_ITEM_FAILURE:
    case types.PUT_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
