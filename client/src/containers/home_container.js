import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getBooks } from '../actions';

class HomeContainer extends Component {
    componentDidMount(){
        this.props.dispatch(getBooks(6,0,'desc'));
    }

    render() {
        console.log(this.props)
        return (
            <div>
                Home Items
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