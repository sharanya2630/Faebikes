/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string,
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function app(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default app;
 * @format
 */

// export default App;
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const CustomButton = ({title, onPress, textColor, buttonColor}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: buttonColor}]}
    onPress={onPress}>
    <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showNumericKeypad, setShowNumericKeypad] = useState(false);

  const handleRequestOTP = () => {
    if (phoneNumber.trim() === '') {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }
    Alert.alert('OTP Requested', `OTP requested for +91 ${phoneNumber}`);
  };

  const handleNumericKeypadPress = value => {
    setPhoneNumber(phoneNumber + value);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://i.imghippo.com/files/vSG2p1713544693.png',
      }}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Login</Text>
          <Text style={styles.label}>Enter your mobile number</Text>
          <View style={styles.phoneInputContainer}>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="number-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              returnKeyType="done"
              onFocus={() => setShowNumericKeypad(true)}
              onSubmitEditing={handleRequestOTP}
            />
          </View>
          <CustomButton
            title="Continue"
            onPress={handleRequestOTP}
            textColor="white"
            buttonColor="#ff7c2b"
          />
          <Text style={styles.termsText}>
            By continuing, you agree to our Terms and Conditions
          </Text>
          {showNumericKeypad && (
            <View style={styles.numericKeypad}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map(number => (
                <TouchableOpacity
                  key={number}
                  style={styles.numericButton}
                  onPress={() => handleNumericKeypadPress(number)}>
                  <Text style={styles.numericButtonText}>{number}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 40,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    width: 400,
    height: 550,
    marginTop: 300,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#ff7c2b',
    borderBottomWidth: 2,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 10,
    color: '#ff7c2b',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 0,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#ff8c00',
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: 0,
    marginTop: 0,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  termsText: {
    fontSize: 11,
    marginTop: 10,
    textAlign: 'center',
  },
  numericKeypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  numericButton: {
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#fff',
    backgroundColor: '#dcdcdc',
  },
  numericButtonText: {
    fontSize: 30,
  },
});

export default App;
