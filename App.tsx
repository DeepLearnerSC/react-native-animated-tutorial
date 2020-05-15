import React, {useState} from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [pan] = useState(new Animated.ValueXY());

  const [panResponder] = useState(
    PanResponder.create({
      // onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('Hello, onPanResponderGrant');
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      // onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderMove: (_, gesture) => {
        // console.log('ARGS', args);
        // gesture.dx contains the delta value from the initial position
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        // without flattenOffset()... it becomes bucky...
        // explanation: When you release you finger, whan flattenOffset does is that it would add the offset to the main value and clear off the offset.
        // Because when you start moving again it's going to supply the delta value, but then you need the record of the previous value.
        // Because your transforms are not relative to your last position. they are absolute transforms
        console.log({...pan.x}, 'BEFORE');
        pan.flattenOffset();
        console.log({...pan.x}, 'AFTER');
      },
    }),
  );
  console.log('panResponder', panResponder.panHandlers);
  console.log('pan', pan.getLayout());
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,

            // method 2
            // top: pan.y,
            // left: pan.x,

            // method 3: using Transform
            transform: [{translateX: pan.x}, {translateY: pan.y}],
            borderRadius: 100 / 2,
            backgroundColor: 'red',
          },
          // method 1
          // pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
