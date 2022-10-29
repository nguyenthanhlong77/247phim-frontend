import logo from './logo.svg';
import './App.scss';
import { PrivateRoutes, PublicRoutes } from './Router';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieActions } from './redux-toolkit/slice/movie';
import { publicActions } from './redux-toolkit/slice/public';
import { useLocation } from 'react-router-dom';
import Client from './layout/Client';
import Admin from './layout/Admin';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(() => {
    const isWatchMovie = location.pathname.split('/')[1] === 'xem-phim' ? true : false;

    if (!isWatchMovie) dispatch(movieActions.unSelected());
  }, [location]);

  useEffect(() => {
    dispatch(publicActions.loadingData());
  }, []);

  return (
    <div className="app">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Client />}>
          {PublicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route path={route.path} key={index} element={<Page />} />;
          })}
        </Route>

        {/* Admin routes */}
        {role && role === 'admin' ? (
          <Route path="/admin" element={<Admin />}>
            {PrivateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route path={route.path} key={index} element={<Page />} />;
            })}
          </Route>
        ) : (
          <></>
        )}
      </Routes>
    </div>
  );
}

export default App;
