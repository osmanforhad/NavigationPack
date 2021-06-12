import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


function CustomDrawerContentSidebar(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem style={{
          marginTop:450
        }}
          label="X Close"
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
        />
      </DrawerContentScrollView>
    );
  }

export default CustomDrawerContentSidebar;