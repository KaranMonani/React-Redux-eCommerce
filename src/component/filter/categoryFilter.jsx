import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByCategory } from '../../actions/index'

class CategoryFilter extends Component {

    constructor() {
        super();
        this.state = {
            name: "React",
            categoryArray: [],
        };
        this.onChangeCheck = this.onChangeCheck.bind(this);
    }

    onChangeCheck(event) {
        let newArray = [...this.state.categoryArray, event.target.name];
        if (this.state.categoryArray.includes(event.target.name)) {
            newArray = newArray.filter(day => day !== event.target.name);
        }
        this.setState({
            categoryArray: newArray
        }, () => {
            this.setState({ categoryArray: newArray })
            this.props.dispatch(filterByCategory({ value: this.state.categoryArray }));
        });
    }

    render = () => {
        const { eCommerce, err, isLoading } = this.props;
        return (
            <>
                {err && <div>An error occurred. Message: {err.message}</div>}
                {isLoading && <p>Loading...</p>}
                <div className="py-3">
                    <h5 className="font-weight-bold">Categories</h5>
                    <ul className="list-group">
                        <form className="brand">
                            {eCommerce && (
                                <>
                                    {eCommerce.length === 0 && (
                                        <p>No Data</p>
                                    )}
                                    {eCommerce.slice(0, 5).filter((element, index) => index === eCommerce.findIndex(elem => elem.category === element.category)).map((character) => (
                                        <>
                                            <div className="form-inline d-flex align-items-center py-1">
                                                <label className="tick" >
                                                    {character.category}
                                                    <input type="checkbox" onChange={this.onChangeCheck} name={character.category} />
                                                    <span className="check" />
                                                </label>
                                            </div>
                                            <br />
                                        </>
                                    ))}

                                </>
                            )}

                        </form>
                    </ul>
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

export default connect(mapStateToProps, null)(CategoryFilter);