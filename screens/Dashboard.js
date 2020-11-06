import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import Colors from '../constants/Colors';
import {Col, Row} from 'react-native-responsive-grid-system';
import Layout from '../constants/Layout';
import {Picker} from '@react-native-community/picker';

import {LineChart, BarChart} from 'react-native-chart-kit';

import {VictoryPie} from 'victory-native';

export default function Dashboard({navigation}) {
  const [selectedYear, setSelectedYear] = useState('');

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [0, 5, 8, 3, 7],
      },
    ],
  };

  const chart_wh = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => Colors.primary,
    // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 2,
    useShadowColorFromDataset: false,
    decimalPlaces: 0,
  };

  const StatCard = (props) => {
    let negative = props.percentage < 0;
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{props.title}</Text>
        </View>
        <View style={styles.statCardBody}>
          <View>
            <Text style={styles.cardValue}>{props.value}</Text>
            <Text
              style={[
                styles.cardPercentage,
                {color: negative ? Colors.danger : Colors.success},
              ]}>
              {negative ? props.percentage : '+' + props.percentage}%
            </Text>
          </View>
          <View style={styles.chartWrap}>
            <LineChart
              data={{
                // labels: ['January', 'February', 'March', 'April'],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={150}
              height={75}
              withVerticalLabels={false}
              withDots={false}
              // withShadow={false}
              withVerticalLines={false}
              withHorizontalLines={false}
              withHorizontalLabels={true}
              verticalLabelRotation={30}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0,
                color: (opacity = 255) =>
                  negative ? Colors.danger : Colors.success,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                // marginVertical: 8,
                marginLeft: 10,
                borderRadius: 0,
                backgroundColor: '#000000',
                paddingRight: 0,
              }}
            />
          </View>
        </View>
      </View>
    );
  };

  const Card = (props) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text>{props.title}</Text>
          <Text>This is a card</Text>
        </View>
        <View style={styles.cardBody}>{props.children}</View>
      </View>
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
        <Body style={{flex: 1}}>
          <Title uppercase>Dashboard</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
      <ScrollView style={styles.content}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4}>
            <View style={styles.colInner}>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  colStyles={styles.cardColStyles}>
                  <StatCard title="Total Sales" value="$1.2M" percentage={7} />
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  colStyles={styles.cardColStyles}>
                  <StatCard
                    title="Products Sold"
                    value="1,534"
                    percentage={7}
                  />
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  colStyles={styles.cardColStyles}>
                  <StatCard title="Customers" value="12,003" percentage={-25} />
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  colStyles={styles.cardColStyles}>
                  <StatCard title="Inventory" value="4234" percentage={19} />
                </Col>
              </Row>
            </View>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8}>
            <View style={styles.colInner}>
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  colStyles={styles.cardColStyles}>
                  <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardTitle}>Sales</Text>
                      <View style={styles.pickerWrap}>
                        <Picker
                          selectedValue={selectedYear}
                          style={styles.pickerStyles}
                          onValueChange={(itemValue, itemIndex) =>
                            setSelectedYear(itemValue)
                          }>
                          <Picker.Item label="Year" value="" />
                          <Picker.Item label="2020" value="2020" />
                          <Picker.Item label="2019" value="2019" />
                          <Picker.Item label="2018" value="2018" />
                        </Picker>
                      </View>
                    </View>
                    <View style={styles.cardBody}>
                      <BarChart
                        // style={graphStyle}
                        data={barData}
                        width={Layout.window.width / 1.75}
                        height={220}
                        yAxisLabel={''}
                        yAxisSuffix="K"
                        chartConfig={chartConfig}
                        withVerticalLines={false}
                        withHorizontalLines={false}
                        withVerticalLabels={true}
                        withHorizontalLabels={true}
                      />
                    </View>
                  </View>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  colStyles={styles.cardColStyles}>
                  <View style={styles.card}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.cardTitle}>Sales</Text>
                    </View>
                    <View style={[styles.cardBody, { flexDirection: "column"}]}>
                      <Text>Chart goes here</Text>
                      <VictoryPie
                        data={[
                          {y: 10, x: '5%'},
                          {y: 90, x: '90%'},
                          {y: 50, x: '50%'},
                          {y: 20, x: '20%'},
                          {y: 70, x: '70%'},
                        ]}
                        colorScale={[
                          'red',
                          'blue',
                          'yellow',
                          'green',
                          'tomato',
                        ]}
                        width={300}
                        height={300}
                        innerRadius={60}
                      />
                    </View>
                  </View>
                </Col>
              </Row>
            </View>
          </Col>
        </Row>
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
  colInner: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  cardColStyles: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    // paddingHorizontal: 20,
    width: '100%',
    // elevation: 1,
    borderRadius: 8,
  },
  cardHeader: {
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 0.3,
    borderBottomColor: '#00000030',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statCardBody: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#00000070',
  },
  cardValue: {
    fontSize: 24,
  },
  cardPercentage: {
    fontSize: 15,
  },
  pickerWrap: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#00000040',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  pickerStyles: {
    width: 100,
    height: 30,
  },
});
