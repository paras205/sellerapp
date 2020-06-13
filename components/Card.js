import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Card = ({ image, title, subtitle }) => {
	return (
		<View>
			<View style={styles.card}>
				<Image style={styles.cardImg} source={image} />
				<View style={styles.detailWrapper}>
					<Text style={styles.title}>{title}</Text>
					<Text>{subtitle}</Text>
				</View>
			</View>
			<View style={styles.card}>
				<Image style={styles.cardImg} source={image} />
				<View style={styles.detailWrapper}>
					<Text style={styles.title}>{title}</Text>
					<Text>{subtitle}</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: '#fff',
		marginBottom: 20,
		overflow: 'hidden'
	},
	cardImg: {
		height: 200,
		width: '100%'
	},
	detailWrapper: {
		padding: 10,
		paddingTop: 15,
		paddingBottom: 15
	},
	title: {
		paddingBottom: 10,
		color: '#fc5c65',
		textTransform: 'uppercase'
	}
});
export default Card;
