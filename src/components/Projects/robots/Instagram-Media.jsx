
/* SimpleExample.jsx */
import React, { PureComponent } from 'react';
import InstagramEmbed from 'react-instagram-embed';
import Paper from 'react-md/lib/Papers';
import Button from 'react-md/lib/Buttons';
import Link from 'react-router/lib/Link';

// Sorry mobile users
export default class SimpleExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="md-grid md-cell--12">
        <Paper
          zDepth={1}
          raiseOnHover={false}
          className="md-cell--12 md-grid md-block-centered robot-paper"
        >
          <h2 className="md-cell--12 md-text-center robot-sub-title md-headline">You can use Javascript to build Robots!</h2>
          <InstagramEmbed
            url="https://www.instagram.com/p/BM-JqFyg49P/"
            style={{ minWidth: '300px' }}
            className="md-cell--middle md-block-centered"
            maxWidth={675}
            hideCaption
            containerTagName="div"
            onLoading={() => {}}
            onSuccess={() => {}}
            onFailure={() => {}}
          />
          <p className="md-body-2 robot-text">I&#039;ve enjoyed playing with robots, and thanks to Johnny Five, I can build robots using Node. Anything you can do on the internet, now in the Internet of Things. Future plans include building my own drone and a web app to control it...all in JS. For now, I&#039;ll have to settle for making sadder versions of the Rick&#039;s butter robot.</p>
          <Link className="md-block-centered" to="tech">
            <Button className="project-button" raised label="Technologies" secondary />
          </Link>
        </Paper>
      </div>
    );
  }
}
