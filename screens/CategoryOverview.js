import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import Mealslist from "../components/MealsList";
import { useLayoutEffect } from "react";

const CategoryOverview = ({ route, navigation }) => {
  const cartId = route.params.CategoryId;

  const filterMeals = MEALS.filter((m) => {
    return m.categoryIds.indexOf(cartId);
  });

  useLayoutEffect(() => {
    const title = CATEGORIES.find((c) => c.id == cartId).title;
    navigation.setOptions({ title: title });
  }, [cartId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={filterMeals}
        renderItem={({ item }) => <Mealslist item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default CategoryOverview;
