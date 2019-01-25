// @flow

import * as React from 'react';

import type { Route } from './types';

export const renderLinks = (
  routes: Array<Route>,
  LinkComponent: () => React.Node,
  onClick: () => void,
) => routes.map<{}>(route => (
  <LinkComponent
    key={route.title}
    onClick={onClick}
    to={route.path}
  >
    {route.title}
  </LinkComponent>
));
