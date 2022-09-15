<template>
  <div class="Datos" v-if="user">
    <img :src="user.avatar" />
    <pre>{{this.user}}</pre>



    <button type="button" @click="agregarFavorito()" v-if="!isFavorito">Agregar a favorito</button>
    <button type="button" @click="eliminarFavorito()" v-if="isFavorito">Eliminar de favoritos</button>
    <router-link :to="{name: 'Home'}">
        <button type="button">volver</button>
    </router-link>
    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return{
            user: null,
            isFavorito: false
        }
    },
    methods:{
        agregarFavorito(){
            this.addFavorite(this.user);
            this.isFavorito = true;
        },
        eliminarFavorito(){
            this.deleteFavorito(this.user);
            this.isFavorito = false;
        },
        ...mapActions('userModule',['addFavorite', "deleteFavorito"])
    },
    mounted(){
        const id = this.$route.params.id;
        if(this.users.length === 0){
            this.$router.push({name:'Home'});
        }
        this.user = this.users.find(u => {
            return parseInt(u.id) === parseInt(id);
        })

        this.isFavorito = this.favoritos.filter(u =>  parseInt(u.id) === parseInt(id)).length > 0
    },
  computed: {
    ...mapState("userModule", ["users", "favoritos"]),
  },
};
</script>
