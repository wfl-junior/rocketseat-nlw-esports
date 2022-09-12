import { Fragment } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101215",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "700",
    fontSize: 36,
  },
});

const App: React.FC = () => (
  <Fragment>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />

    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  </Fragment>
);

export default App;
