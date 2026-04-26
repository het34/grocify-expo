import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Link href={"/about"}>About</Link> */}
      <Image
        source={require("../assets/images/android-icon-foreground.png")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 20
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})