import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import Colors from '../constants/Colors';
import {Col, Row} from 'react-native-responsive-grid-system';
import {Grid, Section, Block} from 'react-native-responsive-layout';

import Layout from '../constants/Layout';
import {Picker} from '@react-native-community/picker';

import {LineChart} from 'react-native-chart-kit';

import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryTheme,
} from 'victory-native';

export default function Dashboard({navigation}) {
  const [selectedYear, setSelectedYear] = useState('');

  const data = [
    {month: 'Jan', earnings: '5K'},
    {month: 'Feb', earnings: '16K'},
    {month: 'Mar', earnings: '14K'},
    {month: 'Apr', earnings: '19K'},
    {month: 'May', earnings: '13K'},
    {month: 'Jun', earnings: '16K'},
    {month: 'Jul', earnings: '14K'},
    {month: 'Aug', earnings: '19K'},
    {month: 'Sep', earnings: '13K'},
    {month: 'Oct', earnings: '16K'},
    {month: 'Nov', earnings: '14K'},
    {month: 'Dec', earnings: '19K'},
  ];

  // const barData = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  //   datasets: [
  //     {
  //       data: [0, 5, 8, 3, 7],
  //     },
  //   ],
  // };

  // const chart_wh = 250;
  // const series = [123, 321, 123, 789, 537];
  // const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800'];

  // const chartConfig = {
  //   backgroundGradientFrom: '#fff',
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientTo: '#fff',
  //   backgroundGradientToOpacity: 0.5,
  //   color: (opacity = 1) => Colors.primary,
  //   strokeWidth: 1, // optional, default 3
  //   barPercentage: 2,
  //   useShadowColorFromDataset: false,
  //   decimalPlaces: 0,
  // };

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

  const LegendItem = ({title, color}) => {
    return (
      <View style={styles.legend}>
        <View style={[styles.legendShape, {backgroundColor: color}]} />
        <Text style={styles.legendTitle}>{title}</Text>
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
        <Grid style={{marginBottom: 20}}>
          <Section>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="1/2"
              lgSize="1/2"
              xlSize="1/2"
              xxlSize="1/2">
              <View style={styles.blockStyles}>
                <StatCard title="Total Sales" value="$1.2M" percentage={7} />
              </View>
            </Block>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="1/2"
              lgSize="1/2"
              xlSize="1/2"
              xxlSize="1/2">
              <View style={styles.blockStyles}>
                <StatCard title="Products Sold" value="1,534" percentage={7} />
              </View>
            </Block>
          </Section>
          <Section style={{marginTop: 15}}>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="1/2"
              lgSize="1/2"
              xlSize="1/2"
              xxlSize="1/2">
              <View style={styles.blockStyles}>
                <StatCard title="Customers" value="12,003" percentage={-25} />
              </View>
            </Block>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="1/2"
              lgSize="1/2"
              xlSize="1/2"
              xxlSize="1/2">
              <View style={styles.blockStyles}>
                <StatCard title="Inventory" value="4234" percentage={19} />
              </View>
            </Block>
          </Section>

          <Section style={{marginVertical: 10}}>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="1/2"
              lgSize="1/2"
              xlSize="1/2"
              xxlSize="1/2">
              <View style={styles.blockStyles}>
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
                  <View
                    style={[
                      styles.cardBody,
                      {
                        paddingHorizontal: 0,
                      }
                      // {borderWidth: 1, borderColor: 'red'},
                    ]}>
                    <VictoryChart
                      theme={VictoryTheme.material}
                      domainPadding={{x: 15}}
                      // width={450}
                      width={
                        Layout.window.width >= 568
                          ? Layout.window.width / 2.2
                          : Layout.window.width * .9
                      }>
                      <VictoryBar
                        data={data}
                        x="month"
                        y="earnings"
                        style={{
                          data: {fill: Colors.primary},
                        }}
                      />
                    </VictoryChart>
                    {/* <BarChart
                      data={barData}
                      width={Layout.window.width / 1.8}
                      height={220}
                      yAxisLabel={''}
                      yAxisSuffix="K"
                      chartConfig={chartConfig}
                      withVerticalLines={false}
                      withHorizontalLines={false}
                      withVerticalLabels={true}
                      withHorizontalLabels={true}
                    /> */}
                  </View>
                </View>
              </View>
            </Block>
            <Block
              xsSize="1/1"
              smSize="1/1"
              mdSize="1/2"
              lgSize="1/2"
              xlSize="1/2"
              xxlSize="1/2">
              <View style={styles.blockStyles}>
                <View style={styles.card}>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>Sales</Text>
                  </View>
                  <View style={[styles.cardBody, {flexDirection: 'column'}]}>
                    <VictoryPie
                      data={[
                        {y: 30, x: '40%'},
                        {y: 20, x: '20%'},
                        {y: 8, x: '8%'},
                        {y: 22, x: '22%'},
                        {y: 7, x: '7%'},
                        {y: 5, x: '5%'},
                      ]}
                      colorScale={[
                        '#ec5858',
                        '#892cdc',
                        '#28df99',
                        '#4e89ae',
                        '#66bfbf',
                        '#ffc93c',
                      ]}
                      width={300}
                      height={300}
                      innerRadius={50}
                    />
                  </View>
                  <View style={styles.legendsContainer}>
                    <LegendItem title="Drinks" color="#ec5858" />
                    <LegendItem title="Vegetables" color="#892cdc" />
                    <LegendItem title="Grocery" color="#28df99" />
                    <LegendItem title="Medicine" color="#4e89ae" />
                    <LegendItem title="Beverages" color="#66bfbf" />
                    <LegendItem title="Other" color="#ffc93c" />
                  </View>
                </View>
              </View>
            </Block>
          </Section>
        </Grid>
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
    // borderRadius: 8,
    elevation: 1,
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
  blockStyles: {
    padding: 10,
  },
  legendsContainer: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  legend: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  legendShape: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
    marginRight: 10,
  },
  legendTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00000060',
  },
});
