import React from 'react';
import Card from 'react-md/lib/Cards';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';
import CardText from 'react-md/lib/Cards/CardText';

const SecondCard = () => (
  <Card className="second-home-card md-cell--middle">
    <CardText>
      <h4 className="md-text-center md-headline md-block-centered">Hey, I&#039;m a Software Developer. You&#039;ve managed to arrive at my portfolio!</h4>
      <br />
      <h4 className="md-text-center md-headline">Click the button below to take a look around.</h4>
    </CardText>
    <CardActions className="first-button md-divider-border md-divider-border--top">
      <Link className="md-block-centered" to="about">
        <Button flat label="Let's Begin" secondary />
      </Link>
    </CardActions>
  </Card>
);

export default SecondCard;
