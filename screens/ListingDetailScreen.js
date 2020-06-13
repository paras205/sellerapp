import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import ListItem from '../components/ListItem';

const ListingDetailScreen = () => {
	return (
		<View>
			<Image style={styles.image} source={require('../assets/background.jpg')} />
			<View style={styles.detailWrapper}>
				<Text style={styles.title}>adasdadasdasdsa</Text>
				<Text style={styles.subtitle}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a
				</Text>
			</View>
			<ListItem image={require('../assets/background.jpg')} title="John Doe" listing="5 Listing" />
		</View>
	);
};
const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 300
	},
	detailWrapper: {
		paddingHorizontal: 15,
		paddingVertical: 25
	},
	title: {
		textTransform: 'uppercase',
		marginBottom: 10,
		fontSize: 20,
		fontWeight: '500'
	},
	subtitle: {
		color: '#555',
		lineHeight: 26,
		fontSize: 14,
		textAlign: 'justify'
	}
});
export default ListingDetailScreen;
