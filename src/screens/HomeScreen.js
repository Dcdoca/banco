import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header.js';
import { MaterialIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export default function HomeScreen({ balance }) {
  return (
    <Container>
      <Text style={{ color: '#333333', fontSize: 18 }}>Saldo disponível: R$ {balance.toFixed(2)}</Text>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};`
;
