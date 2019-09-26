import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Entypo, AntDesign } from '@expo/vector-icons'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  render() {
    return (
      <ImageBackground source={require('../assets/images/bg.png')} style={styles.container}>
        <View style={styles.imageWrapper}>
          <View style={{ height: 100 }}></View>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.facebook} onPress={() => console.log(this.props.navigation.navigate('Main'))}>
            <Entypo name="facebook" size={23} color={'#fff'} />
            <Text style={{ color: '#fff', marginLeft: 10 }}>LOGIN WITH FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.google} onPress={() => console.log(this.props.navigation.navigate('Main'))}>
            <AntDesign name="google" size={23} color={'#4995bf'} />
            <Text style={{ color: '#4995bf', marginLeft: 10 }}>LOGIN WITH GOOGLE</Text>
          </TouchableOpacity>
          <View style={{ height: 7 }}></View>
          <TouchableOpacity><Text style={{ fontSize: 11 }}>Privacy Policy and Terms of Use</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {

    height: 190,
    width: 190,
  },
  imageWrapper: {

    height: '65%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {

    height: '35%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 42
  },
  facebook: {

    width: '90%',
    height: 60,
    backgroundColor: '#4995bf',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  google: {

    width: '90%',
    height: 60,
    borderColor: '#4995bf',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 2,
    flexDirection: 'row'
  }
});