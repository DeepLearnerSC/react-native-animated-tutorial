/**
 * https://www.youtube.com/watch?v=KnH2D-1EG-A&list=PLYxzS__5yYQmdfEyKDrlG5E0F0u7_iIUo&index=5
 */

import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

const App = () => {
  const [value] = useState(new Animated.ValueXY({x: 0, y: 0}));
  const [toggle, setToggle] = useState(false);

  function moveBall(arg: Boolean) {
    Animated.timing(value, {
      toValue: arg ? {x: 100, y: 100} : {x: 0, y: 0},
      duration: 1000,
      useNativeDriver: false,
    }).start();
    setToggle(arg);
    console.log('move ball ', arg);
  }
  console.log('app rendering');
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          }}></View>
      </Animated.View>
      <TouchableOpacity
        onPress={() => moveBall(!toggle)}
        style={{backgroundColor: 'blue', padding: 10, margin: 10}}>
        <Text>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
