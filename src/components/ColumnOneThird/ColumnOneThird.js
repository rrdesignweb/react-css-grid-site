import React from 'react';

const ColumnOneThird = props => (
  <div>
    <h1 className="h1">{props.number}</h1>
    <h3 className="h3">{props.heading}</h3>
    <p>{props.text}</p>
  </div>
);
export default ColumnOneThird;
