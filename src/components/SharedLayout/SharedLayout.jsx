import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loading from 'components/Loading/Loading';

const SharedLayout = () => {
  return (
    <>
      <Header />
        <main>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
    </>
  );
};

export default SharedLayout;