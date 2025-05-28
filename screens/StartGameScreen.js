import {
	TextInput,
	View,
	StyleSheet,
	Alert,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	const { height: deviceHeight } = useWindowDimensions();

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

	const marginTopDistance = deviceHeight < 400 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View
					style={[
						styles.rootContainer,
						{ marginTop: marginTopDistance },
					]}
				>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a number</InstructionText>
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
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		width: 50,
		borderBottomColor: Colors.accent500,
		color: Colors.accent500,
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
