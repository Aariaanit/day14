import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import registerNNPushToken from 'native-notify';

export default function App() {
  registerNNPushToken(19069, 'k0kaAhCaSIdkyTF3wLj9sT');
  return (
    <View style={styles.container}>
      <Text>Hello React Native!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
