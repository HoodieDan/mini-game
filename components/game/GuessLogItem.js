import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        padding: 12,
        backgroundColor: Colors.accent500,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        width: "100%",
        elevation: 3,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
    itemText: {
        fontSize: 16,
        color: "#333",
    },
});