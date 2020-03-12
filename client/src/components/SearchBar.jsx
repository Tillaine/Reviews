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
            <div>
                <span className={"star"}>★</span> <span>4.85</span> <span>10 reviews</span><input name="search" type="text"></input>
            </div>
        </div>)
    }
}

export default SearchBar