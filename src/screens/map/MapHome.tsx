import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import useAuth from '../../hooks/querys/useAuth';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {colors} from '../../const';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainDrawerParamList} from '../../navigations/drawer/MainDrawerNavi';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {useUserLocation} from '../../hooks/useUserLocation';
import commonStyle from '../../style/mapStyle';

type Props = DrawerScreenProps<MainDrawerParamList, 'Home'>;

const MapHome = ({navigation}: Props) => {
  const {} = useAuth();
  const inset = useSafeAreaInsets();
  const mapRef = useRef<MapView | null>(null);
  const {userLocation, error} = useUserLocation();

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
      />
      <View style={styles.buttonList}>
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
    fontSize: 16,
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
