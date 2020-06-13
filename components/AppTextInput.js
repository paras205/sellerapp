import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppTextInput = ({ icon, ...remProps }) => {
	return (
		<View style={styles.container}>
			{icon && <MaterialCommunityIcons name={icon} size={20} color="#fff" style={styles.icon} />}
			<TextInput style={styles.textInput} {...remProps} />
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000',
		borderRadius: 25,
		flexDirection: 'row',
		width: '100%',
		padding: 15,
		marginTop: 40
	},
	icon: {
		marginLeft: 11,
		position: 'relative',
		top: 2
	},
	textInput: {
		fontSize: 18,
		paddingLeft: 15,
		color: '#fff',
		fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
	}
});
export default AppTextInput;
