import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {navs} from "../../constants/navs";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 75,
          backgroundColor: "#FF2B85",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fc8fbd",
        tabBarIconStyle: {},
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "500"
        },
        tabBarShowLabel: true,
        gestureEnabled: true,
        animation: "fade",
      }}
    >
      {navs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name={tab.icon} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
