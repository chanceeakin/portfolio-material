import React from 'react';
import Paper from 'react-md/lib/Papers';
import LinkCard from './link-card';

const FirstCardPortfolio = () => (
  <div className="paper-container">
    <Paper
      zDepth={1}
      raiseOnHover={false}
      className="old"
    >
      <h3 className="md-text-center">First Portfolio</h3>
      <p className="md-body-2">Built my first portfolio mid 2016, using some fun technologies. I preserved it for posterity, as well as to present a sense of growth in design/capability.</p>
      <br />
      <h5>Tech Rundown:</h5>
      <ul>
        <li>Node 6.x/Express 4.x</li>
        <li>jQuery</li>
        <li>Foundation CSS Framework by Zurb</li>
        <li>Bower</li>
        <li>Waypoints.js</li>
        <li>Digital Ocean</li>
        <li>Nginx</li>
      </ul>
      <LinkCard />
      <h5 className="last-paragraph">Things I did and Things I Learned</h5>
      <p className="md-body-2">Spooled up a Digital Ocean droplet (gotta love that service), and put Nginx on it as a reverse proxy server, which then points to my Node/Express app. Quite a bit of work for a static webpage, but what&#039;s the fun in calling yourself a full-stack developer if you can&#039;t use some sort of full-stack.</p>
      <br />
    </Paper>
  </div>
);

export default FirstCardPortfolio;
