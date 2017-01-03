import React, { PureComponent, PropTypes } from 'react';
import Card from 'react-md/lib/Cards/Card';
import { connect } from 'react-redux';
import Snackbar from 'react-md/lib/Snackbars';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Button from 'react-md/lib/Buttons';
import Media, { MediaOverlay } from 'react-md/lib/Media';


import imgSrc from '../../common/img/reactredux.png';

@connect(({ media: { mobile, tablet } }) => ({ mobile, tablet }))
export default class PortfolioCard extends PureComponent {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    tablet: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      toasts: [],
      num: 0,
      autohide: true,
    };

    this._addToast = this._addToast.bind(this);
    this._removeToast = this._removeToast.bind(this);
    this._toastHello = this._toastHello.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    const { toasts } = nextState;
    const [toast] = toasts;
    if (this.state.toasts === toasts || !toast) {
      return;
    }

    const autohide = toast.action !== 'Retry';
    this.setState({ autohide });
  }

  _addToast(text, action) {
    const toasts = this.state.toasts.slice();
    toasts.push({ text, action });

    this.setState({ toasts });
  }

  _removeToast() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  _toastHello() {
    this.state.num += 1;
    if (this.state.num % 2 === 0) {
      this._addToast('React and Redux can be challenging, but sometimes, the best way to learn something is to break it and put it back together again! I hurt a lot of pixels, y\'all.');
    }
  }

  render() {
    const { toasts, autohide } = this.state;
    return (
      <Card className="card">
        <Media aspectRatio="2-1">
          <img src={imgSrc} role="presentation" />
          <MediaOverlay>
            <CardTitle
              title="About this Portfolio"
              subtitle="How I built it"
            />
          </MediaOverlay>
        </Media>
        <CardActions expander onClick={this._toastHello} />
        <Snackbar toasts={toasts} autohide={autohide} onDismiss={this._removeToast} autohideTimeout={5000} />
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
  }
}
