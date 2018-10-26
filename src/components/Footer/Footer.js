import React, {Component} from 'react';

import getItems from '../../components/Helpers/Helpers';

class Footer extends Component {
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
          <footer key={i}>
            &copy; Copyright&nbsp;
            {item.title}&nbsp;
            {(new Date().getFullYear())}
          </footer>
        ))
      }
      </div>
    );
  }
}
export default Footer;
