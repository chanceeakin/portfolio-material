import React from 'react';
import Card from 'react-md/lib/Cards';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';
import CardText from 'react-md/lib/Cards/CardText';

const SecondCard = () => (
  <Card className="second-home-card md-cell--middle">
    <CardText>
      <h4 className="md-text-center md-headline md-block-centered">My name&#39;s Chance, and this here is my portfolio.</h4>
      <br />
      <h4 className="md-text-center md-headline">Click the button below to learn more.</h4>
    </CardText>
    <CardActions className="first-button md-divider-border md-divider-border--top">
      <Link to="about">
        <Button flat label="Click it" secondary />
      </Link>
    </CardActions>
  </Card>
);

export default SecondCard;
