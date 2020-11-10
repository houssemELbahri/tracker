import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignupScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Signup Screen</Text>
            <Button 
                title="Go to sign in "
                onPress={() => navigation.navigate("signin")}
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