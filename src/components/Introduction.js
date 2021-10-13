import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';
import { VideoProgress } from 'react-video-progress';
import  Comments  from  './Comments'


export default function Introduction() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        
        source={{
          uri: 'https://reactnative.dev/docs/environment-setup',
         
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <VideoProgress
      progressStart="BottomLeft"
      type="OneLine"
      pathColor="red"
      pathWidth="4px"
      pathBorderRadius="2px"
      src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      height="200px"
      controls
      />

      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      <Comments></Comments>
    </View>
   
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginLeft: 150
     
    },
    imageLgo :{
      width: 150, height: 150 
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    video: {
        height:500,
        width:500
    }
  });
  