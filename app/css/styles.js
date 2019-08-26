import { StyleSheet } from "react-native"

export default StyleSheet.create({
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
        top: 30,
        left: 5,
        bottom: 90,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 600 / 2,
        borderColor: "#FFAA00"
      },
       details_content:{
         right: 10,
         justifyContent: "center",
         position: 'relative',
         bottom: 120
       },
      title_name: {
        textAlign: "right",
        position: "relative",
        right: 40,
        fontFamily: "seoge-ui",
        textAlignVertical: "top",
        justifyContent: "center"
      },
      title_time: {
        textAlign: "right",
        position: "relative",
        fontFamily: "seoge-ui",
        right: 50,
        textAlignVertical: "top",
        justifyContent: 'flex-start'
      },
      progress_bar: {
        right: 10,
        top: 70,
        width: "50%",
        height: "50%",
        position: "absolute",
        bottom: 110
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