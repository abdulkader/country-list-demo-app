import MainLayout from '@/layouts/MainLayout';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchCountries } from '@/store/country/action';
import { useEffect, Fragment } from 'react';
import { useRouter } from '@/hooks/useRouter';
import { getCountryByCode } from '@/store/country/reducer';
import CountryDetailsRow from '@/components/CountryDetails/Row';

const CountryDetailsPage = () => {
  const router = useRouter();
  const { code } = router.params;
  const countryState = useAppSelector((state) => state.country);
  const { loading, fetched } = countryState;
  const dispatch = useAppDispatch();
  const loadData = () => {
    dispatch(fetchCountries());
  };
  useEffect(() => {
    if (!fetched) {
      loadData();
    }
  }, [fetched, dispatch]);

  const countryDetail = getCountryByCode(countryState, code);
  return (
    <MainLayout>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <CountryDetailsRow
              label="Official Name(English)"
              value={countryDetail?.name?.official}
            />
            {Object.entries(countryDetail?.name?.nativeName).map(
              ([key, { official }]) => (
                <CountryDetailsRow
                  key={key}
                  label={`Official Name(${key})`}
                  value={official}
                />
              )
            )}
            <CountryDetailsRow label="alpha2Code" value={countryDetail?.cca2} />
            <CountryDetailsRow
              label="Capital"
              value={countryDetail?.capital?.[0]}
            />
            <CountryDetailsRow label="cca3" value={countryDetail?.cca3} />
            <CountryDetailsRow label="ccn3" value={countryDetail?.ccn3} />
            <CountryDetailsRow label="Flag" value={countryDetail?.flag} />
            <CountryDetailsRow
              label="currencies"
              value={
                <Fragment>
                  {Object.entries(countryDetail?.currencies).map(
                    ([key, { name }]) => (
                      <CountryDetailsRow key={key} label={key} value={name} />
                    )
                  )}
                </Fragment>
              }
            />
          </Fragment>
        )}
      </Container>
    </MainLayout>
  );
};

export default CountryDetailsPage;
