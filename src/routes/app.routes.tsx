import * as React from "react";
import { StyleSheet, TouchableHighlight, View, Text } from "react-native";

// Libs
import { NavigationContainer } from "@react-navigation/native";
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

// Store

// Components
import Icon from "~/components/Icon";

// Styles
import { colors } from "~/styles";

// Images

// Screens
import Home from "~/screens/Home";
import History from "~/screens/History";
import Projection from "~/screens/Projection";

import { navigationRef } from "./RootNavigation";

const Tab = createBottomTabNavigator();

const CustomTabButton = (props: BottomTabBarButtonProps) => {
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={colors.ice}
      onPress={props.onPress}
      style={styles.customTabButtonButton}
    >
      <View style={styles.customTabButtonContainer}>{props.children}</View>
    </TouchableHighlight>
  );
};

export default function AppRoutes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: colors.primary,
          },
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.iconContainer}>
                  <Icon
                    name="chart-bar"
                    size={30}
                    color={
                      focused ? colors.primaryText : colors.whiteTransparent
                    }
                  />
                  <Text
                    style={{
                      ...styles.iconText,
                      color: focused
                        ? colors.primaryText
                        : colors.whiteTransparent,
                    }}
                  >
                    History
                  </Text>
                </View>
              );
            },

            tabBarLabel: () => <></>,
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.iconContainer}>
                  <Icon
                    name="currency-usd"
                    size={45}
                    color={
                      focused ? colors.primaryText : colors.whiteTransparent
                    }
                  />
                </View>
              );
            },
            tabBarButton: (props) => <CustomTabButton {...props} />,
            tabBarLabel: () => <></>,
          }}
        />

        <Tab.Screen
          name="Projection"
          component={Projection}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={styles.iconContainer}>
                  <Icon
                    name="chart-bar"
                    size={30}
                    color={
                      focused ? colors.primaryText : colors.whiteTransparent
                    }
                  />
                  <Text
                    style={{
                      ...styles.iconText,
                      color: focused
                        ? colors.primaryText
                        : colors.whiteTransparent,
                    }}
                  >
                    Projection
                  </Text>
                </View>
              );
            },

            tabBarLabel: () => <></>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  customTabButtonButton: {
    top: -45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.ice,
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  customTabButtonContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
  },

  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  iconText: {
    fontSize: 12,
  },
});
