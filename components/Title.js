import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return (
    <Text style={styles.title}>
      {children}
    </Text>
  );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#ddb52f',
        fontWeight: 'bold',
        marginBottom: 24,
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
        textAlign: 'center',
    },
});