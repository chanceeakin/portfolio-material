import React from 'react';
import Card from 'react-md/lib/Cards';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media, { MediaOverlay } from 'react-md/lib/Media';


import headshot from '../../common/img/headshot1-1.jpg';

const HeadShot = () => (
  <Card className="card">
    <Media aspectRatio="1-1">
      <img src={headshot} role="presentation" />
      <MediaOverlay>
        <CardTitle className="md-grid" title="About Me" subtitle="Code. Music. BBQ." />
      </MediaOverlay>
    </Media>
  </Card>
);

export default HeadShot;
