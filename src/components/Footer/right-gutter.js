import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

const RightGutter = () => (
  <div className="md-cell md-cell--8 md-cell--4-phone right-gutter">
    <h3 className="md-title md-text-center">Contact</h3>
    <ul className="fa-ul md-text-center">
      <a className="fa-icon" href="https://www.instagram.com/chanceeakin"><FontIcon iconClassName="fa fa-instagram" /></a>
      <a className="fa-icon" href="http://twitter.com/chanceeakin"><FontIcon iconClassName="fa fa-twitter" /></a>
      <a className="fa-icon" href="mailto:chance.eakin@gmail.com"><FontIcon iconClassName="fa fa-envelope-o" /></a>
    </ul>
  </div>
);


export default RightGutter;
