import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';

const RightCard = () => (
  <Card className="card">
    <CardTitle
      title="Details"
      subtitle="A little bit about myself"
    />
    <CardActions expander />
    <CardText expandable>
      <p className="md-body-2">I&#39;m a full-stack developer and classical musician that loves writing code and solving problems. </p>
      <br />
      <p className="md-body-2">I like making clean front-end UIs with Foundation or Bootstrap that follow best practices for Responsive Design, and I love creating UX that  WORKS. I have some experience in design: with all the stage time I have, I picked up some sense of Aesthetics along the way! I work well in Javascript, and I can build backends using Node.js, React.js, and Express.js. I find it fun to learn new technologies, and I enjoy donating time to my friends in opera to test out the latest frameworks.</p>
      <br />
      <p className="md-body-2">Aside from the development work and singing, I &#39; m a sixth generation Texan that loves BBQ and woodworking. When I&#39;m not actively coding, I&#39;m helping my folks remodel our farmhouse and perfecting how I smoke a brisket.</p>
      <br />
      <p className="md-body-2">I live with my awesome wife in North Austin, and this site was built by hand using most of the stuff I know. Take a look around!</p>
    </CardText>
  </Card>
);

export default RightCard;
