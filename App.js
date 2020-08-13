import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Button, Alert, ActivityIndicator, Vibration } from 'react-native';
import { WebView } from 'react-native-webview';

class App extends React.Component {
	render() {
		return (
			<ScrollView style={styles.container}>
				{/* Question: Je n'arrive pas à voir les modifications sur le mobile, je le vois que sur le web. */}
				<View>
					{/* Text */}
					<Text style={{ fontSize: 30, marginTop: 80, marginBottom: 80 }}>Test 1</Text>
					<Text style={{ textAlign: 'center', marginTop: 80, marginBottom: 80 }}>Test 2</Text>
					<Text style={{ fontWeight: 'bold', marginTop: 80, marginBottom: 80 }}>Test 3</Text>

					{/* Image */}
					<Image source={require('./assets/konexio-logo_1.png')} style={{ width: 200, height: 200 }} />
					<Image
						source={{ uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png' }}
						style={{ width: 200, height: 200 }}
					/>

					{/* Button */}
					{/* Question:   Alert ne fonctionne pas  */}
					<Button title="Valider" color="grey" onPress={() => Alert.alert('button pressed')} />

					{/* Text */}
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Text>

					{/* WebView */}
					{/* Question: j'ai installé WebView , j'ai mis le lien vers la page Konexio mais ça fonctionne pas lors du chargement de la page */}
					<WebView source={{ uri: 'https://www.konexio.eu/index.html' }} style={{ marginTop: 20 }} />

					{/* ActivityIndicator */}
					<ActivityIndicator size="large" />

					{/* Vibration: à tester sur le mobile  */}
					<View>
						<Button title="Vibrate once" onPress={() => Vibration.vibrate()} />
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'cyan'
	}
});

export default App;
