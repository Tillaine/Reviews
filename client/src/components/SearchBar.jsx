import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
    }

    render() {
        return (<div className={"searchBar"}>
                <div className="search_line"> <a className="teal">★ </a>4.85 | 10 reviews</div>
                <div className="search_line"><input className="searchInput"name="search" type="text"></input></div>
        </div>)
    }
}

export default SearchBar