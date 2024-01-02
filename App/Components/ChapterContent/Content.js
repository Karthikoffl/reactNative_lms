import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ContentItem from "./ContentItem";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Content = ({ content, onChapterFinish }) => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  let contentRef;
  const onNextBtnPress = (index) => {
    if (content?.length <= index + 1) {
      // navigation.goBack();
      onChapterFinish();
      return;
    }
    setActiveIndex(index + 1);
    contentRef.scrollToIndex({ animated: true, index: index + 1 });
  };

  return (
    <View style={{ height: "100%" }}>
      <ProgressBar contentLength={content?.length} contentIndex={activeIndex} />
      <FlatList
        data={content}
        horizontal
        pagingEnabled
        ref={(ref) => {
          contentRef = ref;
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ width: Dimensions.get("screen").width, padding: 20 }}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 22,
                marginTop: 5,
              }}
            >
              {item.heading}
            </Text>
            <ContentItem
              desc={item?.description?.markdown}
              output={item?.output?.html}
            />

            <TouchableOpacity
              onPress={() => onNextBtnPress(index)}
              style={{
                borderRadius: 10,
                backgroundColor: Colors.PRIMARY,
              }}
            >
              <Text
                style={{
                  padding: 15,
                  color: Colors.WHITE,
                  textAlign: "center",
                  fontFamily: "outfit",
                  fontSize: 17,
                }}
              >
                {content?.length > index + 1 ? "Next" : "Finish"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Content;
