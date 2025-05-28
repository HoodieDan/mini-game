import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(false);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }
  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  
  if (userNumber && guessRounds <= 0) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
		<>
			<StatusBar style="light" />
			<LinearGradient
				colors={[Colors.primary700, Colors.accent500]}
				style={styles.rootScreen}
			>
				<ImageBackground
					source={require("./assets/images/background.png")}
					resizeMode="cover"
					style={styles.rootScreen}
					imageStyle={{ opacity: 0.15 }}
				>
					<SafeAreaView style={styles.rootScreen}>
						{screen}
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
  );
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
