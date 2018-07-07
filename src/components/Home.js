import React, { Component } from "react";
import Master from "./layouts/Master";
import { Text } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Master>
        <Text>This is homepage</Text>
      </Master>
    );
  }
}

export default Home;
