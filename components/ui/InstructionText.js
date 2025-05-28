import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function InstructionText({ children }) {
    return (
        <View>
            <Text style={styles.instructionText}>
                {children}
            </Text>
        </View>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
	instructionText: {
		color: "white",
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
		textAlign: "center",
	},
});