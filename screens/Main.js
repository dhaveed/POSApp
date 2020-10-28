import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import {Row, Col} from 'react-native-responsive-grid-system';
import VirtualKeyboard from 'react-native-virtual-keyboard';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const TICKET_ITEMS = [
  {
    id: 1,
    name: 'Chicken Casserole',
    quantity: 2,
    price: 1350,
  },
  {
    id: 2,
    name: 'Doughnut',
    quantity: 1,
    price: 600,
  },
  {
    id: 3,
    name: 'Sprite (pet)',
    quantity: 1,
    price: 150,
  },
];

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Ginger (50mg)',
    price: 2000,
    image: require('./../assets/images/ginger.png')
  },
  {
    id: 2,
    name: 'Ginger (50mg)',
    price: 2000,
    image: require('./../assets/images/ginger.png')
  },
  {
    id: 3,
    name: 'Ginger (50mg)',
    price: 2000,
    image: require('./../assets/images/ginger.png')
  },
  {
    id: 4,
    name: 'Onion (50mg)',
    price: 2000,
    image: require('./../assets/images/onions.png')
  },
  {
    id: 5,
    name: 'Onion (50mg)',
    price: 2000,
    image: require('./../assets/images/onions.png')
  },
  {
    id: 6,
    name: 'Onion (50mg)',
    price: 2000,
    image: require('./../assets/images/onions.png')
  },
  {
    id: 7,
    name: 'Garlic (50mg)',
    price: 2000,
    image: require('./../assets/images/garlic.png')
  },
  {
    id: 8,
    name: 'Garlic (50mg)',
    price: 2000,
    image: require('./../assets/images/garlic.png')
  },
  {
    id: 8,
    name: 'Garlic (50mg)',
    price: 2000,
    image: require('./../assets/images/garlic.png')
  },
];

