import React from 'react';
import Paper from 'react-md/lib/Papers';
import LinkCard from './link-card';

const FirstCardAlan = () => (
  <div className="paper-container">
    <Paper
      zDepth={1}
      raiseOnHover={false}
      className="old"
    >
      <h3 className="md-text-center">AP Human Geography Website</h3>
      <p className="md-body-2">For my final bootcamp project, a friend of mine asked if I could revamp his website. Not wanting to give him something simple, I put this full-stack SPA together. In essence, it&#039;s an overpowered implementation of everything we covered.</p>
      <br />
      <h5>Tech Rundown:</h5>
      <ul>
        <li>Node 6.x/Express 4.x</li>
        <li>React.js 13.x</li>
        <li>An Implementation of MaterializeCSS</li>
      </ul>
      <LinkCard />
      <h5 className="last-paragraph">Things I did, and things I learned</h5>
      <p className="md-body-2">I put everything on a digital ocean droplet running Ubuntu 16.04. It runs an instance of MongoDB and the Node SPA. I learned how to link and access local and remote databases, automatic deployment through shell scripting/git hooks, as well as testing in development and production environments. Oh, that and React.</p>
      <br />
    </Paper>
  </div>
);

export default FirstCardAlan;
