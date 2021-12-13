<template>
  <div id="signup">
    <div class="background"></div>
    <div class="form shadow-lg">
      <h3>Registro</h3>
      <form v-on:submit.prevent="processSignUp">
<form v-on:submit.prevent="processSignUp">
        <input v-model="doctorInformation.name" class="form-control" placeholder="Nombre" />
        <input v-model="doctorInformation.lastname" class="form-control" placeholder="Apellido" />
        <input v-model="doctorInformation.id"  class="form-control" placeholder="Documento" />
        <input v-model="doctorInformation.eps" class="form-control" placeholder="Eps" />
        <input v-model="doctorInformation.birthday" class="form-control" placeholder="Fecha de Nacimiento" />
        <input v-model="doctorInformation.cell" class="form-control" placeholder="Telefono" />
        <input v-model="doctorInformation.email" class="form-control" placeholder="Correo Electronico" />
        <input v-model="doctorInformation.password" class="form-control" placeholder="Contraseña" />
        <input v-model="doctorInformation.password2" class="form-control" placeholder="Contraseña" />

        <button class="btn btn-primary">Ingresar</button>
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "SignUp", // NOmbre del componente
  data: function () {
    return {
        signupData:{
        name: "",
        lastname: "",
        id: "",
        eps: "",
        birthday: "",
        cell: "",
        email: "",
        password: "",
        password2: ""
        }
    }
  },
  methods: {
      processSignUp: async function (){
        await this.$apollo.mutate({
        mutation: gql`
            mutation RegisterUser($userInformation: RegisterUserInput) {
                registerUser(userInformation: $userInformation) {
                    id
                    name
                    last_name
                    email
                    role  
                }
            }
        `,
        variables: {
            signupData:this.signupData
        }
    })
    .then((result) => {
        console.log(result)
        let dataLogin = {
          username: this.signupData.username,
          token: result.data.signUp.key
        }
        this.$emit("completedLogin", dataLogin);
      })
      .catch((error) => {
        console.log(error)
        alert("error inesperado");
      })
    }
  },
  
  created:function () {},
  };
  </script>