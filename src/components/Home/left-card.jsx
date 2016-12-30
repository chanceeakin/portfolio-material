import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Button from 'react-md/lib/Buttons';

import headshot from '../../common/img/headshot2.jpg';

const LeftCard = () => (
  <Card style={{ maxWidth: 600 }} className="">
    <Media>
      <img src={headshot} role="presentation" />
      <MediaOverlay>
        <CardTitle title="Such nature" subtitle="Wow!">
          <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>
      </MediaOverlay>
    </Media>
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
