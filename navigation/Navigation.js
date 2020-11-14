import React from 'react';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

import AccountScreen from '../screens/AccountScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AuthenticationStack = createStackNavigator();
const SecondStack = createStackNavigator();

export const RootNavigator = (navigation) =>  (
            <AuthenticationStack.Navigator>
                <AuthenticationStack.Screen name='signup' component={SignupScreen}/>
                <AuthenticationStack.Screen name='signin' component={SigninScreen}/>
            </AuthenticationStack.Navigator>
    );


export const MainNavigator = ({navigation}) => (
    <SecondStack.Navigator headerMode='none'>
        <SecondStack.Screen name="AccountScreen" component={AccountScreen} />
        <SecondStack.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
    </SecondStack.Navigator>
);


