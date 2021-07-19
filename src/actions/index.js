import axios from 'axios';
import API_URL from '../config/api/index';
import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FILTER_BY_SEARCH,
  FILTER_BY_GENDER,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRANDS,
} from './types'

// API Call
export const fetchCharacters = () => async dispatch => {
  await dispatch({ type: FETCH_CHARACTERS_REQUEST });
  try {
    const response = await axios.get(
      `${API_URL}/products`
    );
    return dispatch({
      type: FETCH_CHARACTERS_SUCCESS,
      data: response.data.products
    });
  } catch (err) {
    return dispatch({ type: FETCH_CHARACTERS_ERROR, err });
  }
};

// Search Action
export const filterByValue = payload => ({
  type: FILTER_BY_SEARCH,
  payload
});

// Gender Filter Action
export const filterByGender = genderPayload => ({
  type: FILTER_BY_GENDER,
  genderPayload
});

// Category Filter Action
export const filterByCategory = categoryPayload => ({
  type: FILTER_BY_CATEGORY,
  categoryPayload
});

// Brand Filter Action
export const filterByBrands = brandsPayload => ({
  type: FILTER_BY_BRANDS,
  brandsPayload
});


