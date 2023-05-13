import { ScrollView, View } from "react-native";
import React from "react";
import { List, Text } from "react-native-paper";
import tw from "../../theme/tailwind.theme";
import Constants from "expo-constants";
import { useTranslation } from "react-i18next";

type Props = {};

const Home = (props: Props) => {
  const { t } = useTranslation();

  return (
    <View style={tw`flex-1`}>
      <ScrollView>
        <View style={tw`p-4`}>
          <Text variant="headlineLarge" style={tw`font-bold`}>
            Welcome to Expo Boilerplate
          </Text>
          <Text variant="titleLarge" style={tw`mt-4`}>
            This boilerplate contains production ready code for your next React
            Native project. Here's the List of features:
          </Text>
          <View style={tw`mt-4`}>
            <List.Item
              style={tw`bg-black dark:bg-white bg-opacity-10 rounded-[10px] mb-4`}
              title="Localization"
              titleStyle={tw`font-bold`}
              description="This boilerplate can be localized As per your need, currently it's configured with English language 'en.json'."
              left={(props) => <List.Icon {...props} icon="earth" />}
              descriptionNumberOfLines={3}
            />
            <List.Item
              style={tw`bg-black dark:bg-white bg-opacity-10 rounded-[10px] mb-4`}
              titleStyle={tw`font-bold`}
              title="Cache Management"
              description="With the help of Redux Toolkit, this boilerplate has a strong Cache management system for performance."
              left={(props) => <List.Icon {...props} icon="cached" />}
              descriptionNumberOfLines={3}
            />
            <List.Item
              style={tw`bg-black dark:bg-white bg-opacity-10 rounded-[10px] mb-4`}
              titleStyle={tw`font-bold`}
              title="REST API Management"
              description="Thanks to Redux Toolkit's RTK Query, which helps in managing REST API's in a very efficient way."
              left={(props) => <List.Icon {...props} icon="swap-horizontal" />}
              descriptionNumberOfLines={3}
            />
            <List.Item
              style={tw`bg-black dark:bg-white bg-opacity-10 rounded-[10px] mb-4`}
              titleStyle={tw`font-bold`}
              title="Multi Environment Support"
              description="This boilerplate has support for multiple .env files, have a look at start.sh file for more details."
              left={(props) => <List.Icon {...props} icon="more" />}
              descriptionNumberOfLines={3}
            />
            <List.Item
              style={tw`bg-black dark:bg-white bg-opacity-10 rounded-[10px] mb-4`}
              titleStyle={tw`font-bold`}
              title="Material First Theme"
              description="This Boilerplate comes with React Native Paper pre installed, configured and ready to use."
              left={(props) => <List.Icon {...props} icon="material-ui" />}
              descriptionNumberOfLines={3}
            />
            <List.Item
              style={tw`bg-black dark:bg-white bg-opacity-10 rounded-[10px] mb-4`}
              titleStyle={tw`font-bold`}
              title="Tailwind CSS Classnames"
              description="This Boilerplate is configured with Tailwind CSS to avoid js style objects and focus more on classnames."
              left={(props) => <List.Icon {...props} icon="tailwind" />}
              descriptionNumberOfLines={3}
            />
            <List.Item
              style={tw`bg-black dark:bg-white bg-opacity-10 rounded-[10px] mb-4`}
              titleStyle={tw`font-bold`}
              title="Dark Theme Support"
              description="This Boilerplate has support for Dark Theme, you can change it from Settings screen and it's also system adaptive."
              left={(props) => <List.Icon {...props} icon="brightness-4" />}
              descriptionNumberOfLines={3}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
