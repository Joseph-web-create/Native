import { styles } from "@/styles/auth.style";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
export default function Index() {
  const  {signOut} = useAuth()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => signOut()}>
        <Text style={{ color: "white" }}>sign out</Text>
      </TouchableOpacity>
    </View>
  );
}
