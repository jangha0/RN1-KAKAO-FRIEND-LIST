import { ScrollView, View } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";
import Profile from "./Profile";

const bottomSpace = getBottomSpace();

export default (props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: getBottomSpace }}
    >
      {/**{
  uri: "https://cdn.pixabay.com/photo/2022/01/11/19/43/avocado-6931344_960_720.jpg",
  name: "ovo.qvq",
  introduction: "세상은 넓고 하고싶은 것은 많다🎈",
}; */}
      {props.data.map((item, index) => (
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  );
};
