import {
  FETCH_ROCKETS_FAIL,
  FETCH_ROCKETS_REQUEST,
  FETCH_ROCKETS_SUCCESS,
  FETCH_SINGLE_ROCKET_FAIL,
  FETCH_SINGLE_ROCKET_REQUEST,
  FETCH_SINGLE_ROCKET_SUCCESS
} from './types';

export interface FetchAllRocketsActionSuccess {
  rockets: Rockets[];
  type: FETCH_ROCKETS_SUCCESS;
}

export interface FetchAllRocketsActionFailure {
  payload: any,
  type: FETCH_ROCKETS_FAIL;
}

export interface FetchAllRocketsActionRequest {
  type: FETCH_ROCKETS_REQUEST;
}

export interface Rockets {
  id: string;
  name: string;
  flickr_images: any[];
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
}


export interface FetchSingleRocketActionSuccess {
  rocket: Rockets[];
  type: FETCH_SINGLE_ROCKET_SUCCESS;
}

export interface FetchSingleRocketActionFailure {
  payload: any,
  type: FETCH_SINGLE_ROCKET_FAIL;
}

export interface FetchSingleRocketActionRequest {
  type: FETCH_SINGLE_ROCKET_REQUEST;
}
