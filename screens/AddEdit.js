import React, {useState, useRef, createRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Title} from 'native-base';
import {Picker} from '@react-native-community/picker';
import {Col, Row} from 'react-native-responsive-grid-system';
import ImagePicker from 'react-native-image-picker';

import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default function AddEdit({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [unit, setUnit] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const choosePhoto = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setImageUrl(source);
      }
    });
  };

  const launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response ', JSON.stringify(response));
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setImageUrl(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header style={{backgroundColor: Colors.primary}} hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title uppercase>Add New Item</Title>
        </Body>
        <Right>
          <Button transparent>
            <Title>Save</Title>
          </Button>
        </Right>
      </Header>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.card}>
          <View style={styles.inputSection}>
            <View style={styles.inputWrap}>
              <TextInput style={styles.inputStyles} placeholder="ID" />
            </View>
            <View style={styles.inputWrap}>
              <TextInput style={styles.inputStyles} placeholder="Item Name" />
            </View>
            <View style={styles.inputWrap}>
              <Picker
                selectedValue={selectedCategory}
                style={styles.pickerStyles}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedCategory(itemValue)
                }>
                <Picker.Item label="Category" value="" default />
                <Picker.Item label="Beverages" value="beverages" />
                <Picker.Item label="Vegetables" value="vegetables" />
                <Picker.Item label="Drugs" value="drugs" />
              </Picker>
            </View>
          </View>
          <View style={styles.inputSection}>
            <Text style={styles.inputSectionTitle}>Description</Text>
            <Row rowStyles={{justifyContent: 'space-between'}}>
              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                colStyles={styles.inputColStyles}>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.inputStyles}
                    placeholder="Quantity"
                  />
                </View>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                colStyles={styles.inputColStyles}>
                <View style={styles.inputWrap}>
                  <Picker
                    selectedValue={unit}
                    style={styles.pickerStyles}
                    onValueChange={(itemValue, itemIndex) =>
                      setUnit(itemValue)
                    }>
                    <Picker.Item label="Unit" value="" default />
                    <Picker.Item label="Kilogram" value="kg" />
                    <Picker.Item label="Centilitre" value="cl" />
                    <Picker.Item label="Litre" value="l" />
                  </Picker>
                </View>
              </Col>
            </Row>
          </View>
          <View style={styles.inputSection}>
            <Text style={styles.inputSectionTitle}>Price</Text>
            <Row rowStyles={{justifyContent: 'space-between'}}>
              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                colStyles={styles.inputColStyles}>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.inputStyles}
                    placeholder="Cost Price"
                  />
                </View>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                colStyles={styles.inputColStyles}>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.inputStyles}
                    placeholder="Selling Price"
                  />
                </View>
              </Col>
            </Row>
            <Row rowStyles={{justifyContent: 'space-between'}}>
              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                colStyles={styles.inputColStyles}>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.inputStyles}
                    placeholder="Quantity"
                  />
                </View>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                colStyles={styles.inputColStyles}>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.inputStyles}
                    placeholder="Threshold"
                  />
                </View>
              </Col>
            </Row>
            <Row rowStyles={{justifyContent: 'space-between'}}>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                colStyles={styles.inputColStyles}>
                <View style={styles.inputWrap}>
                  <TextInput style={styles.inputStyles} placeholder="VAT" />
                </View>
              </Col>
            </Row>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.inputSectionTitle}>Image</Text>
            <View style={styles.photoSectionWrap}>
              <View style={styles.imageWrap}>
                <Icon
                  name="picture"
                  type="SimpleLineIcons"
                  style={{fontSize: 120, color: '#CDCDCD'}}
                />
              </View>
              <View style={styles.photoButtonsWrap}>
                <TouchableOpacity
                  style={styles.photoButton}
                  onPress={() => choosePhoto()}>
                  <Icon
                    name="folder"
                    type="MaterialCommunityIcons"
                    style={styles.photoButtonIcon}
                  />
                  <Text style={styles.photoButtonText}>Choose Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.photoButton} onPress={() => launchCamera()}>
                  <Icon
                    name="camera"
                    type="MaterialCommunityIcons"
                    style={styles.photoButtonIcon}
                  />
                  <Text style={styles.photoButtonText}>Take Photo</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    backgroundColor: '#F7F9FB',
    padding: 30,
  },
  card: {
    backgroundColor: '#FFF',
    elevation: 4,
    width: '100%',
    marginBottom: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 3,
  },
  inputSection: {
    marginBottom: 20,
  },
  inputColStyles: {
    paddingRight: 10,
  },
  inputWrap: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#313131',
    marginBottom: 20,
  },
  inputStyles: {
    fontSize: 16,
  },
  inputSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photoSectionWrap: {
    flexDirection: 'row',
  },
  photoButtonsWrap: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  photoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  photoButtonIcon: {
    color: '#818181',
    fontSize: 32,
    marginRight: 10,
  },
  photoButtonText: {
    color: '#000',
    fontSize: 16,
  },
});
