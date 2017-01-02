import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons';

const PortfolioCard = () => (
  <Card className="card">
    <CardTitle
      title="About this Portfolio"
      subtitle="How I built it"
    />
    <CardActions expander />
    <CardText expandable>
      <h4 className="md-subheading-2 md-text-center">How I built this thing</h4>
      <p className="md-body-2">In large part, I&#39;m using Mikkel Laursen&#39;s most excellent creation, React-MD: a marriage of React, Redux, and Material Design. I&#39;ve been a fan of Material Design since I found out about it, and I&#39;ve implemented several versions of it in an effort to better understand how best to use it. As understanding grows, so do the fun things I can do with it!</p>
      <p className="md-body-2">His creations are the best I&#39;ve seen yet, and if nothing else, explore this site to learn more about this really cool technology.</p>
      <p className="md-body-2 last-port-paragraph">Here are links to his materials: </p>
      <Button raised primary label="GitHub" className="about-button" />
      <Button raised secondary label="Boilerplate" className="about-button" />
      <Button raised primary label="Docs" className="about-button" />
    </CardText>
  </Card>
);

export default PortfolioCard;
