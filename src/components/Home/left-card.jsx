import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons';

const LeftCard = () => (
  <Card className="">
    <CardTitle
      title="Card Title"
      subtitle="Card Subtitle"
    />
    <CardActions expander>
      <Button flat label="Action 1" />
      <Button flat label="Action 2" />
    </CardActions>
    <CardText expandable />
  </Card>
);

export default LeftCard;
