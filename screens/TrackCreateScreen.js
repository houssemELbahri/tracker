import React from 'react';
import { View, Text, Button,  StyleSheet } from 'react-native';

const TrackCreateScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Track Create Screen</Text>
            <Button 
                title="Back to Account Screen "
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: "center",
    },
});


export default TrackCreateScreen;