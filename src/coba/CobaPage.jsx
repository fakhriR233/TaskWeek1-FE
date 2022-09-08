import PropTypes from "prop-types";
import React, { Component } from "react";
// import Coba from "./Coba";

export class CobaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kendaraan: "Motor",
    };
  }

  render() {
    return (
      <div>
        <h2>Coba Operan: {this.props.kendaraan}</h2>
        <button onClick={() => this.props.handleClick("Soto")}>Ubah</button>
      </div>
    );
  }
}

export default CobaPage;
