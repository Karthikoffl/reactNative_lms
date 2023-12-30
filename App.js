import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./App/Screen/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-semibold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 35,
  },
});
