import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/TableAction';
import ReactTable from "react-table";
import "react-table/react-table.css";
class HomePage extends Component {


    componentDidMount() {
        this.props.fetchData('http://api.tvmaze.com/search/shows?q=girl');
    }

    render() {
        const columns=[
            {
                Header: "First Name",
                accessor: "name"
            },
            {
                Header: "Language",
                accessor: "language"
            },
            {
                Header: "Genres",
                accessor: "genres"
            },
            {
                Header: "Status",
                accessor: "status"
            },
            {
                Header: "Rating",
                accessor: "rating.average"
            },

    ]


        return (
            <div className="HomePage">
                <ReactTable
                    data={this.props.items}
                    columns={columns}
                    defaultPageSize={15}
                    pageSizeOptions = {[10, 15]}
                    getTableProps={(table) => {
                        return {
                            style: {
                                paddingTop: table = "50px"
                            }
                        }
                    }
                    }

                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('items', state.items)
    return {
        items: state.items,
        // hasErrored: state.hasErrored,
        // isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
