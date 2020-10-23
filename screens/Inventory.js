import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from "@react-native-community/picker";
import {
  Body,
  Button,
  Fab,
  Header,
  Icon,
  Left,
  Right,
  Tab,
  TabHeading,
  Tabs,
  Title,
} from 'native-base';

import Colors from '../constants/Colors';

const INVENTORY = [
  {
    id: 1,
    title: 'Coke (35cl)',
    desc: '1000 in stock',
    amount: 'N120',
    image: '',
  },
  {
    id: 2,
    title: 'Coke (35cl)',
    desc: '1000 in stock',
    amount: 'N120',
    image: '',
  },
  {
    id: 3,
    title: 'Coke (35cl)',
    desc: '1000 in stock',
    amount: 'N120',
    image: '',
  },
  {
    id: 4,
    title: 'Coke (35cl)',
    desc: '1000 in stock',
    amount: 'N120',
    image: '',
  },
  {
    id: 5,
    title: 'Coke (35cl)',
    desc: '1000 in stock',
    amount: 'N120',
    image: '',
  },
  {
    id: 6,
    title: 'Coke (35cl)',
    desc: '1000 in stock',
    amount: 'N120',
    image: '',
  },
  {
    id: 7,
    title: 'Coke (35cl)',
    desc: '1000 in stock',
    amount: 'N120',
    image: '',
  },
];

const CATEGORIES = [
  {
    id: 1,
    title: 'Processed',
    amount: '5 Items',
  },
  {
    id: 2,
    title: 'Vegetable',
    amount: '5 Items',
  },
  {
    id: 3,
    title: 'Spice',
    amount: '5 Items',
  },
];

const DISCOUNTS = [
  {
    id: 1,
    title: 'Coke (35cl)',
    amount: '10%',
    image: '',
  },
];

export default function Inventory({openDrawer}) {
  const ListItem = ({item}) => {
    return (
      <View style={styles.listItemWrap}>
        {item.image !== undefined ? (
          <View style={styles.listImageWrap}></View>
        ) : (
          <></>
        )}

        <View style={styles.listItemContent}>
          <View style={styles.listItemDetailsLeft}>
            <Text style={styles.listItemTitle}>{item.title}</Text>
            {item.desc !== undefined ? (
              <Text style={styles.listItemDesc}>{item.desc}</Text>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.listItemDetailsRight}>
            <Text style={styles.listItemRightText}>{item.amount}</Text>
          </View>
        </View>
      </View>
    );
  };

  const ItemsTab = () => {
    return (
      <View style={{flex: 1}}>
      <View>
        {/* <Picker /> */}
      </View>
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.pb30}>
          <View>
            {INVENTORY.map((item) => {
              return <ListItem key={item.id} item={item} />;
            })}
          </View>
        </ScrollView>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: Colors.primary}}
          position="bottomRight"
          onPress={() => console.log('Create new inventory item')}>
          <Icon name="add" />
        </Fab>
      </View>
    );
  };

  const CategoriesTab = () => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content} contentContainerStyle={styles.pb30}>
          <View>
            {CATEGORIES.map((item) => {
              return <ListItem key={item.id} item={item} />;
            })}
          </View>
        </ScrollView>
          <Fab
            direction="up"
            containerStyle={{}}
            style={{backgroundColor: Colors.primary}}
            position="bottomRight"
            onPress={() => console.log('Create new inventory item')}>
            <Icon name="add" />
          </Fab>
      </View>
    );
  };

  const DiscountsTab = () => {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content} contentContainerStyle={styles.pb30}>
          <View>
            {DISCOUNTS.map((item) => {
              return <ListItem key={item.id} item={item} />;
            })}
          </View>
        </ScrollView>
          <Fab
            direction="up"
            containerStyle={{}}
            style={{backgroundColor: Colors.primary}}
            position="bottomRight"
            onPress={() => console.log('Create new inventory item')}>
            <Icon name="add" />
          </Fab>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header style={{backgroundColor: Colors.primary}} hasTabs>
        <Left>
          <Button transparent onPress={openDrawer}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title uppercase>Inventory</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
      <Tabs tabContainerStyle={{backgroundColor: Colors.primary}}>
        <Tab
          heading={
            <TabHeading>
              <Icon name="list-outline" type="Ionicons" />
              <Text style={styles.tabTitle}>Items</Text>
            </TabHeading>
          }
          tabStyle={{backgroundColor: Colors.primary}}>
          <ItemsTab />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="grid" type="Entypo" />
              <Text style={styles.tabTitle}>Categories</Text>
            </TabHeading>
          }>
          <CategoriesTab />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="tag-outline" type="MaterialCommunityIcons" />
              <Text style={styles.tabTitle}>Discount</Text>
            </TabHeading>
          }>
          <DiscountsTab />
        </Tab>
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    // flex: 1,
    backgroundColor: '#F7F9FB',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  tabTitle: {
    color: '#fff',
    marginLeft: 10,
  },
  listItemWrap: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listImageWrap: {
    height: 45,
    width: 45,
    backgroundColor: Colors.mutedText + '70',
    borderRadius: 8,
  },
  listItemContent: {
    marginLeft: 20,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#313131',
    paddingRight: 10,
    marginLeft: 10,
    paddingBottom: 15,
  },
  listItemDetailsLeft: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItemDesc: {
    fontSize: 13,
  },
  listItemRightText: {
    fontSize: 16,
    color: '#000',
  },
  pb30: {
    paddingBottom: 30,
  }
});