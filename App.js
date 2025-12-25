import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View, ScrollView } from 'react-native';
import { Button } from './src/components/Button';
import { KeyboardAvoidingView } from 'react-native-web';
import { styles } from './App.styles.js';

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          {/* view header */}
          <StatusBar style="light" />
          <View style={styles.header}>
            <Text style={styles.title}>
              Conversor de Moedas
            </Text> 
            <Text style={styles.subTitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>

          {/* view item principal */}
          <View style={styles.card}>
            <Text style={styles.label}>De: USD </Text>
            <Button
              variant='secondary' onPress={() => alert('Hello boy')} />
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}