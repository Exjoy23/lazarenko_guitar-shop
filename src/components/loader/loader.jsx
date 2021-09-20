import React from 'react';
import ContentLoader from 'react-content-loader';

function Loader(props) {
  return (
    <ContentLoader
      speed={2}
      width={220}
      height={304}
      viewBox="0 0 220 304"
      backgroundColor="#C1C1C1"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="15" y="214" rx="0" ry="0" width="85" height="15" />
      <rect x="15" y="233" rx="0" ry="0" width="93" height="17" />
      <rect x="15" y="261" rx="0" ry="0" width="90" height="23" />
      <rect x="115" y="261" rx="0" ry="0" width="90" height="23" />
      <rect x="145" y="232" rx="0" ry="0" width="60" height="16" />
      <rect x="15" y="5" rx="0" ry="0" width="190" height="203" />
    </ContentLoader>
  );
}

export { Loader };
