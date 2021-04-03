import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Principal from '../pages/Principal';
import Detalhes from '../pages/Detalhes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Principal} />
    <Route path="/detalhes/:idCharacter" exact component={Detalhes} />
  </Switch>
);

export default Routes;
