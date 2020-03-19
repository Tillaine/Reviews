import React from 'react';

class PageButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
       return( <li className='pageLi'>
            <button onClick={this.props.handlePageClick} className='pageButton' value={this.props.pageNumber}> {this.props.pageNumber} </button>
        </li>
           )    }
}

export default PageButton