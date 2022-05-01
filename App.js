import { StyleSheet, Text, View } from "react-native";
import Navigator from "./routes/route.js";

export default function App() {
  console.log("Hello connected");
  return (
    <>
      <Navigator style={styles.container} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
