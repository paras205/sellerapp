import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const ListItem = ({ image, title, listing, onPress }) => {
	return (
		<TouchableHighlight underlayColor="#ddd" onPress={onPress}>
			<View style={styles.listItem}>
				<Image style={styles.image} source={image} />
				<View>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.subtitle}>{listing}</Text>
				</View>
			</View>
		</TouchableHighlight>
	);
};
const styles = StyleSheet.create({
	listItem: {
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 35,
		overflow: 'hidden',
		marginRight: 10
	},
	title: {
		fontSize: 14,
		textTransform: 'uppercase',
		fontWeight: '600'
	},
	subtitle: {
		color: '#6e6969'
	}
});
export default ListItem;
