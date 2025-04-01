import React from 'react';
import {ColorValue, Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

function App() {
  return (
    <View style={{flex: 1, padding: 20}}>
      <View style={{flexDirection: 'row', gap: 10, flexWrap: 'wrap'}}>
        {Object.keys(Colors).map(key => (
          <Animated.View
            key={`view-with-color-${key}`}
            style={{
              width: 100,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors[key],
            }}>
            <Text>{key}</Text>
          </Animated.View>
        ))}
      </View>
    </View>
  );
}
export default App;

const Colors = {
  Magenta: 0xff00ffff,
  Red: 0xff0000ff,
  Green: 0xff00ff,
  Blue: 0xffff,
  Yellow: 0xffff00ff,
  Cyan: 0xffffff,
  LightGray: 0xccccccff,
} as unknown as Record<string, ColorValue>;
