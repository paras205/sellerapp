import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, StyleSheet, View } from 'react-native';

const ViewImageScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<MaterialCommunityIcons name="close" color="#fff" size={30} />
			</View>
			<View style={styles.deleteIcon}>
				<MaterialCommunityIcons name="trash-can-outline" color="#fff" size={30} />
			</View>
			<Image style={styles.imagebg} resizeMode="contain" source={require('../assets/background.jpg')} />
		</View>
	);
};
const styles = StyleSheet.create({
	closeIcon: {
		position: 'absolute',
		top: 40,
		left: 30
	},
	deleteIcon: {
		position: 'absolute',
		top: 40,
		right: 30
	},
	container: {
		backgroundColor: '#000',
		flex: 1
	},
	imagebg: {
		width: '100%',
		height: '100%',
		marginTop: 50
	}
});
export default ViewImageScreen;
