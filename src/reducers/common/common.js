import {
  FETCH_CHARACTERS_REQUEST,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FILTER_BY_SEARCH,
  FILTER_BY_GENDER,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRANDS
} from "../../actions/types";

const initialState = {
  appliedFilters: []
};

// Base Reducer
const eCommerce = (state = initialState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    // Fetch Request Reducer
    case FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    // Fectch Data From API Reducer
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false
      };

    // Reducer for handling Error
    case FETCH_CHARACTERS_ERROR:
      return { err: action.err, isLoading: false };

    // Gender Filter Reducer
    case FILTER_BY_GENDER:
      let gender = action.genderPayload.value;
      let filteredGenderValues = state.data.filter(product => {
        return (
          product.gender.includes(gender)
        );
      });
      newState.filteredProducts = filteredGenderValues;
      return newState;

    // Category Filter Reducer
    case FILTER_BY_CATEGORY:
      let categoryItem = action.categoryPayload.value;
      let filteredCategoryValues = state.data.filter(product => {
        return (
          categoryItem.some(o => product.category.includes(o))
        );
      });
      newState.filteredProducts = filteredCategoryValues;
      return newState;

    // Brands Filter Reducer
    case FILTER_BY_BRANDS:
      let brandItem = action.brandsPayload.value;
      let filteredBrandValues = state.data.filter(product => {
        return (
          brandItem.some(o => product.brand.includes(o))
        );
      });
      newState.filteredProducts = filteredBrandValues;
      return newState;

    // Searchbar Reducer
    case FILTER_BY_SEARCH:
      let value = action.payload.value;
      let filteredValues = state.data.filter(product => {
        return (
          product.product.toLowerCase().includes(value.toLowerCase()) ||
          product.productName.toLowerCase().includes(value.toLowerCase()) ||
          product.brand.toLowerCase().includes(value.toLowerCase()) ||
          product.sizes.toLowerCase().includes(value.toLowerCase()) ||
          product.gender.toLowerCase().includes(value.toLowerCase()) ||
          product.primaryColour.toLowerCase().includes(value.toLowerCase()) ||
          product.additionalInfo.toLowerCase().includes(value.toLowerCase()) ||
          product.category.toLowerCase().includes(value.toLowerCase()) ||
          product.season.toLowerCase().includes(value.toLowerCase())
        );
      });
      let appliedFilters = state.appliedFilters;
      if (value) {
        appliedFilters = addFilterIfNotExists(FILTER_BY_SEARCH, appliedFilters);
        newState.filteredProducts = filteredValues;
        newState.filteredCount = newState.filteredProducts.length;
      } else {
        appliedFilters = removeFilter(FILTER_BY_SEARCH, appliedFilters);
        if (appliedFilters.length === 0) {
          newState.filteredProducts = newState.data;
          newState.filteredCount = newState.filteredProducts.length;
        }
      }
      return newState;
    default:
      return state;
  }
};


// Check if Filter exists within app for execution
function addFilterIfNotExists(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);

  return appliedFilters;
}

// Remove Filter Reducer
function removeFilter(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}


export default eCommerce;
