import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';

import Colors from '../constants/Colors';
import {Col, Row} from 'react-native-responsive-grid-system';

import {Grid, Section, Block} from 'react-native-responsive-layout';

const SALES = [
  {
    id: 1,
    date: 'Tuesday, 1 February 2020',
    sales: [
      {
        id: 1,
        paymentType: 'cash',
        amount: 6000,
        time: '10:30 AM',
        ticektNumber: '#1-1009',
      },
      {
        id: 2,
        paymentType: 'cash',
        amount: 1000,
        time: '10:15 AM',
        ticektNumber: '#1-1007',
      },
      {
        id: 3,
        paymentType: 'cash',
        amount: 6000,
        time: '10:00 AM',
        ticektNumber: '#1-1007',
      },
      {
        id: 4,
        paymentType: 'card',
        amount: 3000,
        time: '09:50 AM',
        ticektNumber: '#1-1006',
      },
      {
        id: 5,
        paymentType: 'card',
        amount: 2000,
        time: '1000 in stock',
        ticektNumber: '#1-1005',
      },
      {
        id: 6,
        paymentType: 'card',
        amount: 2000,
        time: '1000 in stock',
        ticektNumber: '#1-1004',
      },
    ],
  },
];

export default function SalesReceipt({navigation}) {
  const SaleRow = ({sale, active}) => {
    return (
      <TouchableOpacity
        style={[styles.salesWrap, {backgroundColor: active && '#00000020'}]}>
        <View style={styles.salesRow}>
          <Icon
            name={
              sale.paymentType == 'cash'
                ? sale.paymentType
                : 'credit-card-outline'
            }
            type="MaterialCommunityIcons"
            style={{color: '#000000', fontSize: 36}}
          />
          <View style={styles.salesRowContent}>
            <View style={styles.salesRowDetails}>
              <Text style={styles.salesRowPrice}>N{sale.amount}</Text>
              <Text style={styles.salesRowTimestamp}>{sale.time}</Text>
            </View>
            <Text style={styles.salesTicketNumber}>{sale.ticektNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
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
          <Title uppercase>View Sales &amp; Receipt</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
      <ScrollView style={styles.content}>
        <Grid>
          <Section>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="1/3"
              lgSize="1/3"
              xlSize="1/3"
              xxlSize="1/3">
              <View style={{}}>
                <View style={{backgroundColor: '#fff', elevation: 3}}>
                  <View style={styles.ticketSection}>
                    <Text style={styles.receiptNumber}>#1 - 1009</Text>
                  </View>
                  <View style={styles.ticketSection}>
                    <Text style={styles.ticketText}>
                      Cashier: Nanle Precious
                    </Text>
                    <Text style={styles.ticketText}>POS 1</Text>
                  </View>
                  <View style={styles.ticketSection}>
                    <View style={styles.ticketItem}>
                      <Text style={styles.ticketText}>
                        Ginger (50mg){' '}
                        <Text style={styles.ticketItemQuantity}>X1</Text>
                      </Text>
                      <Text style={styles.ticketText}>N2000</Text>
                    </View>
                    <View style={styles.ticketItem}>
                      <Text style={styles.ticketText}>
                        Ginger (50mg){' '}
                        <Text style={styles.ticketItemQuantity}>X1</Text>
                      </Text>
                      <Text style={styles.ticketText}>N2000</Text>
                    </View>
                    <View style={styles.ticketItem}>
                      <Text style={styles.ticketText}>
                        Ginger (50mg){' '}
                        <Text style={styles.ticketItemQuantity}>X1</Text>
                      </Text>
                      <Text style={styles.ticketText}>N2000</Text>
                    </View>
                  </View>
                  <View style={styles.ticketSection}>
                    <View style={styles.ticketCostItem}>
                      <Text style={styles.ticketCostText}>Discount (%)</Text>
                      <Text style={styles.ticketCostText}>0</Text>
                    </View>
                    <View style={styles.ticketCostItem}>
                      <Text style={styles.ticketCostText}>Tax</Text>
                      <Text style={styles.ticketCostText}>5%</Text>
                    </View>
                    <View style={styles.ticketCostItem}>
                      <Text style={styles.ticketCostText}>Total</Text>
                      <Text style={styles.ticketCostText}>N6000</Text>
                    </View>
                  </View>
                  <View style={[styles.ticketSection, {borderBottomWidth: 0}]}>
                    <View style={[styles.ticketItem, {marginVertical: 0}]}>
                      <Text style={styles.ticketText}>1/02/2020 10:30AM</Text>
                      <Text style={styles.ticketText}>#1-1009</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Block>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="2/3"
              lgSize="2/3"
              xlSize="2/3"
              xxlSize="2/3">
              <View style={{ padding: 20 }}>
                <View style={styles.datesWrap}>
                  <Text style={styles.daterangeItem}>
                    From: <Text style={styles.dateText}>01/02/2020</Text>
                  </Text>
                  <Text style={styles.daterangeItem}>
                    To: <Text style={styles.dateText}>01/02/2020</Text>
                  </Text>
                </View>

                {/* This section should be converted to its own component when integrating with actual data */}
                <ScrollView>
                  {SALES.map((item, index) => {
                    return (
                      <View style={styles.salesDay} key={index}>
                        <View style={styles.salesHeader}>
                          <Text style={[styles.dateText, styles.date]}>
                            Tuesday, 1 February 2020
                          </Text>
                        </View>
                        {item.sales.map((sale) => {
                          return (
                            <SaleRow
                              sale={sale}
                              active={sale.id == 1 && true}
                              key={sale.id}
                            />
                          );
                        })}
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </Block>
          </Section>
        </Grid>
        {/* <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
            colStyles={{backgroundColor: '#fff', elevation: 3}}>
            <View style={styles.ticketSection}>
              <Text style={styles.receiptNumber}>#1 - 1009</Text>
            </View>
            <View style={styles.ticketSection}>
              <Text style={styles.ticketText}>Cashier: Nanle Precious</Text>
              <Text style={styles.ticketText}>POS 1</Text>
            </View>
            <View style={styles.ticketSection}>
              <View style={styles.ticketItem}>
                <Text style={styles.ticketText}>
                  Ginger (50mg){' '}
                  <Text style={styles.ticketItemQuantity}>X1</Text>
                </Text>
                <Text style={styles.ticketText}>N2000</Text>
              </View>
              <View style={styles.ticketItem}>
                <Text style={styles.ticketText}>
                  Ginger (50mg){' '}
                  <Text style={styles.ticketItemQuantity}>X1</Text>
                </Text>
                <Text style={styles.ticketText}>N2000</Text>
              </View>
              <View style={styles.ticketItem}>
                <Text style={styles.ticketText}>
                  Ginger (50mg){' '}
                  <Text style={styles.ticketItemQuantity}>X1</Text>
                </Text>
                <Text style={styles.ticketText}>N2000</Text>
              </View>
            </View>
            <View style={styles.ticketSection}>
              <View style={styles.ticketCostItem}>
                <Text style={styles.ticketCostText}>Discount (%)</Text>
                <Text style={styles.ticketCostText}>0</Text>
              </View>
              <View style={styles.ticketCostItem}>
                <Text style={styles.ticketCostText}>Tax</Text>
                <Text style={styles.ticketCostText}>5%</Text>
              </View>
              <View style={styles.ticketCostItem}>
                <Text style={styles.ticketCostText}>Total</Text>
                <Text style={styles.ticketCostText}>N6000</Text>
              </View>
            </View>
            <View style={[styles.ticketSection, {borderBottomWidth: 0}]}>
              <View style={[styles.ticketItem, {marginVertical: 0}]}>
                <Text style={styles.ticketText}>1/02/2020 10:30AM</Text>
                <Text style={styles.ticketText}>#1-1009</Text>
              </View>
            </View>
          </Col>

          {/* All sales section /}
          <Col xs={12} sm={12} md={12} lg={8} colStyles={{padding: 20}}>
            <View style={styles.datesWrap}>
              <Text style={styles.daterangeItem}>
                From: <Text style={styles.dateText}>01/02/2020</Text>
              </Text>
              <Text style={styles.daterangeItem}>
                To: <Text style={styles.dateText}>01/02/2020</Text>
              </Text>
            </View>

            {/* This section should be converted to its own component when integrating with actual data /}
            <ScrollView>
              {SALES.map((item, index) => {
                return (
                  <View style={styles.salesDay} key={index}>
                    <View style={styles.salesHeader}>
                      <Text style={[styles.dateText, styles.date]}>
                        Tuesday, 1 February 2020
                      </Text>
                    </View>
                    {item.sales.map((sale) => {
                      return (
                        <SaleRow
                          sale={sale}
                          active={sale.id == 1 && true}
                          key={sale.id}
                        />
                      );
                    })}
                  </View>
                );
              })}
            </ScrollView>
          </Col>
        </Row> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#F7F9FB',
    paddingHorizontal: 20,
  },
  ticketSection: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#313131',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  receiptNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ticketText: {
    fontSize: 16,
    color: '#313131',
  },
  ticketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  ticketItemQuantity: {
    color: Colors.mutedText,
  },
  ticketCostItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  ticketCostText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  datesWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  daterangeItem: {
    marginLeft: 20,
    fontSize: 16,
  },
  dateText: {
    color: Colors.primary,
  },
  salesDay: {
    marginBottom: 20,
  },
  salesHeader: {
    marginBottom: 20,
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  salesWrap: {
    marginVertical: 15,
  },
  salesRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  salesRowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#313131',
    paddingRight: 10,
    marginLeft: 10,
    paddingBottom: 10,
  },
  salesRowDetails: {},
  salesRowPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  salesRowTimestamp: {
    fontSize: 13,
  },
  salesTicketNumber: {
    fontSize: 16,
    color: '#000',
  },
});
