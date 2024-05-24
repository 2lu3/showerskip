import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Text, View, Image} from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image source={require('../assets/tree_dead.png')} />
            <ThemedText>Edit app/index.tsx to edit this screen.</ThemedText>
        </View>
    );
}
