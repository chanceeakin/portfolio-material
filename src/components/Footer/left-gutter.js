import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

const LeftGutter = () => (
  <div className="md-cell md-cell--4 md-cell--4-phone left-gutter">
    <h3 className="md-title md-text-center">Info</h3>
    <ul className="fa-ul md-text-center">
      <a className="fa-icon" href="https://www.github.com/chanceeakin"><FontIcon iconClassName="fa fa-github" /></a>
      <a className="fa-icon" href="https://www.linkedin.com/in/chanceeakin"><FontIcon iconClassName="fa fa-linkedin" /></a>
      <a className="fa-icon" href="http://stackoverflow.com/users/6016389/chance-eakin"><FontIcon iconClassName="fa fa-stack-overflow" /></a>
    </ul>
  </div>
);


export default LeftGutter;
