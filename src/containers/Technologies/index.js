import React, { PureComponent, PropTypes } from 'react';
import TechIcon from '../../components/Technologies/tech-icon';
import './_technologies.scss';
import { bootstrap, bower, css3, foundation, git, heroku, html5, jquery, js, mongoDB, node, react, redux, sass, webpack } from '../../constants/tech-icons';

// tech icon file imports

export default class Home extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [js, node, react, redux, mongoDB, sass, webpack, bootstrap, bower, css3, foundation, git, heroku, html5, jquery],
      loading: false,
      count: 0,
    };
    this._renderElement.bind(this);
  }

  _renderElement(el) {
    return (
      <TechIcon src={el} key={el.title} />
    );
  }

  render() {
    return (
      <div className="md-grid md-cell--12 footer-push tech">
        <div className="md-cell--12">
          <h1 className="md-text-container md-text-center">Tech I use</h1>
        </div>
        {this.state.items.map(item =>
          this._renderElement(item)
        )}
      </div>
    );
  }
}
