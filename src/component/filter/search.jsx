import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByValue } from '../../actions/index'

class SearchFilter extends Component {

    filterByInput(e) {
        this.props.dispatch(filterByValue({ value: e.target.value }));
    }

    render = () => {
        return (
            <>
                <div className="d-md-flex align-items-md-center">
                    <div className="col-6">
                        <div className="h3">Myntra Clone</div>
                    </div>
                    <div className="col-6">
                        <input
                            onChange={(e) => {
                                this.filterByInput(e);
                            }}
                            style={{ width: "100%" }}
                            placeholder="  Search"
                            type="text"
                        />
                    </div>
                </div>
                <br />
                <br />
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        eCommerce: state.eCommerce.data,
        err: state.eCommerce.err,
        isLoading: state.eCommerce.isLoading,
        value: state.value
    };
}

export default connect(mapStateToProps, null)(SearchFilter);