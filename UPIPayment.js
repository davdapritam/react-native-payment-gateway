import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const UPIPayment = ({ amount, merchantUpiId, transactionNote, merchantName }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePayment = async () => {
    const upiUrl = `upi://pay?pa=${merchantUpiId}&pn=${merchantName}&am=${amount}&tn=${transactionNote}&cu=INR`;
    
    try {
      const supported = await Linking.canOpenURL(upiUrl);

      if (supported) {
        await Linking.openURL(upiUrl);
      } else {
        setPaymentStatus('error');
      }
    } catch (err) {
      setPaymentStatus('error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPI Payment</Text>
      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
      {paymentStatus === 'error' && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Error</Text>
          <Text style={styles.errorMessage}>UPI payment is not supported on this device.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ffdddd',
    borderLeftWidth: 6,
    borderLeftColor: '#f44336',
  },
  errorTitle: {
    color: '#f44336',
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#333',
  },
});

export default UPIPayment;

