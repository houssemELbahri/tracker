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
import AsyncStorage from '@react-native-community/async-storage';
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
  signIn: async({email, password}) => {
    
    
    try {
      await AsyncStorage.setItem('userToken', userToken);
    } catch(e) {
      console.log(e);
    }
    dispatch({ type: 'LOGIN', id: userName, token: userToken });
  },
  signOut: async() => {
    
    try {
      await AsyncStorage.removeItem('userToken');
    } catch(e) {
      console.log(e);
    }
    dispatch({ type: 'LOGOUT' });
  },
  signUp: async({email, password}) => {
    console.log("my email is ",email, "and my password",password);
    try{
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      //dispatch({ type: 'signup', token: token });
    } catch(err){
      console.log('you are in the catch bloc');
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
