import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

const App = () => {
	return (
		<View>
			<Header headerText={'Albums'}/>
			<AlbumList />
		</View>
	);
};

AppRegistry.registerComponent('albums', () => App);