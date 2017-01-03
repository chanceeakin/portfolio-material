import React from 'react';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';

import headshot from '../../common/img/headshot1-1.jpg';

const FirstCard = () => (
  <Card className="first-card md-block-centered">
    <Media aspectRatio="1-1">
      <img src={headshot} role="presentation" />
      <MediaOverlay>
        <CardTitle className="md-grid" title="About Me" subtitle="Code. Music. BBQ." />
      </MediaOverlay>
    </Media>
    <CardActions className="first-button md-divider-border md-divider-border--top" expander>
      <Link to="about">
        <Button flat label="Find out More" className="md-cell--right" secondary />
      </Link>
    </CardActions>
    <CardText expandable>
      <h4 className="md-text-center md-headline">My name&#39;s Chance, and this here is my portfolio.</h4>
      <h4 className="md-text-center md-headline">Click the button above to learn more.</h4>
    </CardText>
  </Card>
);

export default FirstCard;
