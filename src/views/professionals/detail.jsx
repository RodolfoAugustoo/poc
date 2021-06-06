import React from 'react';
import { SafeAreaView, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

const doctor = require('../../assets/icons/doctor.png');
const user = require('../../assets/icons/user.png');
const config = require('../../assets/icons/config.png');


const ProfessionalDetail = () => {

  return (
    <SafeAreaView style={{
      backgroundColor: "#f1f1f1",
    }}>
      <ScrollView>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 24,
            marginBottom: 32
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={user} style={{ width: 50, height: 50, borderRadius: 30, backgroundColor: '#fff', alignSelf: 'center' }}>
            </Image>
            <Text style={{ fontSize: 26, marginLeft: 8, alignSelf: 'center' }}>
              Nome do paciente
          </Text>
          </View>
          <TouchableOpacity>
            <Image source={config} style={{ width: 65, height: 65, alignSelf: 'center' }} />
          </TouchableOpacity>
        </View>

        <View style={{ marginBottom: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 24 }}>Médico</Text>
          <Image
            source={doctor}
            style={{ width: 100, height: 100, borderRadius: 100 }} />
          <Text style={{ fontSize: 24 }}>Cardiologista</Text>
        </View>

        <View style={{
          marginHorizontal: 20
        }}>
          <Text style={{fontSize: 20, marginBottom:10}}>
            Clínica de Cardiologia
          </Text>
          <Text style={{fontSize: 20, marginBottom:10}}>
            (99) 99999-9999
          </Text>
          <Text style={{fontSize: 20, marginBottom:10}}>
            Rua 25 de Março 250  - Sâo Paulo
          </Text>
          <Text style={{fontSize: 20}}>Descrição</Text>
          <Text style={{fontSize: 16}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfessionalDetail;