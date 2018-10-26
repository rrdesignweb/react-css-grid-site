import React from 'react';
import '../../containers/App.css';
import GreenLeaf from '../../assets/leaf.svg';

const PageHeader = props => {
  const h1Class = props.style;
  const classes = `${h1Class} h1`;

  return (
    <div>
      <h1 className={classes}>
        <i>{props.heading}</i>
        <br />
        <img src={GreenLeaf} className="leaf"/>
        <img src={GreenLeaf} className="leaf"/>
        <img src={GreenLeaf} className="leaf"/>
      </h1>
    </div>
  );
}
export default PageHeader;
