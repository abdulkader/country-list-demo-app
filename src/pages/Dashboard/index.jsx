import { ColumnDirective } from '@syncfusion/ej2-react-grids';
import Container from '@/components/Container';
import Loader from '@/components/Loader';
import DataTable from '@/components/DataTable';
import AnchorLink from '@/components/AnchorLink';
import { ViewIcon } from '@/components/Icons';
import { Fragment, useState } from 'react';
import CountryDetailsPopup from '@/components/CountryDetails/Popup';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { fetchCountries } from '@/store/country/action';
import { useEffect } from 'react';
import InfoRow from '@/components/CountryDetails/Row';
import { useLocalStore } from '@/hooks/useLocalStore';
import { AUTH_KEY } from '@/constants';
import { logoutAction } from '@/store/user/action';
import MainLayout from '@/layouts/MainLayout';

const DashboardPage = () => {
  const localStore = useLocalStore();
  const [popupCountry, setPopupCountry] = useState({
    active: false,
    country: null,
  });

  const { loading, fetched, countries } = useAppSelector(
    (state) => state.country
  );

  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const loadData = () => {
    dispatch(fetchCountries());
  };

  useEffect(() => {
    if (!fetched) {
      loadData();
    }
  }, [fetched, dispatch]);

  const togglePopupCountry = (country, active) => {
    setPopupCountry({ country, active });
  };

  const handleLogout = () => {
    localStore.del(AUTH_KEY);
    dispatch(logoutAction());
  };
  const seoData = {
    title: 'Dashboard',
  };
  return (
    <MainLayout seoData={seoData}>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            {/* Show Popup country info when country is clicked */}
            {popupCountry.active ? (
              <CountryDetailsPopup
                country={popupCountry.country}
                onClose={() => togglePopupCountry(null, false)}
              />
            ) : null}

            <div className="group relative mb-4">
              <div className="hidden group-hover:block absolute bg-white shadow-2xl z-50  left-auto right-0 top-0">
                <button
                  className="appearance-none bg-red-400 text-white font-semibold text-xs p-2 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              <InfoRow label="Username" value={atob(user.username)} />
              <InfoRow label="Full Name" value={user?.fullname} />
            </div>

            <DataTable data={countries} id="data-table">
              <ColumnDirective
                field="cca2"
                width="200"
                textAlign="Left"
                headerText="alpha2Code"
              />
              <ColumnDirective
                field="name.common"
                clipMode="EllipsisWithTooltip"
                headerText="Name"
                template={(country) => {
                  return (
                    <button
                      className="hover:text-indigo-500 cursor-pointer appearance-none outline-none shadow-none"
                      onClick={() => togglePopupCountry(country, true)}
                    >
                      {country.name.common}
                    </button>
                  );
                }}
              />
              <ColumnDirective
                field="capital"
                clipMode="EllipsisWithTooltip"
                headerText="Capital"
              />
              <ColumnDirective
                headerText="Actions"
                width="100"
                textAlign="Right"
                template={(country) => (
                  <AnchorLink
                    href={`/country/${country.cca2}`}
                    className="inline-flex items-center justify-center hover:text-indigo-500 transition-colors duration-200"
                  >
                    <ViewIcon />
                  </AnchorLink>
                )}
              />
            </DataTable>
          </Fragment>
        )}
      </Container>
    </MainLayout>
  );
};

export default DashboardPage;
