import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function NotFoundScreen() {
    const router = useRouter();

    return (
        <>
            {/* <Stack.Screen options={{ headerTitle: "Oops" }} /> */}

            <View className="w-full h-full flex flex-col gap-y-2 justify-center items-center">
                <Text className="text-red-700">This screen doesn't exist.</Text>

                <Pressable
                    className=" p-2 flex bg-red-400 justify-center rounded-lg items-center"
                    onPress={() => router.push("/")}
                >
                    <Text>Go Back!</Text>
                </Pressable>
                {/* </Link> */}
            </View>
        </>
    );
}
