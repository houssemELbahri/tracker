/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import {AsyncStorage} from '@react-native-community/async-storage';
import { AuthContext } from './components/Context';

import {RootNavigator, MainNavigator} from './navigation/Navigation';

import trackerApi from './api/tracker';

const App: () => React$Node = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

const authContext = React.useMemo(() => ({
  signIn: async(foundUser) => {
    // setUserToken('fgkj');
    // setIsLoading(false);
    //const userToken = String(foundUser[0].userToken);
    //const userName = foundUser[0].username;
    
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch(e) {
      console.log(e);
    }
    // console.log('user token: ', userToken);
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
  },
  signOut: async() => {
    // setUserToken(null);
    // setIsLoading(false);
    try {
      await AsyncStorage.removeItem('userToken');
    } catch(e) {
      console.log(e);
    }
    dispatch({ type: 'LOGOUT' });
  },
  signUp: async(email, password) => {
    try{
      const response = await trackerApi.post('/signup', { email, password});
      console.log(response.data);
    } catch(err){
      console.log('taraji ya dawla');
      console.log(err.message);
    }
  },
}), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
  return (
    <>
        <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          { loginState.userToken !== null ? (
            <MainNavigator/>
          )
        :
          <RootNavigator/>
        }
        </NavigationContainer>
        </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
