import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
	return (
		<ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
			<View style={styles.logo}>
				<Text style={styles.tagline}>Sell what you dont need</Text>
			</View>
			<View style={styles.buttonContainer}>
				<AppButton title="login" />
				<AppButton title="Register" color="green" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	logo: {
		position: 'absolute',
		top: 50
	},
	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: '#fc5c65'
	},
	buttonContainer: {
		padding: 20,
		width: '100%'
	},
	tagline: {
		fontSize: 20,
		fontWeight: '700',
		paddingVertical: 20,
		textTransform: 'uppercase'
	}
});
