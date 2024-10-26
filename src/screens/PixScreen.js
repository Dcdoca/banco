import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useTheme } from 'styled-components/native';

export default function PixScreen({ balance, setBalance, toggleTheme }) {
  const [pixAmount, setPixAmount] = useState('');
  const theme = useTheme();

  const handlePix = () => {
    const amount = parseFloat(pixAmount);
    if (isNaN(amount) || amount <= 0) {
      Alert.alert('Erro', 'Insira um valor válido para o Pix.');
      return;
    }
    if (amount > balance) {
      Alert.alert('Erro', 'Saldo insuficiente.');
      return;
    }
    setBalance((prevBalance) => prevBalance - amount);
    setPixAmount('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 20 }}>
      <Text style={{ color: theme.text, fontSize: 18 }}>Saldo: R$ {balance.toFixed(2)}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: theme.border,
          padding: 10,
          marginVertical: 10,
          color: theme.text,
          backgroundColor: theme.secondary,
        }}
        placeholder="Valor do Pix"
        placeholderTextColor={theme.icon}
        keyboardType="numeric"
        value={pixAmount}
        onChangeText={setPixAmount}
      />
      <Button title="Realizar Pix" onPress={handlePix} color={theme.primary} />
      <Button title="Alternar Tema" onPress={toggleTheme} color={theme.primary} style={{ marginTop: 20 }} />
    </View>
  );
}
