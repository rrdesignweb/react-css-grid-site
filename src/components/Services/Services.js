import React, { Component } from 'react';
import styles from './Services.module.css';
import getItems from '../../components/Helpers/Helpers';
import PageHeader from '../../components/PageHeader/PageHeader';

class Services extends Component {
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
          <div key={i}>
            <PageHeader
              heading={item.servicesHeader}
              style={styles.h1Services}
            />
            <p className="p-center">
              {item.servicePage.paragraphOne}
            </p>
          </div>
        ))
        }
      </div>
    );
  }
}
export default Services;
