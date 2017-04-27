import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail.js';

class AlbumList extends Component {

	state = {albums: []};

	componentWillMount(){
		this.fetchData().then((data) => {
			this.setState({albums: data});
		});
	}
	
	render(){
		console.log(this.state.albums);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}

	//Async method to fetch api
	async fetchData(){
		let response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
		return response.json(); //Wait for response to come then then return promise
	}

	renderAlbums(){
		return this.state.albums.map((album) => {
			return <AlbumDetail key={album.title} album={album} />
		});
	}
}
export default AlbumList;
