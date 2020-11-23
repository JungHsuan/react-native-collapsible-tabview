import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import CollapsibleTabView from './src/CollapsibleTabView';
import HeaderScrollableTabView from './src/HeaderScrollableTabView';
import PullRefreshTabView from './src/PullRefreshTabView';

const App = () => {
  const [mode, setMode] = useState('collapsible');

  const renderDemo = () => {
    switch (mode) {
      case 'collapsible':
        return <CollapsibleTabView />;
      case 'scrollable':
        return <HeaderScrollableTabView />;
      case 'refresh':
        return <PullRefreshTabView />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {renderDemo()}
      <View style={styles.container}>
        {/*  collapsible */}
        <TouchableOpacity
          onPress={() => setMode('collapsible')}
          style={{...styles.button}}>
          <Text
            style={{
              textAlign: 'center',
              color: mode === 'collapsible' ? 'red' : 'black',
            }}>
            Collapsible
          </Text>
        </TouchableOpacity>
        {/* header scrollable */}
        <TouchableOpacity
          onPress={() => setMode('scrollable')}
          style={{...styles.button}}>
          <Text
            style={{
              textAlign: 'center',
              color: mode === 'scrollable' ? 'red' : 'black',
            }}>
            Header Scrollable
          </Text>
        </TouchableOpacity>
        {/* pull refresh */}
        <TouchableOpacity
          onPress={() => setMode('refresh')}
          style={{...styles.button}}>
          <Text
            style={{
              textAlign: 'center',
              color: mode === 'refresh' ? 'red' : 'black',
            }}>
            pull refresh
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  button: {
    flex: 1,
    height: 48,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    paddingHorizontal: 16,
  },
});

export default App;
