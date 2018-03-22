import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './utils/Yelp';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    if (!term || !location) {
      alert('Please enter a search term and location');
    } else {
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({ businesses })
      });
    }
  }

  render() {
    // console.log(this.state.businesses)
    return (
      <div className="App">
        <h1>Find It!</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
