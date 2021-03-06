// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import {
//   Button,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Image,
//   Pressable,
//   TouchableOpacity,
// } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

// const Complaint = ({ navigation }) => {
//   const [image, setImage] = React.useState(null);

//   const [user, setreg] = React.useState({
//     childName: '',
//     parentName: '',
//     currentAddress: '',
//     phoneNumber: '',
//   });

//   const onPressLearnMore = () => {
//     console.log(user);
//     navigation.navigate('Home');
//   };

//   const addImage = () => {};

//   return (
//     <View style={styles.main}>
//       <Image
//         source={require('../Images/undraw_fatherhood_7i19.jpg')}
//         style={{ width: 95, height: 76, marginTop: 70 }}
//       />
//       <Text style={styles.header}>Missing Child Information</Text>
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) =>
//           setreg({
//             ...user,
//             ['childName']: text,
//           })
//         }
//         value={user.childName}
//         placeholder="Enter Child Name"
//         keyboardType="default"
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) =>
//           setreg({
//             ...user,
//             ['parentName']: text,
//           })
//         }
//         value={user.parentName}
//         placeholder="Enter Parent Full Name"
//         keyboardType="default"
//       />

//       <TextInput
//         style={styles.input}
//         underlineColorAndroid={'transparent'}
//         onChangeText={(text) =>
//           setreg({
//             ...user,
//             ['currentAddress']: text,
//           })
//         }
//         value={user.currentAddress}
//         placeholder="Enter Parent Address"
//         keyboardType="default"
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={(text) =>
//           setreg({
//             ...user,
//             ['phoneNumber']: text,
//           })
//         }
//         name="phoneNumber"
//         value={user.phoneNumber}
//         placeholder="Enter Phone Number"
//         keyboardType="phone-pad"
//       />

//       {/* <Button
//         onPress={onPressLearnMore}
//         style={styles.button}
//         title="Save"
//         color="#59C0C7"
//         accessibilityLabel="Learn more about this purple button"
//       /> */}
//       <View style={styles.container}>
//         <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
//           <AntDesign name="camera" size={20} color="black" />
//           <Text style={{ marginRight: 10, fontSize: 18, fontWeight: 'bold' }}>
//             {image ? 'Edit' : 'Upload'} Image
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <Pressable style={styles.button} onPress={onPressLearnMore}>
//         <Text style={styles.text}>File a missing complaint</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: '#afeeee',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   view: {
//     display: 'flex',
//     flexDirection: 'row',
//     borderBottomWidth: 2,
//     borderColor: 'grey',
//     marginTop: 30,
//     width: 250,
//   },
//   input: {
//     justifyContent: 'center',
//     marginLeft: 20,
//     height: 20,
//   },
//   input: {
//     height: 43,
//     width: 287,
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     borderRadius: 100,
//     borderColor: '#fff',
//     marginTop: 10,
//   },
//   header: {
//     fontSize: 20,
//     color: '#000',
//     paddingBottom: 10,
//     paddingTop: 20,
//     fontWeight: 'bold',
//     marginLeft: 5,
//     borderBottomColor: '#199187',
//     borderBottomWidth: 4,
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: '#4698EA',
//     marginTop: 20,
//   },
//   text: {
//     fontSize: 15,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//   },
//   container: {
//     width: 200,
//     height: 43,
//     backgroundColor: 'lightgrey',
//   },
//   uploadBtn: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
// });

// export default Complaint;
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import NumberPlease from 'react-native-number-please';
import { AntDesign } from '@expo/vector-icons';

const initialValues = {
  childName: '',
  parentName: '',
  currentAddress: '',
  permanentAddress: '',
  phoneNumber: '',
  dob: '',
  pemail:'',
};

const validationSchema = Yup.object({
  childName: Yup.string().required('Required* !'),
  parentName: Yup.string().required('Required* !'),
  currentAddress: Yup.string().required('Required !'),
  permanentAddress: Yup.string().required('Required !'),
  phoneNumber: Yup.number().min(10).max(10).required('Required* !'),
  dob: Yup.string().required('Required* !'),
  pemail: Yup.string().email('Invalid Email Format').required('Required !'),

});

const Detail = ({ navigation }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
  });
  var today = new Date().getDate();
  var cmonth = new Date().getMonth() + 1;
  var cyear = new Date().getFullYear();
  var currentDate = today + '-' + cmonth + '-' + cyear;
  console.log(currentDate);
  const onPressLearnMore = () => {
    console.log(formik.values);
    console.log(formik.errors);
    console.log(formik.touched);
    const dob =
      birthday[0].value + '-' + birthday[1].value + '-' + birthday[2].value;
    console.log(dob);

    navigation.navigate('Choose');
  };

  const options = [
    { value: 'O+', label: 'O+' },
    { value: 'A+', label: 'A+' },
    { value: 'B+', label: 'B+' },
    { value: 'AB+', label: 'AB+' },
    { value: 'O-', label: 'O-' },
    { value: 'A-', label: 'A-' },
    { value: 'B-', label: 'B-' },
    { value: 'AB-', label: 'AB-' },
  ];
  const initialBirthday = [
    { id: 'day', value: 16 },
    { id: 'month', value: 4 },
    { id: 'year', value: 1970 },
  ];

  const [birthday, setBirtday] = useState(initialBirthday);

  const date = [
    { id: 'day', label: '', min: 1, max: 31 },
    { id: 'month', label: '', min: 1, max: 12 },
    { id: 'year', label: '', min: 1900, max: new Date().getFullYear() },
  ];

  const [selectedOption, setSelectedOption] = useState('');

  const handleBg = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const [image, setImage] = React.useState(null);
  const addImage = () => {};

  console.log(birthday);
  return (
    <View style={styles.main}>
      <Image
        source={require('../Images/undraw_fatherhood_7i19.jpg')}
        style={{ width: 95, height: 76, marginTop: 70 }}
      />
      <Text style={styles.header}>Missing Child Information</Text>
      <ScrollView>
        <View style={styles.view}>
          <Icon name="user" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Enter Child Name"
            keyboardType="default"
            onChangeText={formik.handleChange('childName')}
            value={formik.values.childName}
            onBlur={formik.handleBlur('childName')}
          />
        </View>
        {formik.touched.childName && formik.errors.childName ? (
          <Text style={styles.errors}>{formik.errors.childName}</Text>
        ) : null}

        <View style={styles.view}>
          <Icon name="calendar" size={20} color="#000" style={styles.dicon} />
          <Text style={styles.date}>
            Date Of birth :
            <Text style={styles.datelist}>
              <NumberPlease
                digits={date}
                values={birthday}
                onChange={(values) => setBirtday(values)}
              />
            </Text>
          </Text>
        </View>
        <View style={styles.view}>
          <Icon name="calendar" size={20} color="#000" style={styles.dicon} />

          <Text>Select Blood Group :</Text>
        </View>
        <View style={styles.view}>
          <Icon name="users" size={20} color="#000" />

          <TextInput
            style={styles.input}
            placeholder="Enter Parent Full Name"
            keyboardType="default"
            onChangeText={formik.handleChange('parentName')}
            value={formik.values.parentName}
            onBlur={formik.handleBlur('parentName')}
          />
        </View>
        {formik.touched.parentName && formik.errors.parentName ? (
          <Text style={styles.errors}>{formik.errors.parentName}</Text>
        ) : null}

<View style={styles.view}>
          <Icon name="envelope" size={20} color="#000" />
          <TextInput
            style={styles.input}
            placeholder="Enter Parents Email"
            keyboardType="email-address"
            onChangeText={formik.handleChange('pemail')}
            value={formik.values.email}
            onBlur={formik.handleBlur('pemail')}
          />
        </View>
        {formik.touched.pemail && formik.errors.pemail ? (
          <Text style={styles.errors}>{formik.errors.pemail}</Text>
        ) : null}

        <View style={styles.view}>
          <Icon name="street-view" size={20} color="#000" />

          <TextInput
            style={styles.input}
            underlineColorAndroid={'transparent'}
            placeholder="Enter Parent Current Address"
            keyboardType="default"
            onChangeText={formik.handleChange('currentAddress')}
            value={formik.values.currentAddress}
            onBlur={formik.handleBlur('currentAddress')}
          />
        </View>
        {formik.touched.currentAddress && formik.errors.currentAddress ? (
          <Text style={styles.errors}> {formik.errors.currentAddress}</Text>
        ) : null}
        <View style={styles.view}>
          <Icon name="home" size={20} color="#000" />

          <TextInput
            style={styles.input}
            name="permanentAddress"
            placeholder="Enter Parent Permanent Address"
            keyboardType="default"
            onChangeText={formik.handleChange('permanentAddress')}
            value={formik.values.permanentAddress}
            onBlur={formik.handleBlur('permanentAddress')}
          />
        </View>
        {formik.touched.permanentAddress && formik.errors.permanentAddress ? (
          <Text style={styles.errors}>{formik.errors.permanentAddress}</Text>
        ) : null}
        <View style={styles.view}>
          <Icon name="mobile" size={25} color="#000" />

          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            keyboardType="phone-pad"
            onChangeText={formik.handleChange('phoneNumber')}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur('phoneNumber')}
          />
        </View>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <Text style={styles.errors}>{formik.errors.phoneNumber}</Text>
        ) : null}

        <View style={styles.container}>
          <TouchableOpacity onPress={addImage} style={styles.uploadBtn}>
            <AntDesign name="camera" size={20} color="black" />
            <Text style={{ marginRight: 10, fontSize: 18, fontWeight: 'bold' }}>
              {image ? 'Edit' : 'Upload'} Image
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={onPressLearnMore}>
        <Text style={styles.text}>Continue ..</Text>
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
  dicon: {
    marginTop: 10,
  },
  date: {
    marginTop: 10,
    marginLeft: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  datelist: {
    margin: 5,
  },
  main: {
    backgroundColor: '#afeeee',
    height: '100%',
    justifyContent: 'center',
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
    borderBottomColor: '#199187',
    borderBottomWidth: 4,
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
  container: {
    width: 200,
    height: 43,
    backgroundColor: 'lightgrey',
    margin: 30,
  },
  uploadBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default Detail;
