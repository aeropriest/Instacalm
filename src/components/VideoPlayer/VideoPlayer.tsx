import {useState} from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/colors';

interface IVideoPlayer{
  uri: string;
}

export default function VideoPlayer({uri}: IVideoPlayer) {
    const [muted, setMuted] = useState(true);
    //
  return (<View style={{backgroundColor:'red', width:'100%', aspectRatio:1}}>
    <Video 
        source={{uri}} 
        style={styles.video} 
        resizeMode="cover" 
        repeat muted={muted}
    />
    <Pressable style={styles.volume} onPress={()=>setMuted(v=>!v)}>
        <Ionicons name={muted ? "volume-mute" : "volume-medium"} size={14} color="white"/>
    </Pressable>
    </View>);
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  volume: {
    backgroundColor:colors.colors.black,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right:10,
    borderRadius:25,
  },
});
