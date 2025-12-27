import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Input({ value, label, onChangeText }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                value={value}
                placeholder="0.00"
                style={styles.input}
                keyboardType="numeric"
                onChangeText={onChangeText}
                placeholderTextColor="#ccc"
            />
        </View>
    )
}