import { Text, StyleSheet, View } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#4e0329',
    },
});