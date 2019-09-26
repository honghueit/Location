import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import theme from '../assets/styles/theme';
import { Ionicons } from '@expo/vector-icons';
import {
  LineChart
} from 'react-native-chart-kit';
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width - 30;

const chartConfig = {
  backgroundGradientFrom: '#ffff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#ffff',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2 // optional, default 3
}
const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [ 20, 45, 28, 80, 99, 43 ],
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})` ,
    strokeWidth:4
  }]
}
export default class DetailLocationScreen extends React.Component {


  render() {
    const graphStyle = {
      marginVertical: 8,
      ...chartConfig.style,
      color: 'red'
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/images/locationbg.png')} style={styles.locationbg}>
          <View style={styles.imageWrapperContent}>
            <Text style={styles.spotNameTitle}>SPOT NAME HERE</Text>
            <Text style={styles.spotNameDescription}>Spot subtitle here. - New York</Text>
          </View>
        </ImageBackground>

        <ScrollView style={styles.content}>
          <View style={styles.actiongroup}>
            <TouchableOpacity style={[styles.actionItem]}>
              <Ionicons name="ios-star" size={23} color="#ffffff" style={styles.deleteIcon} />
              <Text style={styles.actionTextItem}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionItem]}>
              <Image source={require('../assets/images/Windy.png')} style={styles.actionIcon} resizeMode={'contain'} />
              <Text style={styles.actionTextItem}>Windy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionItem]}>
              <Ionicons name="md-sunny" size={23} color="#ffffff" style={styles.deleteIcon} />
              <Text style={styles.actionTextItem}>Sunlight</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionItem]}>
              <Image source={require('../assets/images/TopBars.png')} style={styles.actionIcon} resizeMode={'contain'} />
              <Text style={styles.actionTextItem}>Top Bars</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btngroup}>
            <TouchableOpacity style={[styles.btnItem]}><Text style={styles.actionText}>SET HOME</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.btnItem]}><Text style={styles.actionText}>SUBSCRIBE</Text></TouchableOpacity>
          </View>
          <View style={styles.chart}>
            {

              <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                style={graphStyle}
              />
            }
          </View>
          <View style={styles.bottom}>
            <Text style={styles.headingText}>LOREM HEADING</Text>
            <Text style={styles.bottomDescription}>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since
            the 1500s</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

DetailLocationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.BACKGROUNDCOLOR_PRIMARY,
  },
  /* banner style */
  locationbg: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: theme.HEIGHT_FULL / 4
  },
  imageWrapperContent: {
    height: '40%',
    //opacity: 0.62,
    backgroundColor: "#4995bf70",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  spotNameTitle: {
    textAlign: 'center',
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_LARGE,
    color: "#ffffff",
    opacity: 1,
  },
  spotNameDescription: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    letterSpacing: 0,
    marginTop: 7,
    color: "#ffffff",
    opacity: 1,

  },
  /* end banner style */
  /* action btn style */
  actiongroup: {
    display: 'flex',
    flexDirection: 'row',
    width: theme.WIDTH_FULL - 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 9,
    backgroundColor: "#4995bf",
    paddingBottom: 10,
    paddingTop: 10,
    marginBottom: 20,
    marginTop: 23,
    paddingLeft: 15,
    paddingRight: 15
  },
  actionItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  actionTextItem: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_SMALL,
    letterSpacing: 0,
    color: "#ffffff",
    flex: 1
  },
  btngroup: {
    display: 'flex',
    width: theme.WIDTH_FULL - 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  btnItem: {
    width: theme.WIDTH_FULL / 2 - 25,
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 10.4,
    backgroundColor: "#16acbf",
  },
  actionText: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: 15,
    letterSpacing: 0,
    textAlign: "center",
    color: "#ffffff",
    alignContent: 'center'
  },
  /* end action btn style */
  content: {
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    fontFamily: theme.FONT_FAMILY_SEMI_BOLD,
    fontSize: theme.FONT_SIZE_MEDIUM,
    letterSpacing: 0,
    textAlign: "left",
    color: "#0c0c0c",
    paddingTop: 10,
    paddingBottom: 10
  },
  bottomDescription: {
    opacity: 0.37,
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM - 4,
    letterSpacing: 0,
    textAlign: "left",
    color: "rgba(12, 12, 12, 0.37)",
    marginTop: 10
  },
  headingText: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  actionIcon: {
    width: 18,
    marginBottom: 3
  }
})