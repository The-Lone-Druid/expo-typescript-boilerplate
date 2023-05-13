import { View, useColorScheme } from "react-native";
import React from "react";
import {
  List,
  MD3DarkTheme,
  MD3LightTheme,
  Switch,
  Text,
  useTheme
} from "react-native-paper";
import tw from "../../theme/tailwind.theme";
import { useTranslation } from "react-i18next";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useAppColorScheme, useDeviceContext } from "twrnc";

type Props = {};

const Settings = (props: Props) => {
  const { t } = useTranslation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  React.useEffect(() => {
    if (colorScheme === "dark") {
      setIsSwitchOn(true);
    }
  }, []);

  return (
    <View style={tw`p-4`}>
      <Text variant={"headlineLarge"} style={{ fontWeight: "bold" }}>
        {t("settings.description")}
      </Text>
      <View style={tw`mt-4`}>
        <List.Item
          onPress={onToggleSwitch}
          style={tw`bg-black dark:bg-white bg-opacity-10 rounded-lg mb-2`}
          title={"Dark Theme"}
          left={(props) => <List.Icon {...props} icon={"palette"} />}
          right={(props) => (
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          )}
        />
      </View>
    </View>
  );
};

export default Settings;
