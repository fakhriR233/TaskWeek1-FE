import React, { Component } from "react";
import CobaPage from "./CobaPage";

export class Coba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kendaraan: "Motor",
    };
  }

  handleClick = (kendaraan_baru) => {
    this.setState({
      kendaraan: kendaraan_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.kendaraan}</h2>
        <button onClick={() => this.handleClick("Mobil")}>Ubah</button>

        <CobaPage
          kendaraan={this.state.kendaraan}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Coba;
