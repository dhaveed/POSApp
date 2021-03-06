import { Icon } from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function SideBar({navigation}) {
  const SidebarItem = ({label, icon, last, routeName}) => {
    return (
      <TouchableOpacity
        style={styles.sidebarItem}
        onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.sidebarItemLabel}>{label}</Text>
        <Icon
          name={icon.name}
          style={styles.sidebarItemIcon}
          type={icon.type || 'MaterialIcons'}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebarHeader}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.role}>Admin</Text>
        <Text style={styles.stand}>POS 1</Text>
      </View>
      <ScrollView style={styles.sidebarItems}>
        <SidebarItem
          label="Sales"
          // icon={{name: 'shopping-pos-machine', type: 'Fontisto'}}
          icon={{name: 'point-of-sale', type: 'MaterialCommunityIcons'}}
          routeName={'Main'}
        />
        <SidebarItem
          label="Inventory"
          icon={{name: 'inventory'}}
          routeName={'Inventory'}
        />
        <SidebarItem
          label="View Sales & Receipts"
          icon={{name: 'receipt', type: 'FontAwesome5'}}
          routeName={'SalesReceipt'}
        />
        <SidebarItem label="Users" icon={{name: 'groups'}} routeName="Users" />
        <SidebarItem
          label="User Activity"
          icon={{name: 'linechart', type: 'AntDesign'}}
          routeName="UserActivity"
        />
        <SidebarItem label="Dashboard" icon={{name: 'dashboard'}} routeName="Dashboard"/>
      </ScrollView>
      <View>
        <SidebarItem label="Logout" icon={{name: 'logout'}} routeName="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  sidebarHeader: {
    elevation: 3,
    backgroundColor: '#51A8E9',
    height: Layout.window.height * 0.15,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  name: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  stand: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  sidebarItems: {
    flex: 1,
  },

  sidebarItem: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sidebarItemLabel: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sidebarItemIcon: {
    color: '#FFF',
    fontSize: 28,
  },
});
