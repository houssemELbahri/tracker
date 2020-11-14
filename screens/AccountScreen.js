import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AccountScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Account Screen</Text>
            <Button 
                title="Go to Track create Screen"
                onPress={() => navigation.navigate("TrackCreateScreen")}
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


export default AccountScreen;