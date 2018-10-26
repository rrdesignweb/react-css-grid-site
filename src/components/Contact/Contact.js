import React, { Component } from 'react';

import getItems from '../../components/Helpers/Helpers';
import PageHeader from '../../components/PageHeader/PageHeader';

class Contact extends Component {
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
        items.map(item => (
          <PageHeader key={item} heading={item.contactHeader} />
        ))
        }
      </div>
    );
  }
}
export default Contact;
