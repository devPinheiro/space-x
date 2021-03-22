import {
  FETCH_ROCKETS_FAIL,
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
} from '../actions/types';

import { fetchAllRockets } from '../initialState';

/**
 * This reducer changes the rockets state of the application
 *
 * @param {Object} [state=fetchAllRockets]
 * @param action = fetchRocketsActions
 *
 * @returns {Object} state
 */

export default (state = fetchAllRockets, action: { type: string; rockets: []; payload: string; }) => {
  switch (action.type) {
    case FETCH_ROCKETS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ROCKETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.rockets,
      };
    case FETCH_ROCKETS_FAIL:
      return {
        ...state,
        isSuccessful: false,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
