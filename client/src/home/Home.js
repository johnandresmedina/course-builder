import './home.scss';

import React from 'react';
import { Jumbotron, Button, Row, Col } from 'reactstrap';

const Home = () => {
  return (
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Jumbotron className='home__jumbotron'>
          <h1 className='display-3'>Create your course!</h1>
          <p className='lead'>
            This is a simple but powerful app that will allow you to create all the courses you need with the right
            tools.
          </p>
          <hr className='my-2' />
          <p>We care about you and have you cover for this new adventure.</p>
          <p className='lead'>
            <Button color='primary'>Create!</Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
  );
};

export default Home;
