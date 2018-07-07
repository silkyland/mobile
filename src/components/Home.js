import React, { Component } from "react";
import Master from "./layouts/Master";
import Axios from "axios";
import config from "../config";
import {
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Text,
  Button
} from "native-base";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  async componentDidMount() {
    let messages = await Axios.get(config.server.api + "/messages");
    this.setState({ messages: messages.data });
  }

  render() {
    return (
      <Master>
        <List>
          {this.state.messages.map(item => (
            <ListItem thumbnail key={item._id}>
              <Left>
                <Thumbnail
                  square
                  source={{ uri: "https://via.placeholder.com/64x64" }}
                />
              </Left>
              <Body>
                <Text>{item.userId} </Text>
                <Text note numberOfLines={1}>
                  {item.message}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      </Master>
    );
  }
}

export default Home;
