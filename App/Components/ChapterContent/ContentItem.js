import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useCallback, useState } from "react";
import RenderHTML from "react-native-render-html";
import Colors from "../../Utils/Colors";
import YoutubePlayer from "react-native-youtube-iframe";

const ContentItem = ({ desc, output }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const { width } = useWindowDimensions();

  const descSource = {
    html: desc,
  };

  const outputSource = {
    html: output,
  };

  return (
    desc && (
      <View>
        {/* <Text>{desc}</Text> */}
        {/* <RenderHTML
          contentWidth={width}
          source={descSource}
          tagsStyles={tagsStyles}
        /> */}
        <YoutubePlayer
          height={"58%"}
          play={playing}
          videoId={desc}
          webViewStyle={{ borderRadius: 10, marginTop: 10 }}
          onChangeState={onStateChange}
        />
        {/* {output != null ? (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              padding: 12,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 10,
              width: 100,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.WHITE,
                textAlign: "center",
                fontSize: 15,
              }}
            >
              Run
            </Text>
          </TouchableOpacity>
        ) : null} */}
        {/* <RenderHTML
          contentWidth={width}
          source={outputSource}
          tagsStyles={tagsStyles}
        /> */}
      </View>
    )
  );
};

export default ContentItem;

const tagsStyles = {
  body: {
    fontFamily: "outfit",
    fontSize: 17,
  },
};
