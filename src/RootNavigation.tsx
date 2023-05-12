import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { HomeScreen } from "./screens/default-exports";
import { MaterialIcons } from "@expo/vector-icons";
import { SettingsScreen } from "./screens/default-exports";
import { useTranslation } from "react-i18next";

type Props = {};

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const RootNavigation = (props: Props) => {
  const { t } = useTranslation();
  const homeLabel: any = t("home.title");
  const settingsLabel: any = t("settings.title");

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons color={color} size={24} name="home" />
            ),
            tabBarLabel: homeLabel
          }}
          name="HomeStack"
          component={HomeStackNavigation}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons color={color} size={24} name="settings" />
            ),
            tabBarLabel: settingsLabel
          }}
          name="SettingsStack"
          component={SettingsStackNavigation}
        />
      </Tab.Navigator>
    </>
  );
};

export default RootNavigation;

const HomeStackNavigation = () => {
  const { t } = useTranslation();
  const homeLabel: any = t("home.title");

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: homeLabel
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsStackNavigation = () => {
  const { t } = useTranslation();
  const settingsLabel: any = t("settings.title");

  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTitle: settingsLabel
        }}
      />
    </Stack.Navigator>
  );
};
