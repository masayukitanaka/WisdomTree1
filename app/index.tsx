import { View, StyleSheet } from "react-native";
import AnimatedCircle from "../components/AnimatedCircle";

export default function Index() {
  return (
    <View style={styles.container}>
      <AnimatedCircle size={300} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
