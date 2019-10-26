
<template>
  <div class="usuario">
    <button v-on:click="cargarUsuarios()">
      Cargar
    </button>

   <ul>
       <li v-for="item of listaUsuario" v-bind:key="item.id">{{item.nombre}} </li>
   </ul>
  </div>
</template>

<script src="../controllers/usuarioController.js"></script>
