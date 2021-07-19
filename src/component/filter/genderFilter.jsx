import React, { Component } from "react";
import { connect } from "react-redux";
import { filterByGender } from '../../actions/index'

class GenderFilter extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue(event) {
    this.props.dispatch(filterByGender({ value: event.target.value }));
  }


  render = () => {
    const { eCommerce, err, isLoading } = this.props;
    return (
      <>
        {err && <div>An error occurred. Message: {err.message}</div>}
        {isLoading && <p>Loading...</p>}
        <p>Filters</p>
        <div onChange={this.onChangeValue}>
          {eCommerce && (
            <>
              {eCommerce.length === 0 && (
                <p>No Data</p>
              )}
              {eCommerce.filter((element, index) => index === eCommerce.findIndex(elem => elem.gender === element.gender)).map((character) => (
                <>
                  <input key={character.gender} type="radio" value={character.gender} name="gender" /> {character.gender}
                  <br />
                </>
              ))}
            </>
          )}
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
    Value: state.value
  };
}

export default connect(mapStateToProps, null)(GenderFilter);