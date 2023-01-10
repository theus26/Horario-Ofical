<template>
    <div class="container">
      <div class="container-box">
        <slot></slot>
      </div>
    </div>
      
    </template>
    
    <script>
    export default {
      name: "ContainerBox",
    };
    </script>
    
    <style scoped>
    .container-box {
      flex-grow: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding: 3rem;
      border-color: #00BFFF;
      border-width: 5px 0.5px 5px 0.5px;
      border-style: solid;
      border-radius: 25px 25px 25px 25px;
      width: 998px;
     padding-top: 30px;
      margin: 0 auto;
      
    }
    @media (max-width: 599px) {
      .container-box {
        padding: 1rem;
        padding-top: 2rem;
        margin-left: 0px;
        margin-right: 0px;
       
        width: 90%;
      }
    }
    </style>
    