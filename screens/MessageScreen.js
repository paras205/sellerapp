import React, { useState } from 'react';
import { FlatList, View, Platform, StyleSheet, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';

const messages = [
	{ id: 1, title: 'Title one', description: 'title one description', image: require('../assets/background.jpg') },
	{ id: 2, title: 'Title Two', description: 'title two description', image: require('../assets/background.jpg') }
];
const MessageScreen = () => {
	const renderGridItem = ({ item }) => {
		return (
			<ListItem
				title={item.title}
				image={item.image}
				listing={item.description}
				onPress={() => console.log(item.id)}
			/>
		);
	};
	const [ refreshing, setRefreshing ] = useState(false);
	return (
		<View style={styles.screen}>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id.toString()}
				renderItem={renderGridItem}
				ItemSeparatorComponent={() => <View style={{ width: '100%', height: 1, backgroundColor: '#ddd' }} />}
				refreshing={refreshing}
				onRefresh={() => {}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	screen: {
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		flex: 1
	}
});
export default MessageScreen;
