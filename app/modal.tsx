import { StatusBar } from "expo-status-bar";
import { Platform, Text, View } from "react-native";

export default function ModalScreen() {
    return (
        <View className="flex justify-center items-center gap-y-2">
            <Text className="font-bold text-base text-gray-600">Modal</Text>
            <View />
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
}
