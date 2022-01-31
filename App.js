import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

// @store
import store from './src/store';

// @screens
import HomeScreen from './src/containers/home';

import SplashScreen from 'react-native-splash-screen';
import {Platform, StatusBar} from 'react-native';
import {pallet} from './src/theme';

const App = () => {
  useEffect(() => {
    Platform.OS !== 'ios' ? SplashScreen.hide() : null;
  }, []);

  return (
    <>
      <StatusBar backgroundColor={pallet.primaryColor} />
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </>
  );
};

export default App;
