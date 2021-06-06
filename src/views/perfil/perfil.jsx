import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';

const user = require('../../assets/icons/user.png')

const Perfil = () => {

  return (
    <SafeAreaView style={{ backgroundColor: '#f1f1f1', height: '100%' }}>
      <View style={{ alignItems: 'center', paddingVertical: 32 }}>

        <Image  source={user} style={{ width: 150, height: 150, borderRadius: 100 }} />

        <Text style={{ fontSize: 32, paddingVertical: 16 }}>Nome do paciente</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={{ borderTopWidth: 1, width: 320, height: 70, justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 40 }}>
            Informações Pessoais
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderTopWidth: 1, width: 320, height: 70, justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 40 }}>
            Exames
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderTopWidth: 1, width: 320, height: 70, justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 40 }}>
            Últimas consultas
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderTopWidth: 1, borderBottomWidth: 1, width: 320, height: 70, justifyContent: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 40 }}>
            Consultas Agendadas
        </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Perfil;