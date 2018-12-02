import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getBooks } from '../actions';

import BookItem from '../widgetsUI/book_item';

class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getBooks(5,0,'desc'));
    }

    renderItems = (books) => (
        books.list ? 
            books.list.map(item => (
                <BookItem {...item} key={item._id}/>
            ))
        : null
    )

    loadmore = () => {
        let count = this.props.books.list.length;
        this.props.dispatch(getBooks(3,count,'desc', this.props.books.list))
    }

    render() {
        return (
            <div className="container mb-5">
                {this.renderItems(this.props.books)}
                <div 
                    className="loadmore mb-5"
                    onClick={this.loadmore}
                >Load More</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(HomeContainer);