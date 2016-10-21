import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    static propTypes = {
        books: React.PropTypes.array
    }

    renderList = () => {
        return this.props.books.map(book => {
            return (
                <li key={book.id}>{book.title}</li>
            );
        });
    }

    render = () => {
        return (
            <ul className="list-group col-sm-4">{this.renderList()}</ul>
        );
    }
}

function mapStateToProps(state) {
    // in the upper component BookList will show up as this.props.books
    return {
        books: state.books
    };
}

// the binding of BookList
export default connect(mapStateToProps)(BookList);
