import React, { Component } from 'react';
import Index from './component/index'
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { fetchCharacters } from "./actions/index";

class App extends Component {

  componentDidMount = () => {
    const { fetchCharacters } = this.props;
    fetchCharacters();
  };

  render() {
    return (
      <>
        <Index />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  eCommerce: state.eCommerce.data,
  err: state.eCommerce.err,
  isLoading: state.eCommerce.isLoading
});
const mapDispatchToProps = {
  fetchCharacters
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

