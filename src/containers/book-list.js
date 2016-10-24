import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

    static propTypes = {
        books: React.PropTypes.array
    }

    renderList = () => {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.id}
                    className="list-group-item"
                >
                    {book.title}
                </li>
            );
        });
    }

    render = () => {
        return (
            <div>
                <ul className="col-sm-4 list-group">{this.renderList()}</ul>
            </div>
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
