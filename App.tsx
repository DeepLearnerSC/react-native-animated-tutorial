/**
 * https://www.youtube.com/watch?v=KnH2D-1EG-A&list=PLYxzS__5yYQmdfEyKDrlG5E0F0u7_iIUo&index=5
 */

import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

const App = () => {
  const [leftValue] = useState(new Animated.Value(0));

  function moveBall() {
    Animated.timing(leftValue, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    // because we are not using the native driver, and js thread is working a lot in the background
    // the performance began to decrease
    setTimeout(() => {
      for (let i = 0; i < 5000000000; i++) {}
    }, 1000);
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            // marginLeft: leftValue,
            opacity: leftValue,
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
