import React from 'react';

const ExternalLink = ({ children, href, ...otherProps }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...otherProps}>
      {children}
    </a>
  );
};

export default ExternalLink;