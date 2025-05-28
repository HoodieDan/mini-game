import { Image, Text, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width: deviceWidth } = useWindowDimensions();
    const imageSize = deviceWidth < 380 ? 150 : 300;
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
    };
    return (
		<ScrollView style={styles.screen}>
			<View style={styles.rootContainer}>
				<Title>Game Over!</Title>
				<View style={[styles.imageContainer, imageStyle]}>
					<Image
						source={require("../assets/images/success.png")}
						style={styles.image}
						resizeMode="cover"
					/>
				</View>
				<Text style={{ fontSize: 18, marginBottom: 10 }}>
					Number of rounds: {roundsNumber}
				</Text>
				<Text style={{ fontSize: 18, marginBottom: 20 }}>
					Number was: {userNumber}
				</Text>
				<PrimaryButton onPress={onStartNewGame}>
					Start New Game
				</PrimaryButton>
			</View>
		</ScrollView>
	);
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});