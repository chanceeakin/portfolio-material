import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'react-md/lib/Snackbars';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';


@connect(({ media: { mobile, tablet } }) => ({ mobile, tablet }))
export default class AboutCard extends PureComponent {
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
      this._addToast('Hey, thanks for reading a little about me.');
    }
  }

  render() {
    const { toasts, autohide } = this.state;
    return (
      <Card className="card">
        <CardTitle
          title="Details"
          subtitle="A little bit about myself"
        />
        <CardActions expander onClick={this._toastHello} />
        <Snackbar toasts={toasts} autohide={autohide} onDismiss={this._removeToast} />
        <CardText expandable>
          <p className="md-body-2">I&#39;m a full-stack developer and classical musician who loves writing code and solving problems. </p>
          <br />
          <p className="md-body-2">I like making clean front-end UIs with Foundation or Bootstrap that follow best practices for Responsive Design, and I love creating UX that  WORKS. I have some experience in design: with all the stage time I have, I picked up some sense of Aesthetics along the way! I work well in Javascript, and I can build backends using Node.js, React.js, and Express.js. I find it fun to learn new technologies, and I enjoy donating time to my friends in opera to test out the latest frameworks.</p>
          <br />
          <p className="md-body-2">Aside from the development work and singing, I &#39; m a sixth generation Texan that loves BBQ and woodworking. When I&#39;m not actively coding, I&#39;m helping my folks remodel our farmhouse and perfecting how I smoke a brisket.</p>
          <br />
          <p className="md-body-2">I live with my awesome wife in North Austin, and this site was built by hand using most of the stuff I know. Take a look around!</p>
        </CardText>
      </Card>
    );
  }
}
