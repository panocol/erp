import React, {Component} from 'react';
import {PageHeader, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router';

import homeImage from './home/home_image.jpg'


function Home(props) {
  return <footer>
    <PageHeader>
      We'll help make your projects green. <br/>
      <br/>
      <Link to="/signup">
      <Button bsStyle="success" type="button">Start for Free</Button>
      </Link>
    </PageHeader>

    <Image src={homeImage} responsive/>
  </footer>
}

export default Home;
