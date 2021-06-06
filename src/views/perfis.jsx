import React from 'react';
import { SafeAreaView, Text, Button, View } from 'react-native';

const Perfis = () => {


  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <View style={{
        marginHorizontal: 30,
        paddingTop: 80
      }}>
        <Text style={{
          fontSize: 42
        }}>
          Seja bem vindo!
      </Text>
        <Text style={{ fontSize: 32, paddingTop: 30 }}>
          Escolha seu perfil
      </Text>
      </View>
      <View style={{
        width: '100%',
        padding: 30
      }}>
        <View style={{ paddingBottom: 10, paddingTop: 10 }}>
          <Button title="Paciente" color='#000' />
        </View>
        <View style={{ paddingBottom: 10, paddingTop: 10 }}>
          <Button title="Médico" color='#000' />
        </View>
        <View style={{ paddingBottom: 10, paddingTop: 10 }}>
          <Button title="Clínica" color='#000' />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Perfis;