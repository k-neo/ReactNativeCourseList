import React, {Component} from 'react';
import { FlatList } from "react-native";
import { Container, Header, Left, Body, Right, Title, Button } from 'native-base';
import { Content, ListItem, Text, Icon } from 'native-base';

type Props = {};
export default class Flat extends Component<Props> {
  constructor() {
    super();
    this.items = [];

    for (i = 1; i < 1000; i++) {
      let key = ( "0" + i ).substr(-3);
      item ={key: key, label: "Item" + key}
      this.items.push(item);
    }
  }

  renderItem = ({ item }) => {
    return (
      <ListItem style={{ marginLeft: 0 }}>
        <Body>
          <Text>{item.label}</Text>
        </Body>
      </ListItem>
    );
  };
  render() {
    return (
      <Container>
       <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>FlatList</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <FlatList
          data={this.items}
          renderItem={({item}) =>
            <ListItem>
              <Text>{item.label}</Text>
            </ListItem>
          }
          keyExtractor={item => item.key}
        />
        </Content>
      </Container>
    );
  }

}