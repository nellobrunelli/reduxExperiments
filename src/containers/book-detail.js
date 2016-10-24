import { connect } from 'react-redux';

class BookDetails extends React.Component {

    static propTypes = {
        activeBook: React.PropTypes.object
    }

    getDom = () => {
        return this.props.activeBook ? (
            <h2>{this.props.activeBook.title}</h2>
        ) : (
            <h1>{'No book selected'}</h1>
        );
    }

    render = () => {
        return (
            <div>
                {this.getDom()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    };
}

// the binding of BookDetails
export default connect(mapStateToProps)(BookDetails);
