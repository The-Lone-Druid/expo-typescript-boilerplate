import { View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";
import tw from "../../theme/tailwind.theme";
import { useTranslation } from "react-i18next";

type Props = {};

const Settings = (props: Props) => {
  const { t } = useTranslation();

  return (
    <View style={tw`p-4`}>
      <Text variant={"headlineLarge"} style={{ fontWeight: "bold" }}>
        {t("settings.description")}
      </Text>
    </View>
  );
};

export default Settings;
