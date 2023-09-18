import { noTabHeader } from "constants/common";
import { Tabs } from "expo-router";

// export const unstable_settings = {
//     initialRouteName: "login",
// };

const Layout = (): any => {
    return (
        <Tabs tabBar={() => null} initialRouteName="one" screenOptions={noTabHeader}>
            <Tabs.Screen name="one" />
            <Tabs.Screen name="two" />
        </Tabs>
    );
};

export default Layout;
