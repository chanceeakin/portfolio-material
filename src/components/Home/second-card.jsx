import React from 'react';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';

const SecondCard = () => (
  <Card style={{ maxHeight: 600 }} className="second-card md-cell--6 md-cell--4-phone">
    <CardTitle>
      <h4 className="md-text-center md-headline">My name&#39;s Chance, and this here is my portfolio.</h4>
      <h4 className="md-text-center md-headline">Click the button below to explore more.</h4>
    </CardTitle>
    <CardActions className="first-button md-divider-border md-divider-border--top">
      <Link to="about">
        <Button flat label="Click it" secondary />
      </Link>
    </CardActions>
  </Card>
);

export default SecondCard;
