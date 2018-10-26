import React, { Component } from 'react';
import styles from './About.module.css';

import getItems from '../../components/Helpers/Helpers';
import ColumnOneThird from '../../components/ColumnOneThird/ColumnOneThird';
import PageHeader from '../../components/PageHeader/PageHeader';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    getItems.call(this);
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        {
        items.map((item, i) => (
          <PageHeader key={i} heading={item.aboutHeader} />
        ))
        }
        {
        items.map((item, i) => (
          <div key={i} className={styles.Columns3}>
            {
              item.aboutPage.map((content, i) => (
                <ColumnOneThird
                  key={i}
                  number={content.number}
                  heading={content.heading}
                  text={content.text}
                />
              ))
            }
          </div>
        ))}
      </div>
    );
  }
}
export default About;