export default function Main({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const CheckoutItem = ({item}) => {
    return (
      <View style={styles.checkoutItem}>
        <View style={{flex: 0.15}}>
          <TouchableOpacity style={styles.removeButton}>
            <Icon name="trash" style={{color: '#ee6f57', fontSize: 18}} />
          </TouchableOpacity>
        </View>
        <View style={styles.tableContent}>
          <Text style={styles.checkoutItemTitle}>{item.name}</Text>
          <Text style={styles.checkoutItemQuantity}>{item.quantity}</Text>
          <Text style={styles.checkoutItemPrice}>&#8358; {item.price}</Text>
        </View>
      </View>
    );
  };

  const Product = ({item}) => {
    return (
      <TouchableOpacity style={styles.product} activeOpacity={0.7}>
        <View style={styles.productImageWrap}>
          <View style={styles.productImage}>
            <Image source={item.image} style={styles.productImage} />
          </View>
        </View>
        <View style={styles.productMetaWrap}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.productPrice}>&#8358; {item.price}.00</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const CheckoutModal = () => {
    const [modalAmount, setModalAmount] = useState('');
    return (
      <Modal visible={modalOpen} animationType="slide">
        <Header style={{backgroundColor: Colors.primary}}>
          <Left>
            <Button transparent onPress={() => setModalOpen(false)}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title uppercase>Checkout</Title>
          </Body>
        </Header>

        <View style={{alignItems: 'center', flex: 1}}>
          <View style={modalStyles.body}>
            {/* Total Section */}
            <View style={modalStyles.totalWrap}>
              <Text style={modalStyles.totalLabel}>Total amount due</Text>
              <Text style={modalStyles.total}>&#8358; 2,131.5</Text>
            </View>

            <View style={modalStyles.inputSection}>
              <View style={modalStyles.cashReceived}>
                <Text style={modalStyles.inputLabel}>Cash received</Text>
                <View style={modalStyles.inputWrap}>
                  <Icon
                    name="cash"
                    type="MaterialCommunityIcons"
                    style={{color: '#03BC77', fontSize: 38}}
                  />
                  <Text style={modalStyles.inputStyles}>{modalAmount}</Text>
                </View>
              </View>
              <View style={modalStyles.buttonWrap}>
                <TouchableOpacity
                  style={modalStyles.button}
                  activeOpacity={0.6}>
                  <Text style={modalStyles.buttonLabel}>Charge</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={modalStyles.cardButtonWrap}>
              <TouchableOpacity
                style={[modalStyles.button, {backgroundColor: '#FD79A9'}]}
                activeOpacity={0.6}>
                <Icon
                  name="credit-card"
                  type="SimpleLineIcons"
                  style={{color: '#FFF', marginRight: 10}}
                />
                <Text style={modalStyles.buttonLabel}>Card</Text>
              </TouchableOpacity>
            </View>

            <View style={modalStyles.virtualKeyboardWrap}>
              <VirtualKeyboard
                // color="dark"
                decimal={true}
                pressMode="string"
                onPress={(val) => setModalAmount(val)}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <Header style={{backgroundColor: Colors.primary}}>
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title uppercase>Sales</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
          <Button transparent>
            <Icon name="add" />
          </Button>
        </Right>
      </Header>

      <ScrollView contentContainerStyle={{ backgroundColor: "#F7F9FB", paddingHorizontal: 30,}}>
        <Row
          rowStyles={{
            flex: 1,
            maxWidth: Layout.window.width * 1,
            margin: 0,
            paddingHorizontal: 0,
            paddingVertical: 20,
          }}>
          <Col
            lg={8}
            md={12}
            sm={12}
            xs={12}
            colStyles={[styles.productsCol]}>
            <View style={styles.productsCard}>
              <View style={styles.productSearchRow}>
                <View style={styles.searchWrap}>
                  <TextInput
                    placeholder="Search items here..."
                    style={styles.searchInput}
                  />
                  <TouchableOpacity style={styles.searchButton}>
                    <Icon
                      name="search"
                      type="Ionicons"
                      style={{color: '#FFF', fontSize: 22}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView style={styles.productGridWrap}>
                <Row>
                  {ALL_PRODUCTS.map((item) => {
                    return (
                      <Col xs={6} sm={6} md={4} lg={3}>
                        <Product item={item} />
                      </Col>
                    );
                  })}
                </Row>
              </ScrollView>
            </View>
          </Col>

          <Col lg={4} md={12} sm={12} xs={12} colStyles={styles.ticketCol}>
            {/* Checkout Card */}
            <View style={{flex: 1}}>
              <View style={styles.checkoutWrap}>
                <View style={styles.checkoutTitle}>
                  <Text style={styles.checkoutTitleText}>Checkout</Text>
                </View>
                {/* Checkout Items Heading */}
                <View style={styles.checkoutTableHeading}>
                  <View style={{flex: 0.15}}></View>
                  <View style={styles.tableContent}>
                    <Text style={styles.checkoutTableHeadingItem}>Name</Text>
                    <Text style={styles.checkoutTableHeadingItem}>QTY</Text>
                    <Text style={styles.checkoutTableHeadingItem}>Price</Text>
                  </View>
                </View>

                {/* Checkout Items List */}
                {/* <View > */}
                <FlatList
                  data={TICKET_ITEMS}
                  renderItem={CheckoutItem}
                  keyExtractor={(item) => item.id.toString()}
                  style={styles.checkoutItems}
                />
                {/* </View> */}

                <View>
                  {/* Cost Section */}
                  <View style={styles.costWrap}>
                    <View style={styles.costItem}>
                      <Text style={styles.costItemText}>Discount (%)</Text>
                      <Text style={styles.costItemText}>0</Text>
                    </View>
                    <View style={styles.costItem}>
                      <Text style={styles.costItemText}>Sub Total</Text>
                      <Text style={styles.costItemText}>&#8358; 2,100</Text>
                    </View>
                    <View style={styles.costItem}>
                      <Text style={styles.costItemText}>Tax (1.5%)</Text>
                      <Text style={styles.costItemText}>&#8358; 31.5</Text>
                    </View>
                  </View>

                  {/* Total Section */}
                  <View style={styles.totalWrap}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.total}>&#8358; 2,131.5</Text>
                  </View>

                  <View style={styles.buttonWrap}>
                    <TouchableOpacity
                      style={styles.checkoutButton}
                      activeOpacity={0.6}
                      onPress={() => setModalOpen(true)}>
                      <Text style={styles.checkoutButtonLabel}>
                        Pay (&#8358; 2,131.5)
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Col>
        </Row>
      </ScrollView>
      <CheckoutModal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f6f9',
  },
  productsCol: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: Layout.window.width > 500 ? 30 : 0,
  },
  productsCard: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 8,
    marginBottom: 30,
    // elevation: 1,
  },
  productSearchRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  searchWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#ebebeb',
    paddingHorizontal: 20,
    width: Layout.window.width < 712 ? Layout.window.width * 0.4 : Layout.window.width * 0.2,
    borderRadius: 30,
  },
  searchButton: {
    backgroundColor: Colors.primary,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginLeft: 15,
  },
  productGridWrap: {
    flex: 1,
    // backgroundColor: 'yellow',
    marginTop: 10,
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    marginEnd: 10,
  },
  productImageWrap: {
    marginBottom: 10,
  },
  productImage: {
    backgroundColor: '#eee',
    height: Layout.window.width * 0.1,
    width: Layout.window.width * 0.1,
    borderRadius: 10,
  },
  productMetaWrap: {
    marginTop: 5,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: Colors.primary,
  },

  ticketCol: {
    padding: 0,
    paddingEnd: 0,
    margin: 0,
  },
  checkoutWrap: {
    backgroundColor: '#fff',
    flex: 1,
    // elevation: 5,
  },
  checkoutTitle: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkoutTitleText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  checkoutTableHeading: {
    backgroundColor: '#eee',
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  checkoutTableHeadingItem: {
    fontWeight: '700',
    color: '#aaa',
  },
  tableContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutItems: {
    paddingVertical: 10,
  },
  checkoutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginVertical: 10,
    paddingLeft: 25,
    alignItems: 'center',
  },
  removeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000010',
    borderRadius: 30,
    width: 35,
    height: 35,
  },
  checkoutItemTitle: {
    flex: 1,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
  checkoutItemQuantity: {
    flex: 0.4,
    marginRight: 5,
  },
  checkoutItemPrice: {
    flex: 0.6,
    textAlign: 'right',
  },
  costWrap: {
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
    paddingVertical: 20,
  },
  costItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  costItemText: {
    fontWeight: 'bold',
    color: Colors.mutedText,
    fontSize: 15,
  },
  totalWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginVertical: 10,
    alignItems: 'center',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary,
  },
  buttonWrap: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  checkoutButton: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    elevation: 2,
  },
  checkoutButtonLabel: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
  },
});

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000030',
  },
  body: {
    flex: 1,
    width: Layout.window.width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  totalWrap: {
    alignItems: 'center',
    marginBottom: 30,
  },
  totalLabel: {
    fontSize: 16,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  inputSection: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // width: Layout.window.width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  cashReceived: {
    flex: 1,
    marginRight: 10,
  },
  inputLabel: {
    fontSize: 16,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#00000040',
  },
  inputStyles: {
    fontSize: 24,
    marginLeft: 10,
  },
  buttonWrap: {
    flex: 0.3,
  },
  button: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  cardButtonWrap: {
    width: '100%',
  },
  virtualKeyboardWrap: {
    width: '100%',
    flex: 1,
    marginTop: 30,
  },
});
