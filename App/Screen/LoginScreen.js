import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import App from "../../assets/images/app.png";
import Colors from "../Utils/Colors";
import Google from "../../assets/images/google.png";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={App}
        resizeMode="contain"
        style={{ width: 250, height: 500, marginTop: "30%" }}
      />
      <View
        style={{
          height: 400,
          width: "100%",
          backgroundColor: Colors.PRIMARY,
          marginTop: "-30%",
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit-bold",
            fontSize: 35,
            color: Colors.WHITE,
            marginTop: 30,
          }}
        >
          CODEBOX
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.LIGHT_PRIMARY,
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Your Ultimate Programming Learning Box
        </Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: Colors.WHITE,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: 10,
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <Image
            source={Google}
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
          />
          <Text
            style={{
              fontSize: 20,
              color: Colors.PRIMARY,
              fontFamily: "outfit",
            }}
          >
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
