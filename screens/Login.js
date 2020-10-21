import React, {createRef, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Icon,
  Form,
  Item,
  CheckBox,
  Body,
  Button,
} from 'native-base';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidepass, setHidePass] = useState(true);
  const [remember, setRemember] = useState(false);

  let _emailRef = createRef();
  let _passwordRef = createRef();

  return (
    <View style={styles.container}>
      <Form style={styles.loginWrap}>
        <View style={styles.inputWrap}>
          <View style={styles.inputIcon}>
            <Icon name="person" type="MaterialIcons" size={18} style={{color: Colors.primary}} />
          </View>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => {
              _passwordRef && _passwordRef.focus();
            }}
            ref={(ref) => {
              _emailRef = ref;
            }}
            blurOnSubmit={false}
          />
        </View>
        <View style={styles.inputWrap}>
          <View style={styles.inputIcon}>
          <Icon name="lock" type="MaterialIcons" size={18} style={{color: Colors.primary}} />
          </View>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={hidepass}
            returnKeyType="done"
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            value={password}
            onChangeText={(val) => setPassword(val)}
            ref={(ref) => {
              _passwordRef = ref;
            }}
          />
          <TouchableOpacity
            style={styles.revealButton}
            activeOpacity={0.6}
            onPress={() => setHidePass(!hidepass)}>
            <Icon name={hidepass ? "eye" : "eye-off"} type="Feather" style={{color: Colors.mutedText}} />
          </TouchableOpacity>
        </View>
        <View style={styles.rememberWrap}>
          <CheckBox checked={remember} onPress={() => setRemember(!remember)} color={Colors.primary} style={styles.checkbox} />
          <Text style={styles.rememberLabel}>Remember me</Text>
        </View>

        <View style={styles.buttonWrap}>
          <Button full info>
            <Text style={styles.buttonLabel}>Log in</Text>
          </Button>
        </View>
        <View style={styles.forgotWrap}>
          <TouchableOpacity activeOpacity={0.6}>
            <Text>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.regWrap}>
          <Text style={styles.regText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.regLink}
            activeOpacity={0.6}
            onPress={() => navigator.navigate('Register')}>
            <Text style={styles.regLinkLabel}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Layout.window.width * 0.2,
  },
  inputWrap: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
  revealIcon: {
    marginLeft: 10,
  },
  rememberWrap: {
    marginVertical: 10,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingLeft: 0,
  },
  checkbox: {
    marginRight: 20,
    marginLeft: 0,
  },
  buttonWrap: {
    width: '100%',
    marginVertical: 20,
  },
  buttonLabel: {
    color: 'white',
    textTransform: 'uppercase',
  },
  forgotWrap: {
    width: "100%",
    alignItems: "flex-end"
  },
  regWrap: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  regText: {
    fontWeight: '300',
    letterSpacing: 0.1,
  },
  regLink: {
    fontSize: 15,
    marginLeft: 5,
  },
  regLinkLabel: {
    fontWeight: '600',
    fontSize: 15,
    color: Colors.primary,
  },
});
