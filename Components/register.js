import React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from 'react-native';

const Register = ({ navigation }) => {
  const [user, setreg] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const onPressLearnMore = () => {
    console.log(user);
    navigation.navigate('Login');
  };
  console.log(user);
  return (
    <View style={styles.main}>
      <Image
        source={require('../Images/undraw_fatherhood_7i19.jpg')}
        style={{ width: 95, height: 76, marginTop: 60 }}
      />
      <Text style={styles.header}>Welcome !</Text>
      <Text>Find Your Missing child </Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setreg({
            ...user,
            ['name']: text,
          })
        }
        value={user.childName}
        placeholder="Entyer Full Name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) =>
          setreg({
            ...user,
            ['email']: text,
          })
        }
        value={user.parentName}
        placeholder="Enter Email"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid={'transparent'}
        onChangeText={(text) =>
          setreg({
            ...user,
            ['password']: text,
          })
        }
        value={user.currentAddress}
        placeholder="Enter Password"
        keyboardType="visible-password"
      />
      <TextInput
        style={styles.input}
        name="permanentAddress"
        onChangeText={(text) =>
          setreg({
            ...user,
            ['confirmPass']: text,
          })
        }
        value={user.permanentAddress}
        placeholder="Confirm Password"
        keyboardType="visible-password"
      />

      <Pressable style={styles.button} onPress={onPressLearnMore}>
        <Text style={styles.text}>Register</Text>
      </Pressable>

      <Text style={{ color: 'green' }}>Already have account ? </Text>

      <Pressable style={styles.button} onPress={onPressLearnMore}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#E5E5E5',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 43,
    width: 287,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 100,
    borderColor: '#fff',
    marginTop: 10,
  },
  header: {
    fontSize: 24,
    color: '#000',
    paddingBottom: 10,
    paddingTop: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    alignItems: 'center',
  },
  button: {
    width: 232,
    height: 39,
    fontSize: 20,
    margin: 10,
    backgroundColor: '#59C0C7',
    padding: 9,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Register;
