import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoriesGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        style={[
          ({ pressed }) => (pressed ? style.buttonPressed : null),
          styles.button,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoriesGridTile;
