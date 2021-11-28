import { useQuery } from 'react-query';
import { useFetch } from './useFetch';
import { useToast } from './useToast';

export const useCountries = () => {
  const client = useFetch();
  const toast = useToast();
  const fetchCountries = () =>
    client
      .get('/all')
      .then((data) => data?.data)
      .catch((err) => {
        toast.error(err.message);
      });
  const countriesData = useQuery('countries', fetchCountries);
  return countriesData;
};
