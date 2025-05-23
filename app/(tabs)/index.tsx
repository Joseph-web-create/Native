import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "../../styles/auth.style";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={style.container}>
      <Link href={"/notification"}>Visit notification screen</Link>
    </View>
  );
}
