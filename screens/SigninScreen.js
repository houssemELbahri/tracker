import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { AuthContext } from '../components/Context';

const SignupScreen = ({navigation}) => {

    const { signIn } = React.useContext(AuthContext);

    return (
        <View style={styles.mainContainer}>
            <Text>Signin Screen</Text>
            <Button 
                title="Back to sign up "
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default SignupScreen;