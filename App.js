import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryOverview from "./screens/CategoryOverview";
import MealDetail from "./components/MealsDetail";
import "./gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favirate from "./screens/favirate";
import AntDesign from "@expo/vector-icons/AntDesign";
import FavoritesContextProvider from './store/context'

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();

  function Drawerhandle() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4a5b3b" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#2a2121" },
          drawerStyle: {
            backgroundColor: "#302626",
          },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#4a5b3b",
        }}
      >
        <Drawer.Screen
          options={{
            drawerIcon: ({ size, color }) => {
              return <AntDesign name="home" size={size} color={color} />;
            },
          }}
          name="MealCategory"
          component={CategoriesScreen}
        />
        <Drawer.Screen
          options={{
            drawerIcon: ({ size, color }) => (
              <AntDesign name="star" size={size} color={color} />
            ),
          }}
          name="favourite"
          component={Favirate}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <FavoritesContextProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <Stack.Navigator
            initialRouteName="Mealdrawer"
            screenOptions={{
              headerStyle: { backgroundColor: "#4a5b3b" },
              contentStyle: { backgroundColor: "#2a2121" },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Mealdrawer"
              component={Drawerhandle}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealOverview" component={CategoryOverview} />
            <Stack.Screen name="MealDetail" component={MealDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
