import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AppButton = ({ title, onPress, color = '#fc5c65' }) => {
	return (
		<TouchableOpacity style={[ styles.button, { backgroundColor: color } ]} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: '#fc5c65',
		borderRadius: 25,
		alignItems: 'center',
		padding: 15,
		width: '100%',
		justifyContent: 'center',
		marginVertical: 10
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: '600'
	}
});
export default AppButton;
