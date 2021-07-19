import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByBrands } from '../../actions/index'

class BrandsFilter extends Component {

    constructor() {
        super();
        this.state = {
            name: "React",
            brandArray: [],
        };
        this.onChangeCheck = this.onChangeCheck.bind(this);
    }

    onChangeCheck(event) {
        let newArray = [...this.state.brandArray, event.target.name];
        if (this.state.brandArray.includes(event.target.name)) {
            newArray = newArray.filter(day => day !== event.target.name);
        }
        this.setState({
            brandArray: newArray
        }, () => {
            this.setState({ brandArray: newArray })
            this.props.dispatch(filterByBrands({ value: this.state.brandArray }));
        });
    }

    render = () => {
        const { eCommerce, err, isLoading } = this.props;
        return (
            <>
                {err && <div>An error occurred. Message: {err.message}</div>}
                {isLoading && <p>Loading...</p>}
                <div className="py-3">
                    <h5 className="font-weight-bold">Brands</h5>
                    <form className="brand">
                        {eCommerce && (
                            <>
                                {eCommerce.length === 0 && (
                                    <p>No Data</p>
                                )}
                                {eCommerce.slice(0, 5).filter((element, index) => index === eCommerce.findIndex(elem => elem.brand === element.brand)).map((character) => (
                                    <>
                                        <div className="form-inline d-flex align-items-center py-1">
                                            <label className="tick">
                                                {character.brand}
                                                <input type="checkbox" onChange={this.onChangeCheck} name={character.brand} />
                                                <span className="check" />
                                            </label>
                                        </div>
                                        <br />
                                    </>
                                ))}
                            </>
                        )}
                    </form>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        eCommerce: state.eCommerce.data,
        err: state.eCommerce.err,
        isLoading: state.eCommerce.isLoading,
        Categoryvalue: state.value
    };
}

export default connect(mapStateToProps, null)(BrandsFilter);