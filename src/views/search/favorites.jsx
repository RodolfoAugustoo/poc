import React from 'react';
import { SafeAreaView, View, Image, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const clinic = require('../../assets/icons/clinic.png');
const doctor = require('../../assets/icons/doctor.png');
const user = require('../../assets/icons/user.png');
const config = require('../../assets/icons/config.png');


const Favorites = () => {

  const mock = [
    {
      id: 1, nome: 'Médico 1', espec: 'Cardiologista', type: 'doctor'
    },
    {
      id: 2, nome: 'Médico 2', espec: 'Cardiologista', type: 'doctor'
    },
    {
      id: 3, nome: 'Médico 3', espec: 'Cardiologista', type: 'doctor'
    },
    {
      id: 4, nome: 'Clínica 1', espec: 'Oftalmológica', type: 'clinic'
    },
    {
      id: 5, nome: 'Clínica 2', espec: 'Oftalmológica', type: 'clinic'
    },
    {
      id: 6, nome: 'Clínica 3', espec: 'Oftalmológica', type: 'clinic'
    }
  ]

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
              Favoritos
          </Text>
          </View>
          <TouchableOpacity>
            <Image source={config} style={{ width: 65, height: 65, alignSelf: 'center' }} />
          </TouchableOpacity>
        </View>

        {
          mock.map(m => (
            <TouchableOpacity key={m.id} style={{ flexDirection: 'row', marginLeft: 24, marginBottom: 18 }}>
              <Image
                source={m.type === 'doctor' ? doctor : clinic}
                style={{ width: 100, height: 100, borderRadius: m.type === 'doctor' ? 100 : 1 }} />
              <View style={{ alignSelf: 'center', marginLeft: 16 }}>
                <Text style={{ fontSize: 26 }}>{m.nome}</Text>
                <Text style={{ fontSize: 26 }}>{m.espec}</Text>
              </View>
            </TouchableOpacity>
          ))
        }

      </ScrollView>
    </SafeAreaView>
  )
}

export default Favorites;