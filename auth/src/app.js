import React, {Component} from 'react';
import firebase from 'firebase';
import {View} from 'react-native';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from './components/LoginForm.js';
import Configs from './config.js';

class App extends Component {

	state = {isLoggedIn: null}


	componentWillMount(){
		firebase.initializeApp({
				apiKey: Configs.apiKey,
				authDomain: 'auth-4cbe7.firebaseapp.com',
				databaseURL: 'https://auth-4cbe7.firebaseio.com',
				projectId: 'auth-4cbe7',
				storageBucket: 'auth-4cbe7.appspot.com',
				messagingSenderId: Configs.messagingSenderId
		});

		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.setState({isLoggedIn: true});
			}
			else {
				this.setState({isLoggedIn: false});
			}
		});
	}

	renderContent(){
		switch(this.state.isLoggedIn){
			case true:
				return <CardSection><Button onPress={() => firebase.auth().signOut()}>Log Out</Button></CardSection>;
			case false:
				return <LoginForm />;
			default:
				return <CardSection><Spinner size="large"/></CardSection>
		}

	}

	render() {
		return (
			<View>
				<Header headerText='Authentication'/>
				{this.renderContent()}
			</View>
		);
	}
}

export default App;