import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './home/Home';
import Courses from './courses/Courses';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
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
