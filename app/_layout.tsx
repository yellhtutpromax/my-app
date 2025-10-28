import { Stack } from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import "./global.css";

export default function RootLayout() {
  return (
  <SafeAreaView>
    <Stack>
      <Stack.Screen
          name="(tabs)"
          options={{headerShown: false}}
      />
    </Stack>
  </SafeAreaView>

  );
}
