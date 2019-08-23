import React, {Component} from "react";
import {
  View,
  AppRegistry,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ProgressBarAndroid,
  Platform
} from "react-native";
import { Button} from "native-base";
import { Icon } from  'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
    music_box_1: {
      marginTop: 10,
      paddingTop: 140,
      marginLeft: 10,
      justifyContent: "center",
      marginRight: 10,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: "#F8E5BF"
    },
    img_stat: {
      width: 70,
      left: 20,
      justifyContent: "flex-start",
      position: "absolute",
      height: 70,
      alignItems: "center"
    },
    logo_box: {
      position: "absolute",
      width: 120,
      height: 120,
      top: 10,
      left: 5,
      bottom: 90,
      borderWidth: 3,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 600 / 2,
      borderColor: "#FFAA00"
    },
    title_name: {
      textAlign: "right",
      position: "relative",
      right: 40,
      fontFamily: "seoge-ui",
      top: 60,
      flex: 1,
      textAlignVertical: "top",
      justifyContent: "center"
    },
    title_time: {
      textAlign: "right",
      position: "relative",
      fontFamily: "seoge-ui",
      right: 50,
      top: 60,
      flex: 1,
      textAlignVertical: "top",
      justifyContent: 'flex-start'
    },
    progress_bar: {
      right: 10,
      top: 50,
      width: "50%",
      height: "50%",
      position: "absolute",
      bottom: 100
    },
    time_two: {
      right: 5,
      top: 15,
      position: "absolute"
    },
    play_buttons: {
      flex: 2,
      top: 20,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    pause_button: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      borderColor: "#FFAA00",
      position: "absolute",
      borderWidth: 5,
      borderRadius: 1000 / 2,
      backgroundColor: "#ffffff",
      bottom: 40,
      right: 130
    },
    play_button: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      borderColor: "#FFAA00",
      position: "absolute",
      borderRadius: 1000 / 2,
      borderWidth: 5,
      backgroundColor: "#ffffff",
      bottom: 40,
      right: 90
    },
    stop_button: {
      width: 30,
      borderColor: "#FFAA00",
      justifyContent: 'center',
      position: "absolute",
      borderWidth: 5,
      borderRadius: 1000 / 2,
      backgroundColor: "#ffffff",
      height: 30,
      bottom: 40,
      right: 50
    },
    replay_button: {
      width: 30,
      position: "absolute",
      height: 30,
      justifyContent: 'center',
      backgroundColor: "#ffffff",
      borderColor: "#FFAA00",
      borderRadius: 1000 / 2,
      bottom: 40,
      borderWidth: 5,
      right: 10
    }
  });
  
  export default class home_page extends Component{
  
    state={
      dataSource :[
        { id: 1, name :  'tobash', time: '04.16 A.M'}, 
      ],
    };
  
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
            onPress={() => navigation.navigate('info_page')}>
            <FontAwesome style={styles.icon_info} name="info" color="#FFAA00"/>
          </Button>
            </View>
        )
      
    })
  
  
    renderSeparator = () => {  
     
      return (  
          <React.Fragment>
              <View style={styles.music_box_1} >
                <View style={styles.logo_box}>
                  <ImageBackground
                    source={require("../images/sub_logo.png")}
                    style={styles.img_stat}
                  />
                </View>
  
                
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
                    <FontAwesome name="pause" color="#FFAA00"  />
                  </Button>
                  
                  <Button style={styles.stop_button}>
                    <FontAwesome name="stop" color="#FFAA00" />
                  </Button>
                  <Button style={styles.replay_button}>
                    <FontAwesome name="repeat" color="#FFAA00" />
                  </Button>
                </View>
              </View>
          </React.Fragment>
      );  
  };
  
   //handling onpress action
   //getListViewItem = (Item) => {
    //play_list(item.key, item.name)
   //}
  
  rendelistData = ({ item }) => {
    return(
      <View>
      <Text style={styles.title_name}>{item.name}</Text>
      <Text style={styles.title_time}>{item.time}</Text>
    </View>
    );
  }
    render() {
      return (
          <FlatList
             data={this.state.dataSource}
             keyExtractor={(item) => item.id.toString()}
             renderItem = {this.rendelistData}
            //ItemSeparatorComponent={this.newRenderSeparator()}
            ItemSeparatorComponent={this.renderSeparator}  // removed
          /> 
   
      );
    }
  }
  
  
  
  
  AppRegistry.registerComponent('Bless', () => FlatListBasics);  