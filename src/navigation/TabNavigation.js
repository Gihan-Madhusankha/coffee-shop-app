/*eslint-disable*/
import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import CartScreen from "../screens/CartScreen";
import { COLORS } from "../theme/theme";
import { BlurView } from "@react-native-community/blur";
import CustomIcon from "../components/CustomIcon";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.BlurViewStyles}
          />
        ),
      }}
    >
      <Tab.Screen name={"Home"} component={HomeScreen}
                  options={{
                    tabBarIcon: ({ focused, color, size }) => (
                      <SetCustomIcon focused={focused} color={color} size={size} name={"home"} />
                    ),
                  }}
      ></Tab.Screen>
      <Tab.Screen name={"Cart"} component={CartScreen}
                  options={{
                    tabBarIcon: ({ focused, color, size }) => (
                      <SetCustomIcon focused={focused} color={color} size={size} name="cart" />
                    ),
                  }}
      ></Tab.Screen>
      <Tab.Screen name={"Favourite"} component={FavouriteScreen}
                  options={{
                    tabBarIcon: ({ focused, color, size }) => (
                      <SetCustomIcon focused={focused} color={color} size={size} name="like" />
                    ),
                  }}
      ></Tab.Screen>
      <Tab.Screen name={"History"} component={OrderHistoryScreen}
                  options={{
                    tabBarIcon: ({ focused, color, size }) => (
                      <SetCustomIcon focused={focused} color={color} size={size} name="bell" />
                    ),
                  }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const SetCustomIcon = ({ focused, color, size, name }) => {
  return (
    <CustomIcon
      name={name}
      size={25}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
    />
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  BlurViewStyles: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigation;
