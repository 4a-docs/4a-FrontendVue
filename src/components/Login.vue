<template>
    <div>
          <div>
    <div class="form">
      <h3>Iniciar Sesión</h3>
      <form>
        <input placeholder="Email">
        <input placeholder="Contraseña" >
       
        <button> Ingresar</button>
      </form>
    </div>
  </div>
    </div>
</template>

<script>
    export default{
        name:"LogIn",
        data: function () {},
        methods:{},
        created: function () {}
    }
</script>

<style>
.form h3{

    font-family: sans-serif;
    margin: 20;
    color: white;
  }
.form {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #2c99cf;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 80px 50px;
  text-align: center;
  font-family: sans-serif;
}
.form form {
  display: flex;
  flex-direction: column;
  text-align: center;
  
}
.form input {
  margin-bottom: 20px;
}
.form h3{
    text-align: center;
    margin-bottom: 30px;

}
.error{
  color: rgb(221, 212, 212);
  font-size: 15px;
}
@media (max-width: 500px){
  .form{
    padding: 40px 25px;
    width: 85%;
  }
}

</style>