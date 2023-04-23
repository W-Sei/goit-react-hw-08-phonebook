import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader';
import { Container } from 'components/App/App.styled';
import { CommonStyledHeader, HeaderWrapper } from './CommonStyles.styled';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';

import { useAuth } from 'hooks';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <CommonStyledHeader>
        <Container>
          <HeaderWrapper>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </HeaderWrapper>
        </Container>
      </CommonStyledHeader>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
