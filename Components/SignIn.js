import { useFormik } from 'formik';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import * as Yup from 'yup';
const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid Email Format').required('Required !'),
  password: Yup.string().required('Required !'),
});

const SignIn = ({ navigation }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const [showpass, changepass] = useState(false);
  const iconstate = () => changepass(!showpass);

  const onPressLearnMore = () => {
    console.log(formik.values);
    console.log(formik.errors);
    console.log(formik.touched);

    let detail = formik.values;
    console.log('Detail is', detail);
    axios.post('http://localhost:8000/login', detail).then((res) => {
      console.log(res);
      alert(res.data.message);
      if (res.data.message === 'Login Successfully')
        navigation.navigate('Choose');
      else navigation.navigate('Choose');
    });
    //navigation.navigate('Choose');
  };
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Welcome !</Text>
      <Image
        source={require('../Images/undraw_Mobile_login_re_9ntv.jpg')}
        style={{ width: 164, height: 122, margin: 10 }}
      />
      <View style={styles.view}>
        <Icon name="envelope" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          onChangeText={formik.handleChange('email')}
          value={formik.values.email}
          onBlur={formik.handleBlur('email')}
        />
      </View>
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.errors}>{formik.errors.email}</Text>
      ) : null}

      <View style={styles.view}>
        <Icon name="lock" size={25} color="#000" />
        <TextInput
          style={styles.input}
          underlineColorAndroid={'transparent'}
          placeholder="Enter Password"
          keyboardType="visible-password"
          secureTextEntry={!showpass}
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
          onBlur={formik.handleBlur('password')}
        />
        {showpass ? (
          <TouchableHighlight onPress={iconstate} style={styles.btnclick}>
            <View onPress={iconstate}>
              <Icon name="eye-slash" size={25} color="#000" />
            </View>
          </TouchableHighlight>
        ) : (
          <TouchableHighlight onPress={iconstate} style={styles.btnclick}>
            <View>
              <Icon name="eye" size={25} color="#000" />
            </View>
          </TouchableHighlight>
        )}
      </View>
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.errors}>{formik.errors.password}</Text>
      ) : null}
      <Pressable style={styles.button} onPress={onPressLearnMore}>
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
  btnclick: {
    padding: 5,
    alignItems: 'center',
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'grey',
    marginTop: 30,
    width: 250,
  },
  main: {
    backgroundColor: '#afeeee',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    justifyContent: 'center',
    marginLeft: 20,
    height: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4698EA',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default SignIn;
