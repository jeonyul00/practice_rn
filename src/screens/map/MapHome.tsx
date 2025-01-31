import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import useAuth from '../../hooks/querys/useAuth';
import MapView, {
  Callout,
  LatLng,
  LongPressEvent,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {colors, mapNavigations} from '../../const';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {useUserLocation} from '../../hooks/useUserLocation';
import commonStyle from '../../style/mapStyle';
import CustomMaker from '../../components/CustomMaker';
import {MapStackParamList} from '../../navigations/stack/MapStackNavi';
import {useGetMarkers} from '../../hooks/querys/getMarkers';

type Props = DrawerScreenProps<MapStackParamList, 'MapHome'>;

const MapHome = ({navigation}: Props) => {
  const {} = useAuth();
  const inset = useSafeAreaInsets();
  const mapRef = useRef<MapView | null>(null);
  const {userLocation, error} = useUserLocation();
  const [selected, setSelected] = useState<LatLng | null>(null);
  const {data: markers = []} = useGetMarkers();

  const handleDrawer = () => {
    navigation.openDrawer();
  };

  const usePressUserLocation = () => {
    if (error) {
      // TODO: 에러 메시지 표시
      return;
    }
    mapRef.current?.animateToRegion({
      latitude: userLocation?.latitude,
      longitude: userLocation?.longitude,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922,
    });
  };

  const handlePressAddPost = () => {
    if (!selected) {
      Alert.alert(
        '추가할 위치를 선택해주세요.',
        '지도를 길게 누르면 위치가 선택됩니다.',
      );
      return;
    }

    if (selected) {
      navigation.navigate(mapNavigations.ADD_POST, {location: selected});
    }
    setSelected(null);
  };

  const handleonLongPress = ({nativeEvent}: LongPressEvent) => {
    setSelected(nativeEvent.coordinate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={[styles.drawerButton, {top: inset.top + 25}]}
        onPress={handleDrawer}>
        <Text style={styles.drawerText}>서랍</Text>
      </Pressable>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        followsUserLocation
        // showsMyLocationButton={true} // custom
        customMapStyle={commonStyle}
        onLongPress={handleonLongPress}
        region={{
          ...userLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {markers.map(value => (
          <CustomMaker
            key={value.id}
            color={value.color}
            score={value.score}
            coordinate={{latitude: value.latitude, longitude: value.longitude}}
          />
        ))}
        {selected && (
          <Callout>
            <CustomMaker coordinate={selected} color="BLUE" score={1} />
          </Callout>
        )}
      </MapView>
      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePressAddPost}>
          <Text style={styles.drawerText}>add</Text>
        </Pressable>
        <Pressable style={styles.mapButton} onPress={usePressUserLocation}>
          <Text style={styles.drawerText}>내 위치</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default MapHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {flex: 1},
  drawerButton: {
    zIndex: 1,
    position: 'absolute',
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.PINK_700,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    elevation: 4,
  },
  drawerText: {
    color: colors.WHITE,
    fontWeight: '500',
    fontSize: 12,
  },
  buttonList: {
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
  mapButton: {
    backgroundColor: colors.PINK_700,
    margin: 5,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
  },
});
