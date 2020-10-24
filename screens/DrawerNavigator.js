import React, {createRef} from 'react';
import {Drawer} from 'native-base';
import {View, Text} from 'react-native';
import SideBar from '../components/SideBar';
import {useNavigation} from '@react-navigation/native';
import Main from './Main';
import SalesReceipt from './SalesReceipt';
import Inventory from './Inventory';
import AddEdit from './AddEdit';

export default function DrawerNavigator() {
  // const navigator = useNavigation();

  let drawer = createRef();

  const closeDrawer = () => {
    drawer._root.close();
  };

  const openDrawer = () => {
    drawer._root.open();
  };

  return (
    <Drawer
      ref={(ref) => (drawer = ref)}
      content={<SideBar />}
      openDrawerOffset={0.55}
      panCloseMask={0}
      onClose={() => closeDrawer()}>
      {/* <Main closeDrawer={closeDrawer} openDrawer={openDrawer} /> */}
      {/* <SalesReceipt closeDrawer={closeDrawer} openDrawer={openDrawer} /> */}
      {/* <Inventory closeDrawer={closeDrawer} openDrawer={openDrawer} /> */}
      <AddEdit closeDrawer={closeDrawer} openDrawer={openDrawer} />
    </Drawer>
  );
}
