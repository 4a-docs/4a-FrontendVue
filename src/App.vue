<template>
  <div id="app">
    <div class = "header">
      <h1>Health Book</h1>
      <nav>
        <button v-on:click="loadLogIn"> INGRESO </button>
        <button > REGISTRO </button>
      </nav>  
    </div>
    <div>
    <router-view></router-view>
    </div>
  </div>
  

</template>



<script>
export default {
    name:"App",
    data: function() {},
    methods:{
      loadLogIn(){
        this.$router.push({name:"logIn"})
      }
    },
    created: function(){
      this.loadLogIn()
    }
}
</script>



<style>
  body{
    margin:0 0 0 0;
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #72ccf0;
    color: white;
    padding: 10px 50px;
}
  .header h1{
    width: 20%;
    text-align: center;
    font-family: sans-serif;
    margin: 0;
  }
  .header nav{
    height: 100%;
    display: flex;
    justify-content: space-around;
    
  }
  .header nav button{
    color: #E5E7E9;
    background: #2c99cf;
    border: 1px solid #72ccf0;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color:#41aec1;
    background: #E5E7E9;
    border: 2px solid #72ccf0;
    
  }
  
  </style>