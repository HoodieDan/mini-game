import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		color: "white",
		fontWeight: "bold",
		marginBottom: 24,
		borderWidth: Platform.OS === "android" ? 2 : 0,
		borderColor: "white",
		padding: 12,
		textAlign: "center",
    maxWidth: "80%",
    width: 300,
	},
});
