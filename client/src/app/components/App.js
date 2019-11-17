import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import HomeContainer from '../../home/containers/HomeContainer';
import Courses from '../../courses/components/Courses';
import CreateContent from '../../createContent/CreateContent';

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
          <Route path='/create-content'>
            <CreateContent />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
