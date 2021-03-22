import { Dispatch } from 'redux';
import axios from '../Axios';

// interfaces
import {
  FetchAllRocketsActionFailure,
  FetchAllRocketsActionRequest,
  FetchAllRocketsActionSuccess,
  Rockets,
} from './interfaces';

// action types
import {
  FETCH_ROCKETS_FAIL,
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
} from './types';

/**
 * fetch rockets request action
 *
 * The action dispatched prior to making a request to fetch all rockets
 *
 * @returns {FetchAllRocketsActionRequest}
 *
 */
export const fetchAlLRocketsRequest = (): FetchAllRocketsActionRequest => {
  return {
    type: FETCH_ROCKETS_REQUEST,
  };
};

/**
 * Fetch all rockets success action creator
 *
 * @param {Rockets} rockets
 *
 * @returns {FetchAllRocketsActionSuccess}
 */
export const fetchAllRocketsSuccess = (
  rockets: Rockets[]
): FetchAllRocketsActionSuccess => {
  return { rockets, type: FETCH_ROCKETS_SUCCESS };
};

/**
 * Fetch all rockets failure action creator
 *
 * @returns {FetchAllRocketsActionFailure}
 */
export const fetchAllRocketsFailure = (payload: any): FetchAllRocketsActionFailure => {
  return { payload, type: FETCH_ROCKETS_FAIL };
};

/**
 * Fetches all rockets
 *
 * @returns {Function} action type and payload
 */
export const fetchAllRockets = () => (dispatch: Dispatch) => {
  dispatch(fetchAlLRocketsRequest());
  return axios
    .get('rockets')
    .then((response) => {
      const {
        data,
      } = response;  
      dispatch(fetchAllRocketsSuccess(data));
    })
    .catch((error) => {
      if(error) dispatch(fetchAllRocketsFailure('Something went wrong'));
    });
};
