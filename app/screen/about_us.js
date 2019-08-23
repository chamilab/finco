import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageBackground
} from "react-native";
import { Button, Container, Header, Content, Left } from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from  'react-native-elements';


const styles = StyleSheet.create({
  icon:{
    paddingLeft: 10,
    
  },
  info_cirle:{
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   width: 50
  },
  info_button:{
   borderRadius: 5000 / 2,
   backgroundColor: "#ffffff",
   justifyContent: 'center',
   width: 40,
   height: 40
  },
  icon_info:{
   fontSize: 30
  },
  screen_details: {
    alignItems: "center",
    flex: 1
  },
  player_logo: {
    top: 20,
    left: 10,
    width: 300,
    bottom: 170,
    height: 200,
    alignItems: "center",
    position: "absolute",
    justifyContent: "flex-start",
    borderColor: "#000000"
  },
  img_player: {
    width: 250,
    justifyContent: "flex-start",
    position: "absolute",
    height: 200,
    alignItems: "center"
  },
  round_logo: {
    position: "absolute",
    width: 120,
    height: 120,
    top: 40,
    left: 60,
    bottom: 30,
    right: 30,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 600 / 2
  },
  main_logo: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80
  },
  about_txt: {
    alignItems: "center",
    justifyContent: "center",
    top: 235
  },
  about_corner: {
    marginTop: 250,
    paddingTop: 50,
    width: 250,
    textAlignVertical: "center",
    height: 150,
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#F8E5BF"
  },
  about_content: {
      top:10,
      lineHeight: 20,
  }
});
export default class about_us extends Component{
  static navigationOptions = ({navigation}) => ({
    //const { params = {} } = navigation.state;
    
    headerTitleStyle: { flex: 1, textAlign: 'center', fontFamily: 'Nirmala', fontSize: 12, color: '#ffffff'},
    title: 'සප්ත තෙරුවන් වන්දනාව',
    headerStyle:{
      backgroundColor: '#FFAA00'
    },
    
    headerLeft: Platform.select({
      ios : null,
      android : (
        <TouchableOpacity onPress = {() => navigation.toggleDrawer()}>
      <Icon
       name="md-menu"
       type="ionicon"
       color={"#FFFFFF"}
       containerStyle={styles.icon}
      />
      </TouchableOpacity>
      )
      }),
      headerRight:(
        <View style={styles.info_cirle}>
          <Button style={styles.info_button} 
          onPress={() => navigation.navigate('home_page')}>
          <FontAwesome style={styles.icon_info} name="home" color="#FFAA00"/>
        </Button>
          </View>
      )
    
  })
  render() {
    return (
      <View style={styles.screen_details}>
        <View style={styles.player_logo}>
          <ImageBackground
            source={require("../images/player_back.jpg")}
            style={styles.img_player}
          >
            <View style={styles.round_logo}>
              <ImageBackground
                source={require("../images/sub_logo.png")}
                style={styles.main_logo}
              />
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.about_txt}>About This Application</Text>
        <View style={styles.about_corner}>
          <Text style={styles.about_content}>
            This Mobile Application contain about seven Buddha's gatha. When u heard these gatha on given time period it's benfinted 
            to your life. Because 
          </Text>
        </View>
      </View>
    );
  }
}


