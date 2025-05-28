import { Image, Text, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
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
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    imageContainer: {
        width: 300,
        height: 300,
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