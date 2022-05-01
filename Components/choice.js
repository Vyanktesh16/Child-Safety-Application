import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Choice = ({ navigation }) => {
  const onPressDetail = () => {
    navigation.navigate('Detail');
  };
  const onPressComplaint = () => {
    navigation.navigate('Photo');
  };

  const MissChild = () => {
    navigation.navigate('Complaint');
  };
  return (
    <View style={styles.main}>
      <Text style={styles.header}>Welcome !</Text>
      <Text>Find Your Missing child </Text>
      <Image
        source={require('../Images/undraw_Mobile_login_re_9ntv.jpg')}
        style={{ width: 312, height: 231, margin: 10 }}
      />
      <Pressable style={styles.button} onPress={onPressDetail}>
        <Text style={styles.text}>Enter Child Info</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={onPressComplaint}>
        <Text style={styles.text}>Find Child's Parent</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={MissChild}>
        <Text style={styles.text}>Complaint of missing child</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 40,
  },
  main: {
    backgroundColor: '#afeeee',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
    display: 'flex',
    flexDirection: 'row',
    width: 232,
    height: 39,
    fontSize: 20,
    margin: 10,
    backgroundColor: '#4698EA',
    padding: 9,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',

    // textDecorationLine: "underline",
  },
});

export default Choice;
