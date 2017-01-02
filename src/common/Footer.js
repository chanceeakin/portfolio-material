import React from 'react';
import './_footer.scss';
import LeftGutter from '../components/Footer/left-gutter';
import RightGutter from '../components/Footer/right-gutter';
import BottomFooter from '../components/Footer/bottom-footer';


const Footer = () => (
  <footer className="md-cell--12 app-footer">
    <div className="md-grid">
      <LeftGutter />
      <RightGutter />
      <BottomFooter />
    </div>
  </footer>
);


export default Footer;
