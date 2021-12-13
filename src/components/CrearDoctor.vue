<template>
  <div id="signup">
    <div class="background"></div>
    <div class="form shadow-lg">
      <h3>Registro</h3>
      <form v-on:submit.prevent="processSignUp">
        <input v-model="doctorInformation.name" class="form-control" placeholder="Nombre" />
        <input v-model="doctorInformation.lastname" class="form-control" placeholder="Apellido" />
        <input v-model="doctorInformation.id"  class="form-control" placeholder="Documento" />
        <input v-model="doctorInformation.eps" class="form-control" placeholder="Eps" />
        <input v-model="doctorInformation.birthday" class="form-control" placeholder="Fecha de Nacimiento" />
        <input v-model="doctorInformation.cell" class="form-control" placeholder="Telefono" />
        <input v-model="doctorInformation.email" class="form-control" placeholder="Correo Electronico" />
        <input v-model="doctorInformation.password" class="form-control" placeholder="Contraseña" />

        <button class="btn btn-primary">Crear Usuario</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default { 
  name:"CrearDoctor",
  data: function () {
    return {
      doctorInformation:{
        name: "",
        lastname: "",
        id: "",
        eps: "",
        birthday: "",
        cell: "",
        email: "",
        password: ""
        
      }
    }
  },
  methods: {
    processDoctorData:async function (){
      await this.$apollo.mutate({
        mutation:gql`
        mutation DoctorCreate($doctorInformation: DoctorCreateInput) {
          doctorCreate(doctorInformation: $doctorInformation) {
            id
            name
            last_name
            email
            role
            }
        }
      `, 
      variables: {
        doctorInformation: this.doctorInformation
      }
      })
      
      }
    }
  };
  </script>