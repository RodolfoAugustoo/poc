import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const ClinicSpecialties = () => {

  const specialties = [
    {
      id: 1, name: 'specialty 1', description: 'Descrption specialty'
    },
    {
      id: 2, name: 'specialty 2', description: 'Descrption specialty'
    },
    {
      id: 3, name: 'specialty 3', description: 'Descrption specialty'
    },
    {
      id: 4, name: 'specialty 4', description: 'Descrption specialty'
    },
    {
      id: 5, name: 'specialty 5', description: 'Descrption specialty'
    }
  ]

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center'
    }}>
      <ScrollView>
        <View
          style={{ marginTop: 40 }}
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

        <View style={{
          paddingTop: 32,
          paddingBottom: 32,
          alignSelf: 'center'
        }}>
          <Text style={{
            fontSize: 24
          }}>Clínica teste</Text>
        </View>


        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 24
          }}>
          <Text style={{ fontSize: 24 }}>Especialidades</Text>
          <View>
            <TouchableOpacity><Text style={{ color: "black", fontSize: 24 }}>+</Text></TouchableOpacity>
          </View>
        </View>

        {
          specialties.map(s => (
            <View key={s.id} style={{ flexDirection: 'row', width: '100%', marginLeft: 20, height: 100 }}>
              <Image style={{
                width: 80, height: 80, borderColor: '#000', borderRadius: 8, backgroundColor: 'white'
              }} />
              <View style={{ backgroundColor: '#fff', marginLeft: 10, height: 80, width: '70%' }}>
                <Text style={{ alignSelf: 'flex-start', padding: 8, fontSize: 18 }}>{s.name}</Text>
                <Text style={{ alignSelf: 'flex-start', padding: 8, fontSize: 18 }}>{s.description}</Text>
              </View>
            </View>
          ))
        }

      </ScrollView>
    </SafeAreaView >
  )
}

export default ClinicSpecialties