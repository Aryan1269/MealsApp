import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGrid";

function CategoriesScreen({ navigation }) {
  const handlePress = (item) => {
    navigation.navigate("MealOverview", {
      CategoryId: item.id,
    });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item, idx) => item + idx}
      renderItem={(item) => (
        <CategoriesGridTile
          title={item.item.title}
          color={item.item.color}
          onPress={() => handlePress(item.item)}
        />
      )}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
