import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Load from "../Components/load";
import Register from "../Components/register";
import Login from "../Components/login";
import Choice from "../Components/choice";
import Detail from "../Components/detail";
import EnterPhoto from "../Components/enterphoto";
import Complaint from "../Components/complaint";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
const screens = {
  Home: {
    screen: Load,
  },
  SignUp: {
    screen: SignUp,
  },
  Register: {
    screen: Register,
  },
  Login: {
    screen: Login,
  },
  Choose: {
    screen: Choice,
  },
  Detail: {
    screen: Detail,
  },
  Photo: {
    screen: EnterPhoto,
  },
  Complaint: {
    screen: Complaint,
  },
  SignIn: {
    screen: SignIn,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
