import React from 'react';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';

import imgSrc from '../../../common/img/hunter.png';

const LinkHunter = () => (
  <Card style={{ maxWidth: 600 }} className="link-card card-background md-block-centered">
    <Media aspectRatio="16-9">
      <img src={imgSrc} role="presentation" />
      <MediaOverlay>
        <CardTitle className="md-grid" title="Hunter Enoch's Website" />
      </MediaOverlay>
    </Media>
    <CardActions className="md-divider-border md-divider-border--top">
      <Button raised href="#" label="Check it out" className="md-cell--right" secondary />
    </CardActions>
  </Card>
);

export default LinkHunter;
