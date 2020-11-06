import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Main from './Main';
import Inventory from './Inventory';
import SalesReceipt from './SalesReceipt';
import AddEdit from './AddEdit';
import Login from './Login';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';
import UserActivity from './UserActivity';
import Users from './Users';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main" drawerContent={(props) => <SideBar {...props} />}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Inventory" component={Inventory} />
        <Drawer.Screen name="SalesReceipt" component={SalesReceipt} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="UserActivity" component={UserActivity} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="AddEdit" component={AddEdit} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
