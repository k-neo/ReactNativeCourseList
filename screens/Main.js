import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import { Content, List, ListItem, Text, Icon } from 'native-base';

type Props = {};
export default class Main extends Component<Props> {
  push = (to) => {
    const { navigation } = this.props
    navigation.navigate(to)
  }  
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>タイトル</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem first onPress={() => this.push('Normal')}>
              <Left>
                <Text>ノーマル</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.push('Section')}>
              <Left>
                <Text>セクション</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.push('Dynamic')} last>
              <Left>
                <Text>ダイナミック</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => this.push('Flat')} last>
              <Left>
                <Text>FlatList</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
           </List>
        </Content>
      </Container>
    );
  }
}
