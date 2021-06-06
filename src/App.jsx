import React from 'react';
import { SafeAreaView } from 'react-native';

import Perfis from './views/perfis';

import RegisterClinic from './views/clinic/registerClinic'
import ClinicSpecialties from './views/clinic/clinicSpecialties'

import RegisterProfessional from './views/professionals/registerProfessional'
import ProfessionalDetail from './views/professionals/detail'


import Search from './views/search/search'
import Favorites from './views/search/favorites'

import RegisterSpecialty from './views/specialities/registerSpecialty'

import Perfil from './views/perfil/perfil'

export default props => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <Perfis /> */}
    {/* <RegisterClinic /> */}
    {/* <ClinicSpecialties /> */}
    {/* <RegisterProfessional /> */}
    {/* <Search/> */}
    {/* <Favorites /> */}
    {/* <ProfessionalDetail /> */}
    {/* <RegisterSpecialty /> */}
    <Perfil />
  </SafeAreaView>
)