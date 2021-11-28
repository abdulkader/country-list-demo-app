import React from 'react';
import AnchorLink from '@/components/AnchorLink';
import Container from '@/components/Container';
import { useAppSelector } from '@/hooks/useAppSelector';

const Header = () => {
  const { loggedIn, user } = useAppSelector((state) => state.user);
  return (
    <div className="bg-indigo-400 text-white shadow-lg mb-2">
      <Container className="flex justify-between align-middle py-2 md:py-4 items-center">
        <AnchorLink href="/">
          <span className="font-bold text-lg uppercase">Logo</span>
        </AnchorLink>
        {loggedIn ? (
          <AnchorLink href="/">
            <span className="font-bold text-lg uppercase">
              Welcome {user?.fullname}
            </span>
          </AnchorLink>
        ) : (
          <AnchorLink href="/login">
            <span className="font-bold text-lg uppercase">Login</span>
          </AnchorLink>
        )}
      </Container>
    </div>
  );
};

export default Header;
