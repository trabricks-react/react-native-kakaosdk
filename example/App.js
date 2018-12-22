/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import KakaoSDK from 'react-native-ccs-kakaosdk';

type Props = {};
export default class App extends Component<Props> {

	async login() {
		KakaoSDK.login().then((response) => {
			console.log(response);
		}).catch(e => {
			console.log(e);
		});
	}

	async logout() {
		KakaoSDK.logout().then((response) => {
			console.log(response);
		}).catch(e => {
			console.log(e);
		});
	}

	async getToken() {
		KakaoSDK.getAccessToken().then(token => {
			alert(JSON.stringify(token));
		}).catch(e => {
			console.log(e);

		});
	}
		
	render() {
		return (
			<View style={styles.container}>

				<TouchableOpacity 
					onPress={() => this.login() }
					style={{ borderColor: '#000', borderWidth: 1, padding: 10, width: 200, }}>
					<Text>Login</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					onPress={() => this.logout() }
					style={{ borderColor: '#000', borderWidth: 1, padding: 10, width: 200, marginTop: 10, }}>
					<Text>Logout</Text>
				</TouchableOpacity>

				<TouchableOpacity 
					onPress={() => this.getToken() }
					style={{ borderColor: '#000', borderWidth: 1, padding: 10, width: 200, marginTop: 10, }}>
					<Text>getToken</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
