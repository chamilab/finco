/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  View,
  AppRegistry,
  FlatList,
  Text,
  TouchableOpacity,
  ImageBackground,
  ProgressBarAndroid,
  Platform
} from "react-native";
import { Button } from "native-base";
import { Icon } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import design from '../css/styles';
import dataSource from '../data/flatListData.json';
import Sound from 'react-native-sound';


function playSound(testInfo, component){
  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      return;
    }
    testInfo.onPrepared && testInfo.onPrepared(sound, component);
    sound.play(() => {
      // Success counts as getting to the end
      // Release when it's done so we're not using up resources
      sound.release();
    }); 
  };
  if (testInfo.isRequire) {
    const sound = new Sound(testInfo.uri, error => callback(error, sound));
  } else {
    const sound = new Sound(testInfo.uri, testInfo.basePath, error => callback(error, sound));
  }
}

export default class home_page extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true); // true = mixWithOthers

  }
  state = {
    dataSource
  };

  static navigationOptions = ({ navigation }) => ({
    //const { params = {} } = navigation.state;

    headerTitleStyle: { flex: 1, textAlign: 'center', fontSize: 12, color: '#ffffff' },
    title: 'සප්ත තෙරුවන් වන්දනාව',
    headerStyle: {
      backgroundColor: '#FFAA00'
    },

    headerLeft: Platform.select({
      ios: null,
      android: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon
            name="md-menu"
            type="ionicon"
            color={'#FFFFFF'}
            containerStyle={design.icon}
          />
        </TouchableOpacity>
      )
    }),
    headerRight: (
      <View style={design.info_cirle}>
        <Button style={design.info_button}
          onPress={() => navigation.navigate('info_page')}>
          <FontAwesome style={design.icon_info} name="info" color="#FFAA00" />
        </Button>
      </View>
    )

  })

  
  rendeListItem = ({ item }) => {
    return (
      <View style={design.music_box_1} >
        <View style={design.logo_box}>
          <ImageBackground
            source={require('../images/sub_logo.png')}
            style={design.img_stat}
          />
        </View>
        <View style={design.details_content}>
        <Text style={design.title_name}>{item.name}</Text>
        <Text style={design.title_time}>{item.time}</Text>
        </View>
        <View style={design.progress_bar}> 
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            color="#FFD98E"
          />
          <Text style={design.time_one}>00:00</Text>
          <Text style={design.time_two}>04:00</Text>
        </View>
   
       
      
        <View style={design.play_buttons}>
          <Button style={design.pause_button}>
            <FontAwesome name="pause" color="#FFAA00" />
          </Button>
          {dataSource.map((testInfo)=> 
          <Button style={design.play_button}
          onPress={() => {
            return playSound(testInfo.uri, this);
          }}
          >
            <FontAwesome name="play" color="#FFAA00" />
          </Button>
          )}
          
          <Button style={design.stop_button}>
            <FontAwesome name="stop" color="#FFAA00" />
          </Button>
          <Button style={design.replay_button}>
            <FontAwesome name="repeat" color="#FFAA00" />
          </Button>
        </View>
      </View>
    );
  }
 

  render() {
      
    return (
      <FlatList
        data={this.state.dataSource}
        keyExtractor={(item) => item.id.toString()}
        renderItem={this.rendeListItem}
      />
    );
  }

}