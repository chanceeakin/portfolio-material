import React from 'react';
import Paper from 'react-md/lib/Papers';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';
import LinkCard from './link-card';

const FirstCardHunter = () => (
  <div className="paper-container width-fix">
    <Paper
      zDepth={1}
      raiseOnHover={false}
      className="old"
    >
      <h3 className="md-text-center width-fix">Opera Singer Promo</h3>
      <p className="md-body-2">Hunter, a longtime colleague and friend of mine, asked me to build him a website: here it is!</p>
      <br />
      <h5>Interesting Tech Rundown:</h5>
      <ul>
        <li>Node 6.x/Express 4.x</li>
        <li>Google Calendar API</li>
        <li>MaterializeCSS and jQuery UI</li>
      </ul>
      <LinkCard />
      <h5 className="last-paragraph">Things I did, and things I learned</h5>
      <p className="md-body-2">MaterializeCSS comes with a lot of plug and play tools, especially the parallax element. Probably went a bit overboard with that one, but hey--it&#039;s a website for an artist. The two most interesting pieces of the site--from a coding perspective--are the media player and the calendar API implemenation. Hunter wanted a way to group events together based on what he was singing. If he&#039;s Marcello in La Boheme, all instances of Boheme are grouped together. All he has to do is label them as such in Google. No proprietary system necessary, and he can create a linked calendar using a system with which he is already familiar.</p>
      <p className="md-body-2">The media player, on the other hand, was a touch more challenging, as it forced research into the audio object. With a little bit of fiddling and design work, I was able to mesh the base HTML audio player with some Material Design features. The Wave feature on those buttons is awesome, and the user feedback the media player provides extends well past what the boilerplate HTML audio player does.</p>
      <p className="md-body-2">At the time of this writing (1/7/2017), I have not yet deployed his site, but all I&#039;m waiting on is his final approval and switch over.</p>
      <br />
      <Link className="md-block-centered" to="projects/alan">
        <Button className="project-button" raised label="Continue on" secondary />
      </Link>
    </Paper>
  </div>
);

export default FirstCardHunter;
