import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MetaData from '../../components/MetaData/MetaData';
import logo from '../../assets/logo.png';
import getItems from '../../components/Helpers/Helpers';

class Header extends Component {
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
      <div className="header">
        <MetaData title={items.title} desccription={items.description} />
        <div className="App-logo"><NavLink exact to="/"><img src={logo} alt="logo" /></NavLink></div>
        <nav className="Nav-Desktop">
          {
            items.map((item, i)=> (
              <div key={i}>
                {
                item.links.map(nav => (
                  <NavLink
                    key={nav.id}
                    exact
                    to={nav.url}
                  >
                    {nav.text}
                  </NavLink>
                ))
                }
              </div>
            ))
          }
          {
            items.map(item => (
              <div key={item}>
                <a href={item.mainContact.phoneHref + item.mainContact.phone}>
                  <i className="fa fa-phone" />
                  <strong> {item.mainContact.phone}</strong>
                </a>
              </div>
            ))
          }
        </nav>
      </div>
    );
  }
}
export default Header;
