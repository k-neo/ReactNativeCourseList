import React, {Component} from 'react';
import { Container, Header, Left, Body, Right, Title, Button } from 'native-base';
import { Content, List, ListItem, Text, Icon, Switch, Thumbnail } from 'native-base';

type Props = {};
export default class App extends Component<Props> {
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
            <Title>ノーマル</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem first>
              <Left>
                <Text>Accessory:none</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Accessory:Disclosure Indicator</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Accessory:Checkmark</Text>
              </Left>
              <Right>
                <Icon type="Octicons" name="check" style={{fontSize: 20, color:'blue'}}/>
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="wifi" />
                </Button>
              </Left>
              <Body>
                <Text>Icon</Text>
              </Body>
              <Right>
                <Switch value={false} />
              </Right>

            </ListItem>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={ require('../images/face.jpg') } />
              </Left>
              <Body>
                <Text>Thumbnail</Text>
                <Text note numberOfLines={1}>サムネイルの説明</Text>
              </Body>
            </ListItem>
            <ListItem last>
              <Left>
                <Text>Last</Text>
              </Left>
            </ListItem>
           </List>
        </Content>
      </Container>
    );
  }
}
