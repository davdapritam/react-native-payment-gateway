import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import UPIPayment from './UPIPayment';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>UPI Payment Demo</Text>
        <UPIPayment
          amount="100.00"
          merchantUpiId="merchant@upi"
          transactionNote="Payment for order #123"
          merchantName="Your Store Name"
        />
      </View>
    </SafeAreaView>
  );
}

