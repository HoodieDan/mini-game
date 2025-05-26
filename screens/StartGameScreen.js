import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	const numberInputHandler = (inputText) => {
		setEnteredNumber(inputText);
	};

	const resetInputHandler = () => {
		setEnteredNumber("");
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredNumber);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert(
				"Invalid number",
				"Please enter a valid number between 1 and 99.",
				[
					{
						text: "Okay",
						style: "destructive",
						onPress: resetInputHandler,
					},
				]
			);
			return;
		}
        console.log("Confirmed Number:", chosenNumber);
        onPickNumber(chosenNumber);
        setEnteredNumber("");
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				keyboardType="number-pad"
				maxLength={2}
				style={styles.numberInput}
				value={enteredNumber}
				onChangeText={numberInputHandler}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetInputHandler}>
						Reset
					</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={confirmInputHandler}>
						Confirm
					</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	inputContainer: {
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: "#4e0329",
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		width: 50,
		borderBottomColor: "#ddb52f",
		color: "#ddb52f",
		borderBottomWidth: 2,
		marginVertical: 8,
		textAlign: "center",
		fontSize: 32,
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		flex: 1,
	},
});
