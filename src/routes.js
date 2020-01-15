import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Sad from './components/Sad';
import Happy from './components/Happy';
import Indifferent from './components/Indifferent';

export default function Routes(){
  return(
    <Switch>
      <Route path='/' exact component={Indifferent} />
      <Route path='/sad' component={Sad} />
      <Route path='/happy' component={Happy} />
    </Switch>
  );
}