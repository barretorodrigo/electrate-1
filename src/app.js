import React, { useState } from 'react';
import Calc from './components/Calc';
import Imc from './components/Imc';
import Todo from './components/Todo';
import { Route, Switch, HashRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <HashRouter>
          <Route path='/' exact>
            <Calc/>
          </Route>
          <Route path='/imc'>
            <Imc/>
          </Route>
          <Route path='/todo'>
            <Todo/>
          </Route>
      </HashRouter>
    </>
  )
}

export default App;

