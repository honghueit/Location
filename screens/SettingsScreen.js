import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, Platform, StatusBar } from 'react-native';
import theme from '../assets/styles/theme';
import { Ionicons } from '@expo/vector-icons';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export default class SettingsScreen extends React.Component {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/images/avatar.png')} style={styles.avatar} resizeMode={'stretch'} />
          <Text style={styles.name}>Michael Tawde</Text>
        </View>
        <ScrollView style={styles.content}>
          <View style={[styles.section, styles.sectionSecond]}>
            <Image source={require('../assets/images/Layer26.png')} style={styles.headerIconSection} resizeMode={'stretch'} />
            <Text style={styles.sectionInfoSecond}>16 Reports</Text>
          </View>
          <View style={[styles.section, styles.sectionFirst]}>
            <Image source={require('../assets/images/userProfile.png')} style={styles.headerIconSection} resizeMode={'contain'} />
            <Text style={styles.sectionInfoFirst}>7 Sessions</Text>
          </View>
          <View style={styles.downtown}>
            <View style={styles.headerWrap}>
              <Image source={require('../assets/images/profilehome.png')} style={styles.headerIcon} resizeMode={'stretch'} />
              <View>
                <Text style={styles.address}>DownTown</Text>
                <Text style={styles.addressDeatail}>New York</Text>
              </View>
              <Text style={styles.homespot}>Home Spot</Text>
            </View>
            <View style={styles.borderbottom}></View>
            <View style={styles.subcribeSpotWrap}>
              <Text style={styles.subcribeSpot}>Subscribed Spots</Text>
              <View style={styles.subcribeSpotItem}>
                <View style={styles.headerWrap}>
                  <Ionicons name="md-pin" size={23} color="#000000" />
                  <View>
                    <Text style={styles.address}>DownTown</Text>
                    <Text style={styles.addressDeatail}>New York</Text>
                  </View>
                  <Ionicons name="ios-trash" size={23} color="red" style={styles.deleteIcon} />
                </View>
              </View>
              <View style={styles.subcribeSpotItem}>
                <View style={styles.headerWrap}>
                  <Ionicons name="md-pin" size={23} color="#000000" />
                  <View>
                    <Text style={styles.address}>DownTown</Text>
                    <Text style={styles.addressDeatail}>New York</Text>
                  </View>
                  <Ionicons name="ios-trash" size={23} color="red" style={styles.deleteIcon} />
                </View>
              </View>
              <View style={styles.subcribeSpotItem}>
                <View style={styles.headerWrap}>
                  <Ionicons name="md-pin" size={23} color="#000000" />
                  <View>
                    <Text style={styles.address}>DownTown</Text>
                    <Text style={styles.addressDeatail}>New York</Text>
                  </View>
                  <Ionicons name="ios-trash" size={23} color="red" style={styles.deleteIcon} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

SettingsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  content: {
    backgroundColor: theme.BACKGROUNDCOLOR_PRIMARY,
    flex: 1,
    paddingTop: 60,
    zIndex: 1,
    position: 'relative',
  },
  avatar: {
    width: theme.WIDTH_FULL / 4,
    height: theme.WIDTH_FULL / 4,
    marginBottom: -80,
    marginLeft: 30,
    marginRight: 21,

  },
  header: {
    position: 'relative',
    zIndex: 2,
    //height: 80,
    marginTop: STATUSBAR_HEIGHT,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 3.2,
      height: 3.8
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  name: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
    letterSpacing: 0,
    color: "#3d3d3d",
    marginLeft: theme.WIDTH_FULL / 4 + 40
  },
  section: {
    width: theme.WIDTH_FULL - 30,
    borderRadius: 9,
    marginLeft: 15,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 22
  },
  headerIconSection: {
    width: 25,
    height: 25,
  },
  sectionInfoFirst: {
    opacity: 0.71,
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM - 3,
    letterSpacing: 0,
    color: "rgba(255, 255, 255, 0.71)",
    marginLeft: 23
  },
  sectionSecond: {
    backgroundColor: "#4995bf"
  },
  sectionInfoSecond: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM - 3,
    letterSpacing: 0,
    color: "#ffffff",
    marginLeft: 23
  },
  sectionFirst: {
    backgroundColor: "#16acbf",
  },
  downtown: {
    width: theme.WIDTH_FULL - 30,
    borderRadius: 9,
    backgroundColor: "#fefefe",
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 3.2,
      height: 3.8
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    marginLeft: 15,
    marginRight: 15
  },
  downtownHeader: {

  },
  headerWrap: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center'
  },
  address: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM - 2,
    color: "#080808",
    marginLeft: 15
  },
  addressDeatail: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    letterSpacing: 0,
    color: "rgba(8, 8, 8, 0.44)",
    marginLeft: 15
  },
  headerIcon: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  borderbottom: {
    height: 1,
    width: 471,
    backgroundColor: '#3d3d3d',
    opacity: 0.08,
    width: theme.WIDTH_FULL - 30,
  },
  homespot: {
    marginLeft: 'auto',
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    letterSpacing: 0,
    color: "#4995bf"
  },
  subcribeSpot: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    letterSpacing: 0,
    color: "#4995bf"
  },
  subcribeSpotWrap: {
    padding: 20
  },
  spotIcon: {
    height: 20,
    width: 20,
  },
  deleteIcon: {
    height: 20,
    width: 20,
    marginLeft: 'auto'
  }
})