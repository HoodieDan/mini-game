import {
	Text,
	StyleSheet,
	View,
	Alert,
	FlatList,
	useWindowDimensions,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;
	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState([]);
	const { width: deviceWidth } = useWindowDimensions();

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(pastGuesses.length + 1);
		} else {
			setPastGuesses((prevGuesses) => [currentGuess, ...prevGuesses]);
		}
	}, [currentGuess, userNumber, onGameOver]);

	const minBoundary = useRef(1);
	const maxBoundary = useRef(100);

	const nextGuessHandler = (direction) => {
		if (
			(direction === "lower" && currentGuess < userNumber) ||
			(direction === "higher" && currentGuess > userNumber)
		) {
			// Alert the user about the incorrect guess
			Alert.alert("Don't lie!", "You know that this is wrong.", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary.current = currentGuess;
		} else {
			minBoundary.current = currentGuess + 1;
		}
		const newGuess = generateRandomBetween(
			minBoundary.current,
			maxBoundary.current,
			currentGuess
		);
		setCurrentGuess(newGuess);
	};

	const guessLogLength = pastGuesses.length;

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText>Higher or Lower?</InstructionText>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-around",
					}}
				>
					<PrimaryButton
						onPress={() => {
							nextGuessHandler("higher");
						}}
					>
						<Ionicons name="add" size={24} color="white" />
					</PrimaryButton>
					<PrimaryButton
						onPress={() => {
							nextGuessHandler("lower");
						}}
					>
						<Ionicons name="remove" size={24} color="white" />
					</PrimaryButton>
				</View>
			</Card>
		</>
    );
    
    if (deviceWidth > 500) {
        content = (
			<>
				<View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-around",
						}}
					>
						<PrimaryButton
							onPress={() => {
								nextGuessHandler("higher");
							}}
						>
							<Ionicons name="add" size={24} color="white" />
						</PrimaryButton>
						<NumberContainer>{currentGuess}</NumberContainer>
						<PrimaryButton
							onPress={() => {
								nextGuessHandler("lower");
							}}
						>
							<Ionicons name="remove" size={24} color="white" />
						</PrimaryButton>
					</View>
				</View>
			</>
		);
    }

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{content}
			<View style={styles.listContainer}>
				<Text>Past Guesses:</Text>
				<FlatList
					data={pastGuesses}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessLogLength - itemData.index}
							guess={itemData.item}
						/>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		alignItems: "center",
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
});
