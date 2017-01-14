import React from 'react';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import CardActions from 'react-md/lib/Cards/CardActions';
import Button from 'react-md/lib/Buttons';

import imgSrc from '../../../common/img/oldportfolio.png';

const LinkCard = () => (
  <Card style={{ maxWidth: 600 }} className="link-card card-background md-block-centered">
    <Media aspectRatio="16-9">
      <img src={imgSrc} role="presentation" />
      <MediaOverlay>
        <CardTitle className="md-grid" title="Old Portfolio" />
      </MediaOverlay>
    </Media>
    <CardActions className="md-divider-border md-divider-border--top">
      <Button raised href="http://oldportfolio.chanceeakin.io" label="Check it out" className="md-cell--right" secondary />
    </CardActions>
  </Card>
);

export default LinkCard;
