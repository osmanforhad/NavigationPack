import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContentSidebar from './CustomDrawerContentSidebar';
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import About from '../screens/About';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContentSidebar {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
      <Drawer.Screen name="About" component={About}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;