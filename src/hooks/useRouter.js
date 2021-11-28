import { useMemo } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      push: navigate,
      replace: (path) => navigate(path, { replace: true }),
      pathname: location.pathname,
      query: qs.parse(location.search, { ignoreQueryPrefix: true }),
      params,
      location,
      navigate,
    };
  }, [params, location, history]);
};
