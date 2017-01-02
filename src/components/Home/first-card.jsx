import React from 'react';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';

import headshot from '../../common/img/headshot1-1.jpg';

const LeftCard = () => (
  <div className="first-card md-cell md-cell--12 md-grid">
    <h2 className="md-cell md-cell--12 paper-title md-text-center md-display-2">I make things</h2>
    <div className="md-cell md-cell--3-tablet md-cell--4-desktop">
      <Media aspectRatio="1-1">
        <img src={headshot} role="presentation" />
        <MediaOverlay>
          <CardTitle title="About Me" subtitle="Code. Music. BBQ." />
        </MediaOverlay>
      </Media>
    </div>
    <div className="first-text md-cell md-cell--5-tablet md-cell--8-desktop">
      <h4 className="md-text-center md-headline">My name&#39;s Chance, and this here is my portfolio.</h4>
      <br />
      <h4 className="md-text-center md-headline">Click the button below to explore more.</h4>
      <div className="first-button">
        <Link to="about">
          <Button className="md-block-centered" flat label="Click it" />
        </Link>
      </div>
    </div>
  </div>
);

export default LeftCard;
