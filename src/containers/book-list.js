import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    static propTypes = {
        books: React.PropTypes.array,
        selectBook: React.PropTypes.func
    }

    renderList = () => {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.id}
                    className="list-group-item"
                    onClick={() => {this.props.selectBook(book);}}
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

// dispatch the action to the reducers (and finally a new state will be generate)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// the binding of BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
