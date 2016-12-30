import React from 'react';
import './_footer.scss';
import LeftGutter from '../components/Footer/left-gutter';
import RightGutter from '../components/Footer/right-gutter';


const Footer = () => (
  <footer className="md-cell--12 app-footer">
    <div className="md-grid">
      <div className="footer-header md-cell--12">
        <h1 className="md-title md-text-center">Here be the Footer</h1>
      </div>
      <LeftGutter />
      <RightGutter />
    </div>
  </footer>
);


export default Footer;
