import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import HomePage from "scenes/HomeScreen";
import EndCallScreen from "scenes/EndCallScreen";

type Props = {};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (props: Props) => {
	return (
		<RootStack.Navigator initialRouteName="Home">
			<RootStack.Screen name="Home" component={HomePage} />
			<RootStack.Screen name="EndCallScreen" component={EndCallScreen} />
		</RootStack.Navigator>
	);
};

export default RootNavigator;
