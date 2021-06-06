import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, ScrollView } from 'react-native';

const RegisterProfessional = () => {

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      width: '100%'
    }}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={{
          paddingTop: 32,
          paddingBottom: 32
        }}>
          <Text style={{
            fontSize: 24,
            alignSelf: 'center'
          }}>Cadastrar clínica</Text>
        </View>
        <View
          style={{ marginBottom: 24 }}
        >
          <Image
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              backgroundColor: '#fff',
              alignSelf: 'center'
            }} />
        </View>

        <Text style={{ marginLeft: 20, marginBottom: 8, fontSize: 16 }}>Dados gerais</Text>

        <View style={{ alignItems: 'center' }}>
          <TextInput placeholder="Nome" style={{ backgroundColor: '#fff', height: 48, width: '90%', marginVertical: 12 }} />
          <TextInput placeholder="Celular" style={{ backgroundColor: '#fff', height: 48, width: '90%', marginVertical: 12 }} />
          <TextInput placeholder="Telefone" style={{ backgroundColor: '#fff', height: 48, width: '90%', marginVertical: 12 }} />
          <TextInput placeholder="CNES" style={{ backgroundColor: '#fff', height: 48, width: '90%', padding: 8, marginVertical: 16 }} />
          <TextInput placeholder="CNPJ" style={{ backgroundColor: '#fff', height: 48, width: '90%', padding: 8, marginVertical: 16 }} />
        </View>

        <Text style={{marginTop: 16 ,marginLeft: 20, marginBottom: 8, fontSize: 16 }}>Endereço</Text>

        <View style={{ alignItems: 'center' }}>
          <TextInput placeholder="Logradouro" style={{ backgroundColor: '#fff', height: 48, width: '90%', marginVertical: 12 }} />
          <TextInput placeholder="Número" style={{ backgroundColor: '#fff', height: 48, width: '90%', padding: 8, marginVertical: 16 }} />
          <TextInput placeholder="Bairro" style={{ backgroundColor: '#fff', height: 48, width: '90%', padding: 8, marginVertical: 16 }} />
          <TextInput placeholder="Cidade" style={{ backgroundColor: '#fff', height: 48, width: '90%', padding: 8, marginVertical: 16 }} />
        </View>
        <View style={{ width: 240, alignSelf: 'center', marginBottom: 40 }}>
          <Button title="Salvar" color="#000" />
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default RegisterProfessional