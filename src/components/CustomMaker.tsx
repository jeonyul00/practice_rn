import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LatLng, MapMarker, Marker} from 'react-native-maps';
import {colors} from '../const';
import {MarkerColor} from '../types/domain';

interface CustomeMakerProps extends MapMarker {
  coordinate: LatLng;
  color: MarkerColor;
  score: number;
}

const colorHex = {
  RED: colors.PINK_400,
  BLUE: colors.BLUE_400,
  GREEN: colors.GREEN_400,
  YELLOW: colors.YELLOW_400,
  PURPLE: colors.PURPLE_400,
};

const CustomMaker = ({
  coordinate,
  color,
  score = 1,
  ...props
}: CustomeMakerProps) => {
  return (
    <Marker coordinate={coordinate} {...props}>
      <View style={styles.container}>
        <View style={[styles.maker, {backgroundColor: colorHex[color]}]}>
          <View style={[styles.eye, styles.leftEye]} />
          <View style={[styles.eye, styles.rightEye]} />
          {score > 3 && <View style={[styles.mouth, styles.good]} />}
          {score === 3 && <View style={styles.soso} />}
          {score < 3 && <View style={[styles.mouth, styles.bad]} />}
        </View>
      </View>
    </Marker>
  );
};

export default CustomMaker;

const styles = StyleSheet.create({
  container: {
    height: 35,
    width: 32,
    alignItems: 'center',
  },
  maker: {
    width: 27,
    height: 27,
    borderRadius: 27,
    borderBottomRightRadius: 1,
    transform: [{rotate: '45deg'}],
    borderWidth: 1,
    borderColor: colors.BLACK,
  },
  eye: {
    position: 'absolute',
    backgroundColor: colors.BLACK,
    width: 4,
    height: 4,
    borderRadius: 4,
  },
  leftEye: {
    top: 12,
    left: 5,
  },
  rightEye: {
    top: 5,
    left: 12,
  },
  mouth: {
    transform: [{rotate: '45deg'}],
    borderTopColor: 'rgba(225,225,225,0.01)',
    borderBottomColor: 'rgba(225,225,225,0.01)',
    width: 12,
    height: 12,
    borderWidth: 1,
    borderRadius: 12,
  },
  good: {
    transform: [{rotate: '225deg'}],
    marginLeft: 5,
    marginTop: 5,
    borderRightColor: 'rgba(225,225,225,0.01)',
    borderLeftColor: colors.BLACK,
  },
  soso: {
    transform: [{rotate: '45deg'}],
    marginLeft: 13,
    marginTop: 13,
    width: 8,
    height: 8,
    borderLeftColor: colors.BLACK,
    borderLeftWidth: 1,
  },
  bad: {
    borderRightColor: 'rgba(225,225,225,0.01)',
    borderLeftColor: colors.BLACK,
    marginLeft: 12,
    marginTop: 12,
  },
});
