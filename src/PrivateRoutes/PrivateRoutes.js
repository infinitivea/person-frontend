import React from 'react';
import RolesList from '../config/roles';
import { Route, Switch } from 'react-router-dom';
import NavLayout from '../pages/Layout/index';

function PrivateRoutes(props) {
  const role = props.role || 'GUEST';

  return (
    <>
      <Switch>
        {RolesList[role].map(({ path, page: PageComponent }, index) => (
          <Route key={index} exact path={path}>
            <NavLayout>
              <PageComponent role={role} setRole={props.setRole} />
            </NavLayout>
          </Route>
        ))}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </>
  );
}

export default PrivateRoutes;
