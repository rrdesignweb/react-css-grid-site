import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../containers/App.css';
import getItems from '../components/Helpers/Helpers';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Faq from '../components/Faq/Faq';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    getItems.call(this);
  }

  applyBg = () => {
    const bgstyle = {};
    if(window.location.pathname === '/services') {
        bgstyle.fill = {
            backgroundColor: '#62af34',
        }
        return bgstyle.fill;
    }
  }
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div style={this.applyBg()}>
            <Header />
              <main className="content">
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames='fade'
                  appear= {true}
                  exit={false}
                  onEnter = {() => {
                      window.scrollTo(0, 0)
                  }}
                >
                <Switch location={location}>
                  <Route exact path="/" component={About} />
                  <Route path="/services" component={Services}/>
                  <Route path="/faq" component={Faq} />
                  <Route path="/testimonials" component={Testimonials} />
                  <Route path="/contact" component={Contact} />
                </Switch>
                </CSSTransition>
              </TransitionGroup>
              </main>
            <Footer />
          </div>
        )}/>
      </Router>
    );
  }
}
export default App;
