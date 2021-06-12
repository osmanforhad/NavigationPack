import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <View style={{
      flex:1,
          marginTop:2,
           marginHorizontal:2
    }}>
<AntDesign name="bars" size={24} color="black"
       onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>

      <View style={styles.center}>
      <Text>This is the home screen</Text>
      </View>

      <View style={{marginTop:10}}>
      <Button title="Go to About Screen"
        onPress={() => navigation.navigate("About")}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop:200
  },
});

export default Home;