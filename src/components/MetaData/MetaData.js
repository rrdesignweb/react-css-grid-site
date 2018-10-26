import React from 'react';
import MetaTags from 'react-meta-tags';

const MetaData = props => {
    return (
      <MetaTags>
          <title>{props.title}</title>
          <meta name="description" content={props.description} />
          <meta property="og:title" content={props.title} />
      </MetaTags>
    );
}
export default MetaData;
