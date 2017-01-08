import React from 'react';
import Paper from 'react-md/lib/Papers';
import LinkCard from './link-card';

const BlogCard = () => (
  <div className="paper-container md-cell--12">
    <Paper
      zDepth={1}
      raiseOnHover={false}
      className="old"
    >
      <h3 className="md-text-center">Well, I had to make one.</h3>
      <p className="md-body-2">A few months ago, I decided to spool up a blog. Here it is.</p>
      <br />
      <h5>Tech Rundown:</h5>
      <ul>
        <li>Hexo, the blogging platform</li>
        <li>Node</li>
        <li>Markdown Rendering</li>
      </ul>
      <LinkCard />
      <h5 className="last-paragraph">Things I did, and things I learned</h5>
      <p className="md-body-2">Building with a new platform is always a challenge, but Hexo was pretty easy to plug and play!</p>
      <br />
    </Paper>
  </div>
);

export default BlogCard;
