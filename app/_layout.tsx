import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ParamListBase, RouteProp, ThemeProvider } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { RouteT } from "types/common";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <RootLayoutNav />;
}

const getScreenOptions = ({ route }: { route: RouteProp<ParamListBase, string> }) => {
    const options: NativeStackNavigationOptions = {
        orientation: "portrait",
    };

    if (route.params) {
        if ((route?.params as RouteT)?.path?.includes("nested")) {
            options.headerTitle = (route?.params as RouteT)?.path === "/nested/one" ? "One" : "Two";
        }
    }

    return options;
};

function RootLayoutNav() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack initialRouteName="index" screenOptions={getScreenOptions}>
                <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
                <Stack.Screen name="modal" options={{ presentation: "modal" }} />
                <Stack.Screen name="[...missing]" options={{ headerTitle: "Oops" }} />
            </Stack>
        </ThemeProvider>
    );
}
