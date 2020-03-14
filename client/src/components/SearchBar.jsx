import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({searchValue: e.target.value})
       
    }

    handleSubmit(e) {
        this.props.handleSearch(this.state.searchValue)
        this.clearForm()
    }

    clearForm() {
        this.setState({searchValue: ''})
    }


    render() {
        return (
        <div className={"searchBar"}>
                <div className="search_line"> <a className="teal">★ </a>4.85 | 10 <a className='thin_review'>reviews</a> </div>
                <div className="search_line">
                    <form onSubmit={e => { e.preventDefault(); this.handleSubmit(e)}} ><input value={this.state.searchValue} onChange={this.handleChange} className="searchInput"name="search" type="text"></input></form>
                </div>
        </div>)
    }
}

export default SearchBar