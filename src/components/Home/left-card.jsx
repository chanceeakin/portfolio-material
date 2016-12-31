import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';

import headshot from '../../common/img/headshot1-1.jpg';

const LeftCard = () => (
  <Card className="left-card">
    <Media aspectRatio="1-1">
      <img src={headshot} role="presentation" />
      <MediaOverlay>
        <CardTitle title="About Me" subtitle="Code. Music. BBQ.">
          <Button className="md-cell--right" icon>star_outline</Button>
        </CardTitle>
      </MediaOverlay>
    </Media>
    <CardTitle
      title="Find out a little bit more about me"
    />
    <CardActions expander>
      <Link to="about">
        <Button flat label="Click it" />
      </Link>
    </CardActions>
    <CardText expandable>
      <p>I write code, sing, and build things. This portfolio, built with React and Redux, is almost as good as my brisket.</p>
    </CardText>
  </Card>
);

export default LeftCard;
