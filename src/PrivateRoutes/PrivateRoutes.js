import React from 'react';
import RolesList from '../config/roles';
import { Route, Switch } from 'react-router-dom';

function PrivateRoutes(props) {
  const role = props.role || 'GUEST';

  return (
    <>
      <Switch>
        {RolesList[role].map(({ path, page: PageComponent }, index) => (
          <Route key={index} exact path={path}>
            <PageComponent setRole={props.setRole} />
          </Route>
        ))}
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </>
  );
}

export default PrivateRoutes;
