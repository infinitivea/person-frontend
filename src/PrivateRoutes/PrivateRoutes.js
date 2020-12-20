import React, { useContext } from 'react';
import RolesList from '../config/roles';
import { Route, Switch } from 'react-router-dom';
import NavLayout from '../pages/Layout/index';
import AdminLayout from '../pages/Layout/AdminLayout/AdminLayout';
import PartnerLayout from '../pages/Layout/PartnerLayout/PartnerLayout';
import UserContext from '../context/UserContext';

function PrivateRoutes(props) {
  const { role } = useContext(UserContext);

  return (
    <>
      <Switch>
        {RolesList[role].map(({ path, page: PageComponent }, index) => (
          <Route key={index} exact path={path}>
            {role === 'GUEST' || role === 'USER' ? (
              <NavLayout>
                <PageComponent />
              </NavLayout>
            ) : role === 'ADMIN' ? (
              <AdminLayout>
                <PageComponent />
              </AdminLayout>
            ) : (
              <PartnerLayout>
                <PageComponent />
              </PartnerLayout>
            )}
          </Route>
        ))}
        <Route path="*" render={() => 'Not found'} />
      </Switch>
    </>
  );
}

export default PrivateRoutes;
