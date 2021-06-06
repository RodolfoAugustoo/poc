import React from 'react';
import { SafeAreaView, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';

const RegisterSpecialty = () => {

  return (
    <SafeAreaView style={{
      backgroundColor: "#f1f1f1",
    }}>

      <View style={{ alignItems: 'center', padding: 32 }}>
        <Text style={{ fontSize: 26, marginBottom: 24 }}>Cadastro de especialidades</Text>
        <Image style={{ width: 200, height: 200, backgroundColor: '#fff', borderRadius: 30, borderColor: 'black', borderWidth: 2 }} />
      </View>

      <View style={{ margin: 20 }}>
        <TextInput placeholder="Categoria" style={{ backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 16, height: 48, fontSize: 20 }}></TextInput>
        <TextInput placeholder="Nome" style={{ backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 16, height: 48, fontSize: 20 }}></TextInput>
        <TextInput placeholder="Descrição" style={{ backgroundColor: '#fff', paddingHorizontal: 12, marginBottom: 16, height: 48, fontSize: 20 }}></TextInput>
      </View>

      <TouchableOpacity style={{ marginHorizontal: 40, backgroundColor: 'black', justifyContent: 'center', height: 48 }}>
        <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
          Salvar
          </Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default RegisterSpecialty;