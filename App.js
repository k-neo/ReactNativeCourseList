import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Main from './screens/Main'
import Normal from './screens/Normal'
import Section from './screens/Section'
import Dynamic from './screens/Dynamic'
import Flat from './screens/Flat'

const MainNavigation = createStackNavigator(
  {
    Main: { screen: Main },
    Normal: { screen: Normal },
    Section: { screen: Section },
    Dynamic: { screen: Dynamic },
    Flat: { screen: Flat },
  },
  {initialRouteName: 'Main', headerMode: 'none'}
)
const AppContainer = createAppContainer(MainNavigation);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer 
        ref = {nav => {this.navigator = nav;}}
      />
    );
  }
}