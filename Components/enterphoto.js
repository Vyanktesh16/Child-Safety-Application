import React, { useState, useEffect } from 'react';
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const EnterPhoto = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const addImage = () => {};

  const onPressLearnMore = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={imageUploaderStyles.main}>
      <Image
        source={require('../Images/undraw_fatherhood_7i19.jpg')}
        style={{ width: 95, height: 76, marginTop: 70 }}
      />
      <Text style={imageUploaderStyles.header}>
        Help child to get there Parent ..!
      </Text>

      <View style={imageUploaderStyles.container}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}

        <View style={imageUploaderStyles.uploadBtnContainer}>
          <TouchableOpacity
            onPress={addImage}
            style={imageUploaderStyles.uploadBtn}
          >
            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <Pressable style={imageUploaderStyles.button} onPress={onPressLearnMore}>
        <Text style={imageUploaderStyles.text}>
          Find All Information of child
        </Text>
      </Pressable>
    </View>
  );
};

const imageUploaderStyles = StyleSheet.create({
  main: {
    backgroundColor: '#E5E5E5',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: '#efefef',
    position: 'relative',
    borderRadius: 999,
    overflow: 'hidden',
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '25%',
  },
  uploadBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 20,
    color: '#000',
    paddingBottom: 10,
    paddingTop: 20,
    fontWeight: 'bold',
    marginLeft: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    padding: 20,
  },
  button: {
    width: 232,
    height: 39,
    fontSize: 20,
    margin: 25,
    backgroundColor: '#59C0C7',
    padding: 9,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default EnterPhoto;
