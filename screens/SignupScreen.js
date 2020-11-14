import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput } from 'react-native';

import { AuthContext } from '../components/Context';

const SignupScreen = ({navigation}) => {

    const { signUp } = React.useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.mainContainer}>
            <Text>Signup Screen</Text>
            <TextInput 
                placeholder="your email" 
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <TextInput 
                placeholder="your password" 
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button 
                title="Go to sign in "
                onPress={ async() => {
                    try {
                        await signUp({email, password});
                        navigation.navigate("signin");
                    } catch (error) {
                        console.log(error);
                    }
                }}
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

/**navigation.navigate("signin") */