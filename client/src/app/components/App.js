import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import HomeContainer from '../../home/containers/HomeContainer';
import Courses from '../../courses/components/Courses';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <HomeContainer />
          </Route>
          <Route path='/courses'>
            <Courses />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
