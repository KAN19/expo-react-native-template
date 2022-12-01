import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { RootStackScreenProps } from "navigations/type";
import { useAppDispatch } from "store";
import { fetchTestingText } from "store/slices/testSlice";
import { storeLocalData } from "helpers/appAsyncStorage";
import { LOCAL_STORAGE_ENUM } from "constants/storageConsts";

type Props = {};

const HomePage = ({ navigation, route }: RootStackScreenProps<"Home">) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchTestingText());
	});

	return (
		<View className="flex justify-center items-center">
			<Text>HomePage</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate("EndCallScreen")}
			>
				<Text>Click me</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HomePage;
