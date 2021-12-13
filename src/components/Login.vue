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
    color: #2c99cf;
  }

.form {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 80px 50px;
  text-align: center;
  font-family: sans-serif;
}

.form input {
    margin-bottom: 20px;
    color: #E5E7E9;
    background: #baeef7;
    border: 1px solid #043e55;
    border-radius: 25px;
    padding: 15px 70px;
    text-align: center;
}

.form h3{
    text-align: center;
    margin-bottom: 30px;
    color: #2c99cf;

}
.form button{
    color: #E5E7E9;
    background: #2c99cf;
    border: 1px solid #72ccf0;
    border-radius: 5px;
    padding: 10px 50px;
    
}

.form button:hover{
    color:#41aec1;
    background: #E5E7E9;
    border: 2px solid #72ccf0;
    
  }

.error{
  color: rgb(221, 212, 212);
  font-size: 15px;
}


</style>