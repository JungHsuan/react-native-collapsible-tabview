import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const FullScreenSpinnerHoc = (Comp) => {
  return ({spinning, children, ...props}) => (
    <View style={{flex: 1}}>
      <Comp {...props}>{children}</Comp>
      {spinning ? (
        <View style={styles.background}>
          <ActivityIndicator animating size={'large'} color={'#fff'} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#0005',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FullScreenSpinnerHoc;
