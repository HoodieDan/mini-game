import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

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
		<LinearGradient
			colors={["#4e0329", "#ddb52f"]}
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
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
});
