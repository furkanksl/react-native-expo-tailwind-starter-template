import { View, Text } from "react-native";
import { Link } from "expo-router";

const Home = () => {
    return (
        <>
            <View className="w-full h-full flex flex-col gap-y-4 justify-center items-center bg-gray-300">
                <Text>Home</Text>
                <Link
                    href={"/nested/one"}
                    className="p-2 flex bg-red-400 justify-center items-center rounded-lg active:bg-blue-500"
                >
                    <Text>ONE</Text>
                </Link>

                <Link
                    href={"/nested/two"}
                    className="p-2 flex bg-red-400 justify-center items-center rounded-lg active:bg-blue-500"
                >
                    <Text>TWO</Text>
                </Link>

                <Link
                    href={"/detail"}
                    className="p-2 flex bg-red-400 justify-center items-center rounded-lg active:bg-blue-500"
                >
                    <Text>Wrong page</Text>
                </Link>

                <Link
                    href={"/modal"}
                    className="p-2 flex bg-red-400 justify-center items-center rounded-lg active:bg-blue-500"
                >
                    <Text>Modal</Text>
                </Link>
            </View>
        </>
    );
};

export default Home;
