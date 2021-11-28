import {
  FETCHING_COUNTRY_LIST,
  FETCHED_COUNTRY_LIST,
  FAILED_COUNTRY_LIST,
} from './type';

const initialState = {
  countries: [],
  loading: true,
  fetched: false,
  failed: false,
};
const country = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COUNTRY_LIST: {
      const newState = { ...state, loading: true };
      return newState;
    }
    case FETCHED_COUNTRY_LIST: {
      const newState = {
        ...state,
        loading: false,
        fetched: true,
        failed: false,
        countries: action.payload,
      };
      return newState;
    }
    case FAILED_COUNTRY_LIST: {
      const newState = {
        ...state,
        loading: false,
        fetched: false,
        failed: true,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default country;

export const getCountryByCode = (state, code) =>
  state.countries.find((item) => item.cca2 === code) || null;
