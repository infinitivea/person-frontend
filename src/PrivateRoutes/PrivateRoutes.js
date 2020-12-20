import React, { useContext } from 'react';
import { Result, Button } from 'antd';
import RolesList from '../config/roles';
import { Route, Switch, useHistory } from 'react-router-dom';
import NavLayout from '../pages/Layout/index';
import AdminLayout from '../pages/Layout/AdminLayout/AdminLayout';
import PartnerLayout from '../pages/Layout/PartnerLayout/PartnerLayout';
import UserContext from '../context/UserContext';

function PrivateRoutes() {
  const { role } = useContext(UserContext);
  const history = useHistory();

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
        <Route path="*">
          <NavLayout>
            <Result
              status="404"
              title="404"
              subTitle={<span style={{ color: 'wheat' }}>Sorry, the page you visited does not exist.</span>}
              extra={
                <Button type="primary" onClick={() => history.push('/')}>
                  Back Home
                </Button>
              }
            />
          </NavLayout>
        </Route>
      </Switch>
    </>
  );
}

export default PrivateRoutes;
