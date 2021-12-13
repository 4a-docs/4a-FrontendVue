<template>
  <div id="app">
    <div class = "header">
      <h1>Health Book</h1>
      <nav>
        <button > INGRESO </button>
        <button > REGISTRO </button>
      </nav>  
    </div>
    
  </div>
</template>



<script>
   
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