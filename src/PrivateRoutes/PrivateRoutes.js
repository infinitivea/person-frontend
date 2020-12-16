import React, { useContext } from 'react';
import RolesList from '../config/roles';
import { Route, Switch } from 'react-router-dom';
import NavLayout from '../pages/Layout/index';
import AdminLayout from '../pages/Layout/AdminLayout/AdminLayout';
import UserContext from '../context/UserContext';

function PrivateRoutes(props) {
  const { role } = useContext(UserContext);

  return (
    <>
      <Switch>
        {RolesList[role].map(({ path, page: PageComponent }, index) => (
          <Route key={index} exact path={path}>
            {role !== 'ADMIN' ? (
              <NavLayout>
                <PageComponent />
              </NavLayout>
            ) : (
              <AdminLayout>
                <PageComponent />
              </AdminLayout>
            )}
          </Route>
        ))}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </>
  );
}

export default PrivateRoutes;
