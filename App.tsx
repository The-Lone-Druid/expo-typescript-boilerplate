import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/redux/store";
import React from "react";
import { StatusBar, View, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import {
  Provider as ThemeProvider,
  MD3LightTheme,
  adaptNavigationTheme,
  MD3DarkTheme
} from "react-native-paper";
import RootNavigation from "./src/RootNavigation";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./src/localization/i18n";
import { useAppColorScheme, useDeviceContext } from "twrnc";
import tw from "./src/theme/tailwind.theme";

const NavigationContainerTheme = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
  reactNavigationDark: DarkTheme,
  materialDark: MD3DarkTheme,
  materialLight: MD3LightTheme
});

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const [twColorScheme, toggleColorScheme, setTwColorScheme] =
    useAppColorScheme(tw);

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };
  const navigationTheme =
    colorScheme === "dark"
      ? NavigationContainerTheme.DarkTheme
      : NavigationContainerTheme.LightTheme;
  const statusBarStyle =
    colorScheme === "dark" ? "light-content" : "dark-content";

  React.useEffect(() => {
    setTwColorScheme(colorScheme);
  }, []);

  return (
    <>
      <ReduxProvider store={store}>
        <ThemeProvider theme={paperTheme}>
          <NavigationContainer theme={navigationTheme}>
            <I18nextProvider i18n={i18n}>
              <RootNavigation />
            </I18nextProvider>
          </NavigationContainer>
        </ThemeProvider>
      </ReduxProvider>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={paperTheme.colors.background}
      />
    </>
  );
}
