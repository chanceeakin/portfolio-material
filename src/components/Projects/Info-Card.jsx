import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';

const InfoCard = () => (
  <Card className="card">
    <CardTitle
      title="Things I've Built"
    />
    <CardText>
      <p className="md-body-2">The following pages contain links and descriptions to active and past projects. Check out the side bar for more details.</p>
    </CardText>
    <CardActions className="first-button md-divider-border md-divider-border--top">
      <Link to="projects/hunter">
        <Button raised label="Recent work" className="md-cell--right" secondary />
      </Link>
    </CardActions>
  </Card>
);

export default InfoCard;
