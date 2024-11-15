import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import { ScreenStackHeaderRightView, headerRight } from "react-native-screens";
import Entypo from "@expo/vector-icons/Entypo";
import { FavoriteContext } from "../store/context";

const MealDetail = ({ route, navigation }) => {
  const mealid = route.params.mealId;
  const favoriteMealsCtx = useContext(FavoriteContext);

  const isfavoriteMeal = favoriteMealsCtx.ids.includes(mealid);

  const selectedMeal = MEALS.find((m) => m.id == mealid);

  const {
    id,
    title,
    imageUrl,
    duration,
    affordability,
    complexity,
    ingredients,
    steps,
  } = selectedMeal;

  function handleFavorite() {
    if (isfavoriteMeal) {
      favoriteMealsCtx.removeFavorite(mealid);
    } else {
      favoriteMealsCtx.addFavorite(mealid);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name="star"
          size={24}
          color={isfavoriteMeal ? "yellow" : "white"}
          onPress={handleFavorite}
        />
      ),
      headerTitle: "Receip",
    });
  }, [selectedMeal, navigation, isfavoriteMeal]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
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
        <View>
          <Text style={styles.textouter}>ingredients</Text>
          {ingredients.map((m) => (
            <Text style={styles.textInner} key={m}>
              {m}
            </Text>
          ))}
          <Text style={styles.textouter}>steps</Text>
          {steps.map((m, idx) => (
            <Text
              style={[
                styles.textInner,
                { fontWeight: 300, fontStyle: "normal", fontSize: 15 },
              ]}
              key={m}
            >
              {`${idx}. ${m}\n`}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
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
  textouter: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    textTransform: "capitalize",
    marginVertical: 15,
    textDecorationLine: "underline",
  },
  textInner: {
    color: "#f5e0e0",
    fontStyle: "italic",
    fontFamily: "sans-serif",
    marginHorizontal: 20,
    fontSize: 14,
  },
});

export default MealDetail;
