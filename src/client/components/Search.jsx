import React, {Component} from 'react'

class Search extends Component {
  searchParams(){
    const searchValue = this.searchValue.value;
    this.props.searchUpdate(searchValue);
  }

  render() {
    return (
      <div className="search-container u-full-width">
        <form className="search-form u-full-width">
        <input className="search-input" type="text" ref={ (value) => this.searchValue = value } placeholder="Search" onChange={this.searchParams.bind(this)} />
        </form>
      </div>
    )
  }
}

export default Search;
