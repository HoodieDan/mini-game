import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

function PrimaryButton({ children, onPress }) {

    return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                android_disableSound={true}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        overflow: 'hidden',
        margin: 4,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 28,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        margin: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    pressed: {
        opacity: 0.75,
    },
})