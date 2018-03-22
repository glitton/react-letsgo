import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'term': '',
      'location': '',
      'sortBy': 'best_match',
    };

    // const initialState = JSON.parse(JSON.stringify(this.state));

    // this.getSortByClass = this.getSortByClass.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // this.resetForm= this.resetForm.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

   getSortByClass(sortByOption) {
     if(this.state.sortBy === sortByOption) {
       return 'active';
     } else {
       return '';
     }
   }

   handleSortByChange(sortByOption) {
     this.setState({ sortBy: sortByOption })
   }

   handleTermChange(event) {
     this.setState({ term: event.target.value })
   }

   handleLocationChange(event) {
     this.setState({ location: event.target.value })
   }

   handleSearch(event) {
     event.preventDefault();
     this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    }

    // resetForm = () => {
    //   this.setState(this.initialState);
    //   console.log('initial state ' + JSON.stringify(initialState))
    // }


  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                  className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  >
                {sortByOption}
              </li>
      );
    });
  }

  render() {
    console.log()
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Show Me</a>
          <a onClick={this.resetForm}>Clear</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;