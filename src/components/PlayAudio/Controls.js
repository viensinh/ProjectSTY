import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Controls = ({
  paused,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  forwardDisabled,
}) => (
    <View style={styles.container}>

      <TouchableOpacity onPress={onBack}>
        <Image source={require('../../../assets/img/ic_skip_previous_white_36pt.png')} />
      </TouchableOpacity>
      <View style={{ width: 20 }} />
      {!paused ?
        <TouchableOpacity onPress={onPressPause}>
          <View style={styles.playButton}>
            <Image source={require('../../../assets/img/ic_pause_white_48pt.png')} />
          </View>
        </TouchableOpacity> :
        <TouchableOpacity onPress={onPressPlay}>
          <View style={styles.playButton}>
            <Image source={require('../../../assets/img/ic_play_arrow_white_48pt.png')} />
          </View>
        </TouchableOpacity>
      }
      <View style={{ width: 20 }} />
      <TouchableOpacity onPress={onForward}
        disabled={forwardDisabled}>
        <Image style={[forwardDisabled && { opacity: 0.3 }]}
          source={require('../../../assets/img/ic_skip_next_white_36pt.png')} />
      </TouchableOpacity>

    </View>
  );
export default Controls;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})
