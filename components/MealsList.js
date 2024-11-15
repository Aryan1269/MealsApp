import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Mealslist = ({ item }) => {
  const { id, title, imageUrl, duration, affordability, complexity } = item;

  const navigation = useNavigation();

  function handlenavigation() {
    return navigation.navigate("MealDetail", { mealId: id });
  }

  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={handlenavigation}
          android_ripple={{ color: "#ccc" }}
        >
          <View>
            <Image
              style={styles.images}
              source={{
                uri: imageUrl,
              }}
            />
            <Text
              style={[
                styles.textsty,
                {
                  fontStyle: "normal",
                  fontSize: 18,
                  textAlign: "center",
                  marginTop: 4,
                },
              ]}
            >
              {title}
            </Text>
          </View>
          <View style={styles.textBtm}>
            <Text style={styles.textsty}>{duration}m</Text>
            <Text style={styles.textsty}>{affordability}</Text>
            <Text style={styles.textsty}>{complexity}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 5,
    padding: 5,
    borderRadius: 8,
    margin: 8,
    borderWidth: 1,
    borderColor: "#5f0909",
  },
  images: {
    width: "100%",
    height: 200,
    borderRadius: 4,
    resizeMode: "cover",
    overflow: "hidden",
  },
  textBtm: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  textsty: {
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "200",
    padding: 2,
    color: "whitesmoke",
  },
});

export default Mealslist;
