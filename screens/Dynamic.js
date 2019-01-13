import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Right, Body, Text, Title, Button, Icon } from 'native-base';

export default class DynamicListExample extends Component {
  constructor(props){
    super(props);

    this.items = [];

    for (i = 1; i < 100; i++) {
      let label = ( "0" + i ).substr(-3);
      this.items.push(label);
    }
  }

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
            <Title>ダイナミック</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List dataArray={this.items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
}