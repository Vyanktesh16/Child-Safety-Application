import React from 'react';
import { StatusBar } from 'expo-status-bar';
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
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid Email Format').required('Required !'),
  password: Yup.string().required('Required !'),
});

const Login = ({ navigation }) => {
  const [user, setreg] = React.useState({
    email: '',
    password: '',
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(formic.values);
      console.log(formik.errors);
      console.log(formik.touched);
    },
  });
  // navigation.navigate("Choose");

  // const onPressLearnMore = () => {
  //   console.log(user);
  // };
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Welcome !</Text>
      <Text>Find Your Missing child </Text>
      <Image
        source={require('../Images/undraw_Mobile_login_re_9ntv.jpg')}
        style={{ width: 164, height: 122, margin: 10 }}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        keyboardType="email-address"
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        onBlur={formik.handleBlur('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.errors}>{formik.errors.name}</Text>
      ) : null}

      <TextInput
        style={styles.input}
        underlineColorAndroid={'transparent'}
        placeholder="Enter Password"
        keyboardType="visible-password"
        onChangeText={formik.handleChange('password')}
        value={formik.values.email}
        onBlur={formik.handleBlur('password')}
      />
      <Pressable style={styles.button} onPress={formik.onSubmit}>
        <Text style={styles.text}>Log In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  errors: {
    color: 'red',
    marginTop: 5,
    marginLeft: '50%',
  },
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

export default Login;
