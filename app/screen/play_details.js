import React from "react";

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  TouchableOpacity,
  ProgressBarAndroid,
  TouchableWithoutFeedback,
  ToastAndroid,
  AppState
} from "react-native";
import { Button, Container, Header, Content, Left } from "native-base";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from  'react-native-elements';
import moment from 'moment';




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
  player_view: {
    marginTop: 10,
    paddingTop: 380,
    marginLeft: 10,
    justifyContent: "center",
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#F8E5BF"
  },
  player_logo: {
    width: 250,
    left: 20,
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
  main_logo:{
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
  },
  detail_name:{
    top: 220,
    left: 80,  
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  detail_time:{
    top: 250,
    left: 95,  
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  progress_bar:{
    left: 20,
    width: "80%",
    height: "80%",
    position: "absolute",
    bottom: 100,
  },
  time_two: {
    right: 5,
    top: 15,
    position: "absolute"
  },
  play_buttons: {
    flex: 2,
    flexDirection: "row",
    left: 40,
    right: 40,
    justifyContent: "space-between"
  },
  pause_button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderColor: "#FFAA00",
    position: "absolute",
    borderWidth: 5,
    borderRadius: 1000 / 2,
    backgroundColor: "#ffffff",
    bottom: 10,
    left: 10
  },
  play_button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderColor: "#FFAA00",
    position: "absolute",
    borderRadius: 1000 / 2,
    borderWidth: 5,
    backgroundColor: "#ffffff",
    bottom: 10,
    left: 60
  },
  stop_button: {
    width: 40,
    borderColor: "#FFAA00",
    justifyContent: 'center',
    position: "absolute",
    borderWidth: 5,
    borderRadius: 1000 / 2,
    backgroundColor: "#ffffff",
    height: 40,
    bottom: 10,
    left: 110,
  },
  replay_button: {
    width: 40,
    position: "absolute",
    height: 40,
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    borderColor: "#FFAA00",
    borderRadius: 1000 / 2,
    bottom: 10,
    borderWidth: 5,
    left: 160,
  }
  
});
class play_details extends React.Component {

  constructor(props){
    super(props);
       //adding sound
      
    this.state = {
      time: '',
    };
    

  }
  componentDidMount(){
    var take = this;
    var date = moment()
       .utcOffset('+05:30')
       .format('hh:mm:ss a');
    take.setState({time: date}) ; 
  

  }
 


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
     
      <ScrollView>
        <View>
       <Text>{this.state.time}</Text>
       </View>
      <View style={styles.player_view}>
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
        <Text style={styles.detail_name}>ශ්‍රද්ධාව වැඩවීම</Text>
        <Text style={styles.detail_time}>පෙ.ව 4.00</Text>
        <View style={styles.progress_bar}>
        <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color="#FFD98E"
          />
           <Text style={styles.time_one}>00:00</Text>
           <Text style={styles.time_two}>04:00</Text>
         </View> 
         <View style={styles.play_buttons}>
           
          <Button style={styles.pause_button}>
            <FontAwesome name="pause" color="#FFAA00" />
          </Button>
          <Button onPress={this.playTrack} style={styles.play_button}>
            
            <FontAwesome name="play" color="#FFAA00" />
            
          </Button>
          <Button style={styles.stop_button}>
            <FontAwesome name="stop" color="#FFAA00" />
          </Button>
          <Button style={styles.replay_button}>
            <FontAwesome name="repeat" color="#FFAA00" />
          </Button>
        </View>
      </View>
</ScrollView>
      
    );
  }
}

export default play_details;
