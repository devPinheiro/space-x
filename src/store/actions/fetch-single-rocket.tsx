
import { Dispatch } from 'redux';
import axios from '../Axios';

// interfaces
import {
  FetchSingleRocketActionRequest,
  FetchSingleRocketActionSuccess,
  FetchSingleRocketActionFailure,
  Rockets,
} from './interfaces';

// action types
import {
  FETCH_SINGLE_ROCKET_FAIL,
  FETCH_SINGLE_ROCKET_REQUEST,
  FETCH_SINGLE_ROCKET_SUCCESS
} from './types';

/**
 * fetch single rocket request action
 *
 * The action dispatched prior to making a request to fetch single rocket
 *
 * @returns {FetchSingleRocketActionRequest}
 *
 */
export const fetchSingleRocketRequest = (): FetchSingleRocketActionRequest => {
  return {
    type: FETCH_SINGLE_ROCKET_REQUEST,
  };
};

/**
 * Fetch single rocket success action creator
 *
 * @param {Rocket} rocket
 *
 * @returns {FetchSingleRocketActionSuccess}
 */
export const fetchSingleRocketSuccess = (
  rocket: Rockets[]
): FetchSingleRocketActionSuccess => {
  return { rocket, type: FETCH_SINGLE_ROCKET_SUCCESS };
};

/**
 * Fetch all rockets failure action creator
 *
 * @returns {FetchAllRocketsActionFailure}
 */
export const fetchSingleRocketFailure = (payload: any): FetchSingleRocketActionFailure => {
  return { payload, type: FETCH_SINGLE_ROCKET_FAIL };
};

/**
 * Fetches all rockets
 *
 * @returns {Function} action type and payload
 */
export const fetchSingleRocket = (id: string) => (dispatch: Dispatch) => {
  dispatch(fetchSingleRocketRequest());
  return axios
    .get(`rockets/${id}`)
    .then((response) => {
      const {
        data,
      } = response;  
      dispatch(fetchSingleRocketSuccess(data));
    })
    .catch((error) => {
      if(error && error.response.data){dispatch(fetchSingleRocketFailure(error.response.data));}else{
      dispatch(fetchSingleRocketFailure('Something went wrong'));

      }
    });
};
