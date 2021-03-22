import {
  FETCH_SINGLE_ROCKET_FAIL,
  FETCH_SINGLE_ROCKET_REQUEST,
  FETCH_SINGLE_ROCKET_SUCCESS
} from '../actions/types';

import { fetchSingleRocket } from '../initialState';

/**
 * This reducer changes the rockets state of the application
 *
 * @param {Object} [state=fetchSingleRocket]
 * @param action = fetchRocketActions
 *
 * @returns {Object} state
 */

export default (state = fetchSingleRocket, action: { type: string; rocket: []; payload: string; }) => {
  switch (action.type) {
    case FETCH_SINGLE_ROCKET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SINGLE_ROCKET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.rocket,
      };
    case FETCH_SINGLE_ROCKET_FAIL:
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
