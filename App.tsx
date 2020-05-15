/**
 * https://www.youtube.com/watch?v=KnH2D-1EG-A&list=PLYxzS__5yYQmdfEyKDrlG5E0F0u7_iIUo&index=5
 */

import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

const App = () => {
  const [opacity] = useState(new Animated.Value(0));

  function fadeInBall() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  function fadeOutBall() {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            opacity,
            backgroundColor: 'red',
          },
        ]}></Animated.View>

      <TouchableOpacity
        onPress={() => fadeInBall()}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          margin: 10,
          width: 90,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Fade In!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => fadeOutBall()}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          margin: 10,
          width: 90,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Fade Out!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
