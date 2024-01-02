import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Content from "../Components/ChapterContent/Content";
import { useNavigation, useRoute } from "@react-navigation/native";

const ChapterContentScreen = () => {
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    console.log("Chapter Id: ", param.chapterId);
    console.log("Record Id: ", param.userCourseRecordId);
  }, [param]);

  const onChapterFinish = () => {
    // MarkCompletedChapter().then((resp) => {
    //   console.log(resp);
    // });
    navigation.goBack();
  };

  return (
    param.content && (
      <View>
        <Content
          content={param.content}
          onChapterFinish={() => onChapterFinish()}
        />
      </View>
    )
  );
};

export default ChapterContentScreen;
