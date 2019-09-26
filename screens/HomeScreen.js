
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import theme from '../assets/styles/theme';
import MapView, {
  AnimatedRegion,
} from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
import Slider from 'react-native-slider';
import RNPickerSelect from 'react-native-picker-select';
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
      }),
      visible: false,
      value1: null
    };
  }

  getInitialState() {
    return {
      value: 0.2,
    };
  }

  animate() {
    const { coordinate } = this.state;
    const newCoordinate = {
      latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
    };

    if (Platform.OS === 'android') {
      if (this.marker) {
        this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    var mapStyle = [
      {
        "stylers": [
          {
            "saturation": -10
          },
          {
            "weight": 1
          }
        ]
      },
      {
        "elementType": "labels.text",
        "stylers": [
          {
            "weight": 3.5
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
    return (
      <View style={styles.container}>
        {
          <View style={styles.headerWrap}>
            <Image source={require('../assets/images/map-home2.png')} style={styles.headerIcon} resizeMode={'stretch'} />
            <View>
              <Text style={styles.address}>Downtown , New York</Text>
              <Text style={styles.addressDeatail}>Nearest town in the city</Text>
              <View style={styles.info}>
                <Image source={require('../assets/images/map-fly.png')} style={styles.iconFly} resizeMode={'stretch'} />
                <Text style={styles.firstText}>14-25</Text>
                <Image source={require('../assets/images/people-map.png')} style={styles.iconFly} resizeMode={'stretch'} />
                <Text style={styles.secondText}>14-25</Text>
              </View>
            </View>
          </View>
        }
        <View style={styles.actionItem}>
          <TouchableOpacity onPress={() => {
            this.setState({ visible: true });
          }}>
            <Image source={require('../assets/images/direction.png')} style={styles.directionIcon} resizeMode={'stretch'} /></TouchableOpacity>
        </View>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          customMapStyle={mapStyle}
          provider={MapView.PROVIDER_GOOGLE}
        >
        </MapView>
        <View style={styles.containerPopup}>
          <Dialog
            visible={this.state.visible}
            width={theme.WIDTH_FULL - 30}
            dialogAnimation={new SlideAnimation({
              slideFrom: 'bottom',
            })}
          >
            <DialogContent
            >
              <View style={styles.containerPopupWrap}>
                <Image source={require('../assets/images/popupwindypng.png')} style={styles.directionIconPopup} resizeMode={'contain'} />
                <Text style={styles.popupTitle}>Wind Reporting Menu</Text>
                <Text style={styles.popupDescription}>Downtown, New York</Text>
                <View>
                  <View style={styles.popupTitleSlider}><Text style={styles.pre}>Gust Speed</Text><Text style={styles.behind}>- 5KM/H</Text></View>
                  <View style={styles.containerSlider}>
                    <Slider
                      value={0.2}
                      thumbTintColor={'#4995bf'}
                      minimumTrackTintColor={'#4995bf'}
                      onValueChange={(value) => this.setState({ value1: value })} />
                  </View>
                </View>
                <View>
                  <View style={styles.popupTitleSlider}><Text style={styles.pre}>Gust Speed</Text><Text style={styles.behind}>- 5KM/H</Text></View>
                  <View style={styles.containerSlider}>
                    <Slider
                      value={0.2}
                      maximumTrackTintColor={'#bfbfbf'}
                      thumbTintColor={'#4995bf'}
                      minimumTrackTintColor={'#4995bf'}
                      height={1}
                      onValueChange={(value) => this.setState({ value1: value })} />
                  </View>
                </View>
                <View style={styles.styleLast}>
                  <View style={styles.popupTitleSlider}><Text style={styles.pre}>Surfers on Spot</Text><Text style={styles.behind}>- 10 Persons</Text></View>
                  <View style={styles.containerSlider}>
                    <Slider
                      value={0.8}
                      maximumTrackTintColor={'#bfbfbf'}
                      thumbTintColor={'#4995bf'}
                      minimumTrackTintColor={'#4995bf'}
                      onValueChange={(value) => this.setState({ value1: value })} />
                  </View>
                </View>
                <View>
                  <View style={styles.popupTitleSlider}><Text style={styles.pre}>Wind Direction</Text></View>
                  <View style={styles.containerSlider}>
                    <RNPickerSelect
                      onValueChange={(value) => console.log(value)}
                      items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                      ]}
                      style={styles.selectBox}
                    />
                  </View>
                </View>
                <TouchableOpacity style={styles.btnReport} onPress={() => {
                  this.setState({ visible: false });
                }}><Text style={styles.btnTextReport}>REPORT</Text></TouchableOpacity>
              </View>
            </DialogContent>
          </Dialog>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  /* style the popup */
  containerPopup: {
    //width: theme.WIDTH_FULL,
    marginLeft: 15,
    marginRight: 15
  },
  containerPopupWrap: {
    //width: '90%',
    display: 'flex',
    //justifyContent: 'center',
    alignItems: 'center'
  },
  directionIconPopup: {
    width: theme.WIDTH_FULL / 2,
    //height: theme.WIDTH_FULL / 3 + 50,
  },
  popupTitle: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    letterSpacing: 0,
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlign: "center",
    color: "#242424"
  },
  popupDescription: {
    opacity: 0.59,
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    letterSpacing: 0,
    color: "rgba(36, 36, 36, 0.59)"
  },
  btnReport: {
    width: theme.WIDTH_FULL - 100,
    height: 48,
    backgroundColor: '#4995bf',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
  btnTextReport: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff"
  },
  pre: {
    opacity: 0.6,
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(88, 88, 88, 0.6)"
  },
  behind: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    marginLeft: 15,
    textAlign: "left",
    color: "#000000"
  },
  containerSlider: {
    width: theme.WIDTH_FULL - 80,
  },
  popupTitleSlider: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15
  },
  styleLast: {
    marginTop: 20
  },
  selectBox: {
    marginTop: 10
  },
  /*end style the popup */
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  headerWrap: {
    position: 'absolute',
    zIndex: 2,
    top: 58,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 3.2,
      height: 3.8
    },
    shadowRadius: 5,
    shadowOpacity: 1,
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 25
  },
  address: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: 17,
    letterSpacing: 0,
    textAlign: "left",
    color: "#3d3d3d"
  },
  addressDeatail: {
    opacity: 0.53,
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: 11,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(61, 61, 61, 0.53)"
  },
  iconFly: {
    width: 12,
    height: 15,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  firstText: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: 11,
    letterSpacing: 0,
    textAlign: "left",
    color: "#3d3d3d",
    marginLeft: 5,
    marginRight: 40
  },
  secondText: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: 11,
    letterSpacing: 0,
    textAlign: "left",
    color: "#3d3d3d",
    marginLeft: 5
  },
  actionItem: {
    position: 'absolute',
    zIndex: 3,
    bottom: 15,
    right: 15,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 3.2,
      height: 3.8
    },
    shadowRadius: 5,
    shadowOpacity: 1,
  },
  directionIcon: {
    width: theme.WIDTH_FULL / 5,
    height: theme.WIDTH_FULL / 5,
    borderRadius: theme.WIDTH_FULL / 5 / 2
  }
})