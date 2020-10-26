/**
 * POS App
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {Root, StyleProvider} from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Login from './screens/Login';
import Navigation from './screens/Navigation';

import getTheme from './native-base-theme/components';
import variables from './native-base-theme/variables/variables'

const App = () => {
  return (
    // <Root>
    //     {/* <Login /> */}
    //   {/* <NavigationContainer>
    //     <DrawerNavigator />
    //   </NavigationContainer> */}
    //   {/* {Platform.OS == "android" && <StatusBar backgroundColor={"#308bcc"} />} */}
    //   <Navigation />
    // </Root>
    <Root>
      <StyleProvider style={getTheme(variables)}>
          <Navigation />
      </StyleProvider>
    </Root>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
