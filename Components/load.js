import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

const Load = ({ navigation }) => {
  const onPressLearnMore = () => {
    navigation.navigate('SignUp');
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.container}>
          <Image
            source={require('../Images/undraw_map_1r69.jpg')}
            style={{ height: 67, width: 108, marginTop: 256 }}
          />
          <Image
            source={require('../Images/undraw_fatherhood_7i19.jpg')}
            style={{ marginLeft: 20, width: 146, height: 224, marginTop: 96 }}
          />
        </View>
        <Text style={styles.header}>Child Saftey Application </Text>

        <Pressable style={styles.button} onPress={onPressLearnMore}>
          <Text style={styles.text}>Get Started</Text>
        </Pressable>

        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#afeeee',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  header: {
    fontSize: 24,
    color: '#000',
    paddingBottom: 10,
    paddingTop: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
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
    marginBottom: 100,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Load;
