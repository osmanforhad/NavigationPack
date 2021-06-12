import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Contact = () => {

    return(
        <View style={Styles.center}>
            <Text>This is the Contact Screen</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
    }
});

export default Contact;