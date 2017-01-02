import React from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';

const WhatsNew = () => (
  <Card className="card">
    <CardTitle
      title="What's New"
      subtitle="Things I've been up to lately"
    />
    <CardActions expander />
    <CardText expandable>
      <h4 className="md-subheading-2 md-text-center">Tech</h4>
      <p className="md-body-2">Most recently, I&#39;ve been building with a number of fun technologies! A lot of the projects you&#39;ll find here have been built with a few of the following:</p>
      <ul className="md-body-2">
        <li>Hexo</li>
        <li>Web VR</li>
        <li>React and Redux</li>
        <li>Let&#39;s Encrypt</li>
      </ul>
      <p className="md-body-2">Plenty to speak of on each of these fronts, but I&#39;ll let the items speak for themselves in their own time! Web VR looks really exciting, and with React-VR in prerelease, there&#39s no telling what the future holds there.</p>
      <h4 className="md-subheading-2 md-text-center">Personal</h4>
      <p className="md-body-2">Just wrapped up Christmas at the in-laws, and they gave my wife and I an Alexa. Been eyeing some black walnut so I can build us a proper dining table, and we&#39;re going skiing soon!</p>

    </CardText>
  </Card>
);

export default WhatsNew;
