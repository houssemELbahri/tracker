import React from 'react';
import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthenticationStack = createStackNavigator();

const mainNavigation = () => {
    return (
        <NavigationContainer>
            <AuthenticationStack.Navigator>
                <AuthenticationStack.Screen name='signup' component={SignupScreen}/>
                <AuthenticationStack.Screen name='signin' component={SigninScreen}/>
            </AuthenticationStack.Navigator>
        </NavigationContainer>
    );
};

export default mainNavigation;