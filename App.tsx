/**
 * https://www.youtube.com/watch?v=KnH2D-1EG-A&list=PLYxzS__5yYQmdfEyKDrlG5E0F0u7_iIUo&index=5
 */

import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

const App = () => {
  const [leftValue] = useState(new Animated.Value(0));

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false,
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
            marginLeft: leftValue,
            backgroundColor: 'red',
          },
        ]}></Animated.View>

      <TouchableOpacity
        onPress={() => moveBall()}
        style={{backgroundColor: 'blue', padding: 10, margin: 10}}>
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
