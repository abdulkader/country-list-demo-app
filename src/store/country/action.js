import { useFetch } from '@/hooks/useFetch';
import {
  FETCHING_COUNTRY_LIST,
  FETCHED_COUNTRY_LIST,
  FAILED_COUNTRY_LIST,
} from './type';

export const fetchCountries = () => async (dispatch) => {
  const client = useFetch();
  dispatch({ type: FETCHING_COUNTRY_LIST });
  try {
    const response = await client.get('/all');
    dispatch({ type: FETCHED_COUNTRY_LIST, payload: response.data });
  } catch (err) {
    dispatch({ type: FAILED_COUNTRY_LIST });
  }
};
