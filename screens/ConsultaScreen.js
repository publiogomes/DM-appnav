import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConsultaScreen() {
  const handleConsulta = () => {
    // Lógica para consultar dados
    alert('Consulta realizada!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>
      <View>
        <Button 
        title="Consultar" 
        onPress={handleConsulta} 
        color="#02DAC5"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 65,
  },

  buttonContainer: {
    width: 150, 
    height: 50, 
    marginLeft: 100,
  },

});
