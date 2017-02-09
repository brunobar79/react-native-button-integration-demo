/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';

 import {
 	AppRegistry,
 	StyleSheet,
 	Text,
 	ScrollView,
 	View,
 	Image,
 	TouchableOpacity,
 	TextInput,
 	NativeModules,
 	ToastAndroid
 } from 'react-native';

 const Button = NativeModules.Button;


 export default class rnbtn extends Component {

 	constructor(props) {
 		super(props);

 		this.state = {
 			userId: ''
 		};

 	}

 	setUserId(userId) {
 		Button.setUserIdentifier(userId);
 		ToastAndroid.show(`user identifier has been set to ${userId}`, ToastAndroid.SHORT);
 	}

 	userDidLogout() {
 		Button.logout();
 		ToastAndroid.show(`user did logout`, ToastAndroid.SHORT);
 	}

 	async getButtonRef(){
 		try{
 			const data = await Button.getButtonRef();
 			if (data){
				//You might want to send the value of "data" to your backend.
				ToastAndroid.show(`got button ref:  ${data}`, ToastAndroid.SHORT);
			}
		}catch(e){
			ToastAndroid.show(`${e}`, ToastAndroid.SHORT);
		}	
	}


	
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				
				<Image 
					source={{uri:'https://www.usebutton.com/img/v3/ic_button-mark@2x.png'}}
					style={styles.logo}
				/>
				
				<Text style={styles.mainTitle}>
					Button Integration Demo
				</Text>

				<Text style={styles.subtitle}>
					Try any of the features below:
				</Text>

				<View style={styles.row}>
					<TextInput
						style={styles.textInput}
						value={this.state.userId}
						onChangeText={(text) => this.setState({userId:text})}
						placeholder={'Set your button user id here'}
						placeholderTextColor={'#DDDDDD'}
						underlineColorAndroid={'#FFFFFF'}
					/>
					<TouchableOpacity 
						style={styles.button}
						onPress={ _ => this.setUserId(this.state.userId) }
					>
						<Text style={styles.btnText}>SET!</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.title}>
					Logout
				</Text>

				<View style={styles.row}>
					<TouchableOpacity 
						style={styles.button}
						onPress={ _ => this.userDidLogout() }
					>
						<Text style={styles.btnText}>LOGOUT!</Text>
					</TouchableOpacity>
				</View>


				<Text style={styles.title}>
					Get Button Ref
				</Text>
				<View style={styles.row}>
					<TouchableOpacity 
						style={styles.button}
						onPress={ _ => this.getButtonRef() }
					>
						<Text style={styles.btnText}>GET!</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3a87c1'
	},
	logo: {
		width: 60,
		height: 70
	},
	row:{
		flexDirection: 'row',
		marginVertical: 20
	},
	mainTitle: {
		fontSize: 28,
		textAlign: 'center',
		margin: 10,
		color: '#FFFFFF',
		marginBottom: 0
	},
	subtitle: {
		fontSize: 20,
		color: '#FFFFFF',
		marginTop: 30,
		marginBottom: 30
	},
	title: {
		fontSize: 18,
		color: '#FFFFFF',
		marginTop: 30
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	},
	textInput:{
		width: 230,
		height: 50,
		color: '#FFFFFF',
		fontSize: 16,
		marginRight: 20
	},
	button:{
		paddingHorizontal: 30,
		paddingVertical: 15,
		elevation: 5,
		backgroundColor: '#00589C'
	},
	btnText:{
		color: '#FFF',
		fontWeight: 'bold'
	}
});

AppRegistry.registerComponent('rnbtn', () => rnbtn);
