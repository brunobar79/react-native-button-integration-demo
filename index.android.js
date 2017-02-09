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
 	  	userId: '',
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
			<View style={styles.container}>
				<Image 
					source={{uri:'https://www.usebutton.com/img/v3/ic_button-mark@2x.png'}}
					style={styles.logo}
				/>
				<Text style={styles.mainTitle}>
					Button Integration Demo
				</Text>
				<Text style={styles.title}>
					Try any of the features below:
				</Text>
				<View style={styles.row}>
					<TextInput
				        style={styles.textInput}
				        value={this.state.userId}
				        onChangeText={(text) => this.setState({userId:text})}
				        placeholder={'Set your button user id here'}
				        placeholderTextColor={'#CCCCCC'}
	        		/>
	        		<TouchableOpacity 
	        			style={styles.button}
	        			onPress={ _ => this.setUserId(this.state.userId) }
	        		>
						<Text style={styles.btnText}>Set!</Text>
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
						<Text style={styles.btnText}>Logout!</Text>
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
						<Text style={styles.btnText}>Get!</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3a87c1',
	},
	logo: {
		width: 60,
		height: 70
	},
	row:{
		flexDirection: 'row',
		marginVertical: 20
	},
	title: {
		fontSize: 20,
		color: '#FFFFFF',
		marginTop: 30,
	},
	mainTitle: {
		fontSize: 28,
		textAlign: 'center',
		margin: 10,
		color: '#FFFFFF',
		marginBottom: 40
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	textInput:{
		width: 250,
		height: 45,
		color: '#FFFFFF',
		fontSize: 16,
		marginRight: 20
	},
	button:{
		borderWidth: 1,
		borderColor: '#FFFFFF',
		borderRadius: 6,
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	btnText:{
		color: '#FFF'
	}
});

AppRegistry.registerComponent('rnbtn', () => rnbtn);
