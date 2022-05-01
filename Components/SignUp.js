import React, { useState } from 'react';
import { useFormik } from 'formik';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native-gesture-handler';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPass: '',
};
const onSubmit = (values) => {
  console.log('Final form values are', values);
};
const validate = (values) => {
  //values.name values.email values.password values.confirmpass
  //errors.name errors.email errors.password errors.confirmpass
  let errors = {};
  if (!values.name) {
    errors.name = 'Required*';
  }

  if (!values.email) {
    errors.email = 'Required*';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Format';
  }

  if (!values.password) {
    errors.password = 'Required*';
  }

  if (!values.confirmPass) {
    errors.confirmPass = 'Required*';
  }

  if (values.password != values.confirmPass) {
    errors.confirmPass = 'Password Must be same';
  }

  return errors;
};

const SignUp = ({ navigation }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log('form values', formik.errors);
  // const handelsubmit = () => {
  //   console.log("Final form values are", formik.values);
  // };

  const [showpass, changepass] = useState(false);
  const iconstate = () => changepass(!showpass);
  let detail = {
    name: '',
    email: '',
    password: '',
  };

  const onPressLearnMore = () => {
    // console.log(formik.values.password, '    ', formik.values.confirmPass);

    detail = formik.values;
    //var key = 'confirmPass';
    //delete detail[key];
    console.log('Detail is ', detail);

    axios.post('http://localhost:8000/register', detail).then((res) => {
      console.log(res);
      alert(res.data.message);
      if (res.data.message === 'Register Successfully')
        navigation.navigate('SignIn');
      else navigation.navigate('SignUp');
    });
  };

  const onPressLogin = () => {
    navigation.navigate('SignIn');
  };

  return (
    <>
      <View style={styles.main}>
        <Image
          source={require('../Images/undraw_fatherhood_7i19.jpg')}
          style={{ width: 95, height: 76, marginTop: 60 }}
        />
        <Text style={styles.header}>SignUp ..!</Text>
        <View style={styles.view}>
          <Icon name="user" size={20} color="#000" />

          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            keyboardType="default"
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            onBlur={formik.handleBlur('name')}
          />
        </View>
        {formik.touched.name && formik.errors.name ? (
          <Text style={styles.errors}>{formik.errors.name}</Text>
        ) : null}
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
        <View style={styles.view}>
          <Icon name="lock" size={25} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            keyboardType="visible-password"
            secureTextEntry={!showpass}
            onChangeText={formik.handleChange('confirmPass')}
            value={formik.values.confirmPass}
            onBlur={formik.handleBlur('confirmPass')}
          />
          {showpass ? (
            <TouchableHighlight onPress={iconstate} style={styles.btnclick1}>
              <View onPress={iconstate}>
                <Icon name="eye-slash" size={25} color="#000" />
              </View>
            </TouchableHighlight>
          ) : (
            <TouchableHighlight onPress={iconstate} style={styles.btnclick1}>
              <View>
                <Icon name="eye" size={25} color="#000" />
              </View>
            </TouchableHighlight>
          )}
        </View>
        {formik.touched.confirmPass && formik.errors.confirmPass ? (
          <Text style={styles.errors}>{formik.errors.confirmPass}</Text>
        ) : null}
        <Pressable style={styles.button} onPress={onPressLearnMore}>
          <Text style={styles.text}>Register</Text>
        </Pressable>
        <Text style={{ color: 'green', marginTop: 10 }}>
          Already have account ?{' '}
        </Text>

        <Pressable style={styles.button} onPress={onPressLogin}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
      </View>
    </>
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
    marginLeft: '32%',
    alignItems: 'center',
  },
  btnclick1: {
    padding: 5,
    marginLeft: '24%',
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

export default SignUp;
