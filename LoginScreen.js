import React, {useState} from 'react';
import {View, TextInput, Button, Alert, StyleSheet} from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);

  const handleRequestOtp = () => {
    // Simulate OTP request (replace with actual API call)
    setTimeout(() => {
      setOtpRequested(true);
      Alert.alert('OTP sent successfully');
    }, 1000);
  };

  const handleLogin = () => {
    // Simulate OTP verification (replace with actual API call)
    setTimeout(() => {
      if (otp === '123456') {
        Alert.alert('Login successful');
      } else {
        Alert.alert('Invalid OTP');
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      {!otpRequested ? (
        <Button title="Request OTP" onPress={handleRequestOtp} />
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="OTP"
            keyboardType="numeric"
            value={otp}
            onChangeText={setOtp}
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: 250,
  },
});

export default LoginScreen;
